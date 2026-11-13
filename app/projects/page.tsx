import type { Metadata } from "next";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "work" };

export default function Projects() {
  const hasSample = projects.items.some((p) => p.sample);
  return (
    <div className="wrap page">
      <header className="page__head">
        <h1 className="h-xl">{projects.title}</h1>
        <p className="lead">{projects.lead}</p>
      </header>
      <div className="grid2">
        {projects.items.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 120}>
            <ProjectCard p={p} readLabel={projects.readLabel} />
          </Reveal>
        ))}
      </div>
      {hasSample && <p className="fine">{projects.sampleNote}</p>}
    </div>
  );
}
