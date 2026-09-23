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
  url: "https://tomag.xyz",
  email: "mailto:magula@tomag.xyz",
  sameAs: [
    "https://www.linkedin.com/in/tom%C3%A1%C5%A1-magula-88035120b/",
    "https://github.com/magi-9",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tomag.xyz"),
  title: "Tomáš Magula | Fullstack Developer",
  description: "Tomáš Magula builds custom software for businesses of any size, from first idea to daily operation.",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://tomag.xyz",
    title: "Tomáš Magula | Fullstack Developer",
    description: "Tomáš Magula builds custom software for businesses of any size, from first idea to daily operation.",
    siteName: "Tomáš Magula Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomáš Magula | Fullstack Developer",
    description: "Tomáš Magula builds custom software for businesses of any size, from first idea to daily operation.",
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
