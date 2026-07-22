import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Container from "@/components/layout/Container";

const trustPoints = [
  {
    icon: Clock3,
    label: "Prompt communication",
  },
  {
    icon: MessageCircle,
    label: "Clear project details",
  },
  {
    icon: MapPin,
    label: "Local Michiana service",
  },
];

export default function EstimateCTA() {
  return (
    <section id="estimate" className="rf-section scroll-mt-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#101210] px-6 py-12 text-white shadow-[0_28px_80px_rgba(0,0,0,0.22)] sm:px-10 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-32 size-96 rounded-full bg-[#84bd00]/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-40 -left-24 size-96 rounded-full bg-[#84bd00]/10 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="rf-eyebrow text-[#84bd00]">
                Ready to get started?
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Let&apos;s get your project off the to-do list.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                Tell us what you need repaired, installed, assembled, or
                improved. We&apos;ll review the details and help you determine
                the next step.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact#estimate-form"
                  className="rf-button-primary sm:w-auto"
                >
                  Request a Free Estimate
                  <ArrowRight aria-hidden="true" className="size-5" />
                </Link>

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
                What to expect
              </p>

              <div className="mt-6 grid gap-4">
                {trustPoints.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
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
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-6 text-white/55">
                Adding project details and photos helps us understand the work
                before contacting you.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}