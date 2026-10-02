// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tomáš Magula",
  jobTitle: "Fullstack Developer",
  description:
    "Fullstack developer who designs and builds custom web applications, business software, integrations, and automation.",
  url: "https://tomag.xyz",
  image: "https://tomag.xyz/brand/tm-mark.png",
  email: "mailto:magula@tomag.xyz",
  knowsAbout: [
    "Fullstack development",
    "Custom web applications",
    "Business software",
    "Software integrations",
    "DevOps automation",
  ],
  sameAs: [
    "https://www.linkedin.com/in/tom%C3%A1%C5%A1-magula-88035120b/",
    "https://github.com/magi-9",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tomag.xyz"),
  applicationName: "Tomáš Magula Portfolio",
  title: "Tomáš Magula | Fullstack Developer & Custom Software",
  description:
    "Fullstack developer building custom web applications, business software, integrations, and automation from first idea to reliable operation.",
  keywords: [
    "Tomáš Magula",
    "fullstack developer",
    "custom software development",
    "web application development",
    "business software",
    "Bratislava developer",
  ],
  authors: [{ name: "Tomáš Magula", url: "https://tomag.xyz" }],
  creator: "Tomáš Magula",
  publisher: "Tomáš Magula",
  category: "technology",
  manifest: "/site.webmanifest",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://tomag.xyz",
    title: "Tomáš Magula | Fullstack Developer & Custom Software",
    description:
      "Custom web applications, business software, integrations, and automation built from idea to reliable operation.",
    siteName: "Tomáš Magula Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://tomag.xyz/brand/tm-mark.png",
        width: 1200,
        height: 630,
        alt: "T.M logo for Tomáš Magula, fullstack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomáš Magula | Fullstack Developer & Custom Software",
    description:
      "Custom web applications, business software, integrations, and automation built from idea to reliable operation.",
    images: ["https://tomag.xyz/brand/tm-mark.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased text-zinc-50 font-sans selection:bg-amber-400/30`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
