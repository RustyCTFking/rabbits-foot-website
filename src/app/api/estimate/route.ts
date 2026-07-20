import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const maximumFileCount = 5;
const maximumFileSize = 5 * 1024 * 1024;
const maximumTotalFileSize = 25 * 1024 * 1024;

const allowedFileTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

const allowedFileExtensions = new Set([
  "jpg",
  "jpeg",
  "png",
  "webp",
  "heic",
  "heif",
]);

const resend = new Resend(process.env.RESEND_API_KEY);

function getRequiredText(
  formData: FormData,
  fieldName: string,
  maximumLength: number,
) {
  const value = formData.get(fieldName);

  if (typeof value !== "string") {
    return null;
  }

  const trimmedValue = value.trim();

  if (
    trimmedValue.length === 0 ||
    trimmedValue.length > maximumLength
  ) {
    return null;
  }

  return trimmedValue;
}

function getOptionalText(
  formData: FormData,
  fieldName: string,
  maximumLength: number,
) {
  const value = formData.get(fieldName);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maximumLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getFileExtension(filename: string) {
  const extension = filename.split(".").pop();

  return extension?.toLowerCase() ?? "";
}

function isAllowedPhoto(file: File) {
  const extension = getFileExtension(file.name);

  return (
    allowedFileTypes.has(file.type) ||
    allowedFileExtensions.has(extension)
  );
}

function sanitizeFilename(filename: string, index: number) {
  const cleanedFilename = filename
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 120);

  return cleanedFilename || `project-photo-${index + 1}`;
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          error: "The email service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const formData = await request.formData();

    const name = getRequiredText(formData, "name", 100);
    const phone = getRequiredText(formData, "phone", 40);
    const email = getRequiredText(formData, "email", 150);
    const service = getRequiredText(formData, "service", 100);
    const description = getRequiredText(
      formData,
      "description",
      5000,
    );
    const address = getOptionalText(formData, "address", 250);

    if (!name || !phone || !email || !service || !description) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        {
          status: 400,
        },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    const photoEntries = formData.getAll("photos");

    const photos = photoEntries.filter(
      (entry): entry is File =>
        entry instanceof File && entry.size > 0,
    );

    if (photos.length > maximumFileCount) {
      return NextResponse.json(
        {
          error: `You may upload up to ${maximumFileCount} project photos.`,
        },
        {
          status: 400,
        },
      );
    }

    const invalidPhoto = photos.find(
      (photo) => !isAllowedPhoto(photo),
    );

    if (invalidPhoto) {
      return NextResponse.json(
        {
          error:
            "Photos must be JPG, PNG, WebP, HEIC, or HEIF files.",
        },
        {
          status: 400,
        },
      );
    }

    const oversizedPhoto = photos.find(
      (photo) => photo.size > maximumFileSize,
    );

    if (oversizedPhoto) {
      return NextResponse.json(
        {
          error: `Each photo must be 5 MB or smaller. "${oversizedPhoto.name}" is too large.`,
        },
        {
          status: 400,
        },
      );
    }

    const totalFileSize = photos.reduce(
      (total, photo) => total + photo.size,
      0,
    );

    if (totalFileSize > maximumTotalFileSize) {
      return NextResponse.json(
        {
          error:
            "The combined size of all project photos must be 25 MB or smaller.",
        },
        {
          status: 400,
        },
      );
    }

    const attachments = await Promise.all(
      photos.map(async (photo, index) => ({
        filename: sanitizeFilename(photo.name, index),
        content: Buffer.from(await photo.arrayBuffer()),
      })),
    );

    const fromEmail =
      process.env.ESTIMATE_FROM_EMAIL ??
      "Rabbit's Foot Website <onboarding@resend.dev>";

    const toEmail =
      process.env.ESTIMATE_TO_EMAIL ??
      "callrabbitsfoot@gmail.com";

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeAddress = escapeHtml(address);
    const safeDescription = escapeHtml(description).replaceAll(
      "\n",
      "<br />",
    );

    const photoSummary =
      photos.length === 0
        ? "No project photos were included."
        : `${photos.length} project ${
            photos.length === 1 ? "photo is" : "photos are"
          } attached to this email.`;

    const ownerEmailResult = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New estimate request from ${name}`,
      attachments,
      text: [
        "New estimate request",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service: ${service}`,
        `Project address: ${address || "Not provided"}`,
        `Project photos: ${
          photos.length > 0 ? photos.length : "None"
        }`,
        "",
        "Project description:",
        description,
      ].join("\n"),
      html: `
        <div style="margin:0;background:#f4f4f4;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#111111;">
          <div style="margin:0 auto;max-width:680px;overflow:hidden;border-radius:24px;background:#ffffff;box-shadow:0 18px 50px rgba(0,0,0,0.08);">
            <div style="background:#111111;padding:32px;">
              <p style="margin:0 0 12px;color:#84bd00;font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">
                Rabbit's Foot Handyman Services
              </p>

              <h1 style="margin:0;color:#ffffff;font-size:30px;line-height:1.15;">
                New estimate request
              </h1>
            </div>

            <div style="padding:32px;">
              <table
                role="presentation"
                style="width:100%;border-collapse:collapse;"
              >
                <tbody>
                  <tr>
                    <td style="width:160px;padding:12px 0;border-bottom:1px solid #eeeeee;font-weight:700;">
                      Name
                    </td>

                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                      ${safeName}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;font-weight:700;">
                      Phone
                    </td>

                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                      <a
                        href="tel:${safePhone}"
                        style="color:#5f8700;"
                      >
                        ${safePhone}
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;font-weight:700;">
                      Email
                    </td>

                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                      <a
                        href="mailto:${safeEmail}"
                        style="color:#5f8700;"
                      >
                        ${safeEmail}
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;font-weight:700;">
                      Service
                    </td>

                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                      ${safeService}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;font-weight:700;">
                      Project address
                    </td>

                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                      ${safeAddress || "Not provided"}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;font-weight:700;">
                      Photos
                    </td>

                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                      ${photos.length > 0 ? photos.length : "None"}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style="margin-top:28px;">
                <h2 style="margin:0 0 12px;font-size:18px;">
                  Project description
                </h2>

                <div style="border-left:4px solid #84bd00;background:#f7f7f7;padding:20px;line-height:1.7;">
                  ${safeDescription}
                </div>
              </div>

              <div style="margin-top:24px;border-radius:14px;background:#f7f7f7;padding:18px;">
                <p style="margin:0;font-size:14px;line-height:1.6;color:#555555;">
                  ${photoSummary}
                </p>
              </div>

              <p style="margin:28px 0 0;color:#666666;font-size:13px;line-height:1.6;">
                Reply directly to this email to respond to ${safeName}.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (ownerEmailResult.error) {
      console.error(
        "Owner estimate email error:",
        ownerEmailResult.error,
      );

      return NextResponse.json(
        {
          error: "The estimate request could not be sent.",
        },
        {
          status: 500,
        },
      );
    }

    const confirmationResult = await resend.emails.send({
      from: fromEmail,
      to: email,
      replyTo: toEmail,
      subject: "We received your estimate request",
      text: [
        `Hi ${name},`,
        "",
        "Thank you for contacting Rabbit's Foot Handyman Services.",
        "",
        `We received your request for: ${service}`,
        `Project photos received: ${photos.length}`,
        "",
        "We will review your project details and contact you to discuss the next steps, scheduling, and pricing.",
        "",
        "Submitting this request does not confirm an appointment.",
        "",
        "Rabbit's Foot Handyman Services",
        "(574) 703-5978",
        "callrabbitsfoot@gmail.com",
      ].join("\n"),
      html: `
        <div style="margin:0;background:#f4f4f4;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#111111;">
          <div style="margin:0 auto;max-width:680px;overflow:hidden;border-radius:24px;background:#ffffff;box-shadow:0 18px 50px rgba(0,0,0,0.08);">
            <div style="background:#111111;padding:32px;">
              <p style="margin:0 0 12px;color:#84bd00;font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">
                Rabbit's Foot Handyman Services
              </p>

              <h1 style="margin:0;color:#ffffff;font-size:30px;line-height:1.15;">
                We received your request.
              </h1>
            </div>

            <div style="padding:32px;">
              <p style="margin:0;font-size:18px;line-height:1.7;">
                Hi ${safeName},
              </p>

              <p style="margin:18px 0 0;line-height:1.7;color:#555555;">
                Thank you for contacting Rabbit's Foot Handyman
                Services. Your estimate request was received
                successfully.
              </p>

              <div style="margin-top:24px;border-left:4px solid #84bd00;background:#f7f7f7;padding:20px;">
                <p style="margin:0;color:#666666;font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;">
                  Service requested
                </p>

                <p style="margin:8px 0 0;font-size:18px;font-weight:700;">
                  ${safeService}
                </p>

                <p style="margin:12px 0 0;color:#666666;font-size:14px;">
                  Project photos received: ${photos.length}
                </p>
              </div>

              <p style="margin:24px 0 0;line-height:1.7;color:#555555;">
                We'll review your project details and contact you to
                discuss availability, scheduling, and pricing.
              </p>

              <p style="margin:18px 0 0;line-height:1.7;color:#555555;">
                Submitting an estimate request does not confirm an
                appointment.
              </p>

              <div style="margin-top:28px;border-top:1px solid #eeeeee;padding-top:24px;">
                <p style="margin:0;font-weight:700;">
                  Rabbit's Foot Handyman Services
                </p>

                <p style="margin:8px 0 0;color:#666666;">
                  <a
                    href="tel:+15747035978"
                    style="color:#5f8700;text-decoration:none;"
                  >
                    (574) 703-5978
                  </a>
                </p>

                <p style="margin:6px 0 0;color:#666666;">
                  <a
                    href="mailto:callrabbitsfoot@gmail.com"
                    style="color:#5f8700;text-decoration:none;"
                  >
                    callrabbitsfoot@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    if (confirmationResult.error) {
      console.error(
        "Customer confirmation email error:",
        confirmationResult.error,
      );
    }

    return NextResponse.json(
      {
        success: true,
        messageId: ownerEmailResult.data?.id,
        photoCount: photos.length,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Estimate route error:", error);

    return NextResponse.json(
      {
        error: "An unexpected error occurred.",
      },
      {
        status: 500,
      },
    );
  }
}