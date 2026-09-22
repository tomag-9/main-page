"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { CaretUp } from "@phosphor-icons/react";
import { useLocale } from "@/lib/i18n";

export default function BackToTop() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 380);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 14, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.22 }}
          className="fixed bottom-16 right-4 z-[65] flex h-11 w-11 items-center justify-center rounded-full border border-zinc-100/15 bg-zinc-950/86 text-zinc-100 shadow-lg backdrop-blur transition-colors hover:border-amber-300/50 hover:text-amber-200 sm:bottom-20 sm:right-7"
          aria-label={t.common.goToTop}
        >
          <CaretUp size={18} weight="regular" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
