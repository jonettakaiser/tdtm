import Reveal from "./Reveal";
import { guests, type GuestTag } from "@/data/guests";

const tagClass: Record<GuestTag, string> = {
  "Pawn Shop Tie-In": "border-gold bg-gold text-[#241a02]",
  "TDTM Alum": "border-dodger-soft text-dodger",
  "Target Guest": "border-ink/25 text-ink-faint",
};

export default function Lineup() {
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
            Tap a card for who they are.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {guests.map((g) => (
            <details
              key={g.no}
              className="group grid grid-cols-[1fr_74px] overflow-hidden rounded border border-ink/25 bg-raised shadow-[0_12px_30px_rgba(11,29,51,0.08)]"
            >
              <summary className="cursor-pointer list-none p-5 [&::-webkit-details-marker]:hidden">
                <div className="font-display text-lg font-extrabold uppercase">
                  {g.name}
                </div>
                <div className="mt-1.5 hidden max-w-none text-sm text-ink-dim group-open:block">
                  {g.who}
                </div>
                <span
                  className={`mt-2.5 inline-block rounded-sm border px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wide ${tagClass[g.tag]}`}
                >
                  {g.tag}
                </span>
                <div className="mt-3 font-mono text-[0.62rem] uppercase tracking-wide text-ink-faint">
                  <span className="group-open:hidden">Tap for details ↓</span>
                  <span className="hidden group-open:inline">Tap to collapse ↑</span>
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
          ))}
        </Reveal>
      </div>
    </section>
  );
}
