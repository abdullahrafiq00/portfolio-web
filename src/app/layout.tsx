import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-tech",
  display: "swap",
});

const siteUrl = "https://abdullahrafiq.dev";
const title = "Abdullah Rafiq — Full Stack Developer";
const description =
  "Abdullah Rafiq is a Full Stack Developer specializing in React, Next.js, Node.js, NestJS and scalable web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Abdullah Rafiq",
  },
  description,
  keywords: [
    "Abdullah Rafiq",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS Developer",
    "MERN Stack Developer",
    "Software Engineer Pakistan",
  ],
  authors: [{ name: personal.name, url: personal.linkedin }],
  creator: personal.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: personal.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.title,
  description: personal.positioning,
  email: `mailto:${personal.email}`,
  telephone: personal.phone,
  url: siteUrl,
  sameAs: [personal.linkedin],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "WordPress",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-accent">
        <div className="bg-noise pointer-events-none fixed inset-0 z-[1] opacity-60" aria-hidden />
        {children}
      </body>
    </html>
  );
}
