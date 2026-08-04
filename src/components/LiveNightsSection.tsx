import Reveal from "./Reveal";
import StatStrip from "./StatStrip";
import LiveNightMenu from "./LiveNightMenu";
import LiveNightCalculator from "./LiveNightCalculator";
import LiveNightTakeHome from "./LiveNightTakeHome";

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
            door-priced audience. A seven-item collab menu gives the night its own identity
            while a minimum spend guarantees the room.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal from="left" className="clubhouse-panel p-5 md:p-7">
            <StatStrip
              stats={[
                { value: "75", label: "Seats / audience" },
                { value: "1", label: "Night per month" },
                { value: "7", label: "Menu items (4 food, 2 cocktails, 1 mocktail)" },
              ]}
            />
            <LiveNightMenu />
          </Reveal>

          <Reveal from="right">
            <LiveNightCalculator />
          </Reveal>
        </div>
        <Reveal className="mt-12">
          <LiveNightTakeHome />
        </Reveal>
      </div>
    </section>
  );
}
