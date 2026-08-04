import Reveal from "./Reveal";
import StatStrip from "./StatStrip";
import MenuList from "./MenuList";
import LiveNightCalculator from "./LiveNightCalculator";
import { liveNightMenu } from "@/data/menu";

export default function LiveNightsSection() {
  return (
    <section id="live-nights" className="border-t border-ink/10 py-22">
      <div className="mx-auto max-w-[1180px] px-7 sm:px-4">
        <Reveal className="mb-11 max-w-[74ch]">
          <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gold-dim">
            03 — Pillar 01, In Detail
          </span>
          <h2 className="text-4xl uppercase sm:text-3xl">
            Special-Guest Live Podcast Nights
          </h2>
          <p className="mt-3.5 max-w-[62ch] text-lg text-ink-dim">
            Melissa records a live episode with a special guest in front of a ticketed or
            door-priced audience. The kitchen builds a short, renamed menu around it — and
            prices it like the event it is.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-11 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <StatStrip
              stats={[
                { value: "60–90", label: "Seats / audience" },
                { value: "2–4", label: "Nights per month" },
                { value: "4–6", label: "Menu items, renamed" },
              ]}
            />
            <h3 className="text-lg uppercase">
              Sample collab menu (concepts — for the kitchen to riff on)
            </h3>
            <MenuList items={liveNightMenu} />
            <p className="mt-2.5 font-mono text-sm text-ink-faint">
              Names, items and prices are starting points for a joint tasting with the
              kitchen — not final.
            </p>
          </Reveal>

          <Reveal>
            <LiveNightCalculator />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
