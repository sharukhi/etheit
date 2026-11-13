"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/* one shared observer for every Reveal on the page (cheaper than one per element) */
let io: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

function watch(el: Element, cb: () => void) {
  if (typeof IntersectionObserver === "undefined") {
    cb();
    return () => {};
  }
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const fn = callbacks.get(e.target);
          callbacks.delete(e.target);
          io?.unobserve(e.target);
          fn?.();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
  }
  callbacks.set(el, cb);
  io.observe(el);
  return () => {
    callbacks.delete(el);
    io?.unobserve(el);
  };
}

/* fades + lifts children in once, when they scroll into view */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return watch(el, () => setOn(true));
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${on ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
