import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import projects from "@/data/projects.json";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { mdxComponents } from "@/components/mdx";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.items.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const p = projects.items.find((x) => x.slug === params.slug);
  return p ? { title: p.title, description: p.summary } : {};
}

async function readMdx(slug: string) {
  try {
    return await fs.readFile(path.join(process.cwd(), "content", "projects", `${slug}.mdx`), "utf8");
  } catch {
    return null;
  }
}

export default async function ProjectPage({ params }: { params: Params }) {
  const i = projects.items.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const p = projects.items[i];
  const next = projects.items[(i + 1) % projects.items.length];
  const source = await readMdx(p.slug);

  return (
    <article className="wrap page case">
      <Link href="/projects" className="case__back">&larr; {projects.back}</Link>

      <header className="case__head">
        <div className="project__meta">
          {p.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
          {p.sample && <span className="tag tag--sample">sample</span>}
        </div>
        <h1 className="h-xl">{p.title}</h1>
        <p className="project__client">{p.client}</p>
        <p className="lead">{p.summary}</p>
      </header>

      <div className="case__cover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.imageAlt} width={1200} height={720} />
      </div>

      <div className="case__body">
        <div className="mdx">
          {source ? (
            <MDXRemote source={source} components={mdxComponents} />
          ) : (
            <p>no write-up yet. add <code>content/projects/{p.slug}.mdx</code>.</p>
          )}
        </div>
        <aside className="case__side">
          <h2>stack</h2>
          <ul>
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </aside>
      </div>

      <Reveal>
        <Card tone="accent" hazard className="cta case__cta">
          <div>
            <h2 className="h-lg">{projects.ctaTitle}</h2>
            <p>{projects.ctaBody}</p>
            <div className="case__ctas">
              <ButtonLink href="/contact" variant="sun">{projects.ctaLabel}</ButtonLink>
              <ButtonLink href={`/projects/${next.slug}`} variant="ghost" arrow={false}>next: {next.title}</ButtonLink>
            </div>
          </div>
        </Card>
      </Reveal>
    </article>
  );
}
