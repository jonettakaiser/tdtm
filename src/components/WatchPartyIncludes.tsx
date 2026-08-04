"use client";

import { watchPartyIncludes } from "@/data/menu";
import { useNight } from "./NightProvider";

export default function WatchPartyIncludes() {
  const night = useNight();

  return (
    <div>
      <h3 className="mt-4.5 border-t border-ink/10 pt-3.5 text-lg uppercase">
        Build the ticket — toggle what&rsquo;s included
      </h3>

      <ul>
        {watchPartyIncludes.map((item) => {
          const checked = night.includes.includes(item.id);
          return (
            <li key={item.id} className="border-b border-ink/10 py-3.5">
              <label className="flex cursor-pointer items-start justify-between gap-3.5">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => night.toggleInclude(item.id)}
                    className="mt-1 size-4 cursor-pointer accent-gold"
                  />
                  <div>
                    <div className={`font-bold ${checked ? "" : "text-ink-faint line-through"}`}>
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

      <div className="mt-3.5 flex items-center justify-between rounded-md border border-dashed border-ink/25 bg-raised px-4 py-3">
        <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
          Suggested ticket price
        </span>
        <span className="font-mono text-lg tabular-nums text-gold">${night.priceFromIncludes}</span>
      </div>

      <p className="mt-2.5 font-mono text-sm text-ink-faint">
        Bar spend beyond what&rsquo;s included in the ticket is upside on top of the numbers
        to the right.
      </p>
    </div>
  );
}
