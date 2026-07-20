import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "@/components/layout/Container";

export default function ContactInfo() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Container>
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#84bd00]">
            Contact Information
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-black sm:text-5xl">
            We're here to help.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Whether you're planning a small repair or a larger home
            improvement project, we'd love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Phone */}
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-lg">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#84bd00]">
              <Phone className="text-black" size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-black">
              Call
            </h3>

            <p className="mt-3 text-neutral-600">
              Give us a call for questions or estimates.
            </p>

            <a
              href="tel:+15747035978"
              className="mt-6 inline-block font-black text-[#6d9911] hover:underline"
            >
              (574) 703-5978
            </a>
          </div>

          {/* Email */}
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-lg">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#84bd00]">
              <Mail className="text-black" size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-black">
              Email
            </h3>

            <p className="mt-3 text-neutral-600">
              Send us the details of your project.
            </p>

            <a
              href="mailto:callrabbitsfoot@gmail.com"
              className="mt-6 inline-block break-all font-black text-[#6d9911] hover:underline"
            >
              callrabbitsfoot@gmail.com
            </a>
          </div>

          {/* Service Area */}
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-lg">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#84bd00]">
              <MapPin className="text-black" size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-black">
              Service Area
            </h3>

            <p className="mt-3 leading-7 text-neutral-600">
              Mishawaka
              <br />
              South Bend
              <br />
              Granger
              <br />
              Elkhart
              <br />
              and surrounding communities
            </p>
          </div>

          {/* Hours */}
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-lg">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#84bd00]">
              <Clock3 className="text-black" size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-black">
              Business Hours
            </h3>

            <div className="mt-4 space-y-2 text-neutral-600">
              <p>Monday – Friday</p>
              <p className="font-bold text-black">
                8:00 AM – 5:00 PM
              </p>

              <p className="pt-3">Weekends</p>
              <p className="font-bold text-black">
                By Appointment
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}