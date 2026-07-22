import {
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";

import Container from "@/components/layout/Container";

export default function ContactCTA() {
  return (
    <section className="px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#101210] px-7 py-14 text-white shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-28 -top-28 size-80 rounded-full bg-[#84bd00]/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-24 size-72 rounded-full bg-[#84bd00]/10 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-3xl">
              <p className="rf-eyebrow text-[#84bd00]">
                Ready to get started?
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Let&apos;s take care of your project.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Submit your project details and photos through the estimate
                form, or call Rabbit&apos;s Foot to discuss the work you need.
              </p>

              <a
                href="mailto:estimates@callrabbitsfoot.com"
                className="mt-7 inline-flex max-w-full items-center gap-3 break-all font-bold text-white/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#84bd00]/30"
              >
                <Mail
                  aria-hidden="true"
                  className="size-5 shrink-0 text-[#84bd00]"
                />
                estimates@callrabbitsfoot.com
              </a>
            </div>

            <div className="flex min-w-0 flex-col gap-4 lg:min-w-72">
              <a
                href="#estimate-form"
                className="rf-button-primary"
              >
                Request an Estimate
                <ArrowRight aria-hidden="true" className="size-5" />
              </a>

              <a
                href="tel:+15747035978"
                className="rf-button-secondary"
              >
                <Phone aria-hidden="true" className="size-5" />
                Call (574) 703-5978
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}