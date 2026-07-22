import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "@/components/layout/Container";

export default function ContactInfo() {
  return (
    <section className="rf-section">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="rf-eyebrow">Contact information</p>

          <h2 className="rf-heading mt-5">
            Choose the easiest way to reach us.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Whether you&apos;re planning a repair, installation, or another
            home improvement project, we&apos;d be happy to hear about it.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[2rem] bg-[#101210] p-7 text-white shadow-[0_22px_60px_rgba(0,0,0,0.16)] sm:p-9">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 size-64 rounded-full bg-[#84bd00]/20 blur-3xl"
            />

            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#84bd00] text-black">
                <Phone aria-hidden="true" className="size-7" />
              </div>

              <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-[#84bd00]">
                Call or text
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">
                Speak with Rabbit&apos;s Foot
              </h3>

              <p className="mt-4 max-w-lg leading-7 text-white/65">
                Contact us with questions or to discuss the basic details of
                your project.
              </p>

              <a
                href="tel:+15747035978"
                className="mt-7 inline-flex items-center gap-2 text-xl font-black text-[#84bd00] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#84bd00]/30"
              >
                (574) 703-5978
                <ArrowUpRight aria-hidden="true" className="size-5" />
              </a>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] bg-[#84bd00] p-7 text-black shadow-[0_22px_60px_rgba(132,189,0,0.2)] sm:p-9">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 size-64 rounded-full bg-white/25 blur-3xl"
            />

            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-black text-[#84bd00]">
                <Mail aria-hidden="true" className="size-7" />
              </div>

              <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-black/55">
                Send an email
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">
                Share your project details
              </h3>

              <p className="mt-4 max-w-lg leading-7 text-black/65">
                Email information about your project, or use the estimate form
                above to include photos.
              </p>

              <a
                href="mailto:estimates@callrabbitsfoot.com"
                className="mt-7 inline-flex max-w-full items-center gap-2 break-all text-lg font-black text-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/20 sm:text-xl"
              >
                estimates@callrabbitsfoot.com
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 shrink-0"
                />
              </a>
            </div>
          </article>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <article className="rf-card p-7 sm:p-8">
            <div className="flex items-start gap-5">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#84bd00] text-black">
                <MapPin aria-hidden="true" className="size-7" />
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-[-0.03em] text-black">
                  Service Area
                </h3>

                <p className="mt-3 leading-7 text-neutral-600">
                  Mishawaka, South Bend, Granger, Elkhart, and surrounding
                  Northern Indiana communities.
                </p>
              </div>
            </div>
          </article>

          <article className="rf-card p-7 sm:p-8">
            <div className="flex items-start gap-5">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#84bd00] text-black">
                <Clock3 aria-hidden="true" className="size-7" />
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-[-0.03em] text-black">
                  Business Hours
                </h3>

                <div className="mt-3 space-y-2 leading-7 text-neutral-600">
                  <p>
                    Monday–Friday:{" "}
                    <strong className="text-black">8:00 AM–5:00 PM</strong>
                  </p>

                  <p>
                    Weekends:{" "}
                    <strong className="text-black">By appointment</strong>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}