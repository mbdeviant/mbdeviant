"use client";

import { motion } from "framer-motion";
import { projects } from "@/public/data/projects-data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="snap-start min-h-screen w-full px-6 py-24 bg-black text-white">
      <h2 className="text-4xl font-bold mb-4 p-1 text-center bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text  text-transparent">
        Projects
      </h2>

      <div className="flex flex-col gap-12 mt-16">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: false, amount: 0.4 }}
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
