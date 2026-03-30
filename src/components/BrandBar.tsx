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
      className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/70 bg-zinc-950/85 backdrop-blur-xl"
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

        <div className="hidden md:flex items-center gap-5 text-sm text-zinc-300">
          <Link href="#tech-stack" className="hover:text-white transition-colors">Tech</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#experience" className="hover:text-white transition-colors">Journey</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </motion.header>
  );
}
