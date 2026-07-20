import Container from "@/components/layout/Container";
import {
  ShieldCheck,
  Clock3,
  MessageCircle,
  Hammer,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Professional Workmanship",
    description:
      "Every project is completed with attention to detail and built to last.",
  },
  {
    icon: Clock3,
    title: "Reliable Scheduling",
    description:
      "We arrive when promised and keep your project moving forward.",
  },
  {
    icon: MessageCircle,
    title: "Honest Communication",
    description:
      "Clear pricing, straightforward advice, and no surprises.",
  },
  {
    icon: Hammer,
    title: "Locally Owned",
    description:
      "Proudly serving Mishawaka, South Bend, Granger, Elkhart and surrounding communities.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-28">
      <Container>
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          {/* Left Side */}
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#84bd00]">
              WHY CHOOSE RABBIT'S FOOT
            </p>

            <h2 className="max-w-xl text-5xl font-black leading-tight text-black">
              Dependable service.
              <br />
              Honest people.
              <br />
              Quality results.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
              We believe homeowners deserve dependable service from someone
              they can trust. Whether it's a quick repair or a full day of
              projects, we treat every home with care and respect.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:border-[#84bd00] hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#84bd00]">
                    <Icon className="h-7 w-7 text-black" />
                  </div>

                  <h3 className="mb-3 text-2xl font-black">
                    {feature.title}
                  </h3>

                  <p className="leading-7 text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}