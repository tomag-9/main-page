"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useLocale } from "@/lib/i18n";
import {
  ArrowSquareOut,
  Brain,
  CalendarBlank,
  CaretLeft,
  CaretRight,
  Crosshair,
  GithubLogo,
  Plant,
  X,
} from "@phosphor-icons/react";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiDocker, SiNestjs, SiReact, SiMqtt, SiRubyonrails, SiRedmine, SiRuby, SiSocketdotio, SiDjango, SiVite, SiRedis, SiCelery, SiGithubactions, SiPrometheus, SiGrafana, SiSentry } from "react-icons/si";

const techIcons: Record<string, React.ReactNode> = {
  "Next.js": <SiNextdotjs size={18} />,
  "TypeScript": <SiTypescript size={18} />,
  "TailwindCSS": <SiTailwindcss size={18} />,
  "PostgreSQL": <SiPostgresql size={18} />,
  "Docker": <SiDocker size={18} />,
  "NestJS": <SiNestjs size={18} />,
  "React": <SiReact size={18} />,
  "MQTT": <SiMqtt size={18} />,
  "Django": <SiDjango size={18} />,
  "Vite": <SiVite size={18} />,
  "Redis": <SiRedis size={18} />,
  "Celery": <SiCelery size={18} />,
  "Swarm": <SiDocker size={18} />,
  "Traefik": <Image src="/traefic-logo.webp" alt="Traefik" width={18} height={18} className="rounded-sm" />,
  "Prometheus": <SiPrometheus size={18} />,
  "Grafana": <SiGrafana size={18} />,
  "Sentry": <SiSentry size={18} />,
  "GitHub Actions": <SiGithubactions size={18} />,
  "Ruby on Rails": <SiRubyonrails size={18} />,
  "Ruby": <SiRuby size={18} />,
  "Redmine": <SiRedmine size={18} />,
  "Socket.io": <SiSocketdotio size={18} />,
};

type ProjectId = "zdravy-projekt" | "e-plant" | "eventer" | "quizwizz";

type Project = {
  id: ProjectId;
  title: string;
  tech: string[];
  github: string | null;
  live: string | null;
  thesis: string | null;
  icon: React.ReactNode;
  color: string;
  borderHover: string;
  images: string[];
  ongoing: boolean;
};

const projects: Project[] = [
  {
    id: "zdravy-projekt",
    title: "zdravy-projekt",
    tech: ["Django", "Swarm", "Redis", "Celery", "GitHub Actions", "Traefik", "Prometheus", "Grafana", "Sentry"],
    github: null,
    live: null,
    thesis: null,
    icon: <Crosshair size={48} weight="regular" className="text-amber-200/45 transition-all duration-500 group-hover:scale-110 group-hover:text-amber-200" />,
    color: "from-amber-400/18 to-zinc-900/70",
    borderHover: "hover:border-amber-300/45 hover:shadow-[0_24px_70px_rgba(245,154,61,0.1)]",
    images: [
      "/projects/zdravy-projekt/dashboard.png",
      "/projects/zdravy-projekt/order-desktop.png",
      "/projects/zdravy-projekt/login-desktop.png",
      "/projects/zdravy-projekt/order-mobile.png",
    ],
    ongoing: false,
  },
  {
    id: "e-plant",
    title: "e-plant",
    tech: ["Django", "React", "GitHub Actions", "Redis", "Celery"],
    github: null,
    live: "https://dynamicabutment.ebringer.sk/products",
    thesis: null,
    icon: <Plant size={48} weight="regular" className="text-amber-200/45 transition-all duration-500 group-hover:scale-110 group-hover:text-amber-200" />,
    color: "from-amber-400/16 to-zinc-900/70",
    borderHover: "hover:border-amber-300/45 hover:shadow-[0_24px_70px_rgba(245,154,61,0.1)]",
    images: [
      "/projects/e-plant/listing.png",
      "/projects/e-plant/multi-unit-detail.png",
      "/projects/e-plant/mobile-product.png",
      "/projects/e-plant/mobile-filtered.png",
    ],
    ongoing: false,
  },
  {
    id: "eventer",
    title: "Eventer",
    tech: ["Ruby", "Ruby on Rails", "Docker", "PostgreSQL", "Redmine"],
    github: "https://github.com/magi-9/eventer",
    live: null,
    thesis: "https://github.com/magi-9/eventer/blob/main/docs/thesis.pdf",
    icon: <CalendarBlank size={48} weight="regular" className="text-amber-200/45 transition-all duration-500 group-hover:scale-110 group-hover:text-amber-200" />,
    color: "from-amber-400/14 to-zinc-900/70",
    borderHover: "hover:border-amber-300/45 hover:shadow-[0_24px_70px_rgba(245,154,61,0.1)]",
    images: [
      "/projects/eventer/demo_user.png",
      "/projects/eventer/demo_issue.png",
      "/projects/eventer/demo_log.png",
    ],
    ongoing: false,
  },
  {
    id: "quizwizz",
    title: "QuizWizz",
    tech: ["React", "Django", "Vite"],
    github: "https://github.com/BeloIV/QuizWizz",
    live: "https://quiz.tomag.xyz/",
    thesis: null,
    icon: <Brain size={48} weight="regular" className="text-amber-200/45 transition-all duration-500 group-hover:scale-110 group-hover:text-amber-200" />,
    color: "from-amber-400/14 to-zinc-900/70",
    borderHover: "hover:border-amber-300/45 hover:shadow-[0_24px_70px_rgba(245,154,61,0.1)]",
    images: [
      "/projects/quizwizz/image.png",
      "/projects/quizwizz/image copy.png",
      "/projects/quizwizz/image copy 2.png",
      "/projects/quizwizz/image copy 3.png",
    ],
    ongoing: false,
  },
];

function ImageCarousel({ images, isAutoPlay }: { images: string[]; isAutoPlay: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetTick, setResetTick] = useState(0);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length, isAutoPlay, resetTick]);

  return (
    <div className="group relative h-[44vh] max-h-[460px] min-h-[300px] w-full overflow-hidden rounded-2xl border border-zinc-100/10 sm:h-72 md:h-80">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          {images[currentIndex].startsWith("/") ? (
            <>
              <Image
                src={images[currentIndex]}
                alt={`Project Preview ${currentIndex + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-950/35" />
            </>
          ) : (
            <div className={`absolute inset-0 ${images[currentIndex]} flex items-center justify-center`}>
              <span className="rounded-full bg-zinc-950/45 px-4 py-2 font-mono text-sm text-zinc-200/70 shadow-inner backdrop-blur-sm">
                Project Preview {currentIndex + 1}
              </span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            setResetTick((prev) => prev + 1);
          }}
          className="rounded-full bg-zinc-950/70 p-1 text-white transition-colors hover:bg-zinc-900"
        >
          <CaretLeft size={20} weight="regular" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setResetTick((prev) => prev + 1);
          }}
          className="rounded-full bg-zinc-950/70 p-1 text-white transition-colors hover:bg-zinc-900"
        >
          <CaretRight size={20} weight="regular" />
        </button>
      </div>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentIndex ? "w-3 bg-amber-300" : "w-1.5 bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLocale();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const selectedProjectText = selectedProject ? t.projects.items[selectedProject.id] : null;

  useEffect(() => {
    let active = true;

    queueMicrotask(() => {
      if (active) {
        setIsMounted(true);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative z-10 scroll-mt-28 border-t border-zinc-100/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-4 text-3xl font-bold md:text-5xl">{t.projects.heading}</h2>
          <p className="muted-copy max-w-2xl mx-auto px-4 sm:px-0">{t.projects.subtext}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const projectText = t.projects.items[project.id];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className={`group glass-panel flex cursor-pointer flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 ${project.borderHover} ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
              <div className={`relative flex h-48 w-full items-center justify-center overflow-hidden bg-gradient-to-br ${project.color} sm:h-56 ${index === 0 ? "lg:h-72" : ""}`}>
                {project.images[0]?.startsWith("/") ? (
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  project.icon
                )}
                <div className="absolute inset-0 bg-zinc-950/45 transition-colors duration-500 group-hover:bg-zinc-950/20" />
                {project.ongoing && (
                  <div className="absolute right-4 top-4 rounded-full border border-amber-300/30 bg-zinc-950/62 px-3 py-1 text-xs font-semibold text-amber-200 backdrop-blur">
                    {t.projects.inProgress}
                  </div>
                )}
                <div className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-zinc-950/62 px-3 py-1 text-xs font-medium text-white/80 opacity-0 backdrop-blur transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {t.projects.clickToExpand}
                </div>
              </div>

              <div className="relative z-10 flex flex-1 flex-col bg-zinc-950/35 p-6 backdrop-blur-xl sm:p-8">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100 transition-colors group-hover:text-white">{project.title}</h3>
                    <span className="font-mono text-xs text-zinc-400 sm:text-sm">{projectText.type}</span>
                  </div>
                </div>

                <p className="mb-8 mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-300/75 sm:mb-6 sm:text-base">
                  {projectText.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-zinc-100/10 pt-4 sm:gap-2.5">
                  {project.tech.map((tech, i) => (
                    <div key={i} title={tech} className="flex items-center justify-center rounded-lg border border-zinc-100/10 bg-zinc-900/90 p-1.5 text-zinc-300 opacity-75 transition-colors hover:border-amber-300/40 hover:bg-zinc-800 hover:opacity-100">
                      {techIcons[tech] || <span className="text-xs">{tech}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>

      {isMounted && createPortal(
        <AnimatePresence>
          {selectedProject && selectedProjectText && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-5 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 cursor-pointer bg-zinc-950/88 backdrop-blur-md"
              />

              <motion.div
                layoutId={`project-${selectedProject.id}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="pointer-events-auto relative z-20 flex max-h-[calc(100vh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-100/15 bg-zinc-950 shadow-2xl sm:max-h-[calc(100vh-2.5rem)] md:max-h-[calc(100vh-4rem)]"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="pointer-events-auto absolute right-4 top-4 z-50 rounded-full bg-zinc-950/70 p-2 text-zinc-300 transition-colors hover:text-amber-200"
                >
                  <X size={20} weight="regular" />
                </button>

                <div className="no-scrollbar relative z-30 flex min-h-0 flex-1 flex-col gap-8 overflow-y-auto overscroll-contain bg-zinc-950 p-6 pt-8 md:p-10 md:pt-10">
                  <div>
                    <h3 className="mb-2 text-3xl font-extrabold text-white md:text-4xl">{selectedProject.title}</h3>
                    <span className="font-mono text-sm text-amber-100/85 md:text-base">{selectedProjectText.type}</span>
                  </div>

                  <ImageCarousel key={selectedProject.id} images={selectedProject.images} isAutoPlay={true} />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                      <h4 className="border-b border-zinc-800 pb-2 text-xl font-bold text-white">{t.projects.overview}</h4>
                      <p className="text-zinc-300 leading-relaxed text-sm md:text-base">{selectedProjectText.fullDescription}</p>
                    </div>

                    <div className="space-y-6">
                      {(selectedProject.github || selectedProject.thesis || selectedProject.live) && (
                      <div>
                        <h4 className="text-xl font-bold text-white border-b border-zinc-800 pb-2 mb-4">{t.projects.links}</h4>
                        <div className="flex flex-col gap-3">
                          {selectedProject.github && (
                          <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white">
                            <div className="rounded-lg bg-zinc-900 p-2 transition-colors group-hover:bg-zinc-800 group-hover:text-amber-200">
                              <GithubLogo size={18} weight="regular" />
                            </div>
                            <span className="font-medium text-sm">{t.projects.sourceCode}</span>
                          </a>
                          )}
                          {selectedProject.thesis && (
                            <a href={selectedProject.thesis} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white">
                              <div className="rounded-lg bg-zinc-900 p-2 transition-colors group-hover:bg-zinc-800 group-hover:text-amber-200">
                                <ArrowSquareOut size={18} weight="regular" />
                              </div>
                              <span className="font-medium text-sm">{t.projects.thesis}</span>
                            </a>
                          )}
                          {selectedProject.live && (
                            <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white">
                              <div className="rounded-lg bg-zinc-900 p-2 transition-colors group-hover:bg-zinc-800 group-hover:text-amber-200">
                                <ArrowSquareOut size={18} weight="regular" />
                              </div>
                              <span className="font-medium text-sm">{t.projects.liveApplication}</span>
                            </a>
                          )}
                        </div>
                      </div>
                      )}

                      <div>
                        <h4 className="text-xl font-bold text-white border-b border-zinc-800 pb-2 mb-4">{t.projects.techStackLabel}</h4>
                        <div className="flex flex-wrap gap-2.5">
                          {selectedProject.tech.map((tech, i) => (
                            <div key={i} title={tech} className="rounded-lg border border-zinc-100/10 bg-zinc-900 p-2 text-zinc-300 opacity-75 transition-all hover:border-amber-300/40 hover:bg-zinc-800 hover:opacity-100">
                              {techIcons[tech] || <span className="text-xs font-medium">{tech}</span>}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
