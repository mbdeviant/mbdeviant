import { techStack } from "@/public/data/tech-data";
import Image from "next/image";

const Category = ({
  title,
  items,
}: {
  title: string;
  items: typeof techStack.frontend;
}) => (
  <div className="flex flex-col items-center w-full md:w-1/3 ">
    <h3 className="text-2xl font-bold mb-6 text-center text-[#DAA520] tracking-wide">
      {title}
    </h3>
    <div className="grid grid-cols-3 gap-6 justify-items-center">
      {items.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center group transition-all hover:scale-110"
        >
          <Image src={tech.icon} alt={tech.name} width={40} height={40} />
          <span className="mt-2 text-sm text-gray-400 group-hover:text-[#DAA520] transition">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function TechStackSection() {
  return (
    <section className="relative w-full cursor-default px-6 py-24 z-2 text-white bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 ">
        <Category title="Front-End" items={techStack.frontend} />
        <Category title="Back-End" items={techStack.backend} />
        <Category title="Miscellaneous" items={techStack.miscellaneous} />
      </div>
    </section>
  );
}
