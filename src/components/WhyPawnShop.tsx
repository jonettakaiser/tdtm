import Reveal from "./Reveal";

const cards = [
  {
    n: "01",
    title: "Already on the menu",
    body: "Mookie Betts's tequila is poured at Pawn Shop today, and he's said to be an investor. The Dodgers connection isn't a pitch — it's already behind the bar.",
  },
  {
    n: "02",
    title: "Melrose is the right room",
    body: "A high-visibility LA location built for a crowd that photographs and posts — exactly the audience a live-taped, social-first podcast needs in the room.",
  },
  {
    n: "03",
    title: "Distribution Pawn Shop doesn't have to build",
    body: "Every episode lives on YouTube and social after the night ends — the restaurant is on camera for an audience far bigger than the room itself.",
  },
];

export default function WhyPawnShop() {
  return (
    <section id="why" className="border-t border-ink/10 py-22">
      <div className="mx-auto max-w-[1180px] px-7 sm:px-4">
        <Reveal className="mb-11 max-w-[74ch]">
          <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gold-dim">
            06 — Why Pawn Shop, Specifically
          </span>
          <h2 className="text-4xl uppercase sm:text-3xl">The fit already exists</h2>
          <p className="mt-3.5 max-w-[62ch] text-lg text-ink-dim">
            This isn&rsquo;t a cold pitch to a random restaurant — Pawn Shop already sits
            inside the TDTM world.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.n} className="rounded border border-ink/10 bg-raised p-5.5">
              <div className="font-mono text-xs text-gold">{c.n}</div>
              <h3 className="mt-2 text-lg uppercase">{c.title}</h3>
              <p className="text-sm text-ink-dim">{c.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
