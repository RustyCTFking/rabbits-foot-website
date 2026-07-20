"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/layout/Container";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "Rabbit's Foot serves Mishawaka, South Bend, Granger, Elkhart, and nearby Northern Indiana communities. Contact us if you are unsure whether your address is within our service area.",
  },
  {
    question: "How do I request an estimate?",
    answer:
      "You can call, text, or use the estimate request button on the website. Tell us what work you need, your location, and any helpful project details or photos.",
  },
  {
    question: "Do you provide the materials?",
    answer:
      "That depends on the project. We can discuss whether you already have the materials or whether they should be included when your estimate is prepared.",
  },
  {
    question: "What types of projects do you handle?",
    answer:
      "Common services include drywall repair, TV mounting, ceiling fan installation, furniture assembly, door repair, painting, and other smaller home repair or improvement projects.",
  },
  {
    question: "How quickly will you respond?",
    answer:
      "We aim to respond promptly during normal business hours. Response time may vary depending on current appointments and project volume.",
  },
  {
    question: "How is payment handled?",
    answer:
      "Payment terms and accepted payment methods will be confirmed before work begins so there are no surprises.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 bg-transparent py-24 sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6d9911]">
              Frequently asked questions
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] text-black sm:text-5xl">
              Clear answers before the work begins.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Good service starts with clear communication. Here are answers to
              common questions homeowners may have before requesting an
              estimate.
            </p>

            <a
              href="tel:+15747035978"
              className="mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-black px-8 font-black text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#84bd00] hover:text-black"
            >
              Ask us a question
            </a>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={faq.question}
                  className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.07)] backdrop-blur-xl"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-7"
                  >
                    <span className="text-lg font-black text-black sm:text-xl">
                      {faq.question}
                    </span>

                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#84bd00] text-black">
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-5 transition duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-black/5 px-6 pb-7 pt-5 sm:px-7">
                      <p className="leading-7 text-neutral-600">{faq.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}