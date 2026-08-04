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
    <section id="lineup" className="border-t border-ink/10 py-22">
      <div className="mx-auto max-w-[1180px] px-7 sm:px-4">
        <Reveal className="mb-11 max-w-[74ch]">
          <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gold-dim">
            05 — The Guest List
          </span>
          <h2 className="text-4xl uppercase sm:text-3xl">First Pitch Lineup</h2>
          <p className="mt-3.5 max-w-[62ch] text-lg text-ink-dim">
            Eight names TDTM can realistically bring through the door for live nights — a
            mix of confirmed podcast alumni, personal relationships, and target bookings.
            Tap a card for who they are, then pick your headliner for the scoreboard up top.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {guests.map((g) => {
            const isHeadliner = night.headliner?.no === g.no;
            return (
              <details
                key={g.no}
                className={`group grid grid-cols-[1fr_74px] overflow-hidden rounded border bg-raised shadow-[0_12px_30px_rgba(11,29,51,0.08)] transition-colors ${
                  isHeadliner ? "border-gold ring-1 ring-gold" : "border-ink/25"
                }`}
              >
                <summary className="cursor-pointer list-none p-5 [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center gap-2 font-display text-lg font-extrabold uppercase">
                    {g.name}
                    {isHeadliner && (
                      <span className="rounded-sm bg-gold px-1.5 py-0.5 font-mono text-[0.58rem] tracking-wide text-[#241a02]">
                        ★ Headlining
                      </span>
                    )}
                  </div>
                  <div className="mt-1.5 hidden max-w-none text-sm text-ink-dim group-open:block">
                    {g.who}
                  </div>
                  <span
                    className={`mt-2.5 inline-block rounded-sm border px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wide ${tagClass[g.tag]}`}
                  >
                    {g.tag}
                  </span>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[0.62rem] uppercase tracking-wide text-ink-faint">
                      <span className="group-open:hidden">Tap for details ↓</span>
                      <span className="hidden group-open:inline">Tap to collapse ↑</span>
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        night.setHeadliner(isHeadliner ? null : g);
                      }}
                      className={`rounded-sm border px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wide transition-colors ${
                        isHeadliner
                          ? "border-gold text-gold-dim hover:bg-gold/10"
                          : "border-dodger text-dodger hover:bg-dodger hover:text-paper"
                      }`}
                    >
                      {isHeadliner ? "Remove headliner" : "Make headliner"}
                    </button>
                  </div>
                </summary>
                <div
                  className="stub-edge flex h-full self-stretch items-center justify-center border-l border-dashed border-ink/25"
                  aria-hidden
                >
                  <span className="rotate-180 font-mono text-xs tracking-wide text-ink-faint [writing-mode:vertical-rl]">
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
