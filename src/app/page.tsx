"use client";

import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Approach from "@/components/Approach";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import BrandBar from "@/components/BrandBar";
import BackToTop from "@/components/BackToTop";
import { Coffee } from "@phosphor-icons/react";
import { useLocale } from "@/lib/i18n";

export default function Home() {
  const { t } = useLocale();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BrandBar />
      <Hero />
      <TechStack />
      <Approach />
      <Projects />
      <Experience />
      <Contact />
      <BackToTop />

      <footer className="z-10 mt-12 w-full border-t border-zinc-100/10 bg-zinc-950/45 py-8 text-center backdrop-blur-xl">
        <p className="flex items-center justify-center gap-2 text-zinc-300/75">
          {t.footer.madeWith} <Coffee size={16} weight="regular" className="text-amber-300" /> {t.footer.madeWithSuffix} &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
