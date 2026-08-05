"use client";

import { money, useNight } from "./NightProvider";

export default function LiveNightCalculator() {
  const night = useNight();
  const floorPerNight = night.audience * night.lift;
  const likelyLow = Math.round(((floorPerNight * 4) / 3) / 100) * 100;
  const likelyHigh = Math.round(((floorPerNight * 12) / 7) / 100) * 100;

  return (
    <div className="ticket-cut overflow-hidden rounded-[1.3rem] bg-ink p-6 pb-7 text-paper shadow-[0_24px_70px_rgba(11,29,51,.24)] md:p-7">
      <div className="mb-6 flex items-center justify-between border-b border-dashed border-paper/20 pb-4">
        <h4 className="font-mono text-xs uppercase tracking-wide text-[#eef6ff]">
          Illustrative Revenue — Live Night
        </h4>
        <span className="font-mono text-[0.58rem] uppercase tracking-widest text-paper/40">Est. 2026</span>
      </div>

      <div className="space-y-5">
        <div>
          <label className="mb-2 flex justify-between text-sm text-paper/70">
            Guests per night
            <b className="font-mono tabular-nums text-paper">{night.audience}</b>
          </label>
          <input
            type="range"
            min={20}
            max={120}
            step={5}
            value={night.audience}
            onChange={(event) => night.setAudience(Number(event.target.value))}
            className="range-control w-full cursor-pointer"
          />
        </div>

        <div>
          <label className="mb-2 flex justify-between text-sm text-paper/70">
            Minimum spend per guest
            <b className="font-mono tabular-nums text-paper">{money(night.baseCheck)}</b>
          </label>
          <input
            type="range"
            min={20}
            max={100}
            step={5}
            value={night.baseCheck}
            onChange={(event) => night.setBaseCheck(Number(event.target.value))}
            className="range-control w-full cursor-pointer"
          />
        </div>

        <div>
          <label className="mb-2 flex justify-between text-sm text-paper/70">
            Nights per month
            <b className="font-mono tabular-nums text-paper">{night.nights}</b>
          </label>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            value={night.nights}
            onChange={(event) => night.setNights(Number(event.target.value))}
            className="range-control w-full cursor-pointer"
          />
        </div>

        <dl className="space-y-4 border-t border-paper/10 pt-5">
          <div className="flex items-start justify-between gap-5">
            <dt className="text-sm text-paper/70">Effective spend per guest</dt>
            <dd key={night.lift} className="number-pop font-mono text-sm font-bold text-paper">
              {money(night.lift)}
            </dd>
          </div>
          <div className="flex items-start justify-between gap-5">
            <dt className="text-sm text-paper/70">Floor revenue per night</dt>
            <dd
              key={floorPerNight}
              className="number-pop font-mono text-sm font-bold text-paper"
            >
              {money(floorPerNight)}
            </dd>
          </div>
          <div className="flex items-start justify-between gap-5">
            <dt className="text-sm text-paper/70">Likely actual (guests always go over)</dt>
            <dd className="text-right font-mono text-sm font-bold tabular-nums text-paper">
              {money(likelyLow)} to {money(likelyHigh)}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 border-t border-dashed border-paper/20 pt-5">
        <div className="font-mono text-[0.64rem] uppercase tracking-wide text-paper/45">
          Pawn Shop guaranteed floor
        </div>
        <div
          key={floorPerNight}
          className="number-pop font-display text-5xl leading-none tabular-nums text-[#eef6ff]"
        >
          {money(floorPerNight)}
          <span className="ml-2 text-2xl">per night</span>
        </div>
        <p className="mt-3 max-w-none text-sm text-paper/65">
          One night a month keeps it scarce. Scarce means it sells out.
        </p>
      </div>

      <div className="mt-4 font-mono text-[0.65rem] leading-relaxed text-paper/40">
        Illustrative model based on 75-seat capacity and $35 minimum spend. Plug in Pawn
        Shop&rsquo;s real numbers and this recalculates instantly.
      </div>
    </div>
  );
}
