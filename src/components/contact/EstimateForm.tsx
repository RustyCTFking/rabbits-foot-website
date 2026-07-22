"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useRef,
  useState,
} from "react";
import {
  AlertCircle,
  CheckCircle2,
  ImagePlus,
  LoaderCircle,
  Send,
  Trash2,
} from "lucide-react";

import Container from "@/components/layout/Container";

const serviceOptions = [
  "Drywall Repair",
  "TV Mounting",
  "Ceiling Fan Installation",
  "Furniture Assembly",
  "Door Repair & Hardware",
  "Painting & Touch-Ups",
  "General Handyman Repairs",
  "Other",
];

const maximumFileCount = 5;
const maximumFileSize = 5 * 1024 * 1024;

const allowedFileTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

const fieldClassName =
  "mt-2.5 min-h-14 w-full rounded-2xl border border-black/10 bg-white px-5 text-base text-black outline-none transition placeholder:text-neutral-400 focus:border-[#84bd00] focus:ring-4 focus:ring-[#84bd00]/15";

const labelClassName = "text-sm font-black text-neutral-900";

type FormStatus = "idle" | "submitting" | "success" | "error";

function formatFileSize(size: number) {
  if (size < 1024 * 1024) {
    return `${Math.ceil(size / 1024)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

export default function EstimateForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);

  function handlePhotoSelection(event: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files ?? []);

    setErrorMessage("");

    if (selectedFiles.length === 0) {
      return;
    }

    const combinedFiles = [...photos, ...selectedFiles];

    if (combinedFiles.length > maximumFileCount) {
      setStatus("error");
      setErrorMessage(
        `You may upload up to ${maximumFileCount} project photos.`,
      );

      event.target.value = "";
      return;
    }

    const invalidType = selectedFiles.find(
      (file) => !allowedFileTypes.includes(file.type),
    );

    if (invalidType) {
      setStatus("error");
      setErrorMessage(
        "Photos must be JPG, PNG, WebP, HEIC, or HEIF files.",
      );

      event.target.value = "";
      return;
    }

    const oversizedFile = selectedFiles.find(
      (file) => file.size > maximumFileSize,
    );

    if (oversizedFile) {
      setStatus("error");
      setErrorMessage(
        `Each photo must be 5 MB or smaller. "${oversizedFile.name}" is too large.`,
      );

      event.target.value = "";
      return;
    }

    setPhotos(combinedFiles);
    setStatus("idle");
    event.target.value = "";
  }

  function removePhoto(indexToRemove: number) {
    setPhotos((currentPhotos) =>
      currentPhotos.filter((_, index) => index !== indexToRemove),
    );

    setErrorMessage("");

    if (status === "error") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.delete("photos");

    photos.forEach((photo) => {
      formData.append("photos", photo);
    });

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.error ?? "Your estimate request could not be sent.",
        );
      }

      form.reset();
      setPhotos([]);
      setStatus("success");
    } catch (error) {
      console.error("Estimate submission error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
      );

      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section
        id="estimate-form"
        className="scroll-mt-32 py-16 sm:py-20"
      >
        <Container>
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-black/10 bg-white px-7 py-14 text-center shadow-[0_24px_70px_rgba(0,0,0,0.09)] sm:px-12 sm:py-16">
            <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[#84bd00] text-black">
              <CheckCircle2 aria-hidden="true" className="size-8" />
            </span>

            <h2 className="mt-6 text-3xl font-black tracking-[-0.04em] text-black sm:text-4xl">
              Your request has been sent.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-neutral-600">
              Thank you for contacting Rabbit&apos;s Foot Handyman Services.
              We&apos;ll review your project details and photos and contact you
              as soon as possible.
            </p>

            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setErrorMessage("");
              }}
              className="rf-button-secondary mx-auto mt-8 sm:w-auto"
            >
              Submit Another Request
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="estimate-form"
      className="scroll-mt-32 py-16 sm:py-20"
    >
      <Container>
        <div className="grid overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.09)] lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="relative overflow-hidden bg-[#101210] px-7 py-12 text-white sm:px-10 sm:py-14 lg:px-12">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 size-72 rounded-full bg-[#84bd00]/20 blur-3xl"
            />

            <div className="relative">
              <p className="rf-eyebrow text-[#84bd00]">Project details</p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.045em]">
                Request your estimate.
              </h2>

              <p className="mt-6 leading-7 text-white/65">
                Provide as much information as you can. Clear project details
                and photos help us understand the work and respond more
                efficiently.
              </p>

              <div className="mt-10 grid gap-5 border-t border-white/10 pt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-[#84bd00]"
                  />

                  <p className="text-sm leading-6 text-white/70">
                    Include the type of repair or installation you need.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-[#84bd00]"
                  />

                  <p className="text-sm leading-6 text-white/70">
                    Describe the size, condition, and location of the project.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-[#84bd00]"
                  />

                  <p className="text-sm leading-6 text-white/70">
                    Add clear photos from multiple angles when possible.
                  </p>
                </div>
              </div>

              <p className="mt-10 text-sm leading-6 text-white/45">
                Fields marked with an asterisk are required.
              </p>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="grid gap-6 px-7 py-12 sm:px-10 sm:py-14 lg:px-12"
          >
            {status === "error" && (
              <div
                role="alert"
                className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-800"
              >
                <AlertCircle
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0"
                />

                <div>
                  <p className="font-black">Your request was not sent.</p>
                  <p className="mt-1 text-sm leading-6">{errorMessage}</p>
                </div>
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClassName}>
                  Full Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Your name"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClassName}>
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={40}
                  placeholder="(574) 555-1234"
                  className={fieldClassName}
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className={labelClassName}>
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={150}
                  placeholder="you@example.com"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="service" className={labelClassName}>
                  Service Needed *
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className={fieldClassName}
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="address" className={labelClassName}>
                Project Address
                <span className="ml-1 font-medium text-neutral-400">
                  Optional
                </span>
              </label>

              <input
                id="address"
                name="address"
                type="text"
                autoComplete="street-address"
                maxLength={250}
                placeholder="Street address and city"
                className={fieldClassName}
              />
            </div>

            <div>
              <label htmlFor="description" className={labelClassName}>
                Project Description *
              </label>

              <textarea
                id="description"
                name="description"
                required
                maxLength={5000}
                rows={7}
                placeholder="Tell us what needs to be repaired, installed, assembled, or improved."
                className="mt-2.5 w-full resize-y rounded-2xl border border-black/10 bg-white px-5 py-4 text-base leading-7 text-black outline-none transition placeholder:text-neutral-400 focus:border-[#84bd00] focus:ring-4 focus:ring-[#84bd00]/15"
              />
            </div>

            <div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <label htmlFor="photos" className={labelClassName}>
                    Project Photos
                    <span className="ml-1 font-medium text-neutral-400">
                      Optional
                    </span>
                  </label>

                  <p
                    id="photo-instructions"
                    className="mt-1 text-sm leading-6 text-neutral-500"
                  >
                    Upload up to 5 photos. Maximum 5 MB per photo.
                  </p>
                </div>

                <span className="shrink-0 text-sm font-bold text-neutral-500">
                  {photos.length}/{maximumFileCount}
                </span>
              </div>

              <input
                ref={fileInputRef}
                id="photos"
                name="photos"
                type="file"
                accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                multiple
                aria-describedby="photo-instructions"
                onChange={handlePhotoSelection}
                className="sr-only"
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={photos.length >= maximumFileCount}
                className="mt-4 flex min-h-32 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-black/15 bg-[#f6f7f2] px-6 py-6 text-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#84bd00]/30 active:border-[#84bd00] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-[#84bd00] text-black">
                  <ImagePlus aria-hidden="true" className="size-6" />
                </span>

                <span className="mt-4 font-black text-black">
                  Choose Project Photos
                </span>

                <span className="mt-1 text-sm text-neutral-500">
                  JPG, PNG, WebP, HEIC, or HEIF
                </span>
              </button>

              {photos.length > 0 && (
                <div className="mt-4 grid gap-3">
                  {photos.map((photo, index) => (
                    <div
                      key={`${photo.name}-${photo.lastModified}-${index}`}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white px-4 py-3"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-black text-black">
                          {photo.name}
                        </p>

                        <p className="mt-1 text-xs text-neutral-500">
                          {formatFileSize(photo.size)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        aria-label={`Remove ${photo.name}`}
                        className="flex size-11 shrink-0 items-center justify-center rounded-xl text-neutral-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 active:bg-red-50 active:text-red-700"
                      >
                        <Trash2 aria-hidden="true" className="size-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-neutral-500">
                Submitting this form does not confirm an appointment. We will
                contact you to discuss the project and availability.
              </p>

              <button
                type="submit"
                disabled={status === "submitting"}
                aria-live="polite"
                className="rf-button-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
              >
                {status === "submitting" ? (
                  <>
                    <LoaderCircle
                      aria-hidden="true"
                      className="size-5 animate-spin"
                    />
                    Sending Request
                  </>
                ) : (
                  <>
                    <Send aria-hidden="true" className="size-5" />
                    Send Estimate Request
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}