"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Leaf, Crosshair, Calendar, Brain, X, ChevronLeft, ChevronRight } from "lucide-react";
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

const projects = [
  {
    id: "zdravy-projekt",
    title: "Zdravy-projekt",
    type: "Food Ordering Application",
    description: "A company application for easier food ordering by schools with many daily users.",
    fullDescription:
      "Zdravy-projekt is built for high-volume daily school food ordering. It includes external data API integrations, PWA support, notifications, and operational integrations for scalable day-to-day processing.",
    tech: ["Django", "Swarm", "Redis", "Celery", "GitHub Actions", "Traefik", "Prometheus", "Grafana", "Sentry"],
    github: "https://github.com/magi-9/zdravy-projekt",
    live: null,
    thesis: null,
    icon: <Crosshair size={48} className="text-white/30 group-hover:scale-125 group-hover:text-red-400 transition-all duration-500" />,
    color: "from-red-500/20 to-orange-500/10",
    borderHover: "hover:border-red-500/50 hover:shadow-red-500/10",
    images: ["bg-red-500/20", "bg-orange-500/20", "bg-rose-500/20"],
    ongoing: true,
  },
  {
    id: "e-plant",
    title: "e-plant",
    type: "E-Commerce Application",
    description: "An e-commerce app for selling dental implants and courses.",
    fullDescription:
      "e-plant is an e-commerce platform for dental implants and courses. It includes warehouse workflows, notifications, and integrations with accounting software and shipping companies.",
    tech: ["Django", "React", "GitHub Actions", "Redis", "Celery"],
    github: "https://github.com/magi-9/e-plant",
    live: null,
    thesis: null,
    icon: <Leaf size={48} className="text-white/30 group-hover:scale-125 group-hover:text-green-400 transition-all duration-500" />,
    color: "from-green-500/20 to-emerald-500/10",
    borderHover: "hover:border-green-500/50 hover:shadow-green-500/10",
    images: ["bg-green-500/20", "bg-emerald-500/20", "bg-teal-500/20"],
    ongoing: true,
  },
  {
    id: "eventer",
    title: "Eventer",
    type: "Redmine Plugin",
    description: "Automated task assignment plugin for Redmine based on qualifications and availability.",
    fullDescription:
      "Eventer is an automation-focused Redmine plugin that helps assign tasks to suitable team members. The aim is better project flow, less manual management work, and consistent assignment logic.",
    tech: ["Ruby", "Ruby on Rails", "Docker", "PostgreSQL", "Redmine"],
    github: "https://github.com/magi-9/eventer",
    live: null,
    thesis: "https://github.com/magi-9/eventer/blob/main/docs/thesis.pdf",
    icon: <Calendar size={48} className="text-white/30 group-hover:scale-125 group-hover:text-blue-400 transition-all duration-500" />,
    color: "from-blue-500/20 to-cyan-500/10",
    borderHover: "hover:border-blue-500/50 hover:shadow-blue-500/10",
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
    type: "UI/UX Application",
    description: "A UI/UX-focused interactive quiz platform with instant scoring, real-time competition, and admin controls.",
    fullDescription:
      "QuizWizz is primarily a UI/UX-driven application focused on fast interaction, clear navigation, and polished user flows for quiz sessions, scoring, and administration.",
    tech: ["React", "Django", "Vite"],
    github: "https://github.com/BeloIV/QuizWizz",
    live: "https://quiz.tomag.xyz/",
    thesis: null,
    icon: <Brain size={48} className="text-white/30 group-hover:scale-125 group-hover:text-purple-400 transition-all duration-500" />,
    color: "from-purple-500/20 to-pink-500/10",
    borderHover: "hover:border-purple-500/50 hover:shadow-purple-500/10",
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
    <div className="relative w-full h-[44vh] min-h-[300px] max-h-[460px] sm:h-72 md:h-80 rounded-xl overflow-hidden group">
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
              <div className="absolute inset-0 bg-black/45" />
            </>
          ) : (
            <div className={`absolute inset-0 ${images[currentIndex]} flex items-center justify-center`}>
              <span className="text-white/50 font-mono tracking-widest text-sm bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm shadow-inner">
                Project Preview {currentIndex + 1}
              </span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            setResetTick((prev) => prev + 1);
          }}
          className="p-1 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setResetTick((prev) => prev + 1);
          }}
          className="p-1 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIndex ? "bg-white w-3" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="scroll-mt-28 py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-200/10">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="muted-copy max-w-2xl mx-auto px-4 sm:px-0">
            Projects across product engineering, automation, and interactive applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className={`group glass-panel accent-ring rounded-3xl overflow-hidden transition-all duration-500 flex flex-col hover:-translate-y-2 border border-slate-200/15 shadow-lg cursor-pointer ${project.borderHover}`}
            >
              <div className={`h-48 sm:h-56 w-full bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                {/* Large faded project number */}
                <span className="absolute bottom-2 right-3 text-[5.5rem] sm:text-[6.5rem] font-extrabold leading-none text-white/[0.06] select-none font-mono pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {(project.id === "eventer" || project.id === "quizwizz") && project.images[0]?.startsWith("/") ? (
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  project.icon
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                {project.ongoing && (
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="text-xs font-semibold text-green-400">In Progress</span>
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-black/50 rounded-full px-3 py-1 text-xs font-medium text-white/80 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Click to Expand
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col bg-slate-950/35 relative z-10 backdrop-blur-xl">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-white text-zinc-100 transition-colors">{project.title}</h3>
                    <span className="text-xs sm:text-sm text-slate-300/60 font-mono tracking-wide uppercase">{project.type}</span>
                  </div>
                </div>

                <p className="text-slate-300/75 mb-8 sm:mb-6 mt-4 flex-1 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-auto pt-4 border-t border-slate-200/10">
                  {project.tech.map((tech, i) => (
                    <div key={i} title={tech} className="p-1.5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700/50 transition-colors flex items-center justify-center opacity-70 hover:opacity-100">
                      {techIcons[tech] || <span className="text-xs">{tech}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pb-4 pt-24 sm:px-6 sm:pb-6 sm:pt-28 md:px-10 md:pb-10 md:pt-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              layoutId={`project-${selectedProject.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[calc(100vh-7rem)] sm:max-h-[calc(100vh-8rem)] border border-slate-200/15 rounded-3xl shadow-2xl z-20 flex flex-col bg-slate-950 overflow-hidden pointer-events-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/60 hover:bg-black/90 rounded-full text-zinc-300 transition-colors pointer-events-auto"
              >
                <X size={20} />
              </button>

              <div className="relative z-30 bg-zinc-950 p-6 md:p-10 pt-8 md:pt-10 flex flex-col gap-8 flex-1 min-h-0 overflow-y-auto overscroll-contain no-scrollbar">
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{selectedProject.title}</h3>
                  <span className="text-sm md:text-md text-cyan-200 font-mono tracking-wide uppercase">{selectedProject.type}</span>
                </div>

                <ImageCarousel key={selectedProject.id} images={selectedProject.images} isAutoPlay={true} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h4 className="text-xl font-bold text-white border-b border-zinc-800 pb-2">Overview</h4>
                    <p className="text-zinc-300 leading-relaxed text-sm md:text-base">{selectedProject.fullDescription}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-white border-b border-zinc-800 pb-2 mb-4">Links</h4>
                      <div className="flex flex-col gap-3">
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
                          <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                            <Github size={18} />
                          </div>
                          <span className="font-medium text-sm">Source Code</span>
                        </a>
                        {selectedProject.thesis && (
                          <a href={selectedProject.thesis} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
                            <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                              <ExternalLink size={18} />
                            </div>
                            <span className="font-medium text-sm">Bachelor&apos;s Thesis</span>
                          </a>
                        )}
                        {selectedProject.live && (
                          <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
                            <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                              <ExternalLink size={18} />
                            </div>
                            <span className="font-medium text-sm">Live Application</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white border-b border-zinc-800 pb-2 mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {selectedProject.tech.map((tech, i) => (
                          <div key={i} title={tech} className="p-2 bg-zinc-900 border border-zinc-700/50 text-zinc-300 rounded-lg transition-all opacity-70 hover:opacity-100 hover:bg-zinc-800">
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
      </AnimatePresence>
    </section>
  );
}
