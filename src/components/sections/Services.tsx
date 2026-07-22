import Link from "next/link";
import {
  ArrowRight,
  Brush,
  DoorOpen,
  Fan,
  Hammer,
  MonitorUp,
  Sofa,
  type LucideIcon,
} from "lucide-react";

import Container from "@/components/layout/Container";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Drywall Repair",
    description:
      "Clean, professional repairs for holes, cracks, dents, and damaged drywall.",
    icon: Hammer,
  },
  {
    title: "TV Mounting",
    description:
      "Secure installation with proper hardware, careful alignment, and clean placement.",
    icon: MonitorUp,
  },
  {
    title: "Ceiling Fan Installation",
    description:
      "Dependable ceiling fan replacement and installation for more comfortable rooms.",
    icon: Fan,
  },
  {
    title: "Furniture Assembly",
    description:
      "Careful assembly for desks, beds, cabinets, shelving, storage, and more.",
    icon: Sofa,
  },
  {
    title: "Door Repair",
    description:
      "Help with sticking doors, loose hinges, damaged hardware, drafts, and alignment.",
    icon: DoorOpen,
  },
  {
    title: "Painting & Touch-Ups",
    description:
      "Smaller interior painting projects completed with careful preparation and cleanup.",
    icon: Brush,
  },
];

export default function Services() {
  return (
    <section id="services" className="rf-section scroll-mt-24">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="rf-eyebrow">Handyman services</p>

            <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#101210] sm:text-5xl">
              Practical help for the projects around your home.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-[#646964] lg:justify-self-end">
            From quick repairs to careful installations, Rabbit&apos;s Foot
            provides straightforward service without the runaround.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rf-card group flex min-h-[20rem] flex-col p-7 sm:p-8"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-[#84bd00] text-[#101210] shadow-[0_10px_25px_rgba(132,189,0,0.2)]">
                  <Icon aria-hidden="true" className="size-7" />
                </span>

                <h3 className="mt-7 text-2xl font-black tracking-[-0.035em] text-[#101210]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-[#646964]">
                  {service.description}
                </p>

                <Link
                  href="/contact#estimate-form"
                  className="mt-auto inline-flex items-center gap-2 pt-7 font-black text-[#527700] transition-colors hover:text-[#101210]"
                >
                  Request this service
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/services" className="rf-button-secondary">
            View All Services
            <ArrowRight aria-hidden="true" className="size-5" />
          </Link>

          <Link
            href="/contact#estimate-form"
            className="rf-button-primary"
          >
            Request a Free Estimate
          </Link>
        </div>
      </Container>
    </section>
  );
}