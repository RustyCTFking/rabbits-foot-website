"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import {
  type MouseEvent,
  useEffect,
  useState,
} from "react";

import Container from "@/components/layout/Container";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function handleHomeClick(event: MouseEvent<HTMLAnchorElement>) {
    setIsMenuOpen(false);

    if (pathname === "/") {
      event.preventDefault();
      window.history.replaceState(null, "", "/");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-black/10 bg-[#f6f7f2]/95 shadow-[0_12px_35px_rgba(16,18,16,0.1)] backdrop-blur-xl"
          : "border-transparent bg-[#f6f7f2]/85 backdrop-blur-lg"
      }`}
    >
      <Container className="flex min-h-20 items-center justify-between gap-5 lg:min-h-24">
        <Link
          href="/"
          onClick={handleHomeClick}
          aria-label="Rabbit's Foot Handyman Services homepage"
          className="flex min-w-0 items-center gap-3"
        >
          <span className="relative size-14 shrink-0 overflow-hidden rounded-full border-2 border-[#84bd00] bg-white shadow-sm lg:size-16">
            <Image
              src="/logo.png"
              alt=""
              fill
              priority
              sizes="64px"
              className="object-contain p-1"
            />
          </span>

          <span className="min-w-0">
            <span className="block truncate text-lg font-black uppercase leading-none tracking-[-0.04em] text-[#101210] sm:text-xl lg:text-2xl">
              Rabbit&apos;s Foot
            </span>

            <span className="mt-1.5 block truncate text-[0.58rem] font-black uppercase tracking-[0.2em] text-[#679500] sm:text-[0.65rem]">
              Handyman Services
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-2 lg:flex"
        >
          {navigationLinks.map((link) => {
            const isActive = isActiveLink(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={link.href === "/" ? handleHomeClick : undefined}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-3 text-sm font-black transition-colors ${
                  isActive
                    ? "bg-[#84bd00]/15 text-[#527700]"
                    : "text-[#252825] hover:bg-black/5 hover:text-[#527700]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href="tel:+15747035978"
            className="inline-flex items-center gap-2 text-sm font-black text-[#252825] transition-colors hover:text-[#527700]"
          >
            <Phone aria-hidden="true" className="size-4 text-[#679500]" />
            (574) 703-5978
          </a>

          <Link
            href="/contact#estimate-form"
            className="rf-button-primary min-h-12 px-6 text-sm"
          >
            Request Estimate
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-[#84bd00] bg-[#101210] text-[#84bd00] lg:hidden"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t bg-[#f6f7f2]/98 backdrop-blur-xl transition-[max-height,opacity,border-color] duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[36rem] border-black/10 opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
      >
        <Container className="py-5">
          <nav aria-label="Mobile navigation" className="grid gap-2">
            {navigationLinks.map((link) => {
              const isActive = isActiveLink(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={
                    link.href === "/"
                      ? handleHomeClick
                      : () => setIsMenuOpen(false)
                  }
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-14 items-center rounded-2xl px-5 text-lg font-black ${
                    isActive
                      ? "bg-[#84bd00] text-[#101210]"
                      : "bg-white/70 text-[#101210]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 grid gap-3 border-t border-black/10 pt-5">
            <a href="tel:+15747035978" className="rf-button-secondary">
              <Phone aria-hidden="true" className="size-5" />
              Call (574) 703-5978
            </a>

            <Link
              href="/contact#estimate-form"
              onClick={() => setIsMenuOpen(false)}
              className="rf-button-primary"
            >
              Request Estimate
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}