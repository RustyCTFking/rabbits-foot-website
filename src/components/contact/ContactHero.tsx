import {
  ArrowDown,
  Camera,
  MapPin,
  Phone,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const helpfulDetails = [
  {
    icon: Wrench,
    label: "The type of work you need",
  },
  {
    icon: MapPin,
    label: "Your project location",
  },
  {
    icon: Camera,
    label: "Helpful project photos",
  },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#101210] px-7 py-14 text-white shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-96 rounded-full bg-[#84bd00]/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-24 size-80 rounded-full bg-[#84bd00]/10 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="rf-eyebrow text-[#84bd00]">
                Request an estimate
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Tell us what your home needs.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl sm:leading-9">
                Share the details of your repair, installation, assembly, or
                improvement project. We&apos;ll review your request and help
                determine the next step.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#estimate-form"
                  className="rf-button-primary sm:w-auto"
                >
                  Start Your Request
                  <ArrowDown aria-hidden="true" className="size-5" />
                </a>

                <a
                  href="tel:+15747035978"
                  className="rf-button-secondary sm:w-auto"
                >
                  <Phone aria-hidden="true" className="size-5" />
                  Call (574) 703-5978
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#84bd00]">
                Helpful details to include
              </p>

              <div className="mt-6 grid gap-4">
                {helpfulDetails.map((detail) => {
                  const Icon = detail.icon;

                  return (
                    <div
                      key={detail.label}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#84bd00] text-black">
                        <Icon
                          aria-hidden="true"
                          className="size-5"
                          strokeWidth={2.2}
                        />
                      </div>

                      <span className="font-bold text-white/85">
                        {detail.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-6 text-white/55">
                Providing clear details can help us better understand your
                project before contacting you.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}