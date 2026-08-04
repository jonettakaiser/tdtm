export default function StatStrip({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="my-6.5 flex flex-wrap overflow-hidden rounded-md border border-ink/25 font-mono">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`min-w-[130px] flex-1 px-4.5 py-3.5 ${
            i !== stats.length - 1 ? "border-r border-ink/25" : ""
          }`}
        >
          <b className="block text-xl tabular-nums text-gold">{s.value}</b>
          <span className="text-[0.66rem] uppercase tracking-wide text-ink-faint">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
