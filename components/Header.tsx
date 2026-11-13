"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import site from "@/data/site.json";
import Logo from "./Logo";
import { ButtonLink } from "./Button";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [top, setTop] = useState(80);
  const ref = useRef<HTMLElement>(null);

  // close when the page changes
  useEffect(() => setOpen(false), [path]);

  // border appears once the header is pinned
  useEffect(() => {
    const on = () => setStuck(window.scrollY > 36);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // lock scroll + esc to close while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", key);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", key);
    };
  }, [open]);

  // close if the screen grows past the mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 821px)");
    const on = () => mq.matches && setOpen(false);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  function toggle() {
    if (!open && ref.current) setTop(Math.max(0, ref.current.getBoundingClientRect().bottom));
    setOpen((o) => !o);
  }

  return (
    <header ref={ref} className={`header ${stuck ? "is-stuck" : ""}`}>
      <div className="wrap header__in">
        <Link href="/" className="header__logo" aria-label={`${site.name} home`}>
          <Logo />
        </Link>
        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "close menu" : "open menu"}
          onClick={toggle}
        >
          <span />
          <span />
        </button>
        <nav
          id="main-nav"
          className={`nav ${open ? "nav--open" : ""}`}
          aria-label="main"
          style={{ "--nav-top": `${top}px` } as CSSProperties}
        >
          {site.nav.map((l, i) => {
            const active = path === l.href || path.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`nav__link ${active ? "nav__link--on" : ""}`}
                aria-current={active ? "page" : undefined}
                style={{ "--i": i } as CSSProperties}
              >
                {l.label}
              </Link>
            );
          })}
          <ButtonLink href={site.cta.href} className="nav__cta" >
            {site.cta.label}
          </ButtonLink>
          <a href={`mailto:${site.email}`} className="nav__mail">{site.email}</a>
        </nav>
      </div>
    </header>
  );
}
