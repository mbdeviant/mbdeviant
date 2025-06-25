import React from "react";
import Link from "next/link";
import { projects } from "@/public/data/projects-data";
import ImageLightbox from "@/app/components/ImageLightbox";
import { projectsLearnMore as learnMore } from "@/public/data/projects-learnmore";

export default async function ProjectDocs({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);
  const projectLearnMore = learnMore.find((l) => l.id === projectId);

  if (!project)
    return (
      <div className="flex  flex-col gap-12 text-center  text-2xl z-2">
        whatever you are looking for, is not here.
        <Link
          href="/#projects"
          className=" link-accent  text-[#DAA520] text-md"
        >
          &#8592;back to all projects
        </Link>
      </div>
    );
  if (!projectLearnMore)
    return (
      <div className="text-center mt-12 z-2">Learn more data not found.</div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10 text-white z-2">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2 text-[#DAA520]">
          {projectLearnMore.title}
        </h1>
        <p className="text-sm text-gray-400">learn more about this project</p>
      </div>

      <section>
        <h2 className="text-2xl font-medium mb-3"> Overview</h2>
        <p className="text-base text-gray-400 leading-relaxed">
          {projectLearnMore.overview}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-medium mb-3">Insights</h2>
        <p className="text-base text-gray-400 leading-relaxed whitespace-pre-line">
          {projectLearnMore.insights}
        </p>
        {projectLearnMore.codebaseLink && (
          <div className="text-gray-400">
            <p>
              you can view the source{" "}
              <a
                href={projectLearnMore.codebaseLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-[#DAA520] hover:underline"
              >
                here.
              </a>
            </p>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-medium mb-3">Build Notes</h2>
        <ul className="space-y-3 text-gray-400 list-disc list-inside">
          {Object.values(projectLearnMore.buildNotes).map(
            (note, i) =>
              note && (
                <li key={i} className="text-base leading-relaxed">
                  {note}
                </li>
              )
          )}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-medium  mb-3">TL;DR</h2>
        <div className="space-y-3 text-gray-400 list-disc list-inside">
          {Object.values(projectLearnMore.tldr).map((item, i) => (
            <li key={i} className="text-base leading-relaxed">
              {item}
            </li>
          ))}
        </div>
      </section>

      {projectLearnMore.screenShots?.length ? (
        <section>
          <ImageLightbox images={projectLearnMore.screenShots} />
        </section>
      ) : null}

      <div className="flex justify-center gap-5 text-center mt-8 ml-2">
        <Link
          href="/#projects"
          className=" link-accent  text-[#DAA520] text-md"
        >
          &#8592;back to all projects
        </Link>

        {project.id != "mbdeviant" && (
          <a
            className=" link-accent  text-[#DAA520] text-md"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            view the project live&#8594;
          </a>
        )}
      </div>
    </div>
  );
}
