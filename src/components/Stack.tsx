"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
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

export default function Stack() {
  const { t } = useLocale();

  return (
    <section id="stack" className="relative z-10 w-full border-t border-zinc-100/10 px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
      >
        <div>
          <h2 className="section-title text-3xl font-bold md:text-4xl">{t.stack.heading}</h2>
          <p className="muted-copy mt-4 max-w-md">{t.stack.subtext}</p>
        </div>

        <div className="glass-panel rounded-2xl p-5 sm:p-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {primaryStack.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex min-h-24 flex-col justify-between rounded-lg border border-zinc-100/10 bg-zinc-950/62 p-4 text-zinc-200 transition-colors hover:border-amber-300/45 hover:bg-zinc-900/80"
              >
                <span className="text-2xl text-amber-300">{item.icon}</span>
                <span className="mt-4 text-sm font-medium">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
