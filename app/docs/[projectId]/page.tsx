import React from "react";
import { projects } from "@/public/data/projects-data";

export default async function ProjectDocs({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{project.title} Documentation</h1>
      <p>{project.description}</p>
    </div>
  );
}
