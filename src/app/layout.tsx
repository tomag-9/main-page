import type { Metadata } from "next";
import { Montserrat, Space_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomáš Magula | Fullstack & DevOps Engineer",
  description: "Portfolio of Tomáš Magula, a Fullstack Engineer with a passion for infrastructure and DevOps.",
  icons: {
    icon: "/tomag-icon.svg",
    shortcut: "/tomag-icon.svg",
    apple: "/tomag-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${montserrat.variable} ${spaceMono.variable} antialiased bg-zinc-950 text-white font-sans selection:bg-emerald-500/30`}
      >
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]"></div>
        {children}
      </body>
    </html>
  );
}
