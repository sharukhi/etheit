import Card from "./Card";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

type Item = { quote: string; name: string; role: string; tone?: string };

export default function Testimonials({
  title,
  sub,
  sample = false,
  items,
}: {
  title: string;
  sub?: string;
  sample?: boolean;
  items: Item[];
}) {
  if (!items.length) return null;
  return (
    <section className="wrap section">
      <SectionHead title={title} sub={sub} />
      <div className="grid3">
        {items.map((t, i) => (
          <Reveal key={`${t.name}-${i}`} delay={i * 110} className="fill">
            <Card tone={(t.tone as "paper" | "sun" | "ink") || "paper"} lift className="quote-card">
              <figure className="quote">
                <span className="quote__mark" aria-hidden="true">&ldquo;</span>
                <blockquote className="quote__text">{t.quote}</blockquote>
                <figcaption className="quote__by">
                  <span className="quote__av" aria-hidden="true">{t.name.charAt(0)}</span>
                  <span>
                    <span className="quote__name">{t.name}</span>
                    <span className="quote__role">{t.role}</span>
                  </span>
                  {sample && <span className="tag tag--sample">sample</span>}
                </figcaption>
              </figure>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
