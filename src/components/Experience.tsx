"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Freelance & Product Development",
    period: "2023 - Present",
    icon: <Briefcase size={20} className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />,
    description: "Building fullstack software products from architecture to deployment, with focus on stable releases, clean CI/CD flows, and practical DevOps automation.",
  },
  {
    role: "Student of Computer Science",
    company: "Faculty of Mathematics, Physics and Informatics, Comenius University",
    companySecondary: "Faculty of Science and Technology, University of Tartu",
    period: "Sep 2022 - Present",
    icon: <GraduationCap size={20} className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />,
    description: "Bachelor's and master's track in Computer Science with focus on practical software engineering, cloud computing, distributed systems, and system design.",
  },
  {
    role: "Broadcast Technology & Live Production",
    company: "TV JOJ",
    period: "Sep 2022 - Jan 2026",
    icon: <Code size={20} className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />,
    description: "Stream directing, replay operations, graphics, and software tooling for live sports production. Built automation utilities and real-time workflows under high-pressure broadcast conditions.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Journey</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Blending formal education with self-taught expertise, active freelancing, and a non-stop passion for coding.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 md:pl-0 group"
            >
              <div className="md:flex items-start md:space-x-8">
                {/* Timeline Line */}
                <div className="hidden md:flex flex-col items-center h-full absolute left-[150px] top-0 bottom-0">
                  <div className="w-px h-full bg-zinc-800/80 absolute z-0 group-hover:bg-emerald-500/50 transition-colors duration-500" />
                  <div className="w-5 h-5 rounded-full bg-zinc-900 border-2 border-zinc-700 z-10 mt-1.5 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-emerald-500 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center overflow-hidden">
                    <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-emerald-500 transition-colors" />
                  </div>
                </div>

                {/* Mobile line */}
                <div className="md:hidden absolute left-[-6px] top-3 w-3 h-3 rounded-full bg-zinc-700 border border-zinc-500 shadow-xl group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all z-10" />
                <div className="md:hidden absolute left-[-1px] top-6 bottom-[-30px] w-0.5 bg-zinc-800/80 group-hover:bg-emerald-500/30 transition-colors z-0" />
                
                <div className="md:w-[150px] shrink-0 pt-1 relative md:text-right md:pr-12 md:pl-0 pl-4 pb-2 md:pb-0 font-mono text-zinc-500 group-hover:text-emerald-400 transition-colors font-medium">
                  {exp.period}
                </div>

                <div className="flex-1 glass-panel p-6 sm:p-8 rounded-2xl relative z-10 border border-zinc-800/50 group-hover:border-emerald-500/20 group-hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-3">
                    <div className="p-2 sm:p-0 bg-zinc-900 sm:bg-transparent rounded-lg sm:rounded-none shadow-inner sm:shadow-none">
                      {exp.icon}
                    </div>
                    {exp.role}
                  </h3>
                  <h4 className="text-md sm:text-lg text-emerald-500/80 mb-1">{exp.company}</h4>
                  {"companySecondary" in exp && exp.companySecondary && (
                    <h4 className="text-md sm:text-lg text-emerald-500/80 mb-4">{exp.companySecondary}</h4>
                  )}
                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
