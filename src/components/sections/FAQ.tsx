"use client";

import { ChevronDown, Phone } from "lucide-react";
import { useState } from "react";

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
      "You can call, text, or submit the estimate form on the website. Include the type of work you need, your location, and any helpful project details or photos.",
  },
  {
    question: "Can I include photos with my request?",
    answer:
      "Yes. The estimate form allows you to upload project photos. Clear photos can help us better understand the work before contacting you.",
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
    <section id="faq" className="rf-section scroll-mt-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="rf-eyebrow">Frequently asked questions</p>

            <h2 className="rf-heading mt-5">
              Helpful answers before your project begins.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Good service starts with clear communication. These answers cover
              some of the most common questions homeowners ask before
              requesting an estimate.
            </p>

            <a
              href="tel:+15747035978"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-2 border-[#84bd00] bg-[#101210] px-8 font-black shadow-[0_10px_24px_rgba(16,18,16,0.15)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#84bd00]/30 sm:w-auto"
              style={{
                color: "#84bd00",
                WebkitTextFillColor: "#84bd00",
              }}
            >
              <Phone aria-hidden="true" className="size-5" />
              Ask Us a Question
            </a>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              const questionId = `faq-question-${index}`;

              return (
                <article
                  key={faq.question}
                  className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
                >
                  <h3>
                    <button
                      id={questionId}
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#84bd00]/35 sm:px-7"
                    >
                      <span className="text-lg font-black leading-7 text-black sm:text-xl">
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${
                          isOpen
                            ? "bg-black text-[#84bd00]"
                            : "bg-[#84bd00] text-black"
                        }`}
                      >
                        <ChevronDown
                          className={`size-5 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      className="border-t border-black/5 px-6 pb-7 pt-5 sm:px-7"
                    >
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