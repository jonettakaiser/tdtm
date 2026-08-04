import Reveal from "./Reveal";
import StatStrip from "./StatStrip";
import WatchPartyIncludes from "./WatchPartyIncludes";
import WatchPartyCalculator from "./WatchPartyCalculator";

export default function WatchPartiesSection() {
  return (
    <section id="watch-parties" className="border-t border-ink/10 py-22">
      <div className="mx-auto max-w-[1180px] px-7 sm:px-4">
        <Reveal className="mb-11 max-w-[74ch]">
          <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gold-dim">
            04 — Pillar 02, In Detail
          </span>
          <h2 className="text-4xl uppercase sm:text-3xl">Ticketed Dodgers Watch Parties</h2>
          <p className="mt-3.5 max-w-[62ch] text-lg text-ink-dim">
            A private room, a capped guest list, a big screen, and a game everyone in the
            room already cares about. Toggle what&rsquo;s in the ticket and watch the price
            — and the revenue on the right — respond.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-11 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <StatStrip
              stats={[
                { value: "15–80", label: "Seats / private room" },
                { value: "Home", label: "Games, in-season" },
                { value: "100%", label: "Of ticket rev. incremental" },
              ]}
            />
            <WatchPartyIncludes />
          </Reveal>

          <Reveal>
            <WatchPartyCalculator />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
