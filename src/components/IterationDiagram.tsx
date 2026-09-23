"use client";

import { ArrowDown, ArrowRight, ArrowsClockwise, ChatsCircle, Code, Pause, PencilRuler, Play } from "@phosphor-icons/react";
import { motion, type MotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import Link from "next/link";

const icons = [PencilRuler, Code, ChatsCircle];

type Props = {
  progress: MotionValue<number>;
  active: number;
  onSelect: (step: number) => void;
  playing: boolean;
  paused: boolean;
  onTogglePause: () => void;
  onInteract: (interacting: boolean) => void;
};

export default function IterationDiagram({ progress, active, onSelect, playing, paused, onTogglePause, onInteract }: Props) {
  const { t } = useLocale();
  const copy = t.hero.iteration;
  const reduceMotion = useReducedMotion();
  const scale = useTransform(progress, [0, 0.7], [0.78, 1]);
  const detailOpacity = useTransform(progress, [0.12, 0.55], [0, 1]);
  const detailY = useTransform(progress, [0.12, 0.55], [8, 0]);
  const labelY = useTransform(progress, [0.12, 0.55], [10, 0]);

  return (
    <motion.div className="iteration-panel rounded-[28px] p-5 sm:p-7" style={{ scale: reduceMotion ? 1 : scale }}>
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-xs font-medium tracking-[0.12em] uppercase text-amber-200">{copy.eyebrow}</p>
        {!reduceMotion && (
          <button type="button" onClick={onTogglePause} aria-label={paused ? copy.play : copy.pause} className="iteration-pause flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-amber-200/40 hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300">
            {paused ? <Play size={14} weight="fill" /> : <Pause size={14} weight="fill" />}
          </button>
        )}
      </div>
      <figure aria-label={copy.accessibleLabel}>
        <div className="relative pl-8 sm:pl-10" onMouseEnter={() => onInteract(true)} onMouseLeave={(event) => { if (!event.currentTarget.contains(document.activeElement)) onInteract(false); }} onFocus={() => onInteract(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) onInteract(false); }}>
          <svg className="absolute left-0 top-0 h-full w-8 sm:w-10" viewBox="0 0 40 320" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <path d="M40 276 H24 Q8 276 8 260 V60 Q8 44 24 44 H36" stroke="#fcd34d" strokeOpacity="0.28" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            {active === 2 && (
              <motion.path key={playing ? "flowing" : "still"} d="M40 276 H24 Q8 276 8 260 V60 Q8 44 24 44 H36" stroke="#fcd34d" strokeWidth="2" vectorEffect="non-scaling-stroke" initial={{ pathLength: playing ? 0 : 1 }} animate={{ pathLength: 1 }} transition={{ duration: playing ? 2.4 : 0, ease: "easeInOut" }} />
            )}
          </svg>
          <ArrowRight size={14} className="absolute left-[22px] top-[37px] text-amber-200 sm:left-[30px]" aria-hidden="true" />
          <ol className="space-y-7">
            {copy.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <li key={index} className="relative">
                  <motion.button
                    type="button"
                    className="iteration-step relative flex h-[88px] w-full items-center gap-3 rounded-2xl border px-3 text-left sm:gap-4 sm:px-4"
                    data-active={active === index}
                    aria-pressed={active === index}
                    aria-label={step.title}
                    onMouseEnter={() => onSelect(index)}
                    onFocus={() => onSelect(index)}
                    onClick={() => onSelect(index)}
                    animate={{ x: !reduceMotion && active === index ? 4 : 0 }}
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  >
                    <span className="iteration-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border" aria-hidden="true"><Icon size={22} /></span>
                    <span className="min-w-0 flex-1">
                      <motion.span className="block text-base font-semibold text-zinc-100" style={{ y: reduceMotion ? 0 : labelY }}>{step.label}</motion.span>
                      <motion.span className="mt-1 block text-xs leading-relaxed text-zinc-400" style={{ opacity: reduceMotion ? 1 : detailOpacity, y: reduceMotion ? 0 : detailY }}>{step.description}</motion.span>
                    </span>
                    <span className="absolute right-3 top-2 font-mono text-[10px] text-zinc-400" aria-hidden="true">0{index + 1}</span>
                  </motion.button>
                  {index < 2 && (
                    <motion.span className="absolute -bottom-7 left-1/2 flex h-7 items-center" aria-hidden="true" animate={{ y: playing && active === index ? [0, 4, 0] : 0, color: active === index ? "#fcd34d" : "#71717a" }} transition={{ y: { duration: 0.8, repeat: playing && active === index ? Infinity : 0 }, color: { duration: 0.3 } }}><ArrowDown size={16} /></motion.span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
        <motion.figcaption className="ml-8 mt-5 flex items-start gap-2 text-xs leading-relaxed text-amber-200 sm:ml-10" style={{ opacity: reduceMotion ? 1 : detailOpacity, y: reduceMotion ? 0 : detailY }}>
          <ArrowsClockwise size={16} className="shrink-0" aria-hidden="true" />{copy.feedback}
        </motion.figcaption>
      </figure>
      <Link href="#approach" className="mt-6 inline-flex items-center gap-2 rounded-sm text-xs font-medium text-zinc-400 transition-colors hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300">{t.approach.readMore}<ArrowDown size={13} aria-hidden="true" /></Link>
    </motion.div>
  );
}
