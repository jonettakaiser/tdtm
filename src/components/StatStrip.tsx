export default function StatStrip({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="mb-8 grid grid-cols-3 overflow-hidden rounded-xl bg-ink font-mono text-paper">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`min-w-0 px-3 py-5 text-center md:px-4 ${
            i !== stats.length - 1 ? "border-r border-paper/15" : ""
          }`}
        >
          <b className="block font-display text-3xl leading-none tabular-nums text-[#eef6ff] md:text-4xl">{s.value}</b>
          <span className="mt-2 block text-[0.55rem] uppercase tracking-wide text-paper/50 md:text-[0.62rem]">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
