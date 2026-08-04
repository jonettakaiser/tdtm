import Reveal from "./Reveal";
import StatStrip from "./StatStrip";
import MenuList from "./MenuList";
import WatchPartyCalculator from "./WatchPartyCalculator";
import { watchPartyIncludes } from "@/data/menu";

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
            room already cares about. Catering and a dedicated bartender are built into the
            ticket — the exclusivity is the product.
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
            <h3 className="text-lg uppercase">What&rsquo;s included in the ticket</h3>
            <MenuList items={watchPartyIncludes} />
            <p className="mt-2.5 font-mono text-sm text-ink-faint">
              Bar spend beyond what&rsquo;s included in the ticket is upside on top of the
              numbers to the right.
            </p>
          </Reveal>

          <Reveal>
            <WatchPartyCalculator />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
