import Reveal from "./Reveal";

function FormatCard({
  title,
  borrow,
  description,
  icon,
}: {
  title: string;
  borrow: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded border border-ink/10 bg-raised p-7 pt-8 shadow-[0_12px_30px_rgba(11,29,51,0.08)]">
      <div
        className="mb-5 flex aspect-[4/5] items-center justify-center rounded border border-dashed border-ink/25 p-5 text-center text-ink-faint"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 12px, rgba(11,29,51,0.04) 12px 24px)",
        }}
      >
        <div>
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.6} className="mx-auto w-1/2 opacity-55">
            {icon}
          </svg>
          <small className="mt-3 block font-mono text-[0.66rem] uppercase tracking-wide">
            Reference photo — to be dropped in
          </small>
        </div>
      </div>
      <h3 className="text-2xl uppercase">{title}</h3>
      <div className="mt-1.5 mb-3 font-mono text-xs uppercase tracking-wide text-gold-dim">
        {borrow}
      </div>
      <p className="max-w-none text-base text-ink-dim">{description}</p>
    </div>
  );
}

export default function FormatShow() {
  return (
    <section id="show" className="border-t border-ink/10 py-22">
      <div className="mx-auto max-w-[1180px] px-7 sm:px-4">
        <Reveal className="mb-11 max-w-[74ch]">
          <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gold-dim">
            01 — The Format
          </span>
          <h2 className="text-4xl uppercase sm:text-3xl">
            Friends Keep Secrets meets Chicken Shop Date
          </h2>
          <p className="mt-3.5 max-w-[62ch] text-lg text-ink-dim">
            One host, one special guest, one table. Unscripted conversation about anything
            — no topic off limits. TDTM borrows its intimacy from one show and its
            setting-as-hook from the other.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5.5 sm:grid-cols-2">
          <FormatCard
            title="Friends Keep Secrets"
            borrow="What TDTM borrows: the candor"
            description="Documentary-close, celebrity-comfortable conversation — guests who wouldn't normally sit for an interview, actually opening up. That's the tone Melissa books for."
            icon={
              <>
                <circle cx={20} cy={24} r={8} />
                <circle cx={44} cy={24} r={8} />
                <path d="M8 52c1-9 8-14 12-14s5 2 12 2 8-2 12-2 11 5 12 14" />
              </>
            }
          />
          <FormatCard
            title="Chicken Shop Date"
            borrow="What TDTM borrows: the venue-as-hook"
            description="One specific, recognizable restaurant table as the whole set. The location does half the marketing — which is exactly the mechanic this pitch turns into revenue for Pawn Shop."
            icon={
              <>
                <rect x={14} y={30} width={36} height={4} rx={1} />
                <path d="M20 30V16m24 14V16" />
                <circle cx={20} cy={44} r={6} />
                <circle cx={44} cy={44} r={6} />
              </>
            }
          />
        </Reveal>
        <p className="mt-4.5 font-mono text-sm text-ink-faint">
          Both cards are placeholders for the side-by-side reference images — send the two
          photos over and they&rsquo;ll drop straight in.
        </p>
      </div>
    </section>
  );
}
