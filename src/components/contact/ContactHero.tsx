import { ArrowDown, Phone } from "lucide-react";

import Container from "@/components/layout/Container";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-40 lg:px-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[#111111] px-7 py-16 text-white shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-96 rounded-full bg-[#84bd00]/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-24 size-80 rounded-full bg-[#84bd00]/10 blur-3xl"
          />

          <div className="relative max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#84bd00]">
              Request an estimate
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Tell us about your project.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl sm:leading-9">
              Share a few details about the repair, installation, assembly, or
              improvement you need. We&apos;ll review your request and help you
              determine the next step.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#estimate-form"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#84bd00] px-8 font-black text-black shadow-[0_12px_30px_rgba(132,189,0,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#93d100]"
              >
                Start Your Request
                <ArrowDown aria-hidden="true" className="size-5" />
              </a>

              <a
                href="tel:+15747035978"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-2 border-white/30 px-8 font-black text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black"
              >
                <Phone aria-hidden="true" className="size-5" />
                Call (574) 703-5978
              </a>
            </div>

            <div className="mt-12 grid max-w-3xl gap-5 border-t border-white/10 pt-8 text-sm font-bold text-white/65 sm:grid-cols-3">
              <p>Fast response</p>
              <p>Clear communication</p>
              <p>No-obligation estimate request</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}