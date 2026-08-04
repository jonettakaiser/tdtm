import Reveal from "./Reveal";

const steps = [
  {
    title: "Pilot one live night",
    body: "Pick a confirmed guest from the lineup and run it once, low-risk, to prove the room and the model.",
  },
  {
    title: "Workshop the collab menu",
    body: "A short tasting with Pawn Shop's kitchen to land on final items, names and pricing.",
  },
  {
    title: "Set ticketing & the split",
    body: "Lock the revenue-share terms for live nights and the ticket price for watch parties before the first event goes on sale.",
  },
  {
    title: "Lock the recurring residency",
    body: "Once the pilot proves out, move to a standing calendar — live nights and watch parties, booked in advance.",
  },
];

export default function Ask() {
  return (
    <section id="ask" className="border-t border-ink/10 py-22">
      <div className="mx-auto max-w-[1180px] px-7 sm:px-4">
        <Reveal className="mb-11 max-w-[74ch]">
          <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gold-dim">
            07 — Next Steps
          </span>
          <h2 className="text-4xl uppercase sm:text-3xl">The Ask</h2>
          <p className="mt-3.5 max-w-[62ch] text-lg text-ink-dim">
            Nothing here needs to be decided today. This is the sequence to get from pitch
            to a first sold-out night.
          </p>
        </Reveal>

        <Reveal>
          <ol className="mt-5.5">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="grid grid-cols-[48px_1fr] gap-4 border-b border-ink/10 py-4"
              >
                <span className="font-mono text-2xl text-gold">{i + 1}</span>
                <div>
                  <h4 className="mb-1 font-display text-base uppercase">{s.title}</h4>
                  <p className="max-w-none text-sm text-ink-dim">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
