"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type CursorPos = {
  x: number;
  y: number;
};

type CursorMotion = {
  speed: number;
  angle: number;
};

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [pos, setPos] = useState<CursorPos>({ x: -100, y: -100 });
  const [motionState, setMotionState] = useState<CursorMotion>({ speed: 0, angle: 0 });
  const lastMouseRef = useRef<{ x: number; y: number; t: number } | null>(null);
  const latestMouseRef = useRef<{ x: number; y: number; t: number } | null>(null);
  const rafRef = useRef<number | null>(null);
  const idleRef = useRef<number | null>(null);
  const enableTimeoutRef = useRef<number | null>(null);

  const trailSizes = [10, 8, 6, 4, 3];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const requestIdle = (
      globalThis as typeof globalThis & {
        requestIdleCallback?: (cb: IdleRequestCallback, opts?: IdleRequestOptions) => number;
      }
    ).requestIdleCallback;
    const cancelIdle = (
      globalThis as typeof globalThis & {
        cancelIdleCallback?: (id: number) => void;
      }
    ).cancelIdleCallback;

    const clearPendingEnable = () => {
      if (idleRef.current !== null && cancelIdle) {
        cancelIdle(idleRef.current);
      }
      idleRef.current = null;

      if (enableTimeoutRef.current !== null) {
        window.clearTimeout(enableTimeoutRef.current);
      }
      enableTimeoutRef.current = null;
    };

    const updateEnabled = () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const shouldEnable = mediaQuery.matches && !reduceMotion;

      clearPendingEnable();

      if (!shouldEnable) {
        setEnabled(false);
        return;
      }

      if (requestIdle) {
        idleRef.current = requestIdle(() => {
          setEnabled(true);
          idleRef.current = null;
        }, { timeout: 1200 });
        return;
      }

      enableTimeoutRef.current = window.setTimeout(() => {
        setEnabled(true);
        enableTimeoutRef.current = null;
      }, 500);
    };

    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);

    return () => {
      clearPendingEnable();
      mediaQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("custom-cursor-enabled");
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    const onMouseMove = (event: MouseEvent) => {
      latestMouseRef.current = { x: event.clientX, y: event.clientY, t: performance.now() };

      if (rafRef.current !== null) {
        setVisible(true);
        return;
      }

      rafRef.current = requestAnimationFrame(() => {
        const latest = latestMouseRef.current;
        const last = lastMouseRef.current;

        if (!latest) {
          rafRef.current = null;
          return;
        }

        if (last) {
          const dx = latest.x - last.x;
          const dy = latest.y - last.y;
          const dt = Math.max(latest.t - last.t, 1);
          const distance = Math.hypot(dx, dy);
          const speed = Math.min((distance / dt) * 22, 3.2);
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);
          setMotionState({ speed, angle });
        }

        lastMouseRef.current = latest;
        setPos({ x: latest.x, y: latest.y });
        rafRef.current = null;
      });

      setVisible(true);
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseDown = () => setPressed(true);
    const onMouseUp = () => setPressed(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseout", onMouseLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      lastMouseRef.current = null;
      latestMouseRef.current = null;
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[230] h-2 w-18 rounded-full bg-gradient-to-r from-cyan-300/0 via-cyan-300/45 to-orange-300/0 blur-[2px]"
        animate={{
          x: pos.x - 36,
          y: pos.y - 4,
          rotate: motionState.angle,
          opacity: visible ? 0.45 : 0,
          scaleX: 0.7 + motionState.speed * 0.75,
          scaleY: pressed ? 0.9 : 1,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 26, mass: 0.6 }}
      />

      {trailSizes.map((size, index) => (
        <motion.div
          key={`trail-${size}`}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[229] rounded-full bg-cyan-200/75"
          style={{ width: size, height: size }}
          animate={{
            x: pos.x - size / 2,
            y: pos.y - size / 2,
            opacity: visible ? Math.max(0.34 - index * 0.06, 0.06) : 0,
            scale: pressed ? 0.82 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 120 - index * 10,
            damping: 24,
            mass: 0.6 + index * 0.18,
          }}
        />
      ))}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[231] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(68,217,230,0.8)]"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 35, mass: 0.2 }}
      />
    </>
  );
}
