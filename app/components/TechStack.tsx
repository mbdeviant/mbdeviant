"use client";

import { techStack } from "@/public/data/tech-data";
import Image from "next/image";
import { motion } from "framer-motion";

const Category = ({
  title,
  items,
}: {
  title: string;
  items: typeof techStack.frontend;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.6 }}
    className="flex flex-col items-center w-full md:w-1/3"
  >
    <h3 className="text-4xl  font-medium mb-6 text-center text-[#DAA520] tracking-wide">
      {title}
    </h3>
    <div className="grid grid-cols-3 gap-6 justify-items-center">
      {items.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center group transition-all hover:scale-110"
        >
          <Image src={tech.icon} alt="" width={40} height={40} />
          <span className="mt-2 text-sm text-gray-400 group-hover:text-[#DAA520] transition">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function TechStackSection() {
  return (
    <section
      className="relative w-full cursor-default px-6 py-24 z-2 text-white bg-transparent"
      aria-label="tech stack section"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        <Category title="Frontend" items={techStack.frontend} />
        <Category title="Backend" items={techStack.backend} />
        <Category title="Misc" items={techStack.miscellaneous} />
      </div>
    </section>
  );
}
