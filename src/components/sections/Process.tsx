import {
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Hammer,
} from "lucide-react";

import Container from "@/components/layout/Container";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Request an Estimate",
    description:
      "Call, text, or submit our estimate form. Tell us about your project and we will respond promptly.",
  },
  {
    icon: CalendarDays,
    number: "02",
    title: "Schedule Your Service",
    description:
      "Choose a date and time that fits your schedule. We will confirm every detail before arriving.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Professional Work",
    description:
      "We complete your project with quality workmanship, clear communication, and respect for your home.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Enjoy the Results",
    description:
      "Your project is finished and ready to enjoy. Our goal is work you would be happy to recommend.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 bg-transparent py-24 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6d9911]">
            Our process
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-black sm:text-5xl">
            Simple. Honest.
            <span className="block">Stress-free.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            From your first call to the final walkthrough, we make every project
            straightforward and hassle-free.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group rounded-[1.75rem] border border-white/70 bg-white/75 p-7 shadow-[0_16px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#84bd00]/50 hover:bg-white/90 hover:shadow-[0_22px_60px_rgba(0,0,0,0.13)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex size-14 items-center justify-center rounded-full bg-[#84bd00] text-black">
                    <Icon aria-hidden="true" className="size-7" />
                  </div>

                  <span className="text-5xl font-black text-black/10">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-black tracking-tight text-black">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}