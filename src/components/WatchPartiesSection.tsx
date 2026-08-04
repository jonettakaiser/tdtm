import Reveal from "./Reveal";
import StatStrip from "./StatStrip";
import WatchPartyIncludes from "./WatchPartyIncludes";
import WatchPartyCalculator from "./WatchPartyCalculator";

export default function WatchPartiesSection() {
  return (
    <section id="watch-parties" className="section-shell overflow-hidden bg-raised">
      <div className="section-inner">
        <Reveal className="mb-14 md:grid md:grid-cols-[1fr_.7fr] md:items-end md:gap-12">
          <div>
          <span className="eyebrow">
            04 — Pillar 02, In Detail
          </span>
          <h2 className="section-title">Ticketed Dodgers Watch Parties</h2>
          </div>
          <p className="section-lede">
            A private room, a capped guest list, a big screen, and a game everyone in the
            room already cares about. Toggle what&rsquo;s in the ticket and watch the price
            — and the revenue on the right — respond.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal from="left" className="clubhouse-panel bg-paper p-5 md:p-7">
            <StatStrip
              stats={[
                { value: "15–80", label: "Seats / private room" },
                { value: "Home", label: "Games, in-season" },
                { value: "100%", label: "Of ticket rev. incremental" },
              ]}
            />
            <WatchPartyIncludes />
          </Reveal>

          <Reveal from="right">
            <WatchPartyCalculator />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
