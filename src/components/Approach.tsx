"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

type Props = {
  active: number;
  onSelect: (step: number) => void;
  onInteract: (interacting: boolean) => void;
};

export default function Approach({ active, onSelect, onInteract }: Props) {
  const { t } = useLocale();
  const reduceMotion = useReducedMotion();

  return (
    <section id="approach" className="approach-details scroll-mt-28 pb-20 lg:pb-32" aria-labelledby="approach-heading">
      <div className="approach-content">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-9"
      >
        <p className="mb-4 text-sm font-medium text-amber-200">{t.approach.readMore}</p>
        <h2 id="approach-heading" className="section-title text-3xl font-semibold leading-tight sm:text-4xl">{t.approach.heading}</h2>
        <p className="muted-copy mt-5 text-base leading-relaxed">{t.approach.subtext}</p>
      </motion.div>
      <div onMouseEnter={() => onInteract(true)} onMouseLeave={(event) => { if (!event.currentTarget.contains(document.activeElement)) onInteract(false); }} onFocus={() => onInteract(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) onInteract(false); }}>
        {t.hero.iteration.steps.map((step, index) => (
          <motion.article
            key={index}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="approach-detail relative py-5 pl-6"
            data-active={active === index}
            onMouseEnter={() => onSelect(index)}
          >
            <h3><button type="button" onClick={() => onSelect(index)} onFocus={() => onSelect(index)} aria-pressed={active === index} className="group flex items-baseline gap-3 rounded-sm text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300">
              <span className="font-mono text-xs text-amber-200/70">0{index + 1}</span>
              <span className="text-lg font-semibold text-zinc-100 transition-colors group-hover:text-amber-200">{step.title}</span>
            </button></h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">{step.detail}</p>
          </motion.article>
        ))}
      </div>
      <p className="mt-7 pl-6 text-sm text-amber-200">{t.hero.iteration.feedback}</p>
      </div>
    </section>
  );
}
