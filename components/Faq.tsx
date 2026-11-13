export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((it) => (
        <details key={it.q} className="faq__item">
          <summary>
            <span>{it.q}</span>
            <span className="faq__plus" aria-hidden="true" />
          </summary>
          <p className="faq__a">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
