"use client";

import { defaultHeadliner, money, useNight } from "./NightProvider";

export default function Hero() {
  const night = useNight();
  const guestName = night.headliner?.name ?? defaultHeadliner.name;
  const guestPicked = night.headliner !== null;

  return (
    <section className="mx-auto max-w-[1180px] px-7 pt-16 pb-12 sm:px-4">
      <span className="mb-4 block font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gold-dim">
        A Partnership Proposal · Prepared for Pawn Shop, Melrose
      </span>
      <h1 className="font-display text-5xl leading-none font-extrabold uppercase sm:text-4xl">
        <span className="text-dodger">Two Nights a Month.</span>
        <span className="mt-1 block text-ink">One Full Room.</span>
      </h1>
      <p className="mt-5 max-w-[62ch] text-lg text-ink-dim">
        Talk Dodgers To Me is pitching a residency: special-guest live podcast tapings and
        ticketed private-room Dodgers watch parties, built to sell out Pawn Shop on nights
        that are currently empty. Don&rsquo;t take our word for it — build a night below and
        watch the scoreboard move.
      </p>

      <a
        href="#lineup"
        className="mt-7 inline-flex items-center gap-2 rounded-md border border-dodger bg-dodger px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-white hover:text-dodger"
      >
        Build your night ↓
      </a>

      <div className="mt-9 overflow-hidden rounded-md border border-ink/25 bg-ink font-mono text-paper shadow-[0_16px_36px_rgba(11,29,51,0.18)]">
        <div className="flex items-center justify-between border-b border-paper/15 bg-black/20 px-5 py-2.5">
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
            ⚾ Scoreboard — Your Night
          </span>
          <span className="text-[0.62rem] uppercase tracking-wide text-paper/50">
            {guestPicked ? "Live" : "Suggested"}
          </span>
        </div>
        <div className="flex flex-wrap">
          <div className="min-w-[150px] flex-1 border-r border-paper/15 px-5 py-4">
            <b className="mb-1 block text-[0.62rem] uppercase tracking-wide text-paper/50">
              Headliner
            </b>
            <span className="text-sm text-paper">{guestName}</span>
          </div>
          <div className="min-w-[150px] flex-1 border-r border-paper/15 px-5 py-4">
            <b className="mb-1 block text-[0.62rem] uppercase tracking-wide text-paper/50">
              Live Night / mo
            </b>
            <span className="tabular-nums text-sm text-paper">
              {money(night.liveNightRevenue)}
            </span>
          </div>
          <div className="min-w-[150px] flex-1 border-r border-paper/15 px-5 py-4">
            <b className="mb-1 block text-[0.62rem] uppercase tracking-wide text-paper/50">
              Watch Parties / mo
            </b>
            <span className="tabular-nums text-sm text-paper">
              {money(night.watchPartyRevenue)}
            </span>
          </div>
          <div className="min-w-[150px] flex-1 px-5 py-4">
            <b className="mb-1 block text-[0.62rem] uppercase tracking-wide text-gold">
              Total / mo
            </b>
            <span className="tabular-nums text-xl font-bold text-gold">
              {money(night.monthlyTotal)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap overflow-hidden rounded-md border border-ink/25 font-mono text-xs">
        {[
          { label: "Host", value: "Melissa, Talk Dodgers To Me" },
          { label: "Venue", value: "Pawn Shop — Melrose Ave, LA" },
          { label: "Distribution", value: "YouTube + social, every episode" },
          { label: "Ask", value: "2 pilot nights, revenue-share terms" },
        ].map((item, i) => (
          <div
            key={item.label}
            className={`min-w-[160px] flex-1 px-5 py-3.5 ${
              i !== 3 ? "border-r border-ink/25" : ""
            }`}
          >
            <b className="mb-1 block text-[0.62rem] uppercase tracking-wide text-ink-faint">
              {item.label}
            </b>
            <span className="text-sm text-ink">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
