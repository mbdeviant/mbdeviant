import Image from "next/legacy/image";
import Link from "next/link";
import { Project } from "@/lib/types/project-data-types";

export default function ProjectCard({
  project,
  align = "left",
}: {
  project: Project;
  align?: string;
}) {
  const isLeft = align === "left";

  return (
    <div
      className={`flex flex-col md:flex-row ${
        !isLeft ? "md:flex-row-reverse" : ""
      } items-center gap-6 lg:px-36 z-2 relative `}
    >
      <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h4 className="text-xl font-medium mb-1">{project.title}</h4>
        <p className="text-m font-light text-gray-400 mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 text-xs mb-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-white/10 px-2 py-1 rounded text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="text-orange-300 hover:text-orange-400 transition duration-200"
            >
              See it live
            </a>
          )}
          <Link href={`docs/${project.id}`}>Learn more</Link>
        </div>
      </div>
    </div>
  );
}
