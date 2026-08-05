export default function Footer() {
  return (
    <footer className="overflow-x-clip bg-ink pt-14 pb-[max(3.5rem,env(safe-area-inset-bottom))] text-paper">
      <div className="ticker mb-12 border-paper/10 bg-paper text-ink">
        <div className="ticker-track" aria-hidden>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex">
              {["Game on", "Talk Dodgers To Me", "Pawn Shop"].map((item) => (
                <span className="ticker-item" key={`${copy}-${item}`}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-end justify-between gap-8 px-7 sm:px-4">
        <div>
          <div className="font-display text-5xl uppercase leading-none">See you at the game.</div>
          <span className="mt-3 block font-mono text-xs text-paper/50">
            Prepared by MN1FST GLOBAL for Pawn Shop
          </span>
        </div>
        <span className="stamp border-gold text-gold">Game on<br />2026</span>
      </div>
    </footer>
  );
}
