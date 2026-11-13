import Reveal from "./Reveal";

export default function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <Reveal className="sec-head">
      <h2 className="h-lg">{title}</h2>
      {sub && <p className="sec-head__sub">{sub}</p>}
    </Reveal>
  );
}
