export default function Hero() {
  return (
    <section className="mx-auto max-w-[1180px] px-7 pt-16 pb-12 sm:px-4">
      <span className="mb-4 block font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gold-dim">
        A Partnership Proposal · Prepared for Pawn Shop, Melrose
      </span>
      <h1 className="font-display text-5xl leading-none font-extrabold uppercase sm:text-4xl">
        <span className="text-dodger">Two Nights a Month.</span>
        <span className="mt-1 block text-ink">One Full Room.</span>
      </h1>
      <p className="mt-5 max-w-[62ch] text-lg text-ink-dim">
        Talk Dodgers To Me is pitching a residency: special-guest live podcast tapings and
        ticketed private-room Dodgers watch parties, built to sell out Pawn Shop on nights
        that are currently empty — with a collab menu, a built-in audience, and a
        Dodgers-connected guest list ready to walk in the door.
      </p>

      <div className="mt-10 flex flex-wrap overflow-hidden rounded-md border border-ink/25 font-mono text-xs">
        {[
          { label: "Host", value: "Melissa, Talk Dodgers To Me" },
          { label: "Venue", value: "Pawn Shop — Melrose Ave, LA" },
          { label: "Distribution", value: "YouTube + social, every episode" },
          { label: "Ask", value: "2 pilot nights, revenue-share terms" },
        ].map((item, i) => (
          <div
            key={item.label}
            className={`min-w-[160px] flex-1 px-5 py-3.5 ${
              i !== 3 ? "border-r border-ink/25" : ""
            }`}
          >
            <b className="mb-1 block text-[0.62rem] uppercase tracking-wide text-ink-faint">
              {item.label}
            </b>
            <span className="text-sm text-ink">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
