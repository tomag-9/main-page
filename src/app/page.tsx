"use client";

import HeroApproach from "@/components/HeroApproach";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
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
      <HeroApproach />
      <Projects />
      <Stack />
      <Experience />
      <Contact />
      <BackToTop />

      <footer className="z-10 mt-12 w-full border-t border-zinc-100/10 bg-zinc-950/45 py-8 text-center backdrop-blur-xl">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 text-zinc-300/75">
          {"credit" in t.footer ? (
            <>
              <span>{t.footer.credit}</span>
              <Coffee size={16} weight="regular" className="shrink-0 text-amber-300" aria-hidden="true" />
            </>
          ) : (
            <>
              <span>{t.footer.madeWith}</span>
              <Coffee size={16} weight="regular" className="shrink-0 text-amber-300" aria-hidden="true" />
              <span>{t.footer.madeWithSuffix}</span>
            </>
          )}
          <span>&copy; {new Date().getFullYear()}</span>
        </p>
      </footer>
    </main>
  );
}
