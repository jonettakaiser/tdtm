"use client";

import { defaultHeadliner, money, useNight } from "./NightProvider";

export default function TicketStub() {
  const night = useNight();
  const guestName = night.headliner?.name ?? defaultHeadliner.name;

  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-md border border-ink/25 bg-raised shadow-[0_16px_36px_rgba(11,29,51,0.1)] sm:grid-cols-[1fr_140px]">
      <div className="p-6 sm:p-7">
        <span className="mb-2 block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold-dim">
          Pawn Shop × Talk Dodgers To Me
        </span>
        <h3 className="font-display text-2xl font-extrabold uppercase text-ink">
          The night you just built
        </h3>

        <div className="mt-4.5 grid grid-cols-2 gap-x-6 gap-y-3.5 sm:grid-cols-4">
          <div>
            <b className="mb-1 block font-mono text-[0.6rem] uppercase tracking-wide text-ink-faint">
              Headliner
            </b>
            <span className="text-sm text-ink">{guestName}</span>
          </div>
          <div>
            <b className="mb-1 block font-mono text-[0.6rem] uppercase tracking-wide text-ink-faint">
              Live nights
            </b>
            <span className="font-mono text-sm tabular-nums text-ink">
              {money(night.liveNightRevenue)}/mo
            </span>
          </div>
          <div>
            <b className="mb-1 block font-mono text-[0.6rem] uppercase tracking-wide text-ink-faint">
              Watch parties
            </b>
            <span className="font-mono text-sm tabular-nums text-ink">
              {money(night.watchPartyRevenue)}/mo
            </span>
          </div>
          <div>
            <b className="mb-1 block font-mono text-[0.6rem] uppercase tracking-wide text-gold-dim">
              Combined total
            </b>
            <span className="font-mono text-sm font-bold tabular-nums text-gold">
              {money(night.monthlyTotal)}/mo
            </span>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-end gap-4 border-t border-dashed border-ink/25 pt-4.5">
          <label className="flex flex-col gap-1">
            <span className="font-mono text-[0.6rem] uppercase tracking-wide text-ink-faint">
              Pencil in a pilot date
            </span>
            <input
              type="date"
              value={night.date}
              onChange={(e) => night.setDate(e.target.value)}
              className="rounded border border-ink/25 bg-paper px-2.5 py-1.5 font-mono text-sm text-ink"
            />
          </label>
          <span className="font-mono text-[0.62rem] text-ink-faint">
            Illustrative — built from the choices you made above, editable any time before
            the pilot.
          </span>
        </div>
      </div>

      <div
        className="stub-edge flex items-center justify-center gap-2 border-t border-dashed border-ink/25 bg-raised-2 py-4 sm:border-t-0 sm:border-l"
        aria-hidden
      >
        <span className="font-mono text-xs tracking-[0.2em] text-ink-faint sm:rotate-180 sm:[writing-mode:vertical-rl]">
          ADMIT ONE · PILOT NIGHT
        </span>
      </div>
    </div>
  );
}
