import type { Metadata } from "next";

import ContactCTA from "@/components/contact/ContactCTA";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import EstimateForm from "@/components/contact/EstimateForm";
import ServiceArea from "@/components/contact/ServiceArea";

export const metadata: Metadata = {
  title: "Request a Handyman Estimate",
  description:
    "Request a free estimate from Rabbit's Foot Handyman Services for repairs, installations, assembly, and home improvements in Mishawaka, South Bend, Granger, Elkhart, and nearby communities.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <ContactHero />
      <EstimateForm />
      <ContactInfo />
      <ServiceArea />
      <ContactCTA />
    </main>
  );
}