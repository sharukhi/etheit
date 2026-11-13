import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Arrow } from "./Icons";

type Variant = "primary" | "sun" | "ghost";

export function ButtonLink({
  href,
  variant = "primary",
  arrow = true,
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={`btn btn--${variant} ${className}`}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function Button({
  variant = "primary",
  arrow = false,
  className = "",
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; arrow?: boolean }) {
  return (
    <button className={`btn btn--${variant} ${className}`} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
