"use client";

import { useState } from "react";

const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

export default function WatchPartyCalculator() {
  const [price, setPrice] = useState(45);
  const [capacity, setCapacity] = useState(40);
  const [events, setEvents] = useState(6);

  const total = price * capacity * events;

  return (
    <div className="static rounded-md border border-ink/25 bg-raised-2 p-6 pb-6.5 md:sticky md:top-23">
      <h4 className="mb-4 font-mono text-xs uppercase tracking-wide text-ink-faint">
        Illustrative Revenue — Watch Party
      </h4>

      <div className="mb-4">
        <label className="mb-1.5 flex justify-between text-sm text-ink-dim">
          Ticket price <b className="font-mono tabular-nums text-ink">${price}</b>
        </label>
        <input
          type="range"
          min={25}
          max={85}
          step={5}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="mb-1.5 flex justify-between text-sm text-ink-dim">
          Room capacity <b className="font-mono tabular-nums text-ink">{capacity}</b>
        </label>
        <input
          type="range"
          min={15}
          max={80}
          step={5}
          value={capacity}
          onChange={(e) => setCapacity(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="mb-1.5 flex justify-between text-sm text-ink-dim">
          Watch parties per month <b className="font-mono tabular-nums text-ink">{events}</b>
        </label>
        <input
          type="range"
          min={1}
          max={15}
          step={1}
          value={events}
          onChange={(e) => setEvents(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mt-5 border-t border-dashed border-ink/25 pt-4.5">
        <div className="font-mono text-[0.64rem] uppercase tracking-wide text-ink-faint">
          Monthly ticket revenue
        </div>
        <div className="font-mono text-3xl tabular-nums text-gold">{fmt(total)}</div>
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
