"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { useLocale } from "@/lib/i18n";
import Link from "next/link";
import {
  SiDjango,
  SiDocker,
  SiGithubactions,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const primaryStack = [
  { name: "Django", icon: <SiDjango /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Swarm", icon: <SiDocker /> },
  { name: "Actions", icon: <SiGithubactions /> },
];

export default function Hero() {
  const { t } = useLocale();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-4 pb-14 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="max-w-3xl">
          <h1 className="section-title mb-5 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
            <span className="text-amber-200">Tomáš Magula.</span> {t.hero.headlineRest}
          </h1>

          <p className="muted-copy mb-8 max-w-2xl text-base leading-relaxed sm:text-lg">
            {t.hero.subtext}
          </p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Link
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="btn-primary flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-all active:scale-95 sm:w-auto"
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={18} weight="regular" />
          </Link>
          <Link
            href="#contact"
            className="btn-ghost flex w-full items-center justify-center rounded-full px-7 py-3.5 font-medium transition-all active:scale-95 sm:w-auto"
          >
            {t.hero.ctaSecondary}
          </Link>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-5 sm:p-6 lg:ml-auto lg:w-full">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-zinc-100/10 pb-4">
            <h2 className="text-base font-semibold text-zinc-50">{t.hero.stackLabel}</h2>
            <span className="font-mono text-xs text-amber-200">{t.hero.stackCaption}</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {primaryStack.map((item) => (
              <div
                key={item.name}
                className="flex min-h-24 flex-col justify-between rounded-lg border border-zinc-100/10 bg-zinc-950/62 p-4 text-zinc-200 transition-colors hover:border-amber-300/45 hover:bg-zinc-900/80"
              >
                <span className="text-2xl text-amber-300">{item.icon}</span>
                <span className="mt-4 text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
