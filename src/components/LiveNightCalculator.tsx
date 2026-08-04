"use client";

import { LIFT_RANGE, money, useNight } from "./NightProvider";

export default function LiveNightCalculator() {
  const night = useNight();

  return (
    <div className="ticket-cut static overflow-hidden rounded-[1.3rem] bg-ink p-6 pb-7 text-paper shadow-[0_24px_70px_rgba(11,29,51,.24)] md:sticky md:top-20 md:p-7">
      <div className="mb-6 flex items-center justify-between border-b border-dashed border-paper/20 pb-4">
        <h4 className="font-mono text-xs uppercase tracking-wide text-gold">
          Live Night Receipt
        </h4>
        <span className="font-mono text-[0.58rem] uppercase tracking-widest text-paper/40">Est. 2026</span>
      </div>

      <div className="mb-4">
        <label className="mb-2 flex justify-between text-sm text-paper/70">
          Audience per night{" "}
          <b className="font-mono tabular-nums text-paper">{night.audience}</b>
        </label>
        <input
          type="range"
          min={20}
          max={120}
          step={5}
          value={night.audience}
          onChange={(e) => night.setAudience(Number(e.target.value))}
          className="range-control w-full cursor-pointer"
        />
      </div>

      <div className="mb-1.5">
        <label className="mb-2 flex justify-between text-sm text-paper/70">
          A normal table already spends{" "}
          <b className="font-mono tabular-nums text-paper">{money(night.baseCheck)}</b>
        </label>
        <input
          type="range"
          min={0}
          max={80}
          step={2}
          value={night.baseCheck}
          onChange={(e) => night.setBaseCheck(Number(e.target.value))}
          className="range-control w-full cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <div className="mb-2 flex items-baseline justify-between text-sm text-paper/70">
          <span>
            Premium lift per guest{" "}
            <b className="font-mono tabular-nums text-paper">{money(night.lift)}</b>
          </span>
          {night.liftOverridden && (
            <button
              type="button"
              onClick={night.syncLift}
              className="font-mono text-[0.6rem] uppercase tracking-wide text-gold underline decoration-dotted"
            >
              Sync to order
            </button>
          )}
        </div>
        <input
          type="range"
          min={LIFT_RANGE.min}
          max={LIFT_RANGE.max}
          step={1}
          value={night.lift}
          onChange={(e) => night.setLift(Number(e.target.value))}
          className="range-control w-full cursor-pointer"
        />
        <span className="mt-2 block font-mono text-[0.58rem] uppercase tracking-wide text-paper/40">
          {night.liftOverridden
            ? "Manually set — drag to override, or sync back to your order."
            : `From your order to the left: ${money(night.orderTotal)} order − ${money(night.baseCheck)} baseline`}
        </span>
      </div>

      <div className="mb-4">
        <label className="mb-2 flex justify-between text-sm text-paper/70">
          Nights per month <b className="font-mono tabular-nums text-paper">{night.nights}</b>
        </label>
        <input
          type="range"
          min={1}
          max={4}
          step={1}
          value={night.nights}
          onChange={(e) => night.setNights(Number(e.target.value))}
          className="range-control w-full cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 flex justify-between text-sm text-paper/70">
          TDTM revenue share{" "}
          <b className="font-mono tabular-nums text-paper">{night.split}%</b>
        </label>
        <input
          type="range"
          min={0}
          max={30}
          step={1}
          value={night.split}
          onChange={(e) => night.setSplit(Number(e.target.value))}
          className="range-control w-full cursor-pointer"
        />
      </div>

      <div className="mt-6 border-t border-dashed border-paper/20 pt-5">
        <div className="font-mono text-[0.64rem] uppercase tracking-wide text-paper/45">
          Incremental monthly revenue
        </div>
        <div key={night.liveNightRevenue} className="number-pop font-display text-6xl leading-none tabular-nums text-gold">
          {money(night.liveNightRevenue)}
        </div>
        <div className="mt-3 text-sm text-paper/65">
          Pawn Shop keeps ~{money(night.venueShare)} · TDTM share ~{money(night.tdtmShare)}
        </div>
      </div>

      <div className="mt-4 font-mono text-[0.65rem] leading-relaxed text-paper/40">
        Illustrative model built on assumptions above — plug in Pawn Shop&rsquo;s real
        check averages and this recalculates instantly.
      </div>
    </div>
  );
}
