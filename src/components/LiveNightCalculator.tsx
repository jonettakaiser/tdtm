"use client";

import { LIFT_RANGE, money, useNight } from "./NightProvider";

export default function LiveNightCalculator() {
  const night = useNight();

  return (
    <div className="static rounded-md border border-ink/25 bg-raised-2 p-6 pb-6.5 md:sticky md:top-23">
      <h4 className="mb-4 font-mono text-xs uppercase tracking-wide text-ink-faint">
        Illustrative Revenue — Live Night
      </h4>

      <div className="mb-4">
        <label className="mb-1.5 flex justify-between text-sm text-ink-dim">
          Audience per night{" "}
          <b className="font-mono tabular-nums text-ink">{night.audience}</b>
        </label>
        <input
          type="range"
          min={20}
          max={120}
          step={5}
          value={night.audience}
          onChange={(e) => night.setAudience(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mb-1.5">
        <label className="mb-1.5 flex justify-between text-sm text-ink-dim">
          A normal table already spends{" "}
          <b className="font-mono tabular-nums text-ink">{money(night.baseCheck)}</b>
        </label>
        <input
          type="range"
          min={0}
          max={80}
          step={2}
          value={night.baseCheck}
          onChange={(e) => night.setBaseCheck(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <div className="mb-1.5 flex items-baseline justify-between text-sm text-ink-dim">
          <span>
            Premium lift per guest{" "}
            <b className="font-mono tabular-nums text-ink">{money(night.lift)}</b>
          </span>
          {night.liftOverridden && (
            <button
              type="button"
              onClick={night.syncLift}
              className="font-mono text-[0.6rem] uppercase tracking-wide text-dodger underline decoration-dotted"
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
          className="w-full cursor-pointer"
        />
        <span className="mt-1 block font-mono text-[0.62rem] uppercase tracking-wide text-ink-faint">
          {night.liftOverridden
            ? "Manually set — drag to override, or sync back to your order."
            : `From your order to the left: ${money(night.orderTotal)} order − ${money(night.baseCheck)} baseline`}
        </span>
      </div>

      <div className="mb-4">
        <label className="mb-1.5 flex justify-between text-sm text-ink-dim">
          Nights per month <b className="font-mono tabular-nums text-ink">{night.nights}</b>
        </label>
        <input
          type="range"
          min={1}
          max={4}
          step={1}
          value={night.nights}
          onChange={(e) => night.setNights(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="mb-1.5 flex justify-between text-sm text-ink-dim">
          TDTM revenue share{" "}
          <b className="font-mono tabular-nums text-ink">{night.split}%</b>
        </label>
        <input
          type="range"
          min={0}
          max={30}
          step={1}
          value={night.split}
          onChange={(e) => night.setSplit(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mt-5 border-t border-dashed border-ink/25 pt-4.5">
        <div className="font-mono text-[0.64rem] uppercase tracking-wide text-ink-faint">
          Incremental monthly revenue
        </div>
        <div className="font-mono text-3xl tabular-nums text-gold">
          {money(night.liveNightRevenue)}
        </div>
        <div className="mt-2.5 text-sm text-ink-dim">
          Pawn Shop keeps ~{money(night.venueShare)} · TDTM share ~{money(night.tdtmShare)}
        </div>
      </div>

      <div className="mt-3.5 font-mono text-xs leading-relaxed text-ink-faint">
        Illustrative model built on assumptions above — plug in Pawn Shop&rsquo;s real
        check averages and this recalculates instantly.
      </div>
    </div>
  );
}
