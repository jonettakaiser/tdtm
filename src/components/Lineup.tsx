"use client";

import Reveal from "./Reveal";
import { useNight } from "./NightProvider";
import { guests, type GuestTag } from "@/data/guests";

const tagClass: Record<GuestTag, string> = {
  "Pawn Shop Tie-In": "border-gold bg-gold text-[#241a02]",
  "TDTM Alum": "border-dodger-soft text-dodger",
  "Target Guest": "border-ink/25 text-ink-faint",
};

export default function Lineup() {
  const night = useNight();

  return (
    <section id="lineup" className="section-shell overflow-hidden bg-ink text-paper">
      <div className="section-inner">
        <Reveal className="mb-14 md:grid md:grid-cols-[1fr_.7fr] md:items-end md:gap-12">
          <div>
          <span className="eyebrow text-gold">
            05 — The Guest List
          </span>
          <h2 className="section-title text-paper">First Pitch Lineup</h2>
          </div>
          <p className="section-lede text-paper/65">
            Eight names TDTM can realistically bring through the door for live nights — a
            mix of confirmed podcast alumni, personal relationships, and target bookings.
            Tap a card, then put your headliner on the ticket.
          </p>
        </Reveal>

        <Reveal from="scale" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {guests.map((g) => {
            const isHeadliner = night.headliner?.no === g.no;
            return (
              <details
                key={g.no}
                className={`group grid min-h-44 grid-cols-[1fr_82px] overflow-hidden rounded-[1.2rem] border transition duration-300 ${
                  isHeadliner
                    ? "rotate-[-1deg] border-gold bg-gold text-ink shadow-[6px_6px_0_var(--color-paper)]"
                    : "border-paper/15 bg-paper/7 text-paper hover:-translate-y-1 hover:border-paper/40 hover:bg-paper/10"
                }`}
              >
                <summary className="cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center gap-2 font-display text-3xl leading-none uppercase">
                    {g.name}
                    {isHeadliner && (
                      <span className="rounded-full bg-ink px-2 py-1 font-mono text-[0.5rem] tracking-wide text-paper">
                        Headlining
                      </span>
                    )}
                  </div>
                  <div className={`mt-4 hidden max-w-none text-sm leading-relaxed group-open:block ${isHeadliner ? "text-ink/75" : "text-paper/65"}`}>
                    {g.who}
                  </div>
                  <span
                    className={`mt-3 inline-block rounded-full border px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-wide ${isHeadliner ? "border-ink/30 text-ink" : tagClass[g.tag]}`}
                  >
                    {g.tag}
                  </span>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className={`font-mono text-[0.58rem] uppercase tracking-wide ${isHeadliner ? "text-ink/60" : "text-paper/40"}`}>
                      <span className="group-open:hidden">Tap for details ↓</span>
                      <span className="hidden group-open:inline">Tap to collapse ↑</span>
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        night.setHeadliner(isHeadliner ? null : g);
                      }}
                      className={`rounded-full border px-3 py-1.5 font-mono text-[0.58rem] font-bold uppercase tracking-wide transition-colors ${
                        isHeadliner
                          ? "border-ink bg-ink text-paper hover:bg-paper hover:text-ink"
                          : "border-paper/40 text-paper hover:border-gold hover:bg-gold hover:text-ink"
                      }`}
                    >
                      {isHeadliner ? "Remove headliner" : "Make headliner"}
                    </button>
                  </div>
                </summary>
                <div
                  className={`stub-edge flex h-full self-stretch items-center justify-center border-l border-dashed ${isHeadliner ? "border-ink/25 bg-paper/25" : "border-paper/15 bg-paper/5"}`}
                  aria-hidden
                >
                  <span className={`rotate-180 font-display text-3xl tracking-wide [writing-mode:vertical-rl] ${isHeadliner ? "text-ink" : "text-paper/35"}`}>
                    NO. {g.no}
                  </span>
                </div>
              </details>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
