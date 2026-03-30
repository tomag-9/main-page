"use client";

import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#tech-stack", label: "Tech", id: "tech-stack" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Journey", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function BrandBar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/70 bg-zinc-950/85 backdrop-blur-xl"
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-400 to-blue-500 origin-left"
        style={{ scaleX }}
      />

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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`relative py-1 transition-colors duration-200 ${
                activeSection === link.id ? "text-white" : "hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-emerald-400 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mobileOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden border-t border-zinc-800/70 bg-zinc-950/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? "text-emerald-400"
                        : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
