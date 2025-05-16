"use client";

import { motion } from "framer-motion";
import { projects } from "@/public/data/projects-data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="relative snap-start min-h-screen cursor-default w-full px-6 py-24 z-2 bg-transparent text-white">
      <h2 className="text-5xl font-bold mb-4 p-1 text-center bg-gradient-to-r from-[#DAA520] to-[#FFD700]  bg-clip-text  text-transparent">
        Projects
      </h2>

      <div className="flex flex-col gap-12 mt-16">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <ProjectCard
              project={project}
              align={i % 2 === 0 ? "left" : "right"}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
