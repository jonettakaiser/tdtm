"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#show", label: "The Show" },
  { href: "#pitch", label: "The Pitch" },
  { href: "#live-nights", label: "Live Nights" },
  { href: "#watch-parties", label: "Watch Parties" },
  { href: "#lineup", label: "Lineup" },
  { href: "#why", label: "Why Pawn Shop" },
  { href: "#ask", label: "The Ask" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-7 py-3.5 sm:px-4">
        <div className="flex items-baseline gap-2 font-display text-sm font-extrabold uppercase tracking-wide">
          Pawn Shop{" "}
          <small className="font-mono text-[0.62rem] font-medium tracking-wider text-ink-faint">
            ×
          </small>{" "}
          Talk Dodgers To Me
        </div>

        <button
          className="rounded border border-ink/25 px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-ink md:hidden"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>

        <nav
          id="nav-links"
          className={`font-mono text-xs uppercase tracking-wide md:flex md:gap-5 ${
            open
              ? "absolute inset-x-0 top-full flex flex-col gap-3.5 border-b border-ink/10 bg-raised px-7 py-4"
              : "hidden"
          }`}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`border-b pb-0.5 transition-colors ${
                active === l.href.slice(1)
                  ? "border-dodger text-dodger"
                  : "border-transparent text-ink-dim hover:border-dodger hover:text-dodger"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
