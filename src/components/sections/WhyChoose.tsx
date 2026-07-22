import {
  Clock3,
  Hammer,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const features = [
  {
    icon: ShieldCheck,
    title: "Careful Workmanship",
    description:
      "Every project receives close attention to detail and respect for your home.",
  },
  {
    icon: Clock3,
    title: "Dependable Scheduling",
    description:
      "We communicate clearly about arrival times and keep you informed.",
  },
  {
    icon: MessageCircle,
    title: "Straightforward Communication",
    description:
      "You receive clear answers, honest recommendations, and no unnecessary runaround.",
  },
  {
    icon: Hammer,
    title: "Practical Home Solutions",
    description:
      "From repairs to installations, we focus on solutions that fit your home and needs.",
  },
];

export default function WhyChoose() {
  return (
    <section className="rf-section">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#101210] p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 size-72 rounded-full bg-[#84bd00]/20 blur-3xl"
            />

            <div className="relative">
              <p className="rf-eyebrow text-[#84bd00]">
                Why Rabbit&apos;s Foot
              </p>

              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl">
                Reliable help without the runaround.
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/70">
                Home repairs are easier when you have one dependable local
                professional who communicates clearly and treats your property
                with care.
              </p>

              <div className="mt-10 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#84bd00] text-black">
                  <MapPin aria-hidden="true" className="size-5" />
                </div>

                <div>
                  <p className="font-black">Proudly serving Michiana</p>

                  <p className="mt-1 text-sm leading-6 text-white/65">
                    Mishawaka, South Bend, Granger, Elkhart, and surrounding
                    communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article key={feature.title} className="rf-card p-7 sm:p-8">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-[#84bd00] text-black shadow-[0_10px_24px_rgba(132,189,0,0.2)]">
                    <Icon
                      aria-hidden="true"
                      className="size-7"
                      strokeWidth={2.2}
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-black leading-tight tracking-[-0.03em] text-black">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}