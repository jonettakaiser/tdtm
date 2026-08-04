export default function WatchPartyCalculator() {
  return (
    <div className="ticket-cut static overflow-hidden rounded-[1.3rem] bg-ink p-6 pb-7 text-paper shadow-[0_24px_70px_rgba(11,29,51,.24)] md:p-7">
      <div className="mb-6 flex items-center justify-between border-b border-dashed border-paper/20 pb-4">
        <h4 className="font-mono text-xs uppercase tracking-wide text-[#eef6ff]">
          Illustrative Revenue — Watch Party
        </h4>
        <span className="font-mono text-[0.58rem] uppercase tracking-widest text-paper/40">
          Per event · 20 guests · 1x per month
        </span>
      </div>

      <div className="space-y-3">
        {[
          ["Regular Season", "$65", "$1,300", "$25 per guest"],
          ["Playoff Game", "$95", "$1,900", "$35 per guest"],
          ["NLCS / World Series", "$135", "$2,700", "$50 per guest"],
        ].map(([game, ticket, revenue, credit]) => (
          <div key={game} className="rounded-xl border border-paper/15 bg-paper/5 p-4">
            <h5 className="font-display text-2xl uppercase text-paper">{game}</h5>
            <dl className="mt-3 grid grid-cols-3 gap-3 font-mono text-[0.6rem] uppercase tracking-wide text-paper/45">
              <div>
                <dt>Ticket price</dt>
                <dd className="mt-1 text-sm font-bold text-[#eef6ff]">{ticket}</dd>
              </div>
              <div>
                <dt>Revenue / event</dt>
                <dd className="mt-1 text-sm font-bold text-paper">{revenue}</dd>
              </div>
              <div>
                <dt>Food credit</dt>
                <dd className="mt-1 text-sm font-bold text-paper">{credit}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-[#eef6ff] p-5 text-ink">
        <h5 className="font-display text-3xl uppercase">The full monthly picture for Pawn Shop</h5>
        <div className="mt-4 space-y-3 border-y border-ink/20 py-4 text-sm">
          <p className="max-w-none">Live podcast night · 1x per month · $2,625 guaranteed floor</p>
          <p className="max-w-none">Watch party · 1x per month · $1,300 in ticket revenue (regular season)</p>
        </div>
        <p className="mt-4 max-w-none font-display text-3xl uppercase leading-none">
          $3,925 to start — with a clear path to scale.
        </p>
        <p className="mt-3 max-w-none text-xs leading-relaxed text-ink/65">
          Both events launch at once a month to prove the model. Once they sell out, adding
          dates is the easy conversation. Bar spend beyond food credits is 100% Pawn Shop
          upside on top of every number above.
        </p>
      </div>

      <div className="mt-6 border-t border-dashed border-paper/20 pt-5">
        <h5 className="font-mono text-[0.65rem] font-bold uppercase tracking-wide text-[#eef6ff]">
          What TDTM Takes Home — Watch Parties
        </h5>
        <div className="mt-4 space-y-5">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <strong className="font-display text-xl uppercase">Booking fee</strong>
              <strong className="font-mono text-sm text-[#eef6ff]">$250 flat per event</strong>
            </div>
            <p className="mt-2 max-w-none text-sm leading-relaxed text-paper/65">
              TDTM handles all ticket sales and marketing for each watch party and charges
              a flat booking fee per event. Pawn Shop keeps 100% of ticket revenue.
            </p>
          </div>
          <div className="border-t border-paper/10 pt-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <strong className="font-display text-xl uppercase">Bar and food revenue</strong>
              <strong className="font-mono text-sm text-[#eef6ff]">100% Pawn Shop</strong>
            </div>
            <p className="mt-2 max-w-none text-sm leading-relaxed text-paper/65">
              Every dollar spent on food and drinks during a watch party stays with Pawn
              Shop. TDTM takes nothing from the room beyond the flat booking fee.
            </p>
          </div>
        </div>
        <p className="mt-5 max-w-none text-xs leading-relaxed text-paper/45 italic">
          A flat fee keeps the math simple. Pawn Shop knows exactly what each event costs
          them regardless of how many tickets sell.
        </p>
      </div>
    </div>
  );
}
