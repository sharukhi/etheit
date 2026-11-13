"use client";

import { useEffect, useState } from "react";

export default function RotatingWord({ words, ms = 2300 }: { words: string[]; ms?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % words.length), ms);
    return () => clearInterval(t);
  }, [words, ms]);

  return (
    <span className="hl" aria-hidden="true">
      <span key={i} className="hl__word">{words[i]}</span>
    </span>
  );
}
