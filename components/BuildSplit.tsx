import Card from "./Card";
import Reveal from "./Reveal";

type Item = { title: string; body: string };

function Tick() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3.2 3.2L13 4.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Cross() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export default function BuildSplit({
  yesLabel,
  noLabel,
  yes,
  no,
}: {
  yesLabel: string;
  noLabel: string;
  yes: Item[];
  no: Item[];
}) {
  return (
    <div className="split">
      <Reveal className="split__col split__col--yes">
        <Card className="split__card">
          <h3 className="split__label split__label--yes"><span className="split__badge"><Tick /></span>{yesLabel}</h3>
          <ul className="split__list">
            {yes.map((it) => (
              <li key={it.title}>
                <span className="split__icon split__icon--yes"><Tick /></span>
                <div>
                  <h4>{it.title}</h4>
                  <p>{it.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
      <Reveal delay={140} className="split__col split__col--no">
        <Card tone="ink" className="split__card">
          <h3 className="split__label split__label--no"><span className="split__badge"><Cross /></span>{noLabel}</h3>
          <ul className="split__list">
            {no.map((it) => (
              <li key={it.title}>
                <span className="split__icon split__icon--no"><Cross /></span>
                <div>
                  <h4>{it.title}</h4>
                  <p>{it.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </div>
  );
}
