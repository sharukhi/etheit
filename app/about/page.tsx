import type { Metadata } from "next";
import about from "@/data/about.json";
import Card from "@/components/Card";
import Crew from "@/components/Crew";
import FounderCard from "@/components/FounderCard";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

export const metadata: Metadata = { title: "about" };

export default function About() {
  const show = about.sections; // true / false per section in data/about.json
  return (
    <div className="wrap page">
      {(about.title || about.lead) && (
        <header className="page__head">
          {about.title && <h1 className="h-xl">{about.title}</h1>}
          {about.lead && <p className="lead">{about.lead}</p>}
        </header>
      )}

      {show.story && (
        <section className="section section--flush">
          <SectionHead title={about.storyTitle} />
          <div className="story">
            <Reveal>
              <Card tone="ink" className="story__quote">
                <p>&ldquo;{about.storyQuote}&rdquo;</p>
              </Card>
            </Reveal>
            <div className="prose">
              {about.story.map((p, i) => (
                <Reveal key={p} delay={i * 90}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {show.founders && (
        <section className="section">
          <SectionHead title={about.foundersTitle} sub={about.foundersSub} />
          <div className="grid2">
            {about.founders.map((f, i) => (
              <Reveal key={`${f.name}-${i}`} delay={i * 120} className="fill">
                <FounderCard f={f} sample={about.foundersSample && f.name === "co-founder name"} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {show.principles && (
        <section className="section">
          <SectionHead title={about.principlesTitle} />
          <div className="grid3">
            {about.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <Card tone={(["paper", "sun", "paper"] as const)[i % 3]} lift>
                  <h3 className="h-md">{p.title}</h3>
                  <p className="card__body">{p.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {show.crew && (
        <section className="section">
          <SectionHead title={about.crewTitle} sub={about.crewLead} />
          <Reveal><Crew crew={about.crew} /></Reveal>
        </section>
      )}
    </div>
  );
}
