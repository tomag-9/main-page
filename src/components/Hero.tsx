"use client";

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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs sm:text-sm font-medium text-cyan-100 mb-6 sm:mb-8">
          <Terminal size={16} />
          <span>Engineer • Product Builder • DevOps</span>
        </div>

        <h1 className="section-title text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6">
          Hi, I&apos;m <span className="text-white">Tomáš Magula</span>.
          <br />
          <span className="gradient-text">I craft reliable digital systems.</span>
        </h1>

        <p className="muted-copy text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          From backend architecture to production pipelines, I build products that stay fast,
          maintainable, and pleasant to use long after launch.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
          <Link
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="btn-primary w-full sm:w-auto px-8 py-4 active:scale-95 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
          >
            Explore Projects
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#contact"
            className="btn-ghost w-full sm:w-auto px-8 py-4 active:scale-95 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 select-none pointer-events-none">
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
