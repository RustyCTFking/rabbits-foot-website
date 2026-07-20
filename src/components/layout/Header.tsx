"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

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
      setIsScrolled(window.scrollY > 12);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_10px_35px_rgba(0,0,0,0.09)]" : "shadow-none"
      }`}
    >
      <Container className="flex min-h-20 items-center justify-between gap-6 sm:min-h-24">
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Rabbit's Foot Handyman Services homepage"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <Image
            src="/logo.png"
            alt="Rabbit's Foot Handyman Services logo"
            width={72}
            height={72}
            priority
            className="h-14 w-14 shrink-0 object-contain sm:h-[4.25rem] sm:w-[4.25rem]"
          />

          <div className="min-w-0 leading-none">
            <span className="block truncate text-lg font-black uppercase tracking-[-0.035em] text-black sm:text-2xl">
              Rabbit&apos;s Foot
            </span>

            <span className="mt-1.5 block truncate text-[0.58rem] font-black uppercase tracking-[0.2em] text-[#6d9911] sm:text-[0.68rem] sm:tracking-[0.24em]">
              Handyman Services
            </span>
          </div>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 lg:flex"
        >
          {navigationLinks.map((link) => {
            const isActive = isActiveLink(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-[0.95rem] font-black transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:bg-[#84bd00] after:transition-transform after:duration-200 ${
                  isActive
                    ? "text-[#6d9911] after:scale-x-100"
                    : "text-black after:scale-x-0 hover:text-[#6d9911] hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href="tel:+15747035978"
            className="inline-flex items-center gap-2 text-sm font-black text-black transition-colors duration-200 hover:text-[#6d9911]"
          >
            <Phone aria-hidden="true" className="size-4" />
            (574) 703-5978
          </a>

          <Link
            href="/contact#estimate-form"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#84bd00] px-7 text-sm font-black text-black shadow-[0_10px_25px_rgba(132,189,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#93d100] hover:shadow-[0_14px_32px_rgba(132,189,0,0.34)]"
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
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition duration-200 hover:border-[#84bd00] hover:bg-[#84bd00]/10 lg:hidden"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="size-[1.35rem]" />
          ) : (
            <Menu aria-hidden="true" className="size-[1.35rem]" />
          )}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={`border-t border-black/5 bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[540px] opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <Container className="py-6">
          <nav aria-label="Mobile navigation" className="grid gap-2">
            {navigationLinks.map((link) => {
              const isActive = isActiveLink(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-2xl px-4 py-4 text-lg font-black transition duration-200 ${
                    isActive
                      ? "bg-[#84bd00]/15 text-[#6d9911]"
                      : "text-black hover:bg-[#84bd00]/10 hover:text-[#6d9911]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 grid gap-3 border-t border-black/10 pt-6">
            <a
              href="tel:+15747035978"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-2 border-black px-6 font-black text-black transition duration-200 hover:bg-black hover:text-white"
            >
              <Phone aria-hidden="true" className="size-5" />
              Call (574) 703-5978
            </a>

            <Link
              href="/contact#estimate-form"
              onClick={closeMenu}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#84bd00] px-6 font-black text-black shadow-[0_10px_24px_rgba(132,189,0,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#93d100]"
            >
              Request Estimate
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}