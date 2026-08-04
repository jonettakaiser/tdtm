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
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-paper/15 bg-paper/8 p-7 transition duration-500 hover:-translate-y-2 hover:bg-paper/12 md:p-10">
      <span className="absolute top-3 right-5 font-display text-[7rem] leading-none text-paper/5 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
        {num.slice(-2)}
      </span>
      <span className="font-mono text-xs font-bold tracking-[0.16em] text-gold">{num}</span>
      <h3 className="mt-8 max-w-[11ch] text-4xl leading-[0.92] uppercase text-paper md:text-5xl">
        {title}
      </h3>
      <p className="mt-5 text-base leading-relaxed text-paper/70">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-paper/75">
        {points.map((p) => (
          <li key={p} className="flex gap-3 border-t border-paper/15 pt-3">
            <span className="text-gold">✦</span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PitchOverview() {
  return (
    <section
      id="pitch"
      className="section-shell overflow-hidden bg-ink text-paper"
      style={{ paddingTop: "calc(clamp(5rem, 10vw, 9rem) - 30px)" }}
    >
      <div className="section-inner">
        <Reveal className="mb-14 md:grid md:grid-cols-[1fr_.7fr] md:items-center md:gap-12">
          <div>
          <span className="eyebrow text-gold">
            02 — The Opportunity
          </span>
          <h2 className="section-title text-paper">Not Just Content. Revenue-Driving Events.</h2>
          </div>
          <p className="section-lede text-paper/70">
            One event type sells a premium menu. The other sells the ticket itself. Both
            create incremental revenue and give TDTM&rsquo;s audience a new reason to
            experience Pawn Shop in person.
          </p>
        </Reveal>

        <Reveal from="scale" className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
