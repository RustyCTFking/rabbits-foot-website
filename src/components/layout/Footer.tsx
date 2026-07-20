import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import Container from "@/components/layout/Container";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#estimate" },
];

const serviceLinks = [
  "Drywall Repair",
  "TV Mounting",
  "Ceiling Fan Installation",
  "Furniture Assembly",
  "Door Repairs",
  "Painting",
  "General Handyman Repairs",
];

export default function Footer() {
  return (
    <footer className="mt-8 bg-[#111111] text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-black">Rabbit&apos;s Foot</h2>

            <p className="mt-2 text-sm font-black uppercase tracking-[0.22em] text-[#84bd00]">
              Handyman Services
            </p>

            <p className="mt-6 max-w-md leading-7 text-white/70">
              Dependable handyman services throughout Mishawaka, South Bend,
              Granger, Elkhart, and surrounding Northern Indiana communities.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+15747035978"
                className="flex items-center gap-3 font-bold hover:text-[#84bd00]"
              >
                <Phone size={18} />
                (574) 703-5978
              </a>

              <a
                href="mailto:callrabbitsfoot@gmail.com"
                className="flex items-center gap-3 font-bold hover:text-[#84bd00]"
              >
                <Mail size={18} />
                callrabbitsfoot@gmail.com
              </a>

              <div className="flex items-start gap-3 text-white/70">
                <MapPin size={18} className="mt-1" />

                <span>
                  Serving Mishawaka, South Bend, Granger, Elkhart and nearby
                  communities.
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-[#84bd00]">
              Navigation
            </h3>

            <nav className="mt-6 grid gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-bold text-white/70 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-[#84bd00]">
              Popular Services
            </h3>

            <ul className="mt-6 space-y-3 text-white/70">
              {serviceLinks.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>

            <Link
              href="/#estimate"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#84bd00] px-6 font-black text-black transition hover:bg-[#93d100]"
            >
              Request Estimate
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} Rabbit&apos;s Foot Handyman Services.
            All rights reserved.
          </p>

          <p>Small fixes. Big difference.</p>
        </div>
      </Container>
    </footer>
  );
}