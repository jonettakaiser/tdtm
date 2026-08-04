"use client";

import { liveNightMenu } from "@/data/menu";
import { money, useNight } from "./NightProvider";

export default function LiveNightMenu() {
  const night = useNight();

  return (
    <div>
      <div className="mt-4.5 flex items-center justify-between border-t border-ink/10 pt-3.5">
        <h3 className="text-lg uppercase">
          Build the collab menu (concepts — for the kitchen to riff on)
        </h3>
        {night.orderCount > 0 && (
          <button
            type="button"
            onClick={night.resetOrder}
            className="shrink-0 font-mono text-[0.62rem] uppercase tracking-wide text-ink-faint underline decoration-dotted hover:text-dodger"
          >
            Reset order
          </button>
        )}
      </div>

      <ul>
        {liveNightMenu.map((item) => {
          const qty = night.order[item.id] ?? 0;
          return (
            <li
              key={item.id}
              className={`flex items-center justify-between gap-3.5 border-b border-ink/10 py-3.5 transition-colors ${
                qty > 0 ? "bg-dodger-soft/40" : ""
              }`}
            >
              <div className="min-w-0">
                <div className="font-bold">{item.name}</div>
                <span className="mt-0.5 block font-mono text-[0.64rem] uppercase tracking-wide text-dodger">
                  {item.tag}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="whitespace-nowrap font-mono tabular-nums text-gold">
                  {item.price}
                </span>
                <div className="flex items-center overflow-hidden rounded border border-ink/25 font-mono text-sm">
                  <button
                    type="button"
                    aria-label={`Remove one ${item.name}`}
                    onClick={() => night.removeItem(item.id)}
                    disabled={qty === 0}
                    className="w-7 py-1 text-ink-dim transition-colors hover:bg-raised-2 disabled:opacity-30"
                  >
                    −
                  </button>
                  <span className="w-6 text-center tabular-nums text-ink">{qty}</span>
                  <button
                    type="button"
                    aria-label={`Add one ${item.name}`}
                    onClick={() => night.addItem(item.id)}
                    className="w-7 py-1 text-ink-dim transition-colors hover:bg-raised-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-3.5 flex items-center justify-between rounded-md border border-dashed border-ink/25 bg-raised px-4 py-3">
        <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
          Table order total
        </span>
        <span className="font-mono text-lg tabular-nums text-gold">
          {money(night.orderTotal)}
        </span>
      </div>

      <p className="mt-2.5 font-mono text-sm text-ink-faint">
        Names, items and prices are starting points for a joint tasting with the kitchen —
        not final. Order flows straight into the revenue model on the right.
      </p>
    </div>
  );
}
