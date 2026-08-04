import Reveal from "./Reveal";
import StatStrip from "./StatStrip";
import LiveNightMenu from "./LiveNightMenu";
import LiveNightCalculator from "./LiveNightCalculator";

export default function LiveNightsSection() {
  return (
    <section id="live-nights" className="section-shell overflow-hidden">
      <div className="section-inner">
        <Reveal className="mb-14 md:grid md:grid-cols-[1fr_.7fr] md:items-end md:gap-12">
          <div>
          <span className="eyebrow">
            03 — Pillar 01, In Detail
          </span>
          <h2 className="section-title">
            Special-Guest Live Podcast Nights
          </h2>
          </div>
          <p className="section-lede">
            Melissa records a live episode with a special guest in front of a ticketed or
            door-priced audience. Order the collab menu below and the revenue model
            recalculates on the right — no spreadsheet required.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal from="left" className="clubhouse-panel p-5 md:p-7">
            <StatStrip
              stats={[
                { value: "60–90", label: "Seats / audience" },
                { value: "2–4", label: "Nights per month" },
                { value: "4–6", label: "Menu items, renamed" },
              ]}
            />
            <LiveNightMenu />
          </Reveal>

          <Reveal from="right">
            <LiveNightCalculator />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
