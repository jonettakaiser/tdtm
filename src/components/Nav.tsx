"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#proof", label: "Proof of Concept" },
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
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/92 backdrop-blur-xl">
      <div className="mx-auto flex min-h-15 max-w-[1280px] items-center justify-between gap-4 px-5 md:px-8">
        <div className="flex items-center gap-3">
          <span className="grid size-9 rotate-[-6deg] place-items-center rounded-full border-2 border-dodger font-display text-lg text-dodger">
            PS
          </span>
          <div className="font-display text-base leading-none uppercase text-ink">
            Pawn Shop <span className="text-gold-dim">×</span> TDTM
          </div>
        </div>

        <button
          className="rounded-full border border-ink/25 px-4 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-wide text-ink md:hidden"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="nav-links"
          className={`font-mono text-[0.66rem] font-bold uppercase tracking-[0.09em] md:flex md:items-center md:gap-5 ${
            open
              ? "absolute inset-x-0 top-full flex flex-col gap-4 border-b border-ink/10 bg-paper px-6 py-6 shadow-2xl"
              : "hidden"
          }`}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-dodger after:transition-transform ${
                active === l.href.slice(1)
                  ? "text-dodger after:scale-x-100"
                  : "text-ink-dim after:scale-x-0 hover:text-dodger hover:after:scale-x-100"
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
