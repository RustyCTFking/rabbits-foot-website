import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";

const serviceHighlights = [
  "Drywall repair",
  "TV mounting",
  "Door repair",
  "Furniture assembly",
];

const trustPoints = [
  "Local service",
  "Honest communication",
  "Quality workmanship",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent">
      <Container className="grid min-h-screen items-center gap-14 pb-20 pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:pb-24 lg:pt-32">
        {/* Hero copy */}
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-[#6d9911] sm:text-sm">
            Rabbit&apos;s Foot Handyman Services
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.055em] text-black sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Small fixes.
            <span className="mt-2 block text-[#84bd00]">
              Big difference.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-700 sm:text-xl">
            Dependable repairs, installations, and home improvements completed
            with professional craftsmanship, honest communication, and respect
            for your home.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#estimate"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#84bd00] px-8 text-base font-black text-black shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#75a900] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#84bd00]"
            >
              Request an Estimate
            </Link>

            <Link
              href="#services"
              className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-black bg-white/85 px-8 text-base font-black text-black backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Explore Services
            </Link>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-black/10 pt-7">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm font-bold text-neutral-700"
              >
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-[#84bd00]"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Service card */}
        <div className="relative z-10 mx-auto w-full max-w-[430px] lg:mx-0 lg:justify-self-end">
          <div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 rounded-full bg-[#84bd00]/10 blur-3xl"
          />

          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#111111] p-7 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-9">
            <div className="flex items-start justify-between gap-5 border-b border-white/15 pb-7">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#84bd00]">
                  Dependable service
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight">
                  You can
                  <span className="block">count on.</span>
                </h2>
              </div>

              <div className="relative size-24 shrink-0 overflow-hidden rounded-full border-2 border-[#84bd00] bg-white shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Rabbit's Foot Handyman Services"
                  fill
                  priority
                  sizes="96px"
                  className="object-contain p-1"
                />
              </div>
            </div>

            <ul className="mt-8 grid gap-4">
              {serviceHighlights.map((service) => (
                <li
                  key={service}
                  className="flex min-h-16 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] px-5 transition duration-200 hover:border-[#84bd00]/50 hover:bg-white/[0.08]"
                >
                  <span
                    aria-hidden="true"
                    className="size-2.5 shrink-0 rounded-full bg-[#84bd00]"
                  />

                  <span className="font-bold">{service}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:+15747035978"
              className="mt-8 block rounded-2xl bg-[#84bd00] p-6 text-black transition duration-200 hover:bg-[#75a900]"
            >
              <span className="block text-sm font-black uppercase tracking-[0.2em]">
                Call or text
              </span>

              <span className="mt-2 block text-2xl font-black sm:text-3xl">
                (574) 703-5978
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}