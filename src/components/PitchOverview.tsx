import Reveal from "./Reveal";

function PillarCard({
  num,
  title,
  description,
  points,
}: {
  num: string;
  title: string;
  description: string;
  points: string[];
}) {
  return (
    <div className="rounded border border-ink/25 bg-raised p-7">
      <span className="font-mono text-xs tracking-wide text-gold-dim">{num}</span>
      <h3 className="mt-2 text-2xl uppercase">{title}</h3>
      <p className="text-base text-ink-dim">{description}</p>
      <ul className="mt-3.5 list-disc space-y-1.5 pl-4.5 text-sm text-ink-dim">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default function PitchOverview() {
  return (
    <section id="pitch" className="border-t border-ink/10 py-22">
      <div className="mx-auto max-w-[1180px] px-7 sm:px-4">
        <Reveal className="mb-11 max-w-[74ch]">
          <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gold-dim">
            02 — The Opportunity
          </span>
          <h2 className="text-4xl uppercase sm:text-3xl">Two ways this pays for the room</h2>
          <p className="mt-3.5 max-w-[62ch] text-lg text-ink-dim">
            One event type sells a premium menu. The other sells the ticket itself. Both
            fill Pawn Shop on nights it isn&rsquo;t already full, with an audience TDTM
            brings, not one the restaurant has to build.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5.5 sm:grid-cols-2">
          <PillarCard
            num="PILLAR 01"
            title="Special-Guest Live Podcast"
            description="A ticketed taping with a live audience and a curated, renamed TDTM × Pawn Shop menu, priced above the regular check."
            points={[
              "2–3 food items, 2–3 drinks, collab-branded",
              "Premium pricing lifts average check",
              "Revenue split on the premium, not the base menu",
            ]}
          />
          <PillarCard
            num="PILLAR 02"
            title="Ticketed Dodgers Watch Parties"
            description="Limited-capacity private rooms for live Dodgers games — exclusive, social, catered. The ticket is the product."
            points={[
              "Capped headcount keeps it feeling exclusive",
              "On-site catering + bartender, built into the price",
              "100% of ticket revenue is incremental",
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
