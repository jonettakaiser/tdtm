"use client";

import { defaultHeadliner, money, useNight } from "./NightProvider";

export default function TicketStub() {
  const night = useNight();
  const guestName = night.headliner?.name ?? defaultHeadliner.name;

  return (
    <div className="ticket-cut grid grid-cols-1 overflow-hidden rounded-[1.5rem] border-2 border-ink bg-paper text-ink shadow-[10px_12px_0_var(--color-gold)] sm:grid-cols-[1fr_150px]">
      <div>
        <div className="flex items-center justify-between bg-dodger px-6 py-3 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-paper sm:px-8">
          <span>Pawn Shop × Talk Dodgers To Me</span>
          <span>Admit one night</span>
        </div>
        <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <span className="mb-2 block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold-dim">
              Your custom residency
            </span>
            <h3 className="font-display text-5xl leading-[.85] uppercase text-dodger md:text-7xl">
              The night<br />you built
            </h3>
          </div>
          <span className="stamp">Ready for<br />first pitch</span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-dashed border-ink/25 py-6 sm:grid-cols-4">
          <div>
            <b className="mb-1 block font-mono text-[0.6rem] uppercase tracking-wide text-ink-faint">
              Headliner
            </b>
            <span className="font-display text-xl uppercase leading-none text-ink">{guestName}</span>
          </div>
          <div>
            <b className="mb-1 block font-mono text-[0.6rem] uppercase tracking-wide text-ink-faint">
              Live nights
            </b>
            <span key={night.liveNightRevenue} className="number-pop font-mono text-base tabular-nums text-ink">
              {money(night.liveNightRevenue)}/mo
            </span>
          </div>
          <div>
            <b className="mb-1 block font-mono text-[0.6rem] uppercase tracking-wide text-ink-faint">
              Watch parties
            </b>
            <span key={night.watchPartyRevenue} className="number-pop font-mono text-base tabular-nums text-ink">
              {money(night.watchPartyRevenue)}/mo
            </span>
          </div>
          <div>
            <b className="mb-1 block font-mono text-[0.6rem] uppercase tracking-wide text-gold-dim">
              Combined total
            </b>
            <span key={night.monthlyTotal} className="number-pop font-display text-3xl leading-none tabular-nums text-gold-dim">
              {money(night.monthlyTotal)}/mo
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-end gap-4">
          <label className="flex flex-col gap-1">
            <span className="font-mono text-[0.6rem] uppercase tracking-wide text-ink-faint">
              Pencil in a pilot date
            </span>
            <input
              type="date"
              value={night.date}
              onChange={(e) => night.setDate(e.target.value)}
              className="rounded-full border border-ink/25 bg-raised px-4 py-2 font-mono text-sm text-ink"
            />
          </label>
          <span className="max-w-md font-mono text-[0.62rem] leading-relaxed text-ink-faint">
            Illustrative — built from the choices you made above, editable any time before
            the pilot.
          </span>
        </div>
        </div>
      </div>

      <div
        className="stub-edge flex items-center justify-center gap-2 border-t border-dashed border-ink/25 bg-raised-2 py-5 sm:border-t-0 sm:border-l"
        aria-hidden
      >
        <span className="font-mono text-xs tracking-[0.2em] text-ink-faint sm:rotate-180 sm:[writing-mode:vertical-rl]">
          ADMIT ONE · PILOT NIGHT
        </span>
      </div>
    </div>
  );
}
