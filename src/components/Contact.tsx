"use client";

import { motion } from "framer-motion";
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { useLocale } from "@/lib/i18n";

const contactLinks = [
  {
    href: "mailto:magula@tomag.xyz",
    label: "magula@tomag.xyz",
    icon: <EnvelopeSimple size={20} weight="regular" />,
  },
  {
    href: "https://www.linkedin.com/in/tom%C3%A1%C5%A1-magula-88035120b/",
    label: "LinkedIn",
    icon: <LinkedinLogo size={20} weight="regular" />,
  },
  {
    href: "https://github.com/magi-9",
    label: "GitHub Projects",
    icon: <GithubLogo size={20} weight="regular" />,
  },
];

export default function Contact() {
  const { t } = useLocale();

  return (
    <section id="contact" className="relative z-10 border-t border-zinc-100/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="section-title mb-4 text-3xl font-bold md:text-5xl">{t.contact.heading}</h2>
          <p className="muted-copy max-w-2xl mx-auto">{t.contact.subtext}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
        >
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-zinc-100/10 bg-zinc-900/58 px-5 py-3.5 text-zinc-100/85 transition-colors hover:border-amber-300/50 hover:bg-zinc-900 hover:text-white sm:w-auto"
            >
              <span className="text-amber-300">{item.icon}</span>
              <span className="break-all text-sm sm:text-base">{item.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
