import {
  ArrowRight,
  CheckCircle2,
  MapPinned,
} from "lucide-react";

import Container from "@/components/layout/Container";

const primaryCities = [
  "Mishawaka",
  "South Bend",
  "Granger",
  "Elkhart",
];

const nearbyAreas = [
  "Osceola",
  "Bristol",
  "Niles",
  "New Carlisle",
  "North Liberty",
  "Edwardsburg",
];

export default function ServiceArea() {
  return (
    <section className="rf-section">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-black/10 shadow-[0_28px_80px_rgba(0,0,0,0.16)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative overflow-hidden bg-[#101210] px-7 py-14 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20">
              <div
                aria-hidden="true"
                className="absolute -left-28 -top-28 size-80 rounded-full bg-[#84bd00]/15 blur-3xl"
              />

              <div className="relative">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-[#84bd00] text-black">
                  <MapPinned aria-hidden="true" className="size-7" />
                </span>

                <p className="rf-eyebrow mt-8 text-[#84bd00]">
                  Local service area
                </p>

                <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">
                  Serving homeowners across Michiana.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                  Rabbit&apos;s Foot provides home repairs, installations,
                  assembly, and smaller improvement services throughout the
                  Mishawaka and South Bend area.
                </p>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {primaryCities.map((city) => (
                    <div
                      key={city}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="size-5 shrink-0 text-[#84bd00]"
                        strokeWidth={2.5}
                      />

                      <span className="font-black">{city}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#estimate-form"
                  className="rf-button-primary mt-9 sm:w-auto"
                >
                  Request Service
                  <ArrowRight aria-hidden="true" className="size-5" />
                </a>
              </div>
            </div>

            <div className="bg-[#f6f7f2] px-7 py-14 text-black sm:px-10 sm:py-16 lg:px-14 lg:py-20">
              <p className="rf-eyebrow">Nearby communities</p>

              <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
                Not sure whether you&apos;re within our service area?
              </h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Service may be available in surrounding communities depending
                on the project location, scope of work, and scheduling
                availability.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {nearbyAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-2xl border border-black/10 bg-white px-5 py-4 font-bold text-neutral-800 shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
                  >
                    {area}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#84bd00]/35 bg-[#84bd00]/12 p-6">
                <p className="font-black text-black">
                  Outside the listed communities?
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Include your project address in the estimate form. We&apos;ll
                  let you know whether service is available at your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}