"use client";

import { watchPartyIncludes } from "@/data/menu";
import { useNight } from "./NightProvider";

export default function WatchPartyIncludes() {
  const night = useNight();

  return (
    <div>
      <h3 className="max-w-[14ch] text-3xl leading-none uppercase text-ink">
        Build the ticket
      </h3>

      <ul className="mt-5 space-y-2">
        {watchPartyIncludes.map((item) => {
          const checked = night.includes.includes(item.id);
          return (
            <li
              key={item.id}
              className={`rounded-xl border transition-all ${
                checked
                  ? "border-dodger bg-dodger-soft/55 shadow-[3px_3px_0_var(--color-dodger)]"
                  : "border-ink/10 bg-paper opacity-65"
              }`}
            >
              <label className="flex cursor-pointer items-start justify-between gap-3.5 p-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => night.toggleInclude(item.id)}
                    className="mt-0.5 size-5 cursor-pointer accent-dodger"
                  />
                  <div>
                    <div className={`font-display text-xl uppercase leading-none ${checked ? "text-ink" : "text-ink-faint line-through"}`}>
                      {item.name}
                    </div>
                    <span className="mt-0.5 block font-mono text-[0.64rem] uppercase tracking-wide text-dodger">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="whitespace-nowrap font-mono tabular-nums text-gold">
                  {item.premium ? item.price : `+${item.price}/hd`}
                </div>
              </label>
            </li>
          );
        })}
      </ul>

      <div className="ticket-cut mt-5 flex items-center justify-between overflow-hidden rounded-xl bg-ink px-5 py-4 text-paper">
        <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
          Suggested ticket price
        </span>
        <span key={night.priceFromIncludes} className="number-pop font-display text-3xl tabular-nums text-gold">${night.priceFromIncludes}</span>
      </div>

      <p className="mt-2.5 font-mono text-sm text-ink-faint">
        Bar spend beyond what&rsquo;s included in the ticket is upside on top of the numbers
        to the right.
      </p>
    </div>
  );
}
