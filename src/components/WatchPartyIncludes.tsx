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
              <div className="flex items-start justify-between gap-3.5 p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-dodger" aria-hidden>✓</span>
                  <div>
                    <div className="font-display text-xl leading-none uppercase text-ink">
                      {item.name}
                    </div>
                    <span className="mt-0.5 block font-mono text-[0.64rem] uppercase tracking-wide text-dodger">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="whitespace-nowrap font-mono tabular-nums text-gold-dim">
                  {item.price}
                </div>
              </div>
            </li>
          ))}
      </ul>

      <p className="mt-2.5 font-mono text-sm text-ink-faint">
        Unlike the live podcast nights, watch party guests order freely from the full Pawn
        Shop menu at standard prices. The ticket covers the room and the experience.
        Everything else is a normal night at the bar.
      </p>
    </div>
  );
}
