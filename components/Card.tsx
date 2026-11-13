import type { ReactNode } from "react";

export default function Card({
  tone = "paper",
  hazard = false,
  lift = false,
  className = "",
  children,
}: {
  tone?: "paper" | "sun" | "ink" | "accent";
  hazard?: boolean;
  lift?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return <div className={`card card--${tone} ${hazard ? "card--hazard" : ""} ${lift ? "card--lift" : ""} ${className}`}>{children}</div>;
}
