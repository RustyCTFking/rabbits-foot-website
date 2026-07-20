import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

import Container from "@/components/layout/Container";

export default function ContactCTA() {
  return (
    <section className="px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[#84bd00] px-7 py-14 text-black shadow-[0_24px_70px_rgba(132,189,0,0.22)] sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-28 -top-28 size-80 rounded-full bg-white/25 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-24 size-72 rounded-full bg-black/10 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-black/60">
                Ready to get started?
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Let&apos;s take care of your project.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
                Submit your project details for an estimate request, or contact
                Rabbit&apos;s Foot Handyman Services directly to discuss the
                work you need completed.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="#estimate-form"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-black px-8 font-black text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
              >
                Request an Estimate
                <ArrowUpRight aria-hidden="true" className="size-5" />
              </a>

              <a
                href="tel:+15747035978"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-2 border-black/25 px-8 font-black text-black transition duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
              >
                <Phone aria-hidden="true" className="size-5" />
                Call (574) 703-5978
              </a>

              <a
                href="mailto:callrabbitsfoot@gmail.com"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-2 border-black/25 px-8 font-black text-black transition duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
              >
                <Mail aria-hidden="true" className="size-5" />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}