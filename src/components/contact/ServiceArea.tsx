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
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Container>
        <div className="overflow-hidden rounded-[2.25rem] bg-[#111111] text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative overflow-hidden px-7 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
              <div
                aria-hidden="true"
                className="absolute -left-28 -top-28 size-80 rounded-full bg-[#84bd00]/15 blur-3xl"
              />

              <div className="relative">
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-[#84bd00] text-black">
                  <MapPinned aria-hidden="true" className="size-7" />
                </span>

                <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-[#84bd00]">
                  Local service area
                </p>

                <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">
                  Serving homeowners across Michiana.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                  Rabbit&apos;s Foot Handyman Services provides dependable home
                  repair, installation, assembly, and maintenance services
                  throughout the South Bend and Mishawaka area.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {primaryCities.map((city) => (
                    <div
                      key={city}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="size-5 shrink-0 text-[#84bd00]"
                      />

                      <span className="font-black">{city}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#estimate-form"
                  className="mt-10 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#84bd00] px-8 font-black text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#93d100]"
                >
                  Request Service
                  <ArrowRight aria-hidden="true" className="size-5" />
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/[0.035] px-7 py-14 sm:px-10 sm:py-16 lg:border-l lg:border-t-0 lg:px-14 lg:py-20">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#84bd00]">
                Nearby communities
              </p>

              <h3 className="mt-5 text-3xl font-black tracking-[-0.04em]">
                Not sure whether you&apos;re in range?
              </h3>

              <p className="mt-5 leading-7 text-white/65">
                We may also serve surrounding communities depending on the
                project location, scope of work, and scheduling availability.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {nearbyAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4 font-bold text-white/80"
                  >
                    {area}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-[#84bd00]/25 bg-[#84bd00]/10 p-6">
                <p className="font-black text-white">
                  Outside the listed area?
                </p>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  Call or submit an estimate request with your project address.
                  We&apos;ll let you know whether service is available in your
                  location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}