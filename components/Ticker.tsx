export default function Ticker({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className="ticker__row" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <li key={i}>
          {t}
          <span className="ticker__star">*</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="ticker" role="region" aria-label="announcements">
      <div className="ticker__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
