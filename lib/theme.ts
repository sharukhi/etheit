import type { CSSProperties } from "react";
import site from "@/data/site.json";

/* turns data/site.json -> theme into css variables on <html> */
export function themeStyle(): CSSProperties {
  const t = site.theme;
  return {
    "--bg": t.bg,
    "--paper": t.paper,
    "--ink": t.ink,
    "--accent": t.accent,
    "--sun": t.sun,
    "--muted": t.muted,
    "--on-accent": t.onAccent,
    "--pattern-color": t.pattern.color,
    "--pattern-opacity": String(t.pattern.opacity),
    "--pattern-size": `${t.pattern.size}px`,
  } as CSSProperties;
}
