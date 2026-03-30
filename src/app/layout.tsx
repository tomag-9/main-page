import type { Metadata } from "next";
import { Sora, Space_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${spaceMono.variable} antialiased text-white font-sans selection:bg-cyan-300/40`}
      >
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute -top-24 left-[12%] h-[26rem] w-[26rem] rounded-full bg-cyan-400/12 blur-[110px]" />
          <div className="absolute top-[32%] -right-24 h-[34rem] w-[34rem] rounded-full bg-orange-300/14 blur-[120px]" />
          <div className="absolute bottom-[-8rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-rose-300/10 blur-[130px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
