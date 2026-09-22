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

export const metadata: Metadata = {
  metadataBase: new URL("https://tomag.xyz"),
  title: "Tomáš Magula | Fullstack & DevOps Engineer",
  description: "Portfolio of Tomáš Magula, a Fullstack Engineer with a passion for infrastructure and DevOps.",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://tomag.xyz",
    title: "Tomáš Magula | Fullstack & DevOps Engineer",
    description: "Portfolio of Tomáš Magula, a Fullstack Engineer with a passion for infrastructure and DevOps.",
    siteName: "Tomáš Magula Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomáš Magula | Fullstack & DevOps Engineer",
    description: "Portfolio of Tomáš Magula, a Fullstack Engineer with a passion for infrastructure and DevOps.",
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
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
