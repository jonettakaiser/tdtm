"use client";

import { useState } from "react";

const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

export default function LiveNightCalculator() {
  const [guestsPerNight, setGuestsPerNight] = useState(60);
  const [lift, setLift] = useState(18);
  const [nights, setNights] = useState(2);
  const [split, setSplit] = useState(15);

  const total = guestsPerNight * lift * nights;
  const tdtmShare = total * (split / 100);
  const venue = total - tdtmShare;

  return (
    <div className="static rounded-md border border-ink/25 bg-raised-2 p-6 pb-6.5 md:sticky md:top-23">
      <h4 className="mb-4 font-mono text-xs uppercase tracking-wide text-ink-faint">
        Illustrative Revenue — Live Night
      </h4>

      <div className="mb-4">
        <label className="mb-1.5 flex justify-between text-sm text-ink-dim">
          Audience per night{" "}
          <b className="font-mono tabular-nums text-ink">{guestsPerNight}</b>
        </label>
        <input
          type="range"
          min={20}
          max={120}
          step={5}
          value={guestsPerNight}
          onChange={(e) => setGuestsPerNight(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="mb-1.5 flex justify-between text-sm text-ink-dim">
          Premium lift per guest <b className="font-mono tabular-nums text-ink">${lift}</b>
        </label>
        <input
          type="range"
          min={5}
          max={35}
          step={1}
          value={lift}
          onChange={(e) => setLift(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="mb-1.5 flex justify-between text-sm text-ink-dim">
          Nights per month <b className="font-mono tabular-nums text-ink">{nights}</b>
        </label>
        <input
          type="range"
          min={1}
          max={4}
          step={1}
          value={nights}
          onChange={(e) => setNights(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="mb-1.5 flex justify-between text-sm text-ink-dim">
          TDTM revenue share <b className="font-mono tabular-nums text-ink">{split}%</b>
        </label>
        <input
          type="range"
          min={0}
          max={30}
          step={1}
          value={split}
          onChange={(e) => setSplit(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mt-5 border-t border-dashed border-ink/25 pt-4.5">
        <div className="font-mono text-[0.64rem] uppercase tracking-wide text-ink-faint">
          Incremental monthly revenue
        </div>
        <div className="font-mono text-3xl tabular-nums text-gold">{fmt(total)}</div>
        <div className="mt-2.5 text-sm text-ink-dim">
          Pawn Shop keeps ~{fmt(venue)} · TDTM share ~{fmt(tdtmShare)}
        </div>
      </div>

      <div className="mt-3.5 font-mono text-xs leading-relaxed text-ink-faint">
        Illustrative model built on assumptions above — plug in Pawn Shop&rsquo;s real
        check averages and this recalculates instantly.
      </div>
    </div>
  );
}
