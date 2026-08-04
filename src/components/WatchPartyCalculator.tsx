"use client";

import { PRICE_RANGE, money, useNight } from "./NightProvider";

export default function WatchPartyCalculator() {
  const night = useNight();

  return (
    <div className="ticket-cut static overflow-hidden rounded-[1.3rem] bg-ink p-6 pb-7 text-paper shadow-[0_24px_70px_rgba(11,29,51,.24)] md:sticky md:top-20 md:p-7">
      <div className="mb-6 flex items-center justify-between border-b border-dashed border-paper/20 pb-4">
        <h4 className="font-mono text-xs uppercase tracking-wide text-gold">
          Watch Party Receipt
        </h4>
        <span className="font-mono text-[0.58rem] uppercase tracking-widest text-paper/40">Admit all</span>
      </div>

      <div className="mb-4">
        <div className="mb-2 flex items-baseline justify-between text-sm text-paper/70">
          <span>
            Ticket price <b className="font-mono tabular-nums text-paper">${night.price}</b>
          </span>
          {night.priceOverridden && (
            <button
              type="button"
              onClick={night.syncPrice}
              className="font-mono text-[0.6rem] uppercase tracking-wide text-gold underline decoration-dotted"
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
          className="range-control w-full cursor-pointer"
        />
        <span className="mt-2 block font-mono text-[0.58rem] uppercase tracking-wide text-paper/40">
          {night.priceOverridden
            ? "Manually set — drag to override, or sync back to the ticket to the left."
            : "Following what you toggled on to the left."}
        </span>
      </div>

      <div className="mb-4">
        <label className="mb-2 flex justify-between text-sm text-paper/70">
          Room capacity <b className="font-mono tabular-nums text-paper">{night.capacity}</b>
        </label>
        <input
          type="range"
          min={15}
          max={80}
          step={5}
          value={night.capacity}
          onChange={(e) => night.setCapacity(Number(e.target.value))}
          className="range-control w-full cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 flex justify-between text-sm text-paper/70">
          Watch parties per month{" "}
          <b className="font-mono tabular-nums text-paper">{night.events}</b>
        </label>
        <input
          type="range"
          min={1}
          max={15}
          step={1}
          value={night.events}
          onChange={(e) => night.setEvents(Number(e.target.value))}
          className="range-control w-full cursor-pointer"
        />
      </div>

      <div className="mt-6 border-t border-dashed border-paper/20 pt-5">
        <div className="font-mono text-[0.64rem] uppercase tracking-wide text-paper/45">
          Monthly ticket revenue
        </div>
        <div key={night.watchPartyRevenue} className="number-pop font-display text-6xl leading-none tabular-nums text-gold">
          {money(night.watchPartyRevenue)}
        </div>
        <div className="mt-3 text-sm text-paper/65">
          Before catering &amp; bar upsell on top of the ticket
        </div>
      </div>

      <div className="mt-4 font-mono text-[0.65rem] leading-relaxed text-paper/40">
        Illustrative model — swap in Pawn Shop&rsquo;s real room capacity and catering cost
        to pressure-test margin.
      </div>
    </div>
  );
}
