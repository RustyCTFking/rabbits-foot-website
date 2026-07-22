import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  HeartHandshake,
  Home,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "@/components/layout/Container";

const values = [
  {
    icon: HeartHandshake,
    title: "Honest Communication",
    description:
      "Clear conversations, realistic expectations, and straightforward answers from the first request through project completion.",
  },
  {
    icon: Hammer,
    title: "Careful Workmanship",
    description:
      "Every project—large or small—receives close attention to detail and a practical approach.",
  },
  {
    icon: Home,
    title: "Respect for Your Home",
    description:
      "We understand that your home matters. Project areas are treated carefully and kept as orderly as possible.",
  },
];

const expectations = [
  "Friendly, dependable service",
  "Clear project communication",
  "Attention to detail",
  "Respect for your property",
  "Professional presentation",
  "Local Michiana service",
];

export const metadata: Metadata = {
  title: "About Our Handyman Service",
  description:
    "Learn about Rabbit's Foot Handyman Services and our commitment to dependable repairs, careful workmanship, and clear communication throughout Mishawaka and nearby communities.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <section className="px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
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

            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="rf-eyebrow text-[#84bd00]">
                  About Rabbit&apos;s Foot
                </p>

                <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  Dependable handyman help with a personal, local approach.
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl sm:leading-9">
                  Rabbit&apos;s Foot helps homeowners complete repairs,
                  installations, assembly projects, and smaller improvements
                  with clear communication and respect for their homes.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-[#84bd00] text-black">
                  <MapPin aria-hidden="true" className="size-7" />
                </div>

                <h2 className="mt-6 text-2xl font-black">
                  Proudly serving Michiana
                </h2>

                <p className="mt-3 leading-7 text-white/65">
                  Based in the Mishawaka area and serving South Bend, Granger,
                  Elkhart, and surrounding Northern Indiana communities.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="rf-section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <p className="rf-eyebrow">Our approach</p>

              <h2 className="rf-heading mt-5">
                Home repairs should feel straightforward.
              </h2>

              <p className="mt-7 text-lg leading-8 text-neutral-600">
                Rabbit&apos;s Foot was created to help homeowners take care of
                the repairs and improvements that keep a home comfortable,
                useful, and well maintained.
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Inviting someone into your home requires trust. That&apos;s why
                we focus on listening carefully, explaining the work clearly,
                and treating each project with the attention it deserves.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#101210] p-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 size-64 rounded-full bg-[#84bd00]/15 blur-3xl"
              />

              <div className="relative">
                <p className="rf-eyebrow text-[#84bd00]">
                  What you can expect
                </p>

                <div className="mt-7 grid gap-4">
                  {expectations.map((expectation) => (
                    <div
                      key={expectation}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="size-6 shrink-0 text-[#84bd00]"
                        strokeWidth={2.5}
                      />

                      <span className="font-bold text-white/85">
                        {expectation}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="rf-section pt-0">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="rf-eyebrow">What guides our work</p>

            <h2 className="rf-heading mt-5">
              Service built around your home and your needs.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article key={value.title} className="rf-card p-7 sm:p-8">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-[#84bd00] text-black shadow-[0_10px_24px_rgba(132,189,0,0.2)]">
                    <Icon
                      aria-hidden="true"
                      className="size-7"
                      strokeWidth={2.2}
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-black leading-tight tracking-[-0.03em] text-black">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#101210] px-7 py-14 text-center text-white shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#84bd00]/20 blur-3xl"
            />

            <div className="relative mx-auto max-w-3xl">
              <p className="rf-eyebrow text-[#84bd00]">
                Ready to get started?
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Let&apos;s take care of your home project.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Tell us what you need repaired, installed, assembled, or
                improved. We&apos;ll review the details and help determine the
                next step.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact#estimate-form"
                  className="rf-button-primary sm:w-auto"
                >
                  Request an Estimate
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
          </div>
        </Container>
      </section>
    </main>
  );
}