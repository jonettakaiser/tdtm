const DEFAULT_REPEAT = 4;

export default function Ticker({
  items,
  className = "",
  repeat = DEFAULT_REPEAT,
}: {
  items: string[];
  className?: string;
  repeat?: number;
}) {
  const sequence = Array.from({ length: repeat }, (_, cycle) =>
    items.map((item) => (
      <span className="ticker-item" key={`${cycle}-${item}`}>
        {item}
      </span>
    )),
  );

  return (
    <div className={`ticker ${className}`.trim()}>
      <div className="ticker-track" aria-hidden>
        <div className="ticker-group">{sequence}</div>
        <div className="ticker-group">{sequence}</div>
      </div>
    </div>
  );
}
