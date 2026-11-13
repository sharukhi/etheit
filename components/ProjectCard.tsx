import Link from "next/link";
import Card from "./Card";
import { Arrow } from "./Icons";

export type Project = {
  slug: string;
  title: string;
  client: string;
  tags: string[];
  summary: string;
  image: string;
  imageAlt: string;
  stack: string[];
  sample: boolean;
};

export default function ProjectCard({ p, readLabel = "read the write-up" }: { p: Project; readLabel?: string }) {
  return (
    <Link href={`/projects/${p.slug}`} className="project-link">
      <Card hazard lift className="project">
        <div className="project__img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.imageAlt} loading="lazy" decoding="async" width={1200} height={720} />
        </div>
        <div className="project__meta">
          {p.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
          {p.sample && <span className="tag tag--sample">sample</span>}
        </div>
        <h3 className="h-md">{p.title}</h3>
        <p className="project__client">{p.client}</p>
        <p className="project__summary">{p.summary}</p>
        <p className="project__more">
          {readLabel} <Arrow />
        </p>
      </Card>
    </Link>
  );
}
