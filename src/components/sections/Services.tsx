import Container from "@/components/layout/Container";

const services = [
  {
    title: "Drywall Repair",
    description:
      "Clean, professional repairs for holes, cracks, dents, and damaged drywall.",
  },
  {
    title: "TV Mounting",
    description:
      "Secure TV installation with proper hardware, careful alignment, and clean placement.",
  },
  {
    title: "Ceiling Fan Installation",
    description:
      "Reliable ceiling fan replacement and installation for safer, more comfortable rooms.",
  },
  {
    title: "Furniture Assembly",
    description:
      "Accurate assembly for desks, beds, cabinets, shelving, storage, and more.",
  },
  {
    title: "Door Repair",
    description:
      "Repair sticking doors, loose hinges, damaged hardware, drafts, and alignment problems.",
  },
  {
    title: "Painting",
    description:
      "Interior touch-ups and smaller painting projects completed with careful preparation.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-transparent py-24 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#6d9911]">
            What we do
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-black sm:text-5xl">
            Dependable help for the jobs your home needs.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            From quick repairs to careful installations, Rabbit&apos;s Foot
            delivers professional workmanship without the runaround.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-[1.75rem] border border-white/70 bg-white/75 p-7 shadow-[0_16px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#84bd00]/50 hover:bg-white/90 hover:shadow-[0_22px_60px_rgba(0,0,0,0.13)]"
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-[#84bd00] text-lg font-black text-black">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-7 text-2xl font-black tracking-tight text-black">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {service.description}
              </p>

              <a
                href="#estimate"
                className="mt-7 inline-flex items-center gap-2 font-black text-black transition group-hover:text-[#6d9911]"
              >
                Request this service
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#estimate"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-black px-8 font-black text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#84bd00] hover:text-black"
          >
            Get a Free Estimate
          </a>
        </div>
      </Container>
    </section>
  );
}