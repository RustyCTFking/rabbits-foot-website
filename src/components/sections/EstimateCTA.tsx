import Link from "next/link";
import {
  Clock3,
  DollarSign,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "@/components/layout/Container";

const trustPoints = [
  {
    icon: Clock3,
    label: "Fast Response",
  },
  {
    icon: DollarSign,
    label: "Honest Pricing",
  },
  {
    icon: MapPin,
    label: "Locally Owned",
  },
  {
    icon: Phone,
    label: "Quality Workmanship",
  },
];

export default function EstimateCTA() {
  return (
    <section
      id="estimate"
      className="relative bg-transparent py-28"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[42px] bg-[#111111] px-8 py-20 shadow-[0_30px_80px_rgba(0,0,0,.25)] lg:px-20">
          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#84bd00]/20 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#84bd00]/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#84bd00]">
              READY TO GET STARTED?
            </p>

            <h2 className="mt-6 text-5xl font-black leading-tight text-white lg:text-7xl">
              Let's get that project
              <span className="block text-[#84bd00]">
                off your to-do list.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/70">
              Tell us what you need repaired, installed, assembled, or
              improved. We'll respond quickly and help you schedule your
              project.
            </p>

            {/* Buttons */}
            <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">
              <Link
                href="/contact#estimate-form"
                className="inline-flex h-16 items-center justify-center rounded-full bg-[#84bd00] px-12 text-lg font-black text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#93d100]"
              >
                Request a Free Estimate
              </Link>

              <a
                href="tel:+15747035978"
                className="inline-flex h-16 items-center justify-center gap-3 rounded-full border-2 border-white/40 px-12 text-lg font-black text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
              >
                <Phone size={22} />
                Call (574) 703-5978
              </a>
            </div>

            {/* Trust Row */}
            <div className="mt-16 border-t border-white/10 pt-10">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {trustPoints.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center justify-center gap-3"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#84bd00] text-black">
                        <Icon size={20} />
                      </div>

                      <span className="font-bold text-white">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}