import {
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Hammer,
} from "lucide-react";

import Container from "@/components/layout/Container";

const steps = [
  {
    icon: ClipboardList,
    title: "Tell Us What You Need",
    description:
      "Call, text, or submit the estimate form with details about your project.",
  },
  {
    icon: CalendarCheck,
    title: "Choose a Convenient Time",
    description:
      "We’ll review the request, discuss the details, and schedule a time that works for you.",
  },
  {
    icon: Hammer,
    title: "We Complete the Work",
    description:
      "Your project is handled with careful workmanship, clear communication, and respect for your home.",
  },
  {
    icon: CheckCircle2,
    title: "Enjoy the Finished Result",
    description:
      "We’ll review the completed work with you and make sure everything meets expectations.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="rf-section relative scroll-mt-28 overflow-hidden"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="rf-eyebrow">How it works</p>

          <h2 className="rf-heading mt-5">
            A straightforward process from start to finish.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Getting dependable help for your home shouldn&apos;t be complicated.
            We keep every step clear, organized, and easy to understand.
          </p>
        </div>

        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-9 hidden h-px bg-gradient-to-r from-transparent via-[#84bd00]/35 to-transparent lg:block"
          />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rf-card relative flex h-full flex-col p-7 sm:p-8"
              >
                <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-[#84bd00] text-black shadow-[0_10px_25px_rgba(132,189,0,0.22)]">
                  <Icon aria-hidden="true" className="size-7" strokeWidth={2.2} />
                </div>

                <h3 className="mt-7 text-2xl font-black leading-tight tracking-[-0.035em] text-black">
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