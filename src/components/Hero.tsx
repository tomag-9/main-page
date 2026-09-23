"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import Link from "next/link";

const MotionLink = motion.create(Link);

export default function Hero() {
  const { t } = useLocale();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero-intro flex items-center pb-10 pt-28 lg:pb-20 lg:pt-24">
      <div className="w-full">
        <div className="max-w-3xl">
          <h1 className="section-title mb-3 tracking-tight text-zinc-50">
            <span className="block text-5xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
              Tomáš
              <motion.span
                className="inline-block text-amber-300"
                whileHover={{ scale: 1.4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                .
              </motion.span>
              Magula
            </span>
          </h1>

          <p className="mb-5 max-w-2xl text-xl font-semibold text-zinc-200 sm:text-2xl">
            {t.hero.headlineRest}
          </p>

          <p className="muted-copy mb-8 max-w-2xl text-base leading-relaxed sm:text-lg">
            {t.hero.subtext}
          </p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <MotionLink
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="btn-primary flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-all active:scale-95 sm:w-auto"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={18} weight="regular" />
            </MotionLink>
            <MotionLink
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="btn-ghost flex w-full items-center justify-center rounded-full px-7 py-3.5 font-medium transition-all active:scale-95 sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </MotionLink>
          </div>
        </div>

      </div>
    </section>
  );
}
