"use client";

import { useState } from "react";
import Mascot from "./Mascot";

type Member = { name: string; job: string; line: string; color: string };

export default function Crew({ crew }: { crew: Member[] }) {
  const [poked, setPoked] = useState<string | null>(null);
  return (
    <ul className="crew">
      {crew.map((m) => {
        const panic = poked === m.name;
        return (
          <li key={m.name}>
            <button
              type="button"
              className="crew__btn"
              aria-pressed={panic}
              aria-label={`poke ${m.name}`}
              onClick={() => setPoked(panic ? null : m.name)}
              onMouseEnter={() => setPoked(m.name)}
              onMouseLeave={() => setPoked(null)}
            >
              <Mascot mood={panic ? "panic" : "calm"} color={m.color} size={120} />
            </button>
            <h3 className="crew__name">{m.name}</h3>
            <p className="crew__job">{m.job}</p>
            <p className="crew__line">{m.line}</p>
          </li>
        );
      })}
    </ul>
  );
}
