"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiDjango,
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiGit,
  SiKubernetes,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRubyonrails,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type SkillLevel = "Beginner" | "Intermediate" | "Upper Intermediate" | "Advanced";
type Domain = "Development" | "Deployment & Integration";

type Skill = {
  name: string;
  domain: Domain;
  level: SkillLevel;
  icon: React.ReactNode;
  color: string;
};

const skills: Skill[] = [
  {
    name: "Claude Code",
    domain: "Development",
    level: "Beginner",
    icon: <Image src="/claude-color.webp" alt="Claude Code" width={15} height={15} className="rounded-sm" />,
    color: "text-amber-400",
  },
  { name: "Django", domain: "Development", level: "Upper Intermediate", icon: <SiDjango size={15} />, color: "text-[#44B78B]" },
  { name: "Ruby on Rails", domain: "Development", level: "Intermediate", icon: <SiRubyonrails size={15} />, color: "text-[#CC0000]" },
  { name: "MySQL", domain: "Development", level: "Intermediate", icon: <SiMysql size={15} />, color: "text-[#4479A1]" },
  { name: "Express", domain: "Development", level: "Upper Intermediate", icon: <SiExpress size={15} />, color: "text-zinc-100" },
  { name: "PostgreSQL", domain: "Development", level: "Upper Intermediate", icon: <SiPostgresql size={15} />, color: "text-[#4169E1]" },
  { name: "TypeScript", domain: "Development", level: "Upper Intermediate", icon: <SiTypescript size={15} />, color: "text-[#3178C6]" },
  { name: "React", domain: "Development", level: "Upper Intermediate", icon: <SiReact size={15} />, color: "text-[#61DAFB]" },
  { name: "Next.js", domain: "Development", level: "Upper Intermediate", icon: <SiNextdotjs size={15} />, color: "text-white" },
  { name: "Tailwind CSS", domain: "Development", level: "Upper Intermediate", icon: <SiTailwindcss size={15} />, color: "text-[#06B6D4]" },
  { name: "Node.js", domain: "Development", level: "Upper Intermediate", icon: <SiNodedotjs size={15} />, color: "text-[#339933]" },

  {
    name: "k8s",
    domain: "Deployment & Integration",
    level: "Beginner",
    icon: <SiKubernetes size={15} />,
    color: "text-[#326CE5]",
  },
  {
    name: "Traefik",
    domain: "Deployment & Integration",
    level: "Intermediate",
    icon: <Image src="/traefic-logo.webp" alt="Traefik" width={15} height={15} className="rounded-sm" />,
    color: "text-[#24A1C1]",
  },
  { name: "Nginx", domain: "Deployment & Integration", level: "Upper Intermediate", icon: <SiNginx size={15} />, color: "text-[#009639]" },
  { name: "Docker Swarm", domain: "Deployment & Integration", level: "Upper Intermediate", icon: <SiDocker size={15} />, color: "text-[#2496ED]" },
  { name: "GitHub Actions", domain: "Deployment & Integration", level: "Upper Intermediate", icon: <SiGithubactions size={15} />, color: "text-[#2088FF]" },
  { name: "Docker", domain: "Deployment & Integration", level: "Advanced", icon: <SiDocker size={15} />, color: "text-[#2496ED]" },
  { name: "Git", domain: "Deployment & Integration", level: "Advanced", icon: <SiGit size={15} />, color: "text-[#F05032]" },
];

const levelOrder: SkillLevel[] = ["Beginner", "Intermediate", "Upper Intermediate", "Advanced"];
const levelWidth: Record<SkillLevel, string> = {
  Beginner: "32%",
  Intermediate: "55%",
  "Upper Intermediate": "75%",
  Advanced: "100%",
};

function LevelRow({ level, items }: { level: SkillLevel; items: Skill[] }) {
  if (items.length === 0) return null;

  return (
    <div className="space-y-2.5">
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item.name}
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-1.5 text-xs sm:text-sm text-zinc-100"
          >
            <span className={item.color}>{item.icon}</span>
            {item.name}
          </span>
        ))}
      </div>

      <div className="relative">
        <div className="h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: levelWidth[level] }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400"
          />
        </div>
        <span className="mt-1 block text-[10px] sm:text-[11px] text-zinc-500 text-right uppercase tracking-wide">{level}</span>
      </div>
    </div>
  );
}

export default function TechStack() {
  const domains: Domain[] = ["Development", "Deployment & Integration"];

  return (
    <section id="tech-stack" className="py-24 px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10 w-full border-t border-slate-200/10">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-14"
        >
          <h2 className="section-title text-3xl md:text-5xl font-bold mb-4">Tooling That Ships</h2>
          <p className="muted-copy max-w-2xl mx-auto">
            Grouped by development and operations so you can scan what I use to build and deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {domains.map((domain, domainIndex) => {
            const domainSkills = skills.filter((skill) => skill.domain === domain);

            return (
              <motion.div
                key={domain}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: domainIndex * 0.1 }}
                className="glass-panel accent-ring rounded-2xl p-5 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-4">{domain}</h3>
                <div className="space-y-4">
                  {levelOrder.map((level) => (
                    <LevelRow key={`${domain}-${level}`} level={level} items={domainSkills.filter((item) => item.level === level)} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
