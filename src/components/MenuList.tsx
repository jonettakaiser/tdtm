import type { MenuItem } from "@/data/menu";

export default function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <ul className="mt-4.5 border-t border-ink/10">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex items-start justify-between gap-3.5 border-b border-ink/10 py-3.5"
        >
          <div>
            <div className="font-bold">{item.name}</div>
            <span className="mt-0.5 block font-mono text-[0.64rem] uppercase tracking-wide text-dodger">
              {item.tag}
            </span>
          </div>
          <div className="whitespace-nowrap font-mono tabular-nums text-gold">
            {item.price}
          </div>
        </li>
      ))}
    </ul>
  );
}
