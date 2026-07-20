import { CheckCircle2, Hammer, HeartHandshake, Home, Phone } from "lucide-react";

import Container from "@/components/layout/Container";

const values = [
  {
    icon: HeartHandshake,
    title: "Honest Communication",
    description:
      "We believe homeowners deserve clear communication, realistic expectations, and dependable service from the first conversation to the final walkthrough.",
  },
  {
    icon: Hammer,
    title: "Quality Workmanship",
    description:
      "Every project—large or small—deserves careful attention to detail and workmanship you can feel confident about.",
  },
  {
    icon: Home,
    title: "Respect for Your Home",
    description:
      "Your home is important. We treat it with care and work to leave every project area clean and orderly.",
  },
];

const reasons = [
  "Friendly, dependable service",
  "Clear communication",
  "Honest pricing",
  "Attention to detail",
  "Professional appearance",
  "Locally focused",
];

export const metadata = {
  title: "About | Rabbit's Foot Handyman Services",
  description:
    "Learn more about Rabbit's Foot Handyman Services and our commitment to dependable home repairs and honest customer service.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="pt-36 pb-24">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#84bd00]">
              About Rabbit's Foot
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-[-0.04em] lg:text-7xl">
              Dependable handyman service built on honesty, quality, and respect.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-600">
              Rabbit's Foot Handyman Services was created with one goal in mind:
              helping homeowners complete the repairs and improvements that make
              a house feel cared for. Whether it's a simple repair or a weekend
              project you've been putting off, we're here to make the process
              straightforward and stress-free.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-black">
                Why Rabbit's Foot?
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Every homeowner deserves someone they can trust to show up,
                communicate clearly, and take pride in the finished work.
                That's the standard we strive to meet on every project.
              </p>

              <p className="mt-6 leading-8 text-neutral-600">
                We understand that inviting someone into your home requires
                confidence. That's why we focus on professionalism, reliability,
                and treating every customer's home with respect.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#111111] p-10 text-white">
              <h3 className="text-2xl font-black">
                What You Can Expect
              </h3>

              <div className="mt-8 grid gap-5">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#84bd00]" size={24} />

                    <span className="text-lg">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[2rem] bg-white p-8 shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#84bd00]">
                    <Icon size={28} className="text-black" />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <div className="rounded-[2.5rem] bg-[#111111] px-10 py-20 text-center text-white">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#84bd00]">
              Ready to get started?
            </p>

            <h2 className="mt-5 text-5xl font-black">
              Let's take care of your to-do list.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Whether you need a repair, installation, or another handyman
              service, we'd be happy to discuss your project.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:callrabbitsfoot@gmail.com"
                className="rounded-full bg-[#84bd00] px-8 py-4 font-black text-black transition hover:bg-[#93d100]"
              >
                Request an Estimate
              </a>

              <a
                href="tel:+15747035978"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 font-black text-white transition hover:bg-white hover:text-black"
              >
                <Phone size={20} />
                Call (574) 703-5978
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}