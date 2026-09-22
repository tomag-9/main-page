"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, GraduationCap } from "@phosphor-icons/react";
import { useLocale } from "@/lib/i18n";

const experiences = [
  {
    id: "freelance",
    period: "2023 - Present",
    icon: <Briefcase size={20} weight="regular" className="text-zinc-400 transition-colors group-hover:text-amber-300" />,
  },
  {
    id: "university",
    period: "Sep 2022 - Present",
    icon: <GraduationCap size={20} weight="regular" className="text-zinc-400 transition-colors group-hover:text-amber-300" />,
  },
  {
    id: "tvjoj",
    period: "Sep 2022 - Jan 2026",
    icon: <Code size={20} weight="regular" className="text-zinc-400 transition-colors group-hover:text-amber-300" />,
  },
] as const;

export default function Experience() {
  const { t } = useLocale();

  return (
    <section id="experience" className="relative z-10 border-t border-zinc-100/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-4 text-3xl font-bold md:text-5xl">{t.experience.heading}</h2>
          <p className="muted-copy max-w-2xl mx-auto">{t.experience.subtext}</p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => {
            const expText = t.experience.items[exp.id];

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-8 md:pl-0 group"
              >
              <div className="md:flex items-start md:space-x-8">
                <div className="hidden md:flex flex-col items-center h-full absolute left-[150px] top-0 bottom-0">
                  <div className="absolute z-0 h-full w-px bg-zinc-800/80 transition-colors duration-500 group-hover:bg-amber-400/50" />
                  <div className="z-10 mt-1.5 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-900 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all group-hover:border-amber-400 group-hover:shadow-[0_0_16px_rgba(245,154,61,0.25)]">
                    <div className="h-2 w-2 rounded-full bg-zinc-600 transition-colors group-hover:bg-amber-400" />
                  </div>
                </div>

                <div className="absolute left-[-6px] top-3 z-10 h-3 w-3 rounded-full border border-zinc-500 bg-zinc-700 shadow-xl transition-all group-hover:border-amber-300 group-hover:bg-amber-400 group-hover:shadow-[0_0_10px_rgba(245,154,61,0.35)] md:hidden" />
                <div className="absolute bottom-[-30px] left-[-1px] top-6 z-0 w-0.5 bg-zinc-800/80 transition-colors group-hover:bg-amber-400/30 md:hidden" />
                
                <div className="relative shrink-0 pb-2 pl-4 pt-1 font-mono text-zinc-500 transition-colors group-hover:text-amber-300 md:w-[150px] md:pb-0 md:pl-0 md:pr-12 md:text-right">
                  {exp.period}
                </div>

                <div className="glass-panel relative z-10 flex-1 rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-amber-300/35 sm:p-8">
                  <h3 className="mb-1 flex items-center gap-3 text-xl font-bold text-white">
                    <div className="rounded-lg bg-zinc-900 p-2 shadow-inner sm:rounded-none sm:bg-transparent sm:p-0 sm:shadow-none">
                      {exp.icon}
                    </div>
                    {expText.role}
                  </h3>
                  <h4 className="text-md mb-1 text-amber-100/85 sm:text-lg">{expText.company}</h4>
                  {"companySecondary" in expText && expText.companySecondary && (
                    <h4 className="text-md mb-4 text-amber-100/85 sm:text-lg">{expText.companySecondary}</h4>
                  )}
                  <p className="text-slate-300/80 leading-relaxed text-sm sm:text-base">
                    {expText.description}
                  </p>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
