const includedItems = [
  {
    name: "Private room, game on the big screen",
    tag: "Room",
    price: "Incl.",
  },
  {
    name: "Full Pawn Shop menu at regular prices",
    tag: "Food",
    price: "Guest's tab",
  },
  {
    name: "Dedicated bartender",
    tag: "Bar",
    price: "Incl.",
  },
  {
    name: "Postseason nights",
    tag: "Premium tier",
    price: "+$30 to $70 per ticket",
  },
];

export default function WatchPartyIncludes() {
  return (
    <div>
      <h3 className="max-w-[14ch] text-3xl leading-none uppercase text-ink">
        What&rsquo;s included in the ticket
      </h3>

      <ul className="mt-5 space-y-2">
        {includedItems.map((item) => (
            <li
              key={item.name}
              className="rounded-xl border border-dodger bg-dodger-soft/55 shadow-[3px_3px_0_var(--color-dodger)]"
            >
              <div className="flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-3.5">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-dodger" aria-hidden>✓</span>
                  <div className="min-w-0">
                    <div className="font-display text-xl leading-none uppercase text-ink">
                      {item.name}
                    </div>
                    <span className="mt-0.5 block font-mono text-[0.64rem] uppercase tracking-wide text-dodger">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="pl-6 font-mono text-sm tabular-nums text-gold-dim sm:pl-0 sm:text-base sm:whitespace-nowrap">
                  {item.price}
                </div>
              </div>
            </li>
          ))}
      </ul>

      <p className="mt-2.5 font-mono text-sm text-ink-faint">
        Each ticket includes a food credit that Melissa remits to Pawn Shop. Guests order
        from the full menu, cover anything above the credit, and purchase alcohol separately.
      </p>
    </div>
  );
}
