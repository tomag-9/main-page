"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-30 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-[26%] left-[52%] -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[640px] h-[420px] sm:h-[640px] bg-cyan-300/15 rounded-full blur-[90px] sm:blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute top-[48%] left-[35%] w-[280px] h-[280px] bg-orange-300/20 rounded-full blur-[95px] -z-10 pointer-events-none" />
      
      <div className="w-full max-w-[1400px] mx-auto text-center z-10 px-4 sm:px-8 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs sm:text-sm font-medium text-cyan-100 mb-6 sm:mb-8"
        >
          <Terminal size={16} />
          <span>Engineer • Product Builder • DevOps</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-title text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6"
        >
          Hi, I&apos;m <span className="text-white">Tomáš Magula</span>.
          <br />
          <span className="gradient-text">I craft reliable digital systems.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="muted-copy text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
        >
          From backend architecture to production pipelines, I build products that stay fast,
          maintainable, and pleasant to use long after launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0"
        >
          <Link
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="btn-primary w-full sm:w-auto px-8 py-4 active:scale-95 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
          >
            Explore Projects
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </Link>
          <Link
            href="#contact"
            className="btn-ghost w-full sm:w-auto px-8 py-4 active:scale-95 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
          >
            Contact
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 select-none pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
