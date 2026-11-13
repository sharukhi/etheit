import home from "@/data/home.json";
import projects from "@/data/projects.json";
import BuildSplit from "@/components/BuildSplit";
import Card from "@/components/Card";
import Crescent from "@/components/Crescent";
import SectionHead from "@/components/SectionHead";
import Faq from "@/components/Faq";
import Mascot from "@/components/Mascot";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import RotatingWord from "@/components/RotatingWord";
import Testimonials from "@/components/Testimonials";
import { ButtonLink } from "@/components/Button";

export default function Home() {
  const h = home.hero;
  const show = home.sections; // true / false per section in data/home.json
  return (
    <>
      {show.hero && (
        <section className="wrap hero">
          <div className="hero__in">
            <h1 className="hero__title" aria-label={`${h.line1} ${h.line2} ${h.rotate[0]}`}>
              <span className="line" style={{ ["--i" as string]: 0 }}>
                <span>{h.line1}</span>
              </span>
              <span className="line mag" style={{ ["--i" as string]: 1 }}>
                <span>{h.line2}</span>
              </span>
              <span className="line" style={{ ["--i" as string]: 2 }}>
                <span>
                  <RotatingWord words={h.rotate} ms={h.rotateMs} />
                </span>
              </span>
            </h1>
            <p className="lead hero__lead rise" style={{ ["--d" as string]: ".5s" }}>{h.lead}</p>
            <div className="hero__cta rise" style={{ ["--d" as string]: ".62s" }}>
              <ButtonLink href={h.primary.href}>{h.primary.label}</ButtonLink>
              <ButtonLink href={h.secondary.href} variant="ghost" arrow={false}>{h.secondary.label}</ButtonLink>
            </div>
          </div>
        </section>
      )}

      {show.problems && (
        <section className="wrap section">
          <SectionHead title={home.problems.title} sub={home.problems.sub} />
          <div className="grid3">
            {home.problems.items.map((it, i) => (
              <Reveal key={it.title} delay={i * 110} className="fill">
                <Card tone={it.tone as "paper" | "sun" | "ink"} lift className="tilt">
                  <h3 className="h-md">{it.title}</h3>
                  <p className="card__body">{it.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {show.build && (
        <section className="wrap section">
          <SectionHead title={home.build.title} sub={home.build.sub} />
          <BuildSplit yesLabel={home.build.yesLabel} noLabel={home.build.noLabel} yes={home.build.items} no={home.build.no} />
        </section>
      )}

      {show.process && (
        <section className="wrap section">
          <SectionHead title={home.process.title} sub={home.process.sub} />
          <ol className="steps">
            {home.process.steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 90} className="steps__in">
                  <span className="steps__n">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>
      )}

      {show.work && (
        <section className="wrap section">
          <SectionHead title={home.work.title} />
          <div className="grid2">
            {projects.items.slice(0, 2).map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <ProjectCard p={p} readLabel={projects.readLabel} />
              </Reveal>
            ))}
          </div>
          <Reveal className="more">
            <ButtonLink href="/projects" variant="ghost">{home.work.cta}</ButtonLink>
          </Reveal>
        </section>
      )}

      {show.testimonials && (
        <Testimonials
          title={home.testimonials.title}
          sub={home.testimonials.sub}
          sample={home.testimonials.sample}
          items={home.testimonials.items}
        />
      )}

      {show.faq && (
        <section className="wrap section section--narrow">
          <SectionHead title={home.faq.title} />
          <Reveal>
            <Faq items={home.faq.items} />
          </Reveal>
        </section>
      )}

      {show.cta && (
        <section className="wrap section">
          <Reveal>
            <Card tone="accent" hazard className="cta">
              <div>
                <h2 className="h-lg">{home.cta.title}</h2>
                <p>{home.cta.body}</p>
                <ButtonLink href={home.cta.button.href} variant="sun">{home.cta.button.label}</ButtonLink>
              </div>
              <Mascot size={150} className="cta__mascot" />
            </Card>
          </Reveal>
        </section>
      )}
    </>
  );
}
