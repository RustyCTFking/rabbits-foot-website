import EstimateCTA from "@/components/sections/EstimateCTA";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <WhyChoose />
      <Process />
      <FAQ />
      <EstimateCTA />
    </main>
  );
}