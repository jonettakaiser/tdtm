"use client";

import { liveNightMenu } from "@/data/menu";
import { money, useNight } from "./NightProvider";

export default function LiveNightMenu() {
  const night = useNight();

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <h3 className="max-w-[16ch] text-3xl leading-none uppercase text-ink">
          Build the collab menu
        </h3>
        {night.orderCount > 0 && (
          <button
            type="button"
            onClick={night.resetOrder}
            className="shrink-0 rounded-full border border-ink/20 px-3 py-1.5 font-mono text-[0.6rem] font-bold uppercase tracking-wide text-ink-faint transition hover:border-dodger hover:text-dodger"
          >
            Reset order
          </button>
        )}
      </div>

      <ul className="mt-5 space-y-2">
        {liveNightMenu.map((item) => {
          const qty = night.order[item.id] ?? 0;
          return (
            <li
              key={item.id}
              className={`flex items-center justify-between gap-3.5 rounded-xl border px-4 py-3.5 transition-all ${
                qty > 0
                  ? "border-dodger bg-dodger-soft/55 shadow-[3px_3px_0_var(--color-dodger)]"
                  : "border-ink/10 bg-paper hover:border-ink/25"
              }`}
            >
              <div className="min-w-0">
                <div className="font-display text-xl uppercase leading-none text-ink">{item.name}</div>
                <span className="mt-0.5 block font-mono text-[0.64rem] uppercase tracking-wide text-dodger">
                  {item.tag}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="whitespace-nowrap font-mono tabular-nums text-gold">
                  {item.price}
                </span>
                <div className="flex items-center overflow-hidden rounded-full border border-ink/25 bg-paper font-mono text-sm shadow-sm">
                  <button
                    type="button"
                    aria-label={`Remove one ${item.name}`}
                    onClick={() => night.removeItem(item.id)}
                    disabled={qty === 0}
                    className="size-8 text-ink-dim transition-colors hover:bg-raised-2 disabled:opacity-30"
                  >
                    −
                  </button>
                  <span key={qty} className="number-pop w-7 text-center tabular-nums text-ink">{qty}</span>
                  <button
                    type="button"
                    aria-label={`Add one ${item.name}`}
                    onClick={() => night.addItem(item.id)}
                    className="size-8 text-ink-dim transition-colors hover:bg-dodger hover:text-paper"
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="ticket-cut mt-5 flex items-center justify-between overflow-hidden rounded-xl bg-ink px-5 py-4 text-paper">
        <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
          Table order total
        </span>
        <span key={night.orderTotal} className="number-pop font-display text-3xl tabular-nums text-gold">
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
