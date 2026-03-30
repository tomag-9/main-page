"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    href: "mailto:magula@tomag.xyz",
    label: "magula@tomag.xyz",
    icon: <Mail size={20} />,
  },
  {
    href: "https://linkedin.com/in/tomas-magula-88035120b/",
    label: "LinkedIn",
    icon: <Linkedin size={20} />,
  },
  {
    href: "https://github.com/magi-9",
    label: "GitHub Projects",
    icon: <Github size={20} />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-800/50">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let&apos;s connect</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Open to software engineering opportunities in Bratislava and remote collaborations.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass-panel rounded-2xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 rounded-xl bg-zinc-900/60 border border-zinc-800/70 px-4 py-4 text-zinc-200 hover:text-white hover:border-emerald-500/40 transition-colors"
              >
                <span className="text-emerald-400">{item.icon}</span>
                <span className="text-sm sm:text-base break-all">{item.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
