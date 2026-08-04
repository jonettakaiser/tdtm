import Reveal from "./Reveal";
import StatStrip from "./StatStrip";
import LiveNightMenu from "./LiveNightMenu";
import LiveNightCalculator from "./LiveNightCalculator";

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
            door-priced audience. Order the collab menu below and the revenue model
            recalculates on the right — no spreadsheet required.
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
            <LiveNightMenu />
          </Reveal>

          <Reveal>
            <LiveNightCalculator />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
