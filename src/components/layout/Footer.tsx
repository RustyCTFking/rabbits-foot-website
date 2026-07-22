import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "@/components/layout/Container";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  {
    label: "Drywall Repair",
    href: "/services#drywall-repair",
  },
  {
    label: "TV Mounting",
    href: "/services#tv-mounting",
  },
  {
    label: "Ceiling Fan Installation",
    href: "/services#ceiling-fan-installation",
  },
  {
    label: "Furniture Assembly",
    href: "/services#furniture-assembly",
  },
  {
    label: "Door Repairs",
    href: "/services#door-repairs-and-hardware",
  },
  {
    label: "Painting & Touch-Ups",
    href: "/services#painting-and-touch-ups",
  },
  {
    label: "General Handyman Repairs",
    href: "/services#general-handyman-repairs",
  },
];

export default function Footer() {
  return (
    <footer className="mt-8 border-t-4 border-[#84bd00] bg-[#101210] text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.65fr_0.9fr] lg:gap-16">
          <div>
            <Link
              href="/"
              aria-label="Rabbit's Foot Handyman Services homepage"
              className="inline-flex items-center gap-4"
            >
              <span className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-[#84bd00] bg-white">
                <Image
                  src="/logo.png"
                  alt=""
                  width={64}
                  height={64}
                  className="size-full object-contain p-1"
                />
              </span>

              <span>
                <span className="block text-2xl font-black uppercase tracking-[-0.035em]">
                  Rabbit&apos;s Foot
                </span>

                <span className="mt-1 block text-xs font-black uppercase tracking-[0.22em] text-[#84bd00]">
                  Handyman Services
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-white/65">
              Dependable handyman services throughout Mishawaka, South Bend,
              Granger, Elkhart, and surrounding Michiana communities.
            </p>

            <div className="mt-8 grid gap-4">
              <a
                href="tel:+15747035978"
                className="flex items-center gap-3 font-bold text-white/80 transition-colors hover:text-[#84bd00] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#84bd00]/30"
              >
                <Phone
                  aria-hidden="true"
                  className="size-5 shrink-0 text-[#84bd00]"
                />
                (574) 703-5978
              </a>

              <a
                href="mailto:estimates@callrabbitsfoot.com"
                className="flex items-center gap-3 break-all font-bold text-white/80 transition-colors hover:text-[#84bd00] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#84bd00]/30"
              >
                <Mail
                  aria-hidden="true"
                  className="size-5 shrink-0 text-[#84bd00]"
                />
                estimates@callrabbitsfoot.com
              </a>

              <div className="flex max-w-md items-start gap-3 text-white/60">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-[#84bd00]"
                />

                <span className="leading-7">
                  Serving Mishawaka, South Bend, Granger, Elkhart, and nearby
                  communities.
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.24em] text-[#84bd00]">
              Navigation
            </h2>

            <nav aria-label="Footer navigation" className="mt-6 grid gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit font-bold text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#84bd00]/30"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.24em] text-[#84bd00]">
              Popular Services
            </h2>

            <nav aria-label="Popular services" className="mt-6 grid gap-4">
              {serviceLinks.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="w-fit font-bold text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#84bd00]/30"
                >
                  {service.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact#estimate-form"
              className="rf-button-primary mt-8 sm:w-auto"
            >
              Request an Estimate
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Rabbit&apos;s Foot Handyman Services.
            All rights reserved.
          </p>

          <p className="font-bold text-white/55">
            Small fixes. Big difference.
          </p>
        </div>
      </Container>
    </footer>
  );
}