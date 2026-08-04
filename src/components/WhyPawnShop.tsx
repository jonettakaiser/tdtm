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
    <section id="why" className="section-shell overflow-hidden bg-raised">
      <div className="section-inner">
        <Reveal className="mb-14 md:grid md:grid-cols-[1fr_.7fr] md:items-end md:gap-12">
          <div>
          <span className="eyebrow">
            06 — Why Pawn Shop, Specifically
          </span>
          <h2 className="section-title">The fit already exists</h2>
          </div>
          <p className="section-lede">
            This isn&rsquo;t a cold pitch to a random restaurant — Pawn Shop already sits
            inside the TDTM world.
          </p>
        </Reveal>

        <Reveal from="scale" className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((c, index) => (
            <div
              key={c.n}
              className={`group relative min-h-72 overflow-hidden rounded-[1.4rem] border border-ink/10 bg-paper p-7 shadow-[0_18px_50px_rgba(11,29,51,.08)] transition duration-500 hover:-translate-y-3 ${
                index === 1 ? "md:translate-y-10" : ""
              }`}
            >
              <div className="font-display text-7xl leading-none text-dodger/10">{c.n}</div>
              <h3 className="relative -mt-4 max-w-[11ch] text-3xl leading-[.95] uppercase text-dodger">
                {c.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-ink-dim">{c.body}</p>
              <span className="absolute -right-5 -bottom-5 size-20 rounded-full bg-gold/20 transition-transform duration-500 group-hover:scale-[2.5]" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
