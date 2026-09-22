"use client";

import { Briefcase, Crosshair, EnvelopeSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

const approachIcons = [
  <EnvelopeSimple key="listen" size={24} weight="regular" />,
  <Crosshair key="map" size={24} weight="regular" />,
  <Briefcase key="build" size={24} weight="regular" />,
];

export default function Approach() {
  const { t } = useLocale();

  return (
    <section id="approach" className="relative z-10 w-full border-t border-zinc-100/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-14 text-center md:mb-16"
        >
          <h2 className="section-title mb-4 text-3xl font-bold md:text-5xl">{t.approach.heading}</h2>
          <p className="muted-copy mx-auto max-w-2xl">{t.approach.subtext}</p>
        </motion.div>

        <div className="border-b border-zinc-100/10">
          {t.approach.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col gap-4 border-t border-zinc-100/10 py-7 sm:flex-row sm:gap-6 sm:py-8"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-300/25 bg-amber-300/10 text-amber-200">
                {approachIcons[index]}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-50">{item.title}</h3>
                <p className="muted-copy mt-2 text-sm sm:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
