import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Brush,
  Check,
  CircleHelp,
  DoorOpen,
  Drill,
  Fan,
  Hammer,
  MonitorUp,
  Phone,
  Sofa,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  included: string[];
};

const services: Service[] = [
  {
    id: "drywall-repair",
    title: "Drywall Repair",
    shortDescription:
      "Clean, dependable repairs for holes, cracks, dents, and damaged drywall.",
    description:
      "Damaged drywall can make an otherwise well-maintained room look unfinished. We repair common wall and ceiling damage and prepare the surface for a clean, professional-looking finish.",
    icon: Hammer,
    included: [
      "Small and medium hole repairs",
      "Crack and dent repairs",
      "Drywall patching",
      "Surface preparation",
      "Minor ceiling repairs",
      "Paint-ready finishing",
    ],
  },
  {
    id: "tv-mounting",
    title: "TV Mounting",
    shortDescription:
      "Secure television mounting with careful placement and a clean appearance.",
    description:
      "Get your television safely mounted at a comfortable viewing height. We carefully position and secure your mounting hardware while helping create a cleaner, more organized room.",
    icon: MonitorUp,
    included: [
      "Flat-screen TV mounting",
      "Mounting bracket installation",
      "Placement and height planning",
      "Stud location",
      "Leveling and alignment",
      "Basic cord organization",
    ],
  },
  {
    id: "ceiling-fan-installation",
    title: "Ceiling Fan Installation",
    shortDescription:
      "Professional installation and replacement of ceiling fans and fixtures.",
    description:
      "A properly installed ceiling fan can improve comfort and update the look of a room. We handle straightforward fan replacements and installations where suitable wiring and support are already available.",
    icon: Fan,
    included: [
      "Existing fan replacement",
      "New fan assembly",
      "Mounting and alignment",
      "Blade installation",
      "Light-kit assembly",
      "Basic operation testing",
    ],
  },
  {
    id: "furniture-assembly",
    title: "Furniture Assembly",
    shortDescription:
      "Careful assembly of ready-to-build furniture for your home or office.",
    description:
      "Skip the confusing instructions and piles of hardware. We assemble common boxed furniture carefully and make sure each piece is stable, aligned, and ready to use.",
    icon: Sofa,
    included: [
      "Desks and office furniture",
      "Beds and bedroom furniture",
      "Shelving units",
      "Tables and chairs",
      "Storage cabinets",
      "Bookcases and entertainment stands",
    ],
  },
  {
    id: "door-repairs-and-hardware",
    title: "Door Repairs & Hardware",
    shortDescription:
      "Adjustments and repairs for sticking doors, handles, hinges, and hardware.",
    description:
      "Doors that stick, sag, scrape, or fail to latch can quickly become frustrating. We handle many common interior door and hardware problems to restore smoother operation.",
    icon: DoorOpen,
    included: [
      "Hinge adjustments",
      "Door alignment",
      "Handle and knob replacement",
      "Latch adjustments",
      "Minor trim repairs",
      "Weatherstripping replacement",
    ],
  },
  {
    id: "painting-and-touch-ups",
    title: "Painting & Touch-Ups",
    shortDescription:
      "Small-area painting and touch-up work that refreshes your living space.",
    description:
      "Not every painting project requires a full crew. We handle smaller interior painting jobs, repaired areas, trim touch-ups, and other focused projects that need a clean finish.",
    icon: Brush,
    included: [
      "Wall touch-ups",
      "Repaired-area painting",
      "Small-room painting",
      "Trim and baseboard touch-ups",
      "Minor surface preparation",
      "Accent walls",
    ],
  },
  {
    id: "general-handyman-repairs",
    title: "General Handyman Repairs",
    shortDescription:
      "Practical help with the smaller repairs and improvements around your home.",
    description:
      "Some projects do not fit neatly into one category. We help homeowners complete a range of smaller repair, installation, and maintenance tasks that have been sitting on the to-do list.",
    icon: Wrench,
    included: [
      "Minor household repairs",
      "Shelf installation",
      "Wall-mounted accessories",
      "Hardware replacement",
      "Caulking and sealing",
      "Small installation projects",
    ],
  },
];

export const metadata: Metadata = {
  title: "Handyman Services in Mishawaka, IN",
  description:
    "Explore Rabbit's Foot handyman services in Mishawaka, South Bend, Granger, Elkhart, and nearby communities. Services include drywall repair, TV mounting, furniture assembly, door repair, painting, and home improvements.",
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article
      id={service.id}
      className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative overflow-hidden bg-[#101210] p-7 text-white sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-64 rounded-full bg-[#84bd00]/20 blur-3xl"
          />

          <div className="relative">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-[#84bd00] text-black shadow-[0_12px_28px_rgba(132,189,0,0.22)]">
              <Icon aria-hidden="true" className="size-8" strokeWidth={2.2} />
            </div>

            <h2 className="mt-8 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
              {service.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              {service.shortDescription}
            </p>
          </div>
        </div>

        <div className="p-7 sm:p-10 lg:p-12">
          <p className="text-lg leading-8 text-neutral-600">
            {service.description}
          </p>

          <h3 className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-[#679500]">
            Common projects include
          </h3>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#84bd00] text-black">
                  <Check aria-hidden="true" className="size-4" strokeWidth={3} />
                </span>

                <span className="font-bold leading-6 text-neutral-800">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact#estimate-form"
            className="rf-button-primary mt-9 sm:w-auto"
          >
            Request This Service
            <ArrowRight aria-hidden="true" className="size-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <section className="px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#101210] px-7 py-14 text-white shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 size-96 rounded-full bg-[#84bd00]/20 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-32 -left-24 size-80 rounded-full bg-[#84bd00]/10 blur-3xl"
            />

            <div className="relative max-w-4xl">
              <p className="rf-eyebrow text-[#84bd00]">Handyman services</p>

              <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Practical help for the projects around your home.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl sm:leading-9">
                From repairs and installations to furniture assembly and
                smaller improvements, Rabbit&apos;s Foot delivers careful
                workmanship and straightforward communication.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#services-list" className="rf-button-primary sm:w-auto">
                  <Drill aria-hidden="true" className="size-5" />
                  Explore Services
                </a>

                <a
                  href="tel:+15747035978"
                  className="rf-button-secondary sm:w-auto"
                >
                  <Phone aria-hidden="true" className="size-5" />
                  Call (574) 703-5978
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services-list" className="rf-section scroll-mt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="rf-eyebrow">What we can help with</p>

            <h2 className="rf-heading mt-5">
              Useful services for real household projects.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Browse our most frequently requested services. Every project is
              different, so contact us to discuss what your home needs.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:mt-16">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Container>
          <div className="grid gap-7 rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.07)] sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:p-12">
            <span className="flex size-16 items-center justify-center rounded-2xl bg-[#101210] text-[#84bd00]">
              <CircleHelp aria-hidden="true" className="size-8" />
            </span>

            <div>
              <h2 className="text-2xl font-black tracking-[-0.03em] text-black sm:text-3xl">
                Don&apos;t see your project listed?
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
                Every home has a different to-do list. Tell us about your
                project and we&apos;ll let you know whether it is a good fit.
              </p>
            </div>

            <a
              href="tel:+15747035978"
              className="rf-button-secondary sm:w-auto"
            >
              <Phone aria-hidden="true" className="size-5" />
              Ask About Your Project
            </a>
          </div>
        </Container>
      </section>

      <section
        id="service-estimate"
        className="scroll-mt-28 px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8"
      >
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#101210] px-7 py-14 text-center text-white shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#84bd00]/20 blur-3xl"
            />

            <div className="relative mx-auto max-w-3xl">
              <p className="rf-eyebrow text-[#84bd00]">
                Ready to get started?
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Let&apos;s get your project off the to-do list.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Send us your project details and photos through the estimate
                form. We&apos;ll review the request and help determine the next
                step.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact#estimate-form"
                  className="rf-button-primary sm:w-auto"
                >
                  Request an Estimate
                  <ArrowRight aria-hidden="true" className="size-5" />
                </Link>

                <a
                  href="tel:+15747035978"
                  className="rf-button-secondary sm:w-auto"
                >
                  <Phone aria-hidden="true" className="size-5" />
                  Call (574) 703-5978
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}