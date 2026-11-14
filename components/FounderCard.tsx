import Card from "./Card";
import Mascot from "./Mascot";

export type Founder = { name: string; role: string; bio: string; photo?: string; color?: string };

export default function FounderCard({ f, sample = false }: { f: Founder; sample?: boolean }) {
  return (
    <Card lift hazard className="founder">
      <div className="founder__pic">
        {f.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={f.photo} alt={f.name} loading="lazy" decoding="async" width={160} height={160} />
        ) : (
          <Mascot size={96} color={f.color || "var(--sun)"} />
        )}
      </div>
      <div className="founder__txt">
        <h3 className="h-md">{f.name}</h3>
        <p className="founder__role">{f.role}</p>
        <p className="card__body">{f.bio}</p> 
      </div>
    </Card>
  );
}
