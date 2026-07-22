import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Rabbit's Foot Handyman Services",
  description:
    "Handyman and home repair services throughout Mishawaka, South Bend, Granger, Elkhart, and nearby Michiana communities.",
  url: "https://www.callrabbitsfoot.com",
  logo: "https://www.callrabbitsfoot.com/logo.png",
  image: "https://www.callrabbitsfoot.com/logo.png",
  telephone: "+1-574-703-5978",
  email: "estimates@callrabbitsfoot.com",
  areaServed: [
    {
      "@type": "City",
      name: "Mishawaka",
    },
    {
      "@type": "City",
      name: "South Bend",
    },
    {
      "@type": "City",
      name: "Granger",
    },
    {
      "@type": "City",
      name: "Elkhart",
    },
    {
      "@type": "AdministrativeArea",
      name: "Michiana",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-574-703-5978",
    contactType: "customer service",
    email: "estimates@callrabbitsfoot.com",
    availableLanguage: "English",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.callrabbitsfoot.com"),

  applicationName: "Rabbit's Foot Handyman Services",

  title: {
    default:
      "Rabbit's Foot Handyman Services | Handyman in Mishawaka, IN",
    template: "%s | Rabbit's Foot Handyman Services",
  },

  description:
    "Professional handyman services in Mishawaka, South Bend, Granger, Elkhart, and nearby Northern Indiana communities. Drywall repair, TV mounting, door repair, furniture assembly, fixture installation, and general home repairs.",

  keywords: [
    "handyman Mishawaka",
    "handyman South Bend",
    "handyman services",
    "home repair Mishawaka",
    "drywall repair Mishawaka",
    "TV mounting South Bend",
    "door repair",
    "furniture assembly",
    "Rabbit's Foot Handyman Services",
  ],

  authors: [
    {
      name: "Rabbit's Foot Handyman Services",
      url: "https://www.callrabbitsfoot.com",
    },
  ],

  creator: "Rabbit's Foot Handyman Services",
  publisher: "Rabbit's Foot Handyman Services",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rabbit's Foot Handyman Services",
    title:
      "Rabbit's Foot Handyman Services | Handyman in Mishawaka, IN",
    description:
      "Professional handyman and home repair services throughout Mishawaka, South Bend, Granger, Elkhart, and nearby Michiana communities.",
    images: [
      {
        url: "/logo.png",
        alt: "Rabbit's Foot Handyman Services",
      },
    ],
  },

  twitter: {
    card: "summary",
    title:
      "Rabbit's Foot Handyman Services | Handyman in Mishawaka, IN",
    description:
      "Professional handyman and home repair services throughout Mishawaka, South Bend, Granger, Elkhart, and nearby communities.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />

        <div className="site-shell">
          <div className="site-watermark" aria-hidden="true" />

          <div className="site-content">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}