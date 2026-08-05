const launchItems = [
  {
    label: "Food premium",
    value: "~$300 per night",
    explanation:
      "TDTM takes the $2 above standard Pawn Shop prices on each collab food item. Pawn Shop keeps their full normal margin on every dish. The $2 is the only difference.",
  },
  {
    label: "Named cocktail share",
    value: "~$125 per night",
    explanation:
      "Extra Innings and The 7th Inning are net new drinks with no existing Pawn Shop price. TDTM takes 20% of revenue from those two drinks only — not the full bar. Pawn Shop keeps 80% plus full margin on every other drink ordered.",
  },
];

const sponsorItems = [
  {
    label: "Sponsor fee",
    value: "$2,000 to $5,000 per event",
    explanation:
      "A brand — a tequila label, Modelo, a wine partner — pays a flat fee to have their product featured in the cocktails, named in the menu, and promoted by Melissa on camera and across social content after the night.",
  },
  {
    label: "Cocktail split",
    value: "Waived",
    explanation:
      "With a sponsor in place, TDTM takes nothing from bar revenue. Pawn Shop keeps 100% of all cocktail and bar income. The sponsor fee replaces the split entirely.",
  },
  {
    label: "Food premium",
    value: "~$300 per night",
    explanation:
      "Same as without a sponsor — TDTM keeps the $2 above standard price on collab food items only.",
  },
];

function ScenarioItems({
  items,
  total,
  accentClass,
}: {
  items: { label: string; value: string; explanation: string }[];
  total: string;
  accentClass: string;
}) {
  return (
    <div className="mt-6 space-y-5">
      {items.map((item) => (
        <div key={item.label} className="border-t border-current/15 pt-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="font-display text-xl uppercase">{item.label}</h4>
            <strong className={`font-mono text-sm ${accentClass}`}>{item.value}</strong>
          </div>
          <p className="mt-2 max-w-none text-sm leading-relaxed opacity-70">{item.explanation}</p>
        </div>
      ))}
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-t-2 border-current pt-4">
        <strong className="font-display text-2xl uppercase">TDTM total per night</strong>
        <strong className={`font-display text-3xl ${accentClass}`}>{total}</strong>
      </div>
    </div>
  );
}

export default function LiveNightTakeHome() {
  return (
    <section aria-labelledby="take-home-title">
      <h3 id="take-home-title" className="text-4xl uppercase text-ink">
        What TDTM Takes Home
      </h3>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <article className="rounded-[1.3rem] border border-ink/15 bg-raised p-6 md:p-7">
          <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-faint">
            Launch nights
          </span>
          <h3 className="mt-2 text-3xl uppercase text-ink">Without Alcohol Sponsor</h3>
          <ScenarioItems
            items={launchItems}
            total="~$400 to $425"
            accentClass="text-gold-dim"
          />
          <p className="mt-6 max-w-none border-t border-ink/15 pt-4 text-sm leading-relaxed text-ink-dim italic">
            The $400 formalizes the partnership. TDTM&rsquo;s real return is the filmed
            content, guest relationship, and brand exposure to 75 people in the room.
          </p>
        </article>

        <article className="rounded-[1.3rem] border border-dodger bg-dodger p-6 text-paper shadow-[6px_6px_0_var(--color-gold)] md:p-7">
          <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#eef6ff]">
            Preferred scenario
          </span>
          <h3 className="mt-2 text-3xl uppercase text-paper">With Alcohol Sponsor</h3>
          <ScenarioItems
            items={sponsorItems}
            total="$2,300 to $5,300"
            accentClass="text-[#eef6ff]"
          />
          <p className="mt-6 max-w-none border-t border-paper/20 pt-4 text-sm leading-relaxed text-paper/75 italic">
            Mookie Betts is the natural first sponsor conversation: his tequila is already
            poured at Pawn Shop. Featuring it in the Extra Innings cocktail gives his brand
            YouTube and social exposure, TDTM a sponsor fee, and Pawn Shop every bar dollar.
          </p>
        </article>
      </div>
      <p className="mx-auto mt-[40px] max-w-[44ch] text-center font-display text-2xl uppercase leading-tight text-ink">
        The first nights launch without a sponsor. The sponsor conversation starts the
        same week.
      </p>
    </section>
  );
}
