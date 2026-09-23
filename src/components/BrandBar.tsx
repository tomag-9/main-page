"use client";

import { motion, AnimatePresence, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { type Locale, useLocale } from "@/lib/i18n";

const navLinks = [
  { href: "#approach", labelKey: "approach", id: "approach" },
  { href: "#projects", labelKey: "projects", id: "projects" },
  { href: "#stack", labelKey: "stack", id: "stack" },
  { href: "#experience", labelKey: "experience", id: "experience" },
  { href: "#contact", labelKey: "contact", id: "contact" },
] as const;

function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();
  const locales: Locale[] = ["en", "sk"];

  return (
    <div
      className={`inline-flex rounded-full border border-zinc-100/10 bg-zinc-950/58 p-0.5 ${className}`}
      aria-label={t.common.switchLanguage}
      role="group"
    >
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          aria-pressed={locale === item}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
            locale === item ? "bg-amber-300 text-zinc-950" : "text-zinc-400 hover:text-amber-200"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default function BrandBar() {
  const { t } = useLocale();
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });
  const activeSectionRef = useRef("");

  const updateActiveSection = useCallback(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    const position = scrollY.get();
    const activationLine = Math.max(96, window.innerHeight * 0.35);
    const atBottom = position > 4 && position + window.innerHeight >= document.documentElement.scrollHeight - 4;
    let nextSection = "";

    // Recompute from every section so jumps and reverse scrolling cannot leave stale state.
    if (atBottom) {
      nextSection = sections.at(-1)?.id ?? "";
    } else if (position > 4) {
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) nextSection = section.id;
      }
    }

    if (nextSection !== activeSectionRef.current) {
      activeSectionRef.current = nextSection;
      setActiveSection(nextSection);
    }
  }, [scrollY]);

  useMotionValueEvent(scrollY, "change", updateActiveSection);

  useEffect(() => {
    const observer = new ResizeObserver(updateActiveSection);
    observer.observe(document.body);
    window.addEventListener("resize", updateActiveSection);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [updateActiveSection]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-100/10 bg-zinc-950/72 backdrop-blur-xl"
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-amber-400"
        style={{ scaleX }}
      />

      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="#" className="text-base font-semibold tracking-tight text-zinc-50 sm:text-lg">
          Tomáš<span className="text-amber-300">.</span>Magula
        </Link>

        <div className="hidden items-center gap-5 text-sm text-zinc-300 md:flex lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              aria-current={activeSection === link.id ? "location" : undefined}
              className={`relative py-1 transition-colors duration-200 ${
                activeSection === link.id ? "text-amber-200" : "hover:text-amber-200"
              }`}
            >
              {t.nav[link.labelKey]}
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-amber-400"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </Link>
          ))}
          <LanguageToggle />
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-full border border-zinc-100/10 p-2 text-zinc-300 transition-colors hover:border-amber-300/50 hover:text-amber-200 md:hidden"
          aria-label={t.common.toggleMenu}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mobileOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {mobileOpen ? <X size={22} weight="regular" /> : <List size={22} weight="regular" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-zinc-100/10 bg-zinc-950/96 backdrop-blur-xl md:hidden"
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
                    aria-current={activeSection === link.id ? "location" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? "text-amber-200"
                        : "text-zinc-300 hover:text-amber-200"
                    }`}
                  >
                    {t.nav[link.labelKey]}
                  </Link>
                </motion.div>
              ))}
              <LanguageToggle className="self-start" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
