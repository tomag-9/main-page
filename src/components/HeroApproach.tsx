"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useInView, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Hero from "./Hero";
import Approach from "./Approach";
import IterationDiagram from "./IterationDiagram";

const compactQuery = "(max-width: 1023px)";
function subscribeCompact(onChange: () => void) {
  const media = window.matchMedia(compactQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}
const getCompact = () => window.matchMedia(compactQuery).matches;
const getServerCompact = () => false;

// Preserve the site's dark palette and type. Design / motion / density: 6 / 8 / 3.
export default function HeroApproach() {
  const ref = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const compact = useSyncExternalStore(subscribeCompact, getCompact, getServerCompact);
  const visible = useInView(ref);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const { scrollYProgress: mobileProgress } = useScroll({ target: stageRef, offset: ["start 0.95", "center center"] });
  const responsiveProgress = useTransform(() => compact ? mobileProgress.get() : scrollYProgress.get());
  const progress = useSpring(responsiveProgress, { stiffness: 110, damping: 28 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const playing = visible && pageVisible && !paused && !interacting && !reduceMotion;

  useEffect(() => {
    const container = ref.current;
    const stage = stageRef.current;
    const content = container?.querySelector<HTMLElement>(".approach-content");
    if (!container || !stage || !content) return;

    // End the sticky track with the full-size diagram centered on the actual text.
    // ResizeObserver also handles translated copy, font loading and viewport changes.
    const alignEnd = () => {
      const contentRect = content.getBoundingClientRect();
      const stopBottom = contentRect.top + contentRect.height / 2 + stage.offsetHeight / 2;
      const endGap = Math.max(0, container.getBoundingClientRect().bottom - stopBottom);
      container.style.setProperty("--iteration-end-gap", `${endGap}px`);
    };
    const observer = new ResizeObserver(alignEnd);
    observer.observe(container);
    observer.observe(content);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setActive((step) => (step + 1) % 3), 2400);
    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <div ref={ref} className="hero-approach">
      <Hero />
      <div className="iteration-rail">
        <div ref={stageRef} className="iteration-stage">
        <IterationDiagram
          progress={progress}
          active={active}
          onSelect={setActive}
          playing={playing}
          paused={paused}
          onTogglePause={() => setPaused((value) => !value)}
          onInteract={setInteracting}
        />
        </div>
      </div>
      <Approach active={active} onSelect={setActive} onInteract={setInteracting} />
    </div>
  );
}
