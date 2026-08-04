"use client";

import { PRICE_RANGE, money, useNight } from "./NightProvider";

export default function WatchPartyCalculator() {
  const night = useNight();

  return (
    <div className="static rounded-md border border-ink/25 bg-raised-2 p-6 pb-6.5 md:sticky md:top-23">
      <h4 className="mb-4 font-mono text-xs uppercase tracking-wide text-ink-faint">
        Illustrative Revenue — Watch Party
      </h4>

      <div className="mb-4">
        <div className="mb-1.5 flex items-baseline justify-between text-sm text-ink-dim">
          <span>
            Ticket price <b className="font-mono tabular-nums text-ink">${night.price}</b>
          </span>
          {night.priceOverridden && (
            <button
              type="button"
              onClick={night.syncPrice}
              className="font-mono text-[0.6rem] uppercase tracking-wide text-dodger underline decoration-dotted"
            >
              Sync to ticket
            </button>
          )}
        </div>
        <input
          type="range"
          min={PRICE_RANGE.min}
          max={PRICE_RANGE.max}
          step={5}
          value={night.price}
          onChange={(e) => night.setPrice(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
        <span className="mt-1 block font-mono text-[0.62rem] uppercase tracking-wide text-ink-faint">
          {night.priceOverridden
            ? "Manually set — drag to override, or sync back to the ticket to the left."
            : "Following what you toggled on to the left."}
        </span>
      </div>

      <div className="mb-4">
        <label className="mb-1.5 flex justify-between text-sm text-ink-dim">
          Room capacity <b className="font-mono tabular-nums text-ink">{night.capacity}</b>
        </label>
        <input
          type="range"
          min={15}
          max={80}
          step={5}
          value={night.capacity}
          onChange={(e) => night.setCapacity(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="mb-1.5 flex justify-between text-sm text-ink-dim">
          Watch parties per month{" "}
          <b className="font-mono tabular-nums text-ink">{night.events}</b>
        </label>
        <input
          type="range"
          min={1}
          max={15}
          step={1}
          value={night.events}
          onChange={(e) => night.setEvents(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mt-5 border-t border-dashed border-ink/25 pt-4.5">
        <div className="font-mono text-[0.64rem] uppercase tracking-wide text-ink-faint">
          Monthly ticket revenue
        </div>
        <div className="font-mono text-3xl tabular-nums text-gold">
          {money(night.watchPartyRevenue)}
        </div>
        <div className="mt-2.5 text-sm text-ink-dim">
          Before catering &amp; bar upsell on top of the ticket
        </div>
      </div>

      <div className="mt-3.5 font-mono text-xs leading-relaxed text-ink-faint">
        Illustrative model — swap in Pawn Shop&rsquo;s real room capacity and catering cost
        to pressure-test margin.
      </div>
    </div>
  );
}
