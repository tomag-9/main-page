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
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid -z-10 pointer-events-none [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,black,transparent)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-emerald-500/10 rounded-full blur-[80px] sm:blur-[120px] -z-10 pointer-events-none" />
      
      <div className="w-full max-w-[1400px] mx-auto text-center z-10 px-4 sm:px-8 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs sm:text-sm font-medium text-emerald-400 mb-6 sm:mb-8"
        >
          <Terminal size={16} />
          <span>Dev &amp; Ops</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6"
        >
          Hi, I&apos;m <span className="text-white">Tomáš Magula</span>.
          <br />
          <span className="gradient-text">Fullstack & DevOps</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
        >
          I build practical fullstack software and enjoy designing clean delivery pipelines.
          CI/CD, DevOps workflows, and reliable deployments are a core part of how I work.
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
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
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
            className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-zinc-800/60 active:scale-95 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2"
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
