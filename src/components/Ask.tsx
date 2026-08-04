import Reveal from "./Reveal";
import TicketStub from "./TicketStub";

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
    <section id="ask" className="section-shell overflow-hidden">
      <div className="section-inner">
        <Reveal className="mb-14 md:grid md:grid-cols-[1fr_.7fr] md:items-end md:gap-12">
          <div>
          <span className="eyebrow">
            07 — Next Steps
          </span>
          <h2 className="section-title">The Ask</h2>
          </div>
          <p className="section-lede">
            Nothing here needs to be decided today. This is the sequence to get from pitch
            to a first sold-out night.
          </p>
        </Reveal>

        <Reveal from="scale" className="mb-16">
          <TicketStub />
        </Reveal>

        <Reveal>
          <ol className="grid gap-4 md:grid-cols-4">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="group rounded-[1.2rem] border border-ink/10 bg-raised p-5 transition duration-300 hover:-translate-y-2 hover:bg-dodger hover:text-paper"
              >
                <span className="font-display text-5xl leading-none text-gold">0{i + 1}</span>
                <div>
                  <h4 className="mt-5 mb-2 font-display text-2xl leading-none uppercase text-dodger group-hover:text-paper">{s.title}</h4>
                  <p className="max-w-none text-sm leading-relaxed text-ink-dim group-hover:text-paper/70">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
