"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BrandBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/10 bg-slate-950/35 backdrop-blur-xl"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-6">
        <Link href="#" className="flex items-center">
          <Image
            src="/tomag-logo-full.svg"
            alt="TOMAG Logo"
            width={280}
            height={60}
            loading="eager"
            className="h-14 sm:h-16 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-5 text-sm text-slate-200/85">
          <Link href="#tech-stack" className="transition-colors hover:text-cyan-200">Tech</Link>
          <Link href="#projects" className="transition-colors hover:text-cyan-200">Projects</Link>
          <Link href="#experience" className="transition-colors hover:text-cyan-200">Journey</Link>
          <Link href="#contact" className="transition-colors hover:text-cyan-200">Contact</Link>
        </div>
      </div>
    </motion.header>
  );
}
