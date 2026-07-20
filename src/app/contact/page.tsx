import type { Metadata } from "next";

import ContactCTA from "@/components/contact/ContactCTA";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import EstimateForm from "@/components/contact/EstimateForm";
import ServiceArea from "@/components/contact/ServiceArea";

export const metadata: Metadata = {
  title: "Contact | Rabbit's Foot Handyman Services",
  description:
    "Request a free estimate from Rabbit's Foot Handyman Services. Serving Mishawaka, South Bend, Granger, Elkhart, and surrounding communities.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#f8f8f8]">
      <ContactHero />

      <EstimateForm />

      <ContactInfo />

      <ServiceArea />

      <ContactCTA />
    </main>
  );
}