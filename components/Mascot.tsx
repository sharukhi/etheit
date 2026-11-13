import type { CSSProperties } from "react";

type Props = {
  mood?: "calm" | "panic";
  color?: string;
  size?: number;
  className?: string;
  title?: string;
};

const stroke: CSSProperties = { stroke: "var(--ink)", strokeWidth: 3 };
const white: CSSProperties = { fill: "var(--paper)", ...stroke };

export default function Mascot({ mood = "calm", color = "var(--sun)", size = 120, className = "", title }: Props) {
  const panic = mood === "panic";
  return (
    <svg
      viewBox="0 0 120 140"
      width={size}
      height={(size * 140) / 120}
      className={`mascot ${panic ? "mascot--panic" : ""} ${className}`}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <rect x="32" y="112" width="28" height="18" rx="9" style={white} />
      <rect x="62" y="112" width="28" height="18" rx="9" style={white} />
      {panic ? (
        <>
          <path d="M22 74 Q10 62 12 46" style={{ ...stroke, fill: "none" }} strokeLinecap="round" />
          <path d="M98 74 Q110 62 108 46" style={{ ...stroke, fill: "none" }} strokeLinecap="round" />
          <circle cx="12" cy="42" r="9" style={white} />
          <circle cx="108" cy="42" r="9" style={white} />
        </>
      ) : (
        <>
          <path d="M20 84 Q12 88 10 94" style={{ ...stroke, fill: "none" }} strokeLinecap="round" />
          <path d="M100 84 Q108 88 110 94" style={{ ...stroke, fill: "none" }} strokeLinecap="round" />
          <circle cx="10" cy="98" r="9" style={white} />
          <circle cx="110" cy="98" r="9" style={white} />
        </>
      )}
      <ellipse cx="60" cy="72" rx="42" ry="46" style={{ ...stroke, fill: color }} />
      <g className="mascot__eyes">
        <ellipse cx="46" cy="62" rx="10" ry={panic ? 15 : 13} style={white} />
        <ellipse cx="74" cy="62" rx="10" ry={panic ? 15 : 13} style={white} />
        {panic ? (
          <>
            <circle cx="46" cy="62" r="2.6" style={{ fill: "var(--ink)" }} />
            <circle cx="74" cy="62" r="2.6" style={{ fill: "var(--ink)" }} />
          </>
        ) : (
          <>
            <circle cx="49" cy="65" r="4.5" style={{ fill: "var(--ink)" }} />
            <circle cx="77" cy="65" r="4.5" style={{ fill: "var(--ink)" }} />
          </>
        )}
      </g>
      {panic ? (
        <>
          <ellipse cx="60" cy="94" rx="8" ry="9" style={{ fill: "var(--ink)" }} />
          <path d="M100 26 Q108 38 100 46 Q92 38 100 26Z" style={{ ...white, strokeWidth: 2.5 }} />
        </>
      ) : (
        <>
          <path d="M49 90 Q60 99 71 90" style={{ ...stroke, fill: "none" }} strokeLinecap="round" />
          <circle cx="32" cy="82" r="5" style={{ fill: "var(--accent)", opacity: 0.5 }} />
          <circle cx="88" cy="82" r="5" style={{ fill: "var(--accent)", opacity: 0.5 }} />
        </>
      )}
    </svg>
  );
}
