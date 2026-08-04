import Image from "next/image";
import Reveal from "./Reveal";

function ReferenceCard({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="group flex-1 overflow-hidden rounded-[1.5rem] border border-ink/10 bg-paper shadow-[0_22px_60px_rgba(11,29,51,0.13)] transition duration-500 hover:-translate-y-2 hover:rotate-[-.5deg]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="border-t border-ink/10 p-7">
        <p className="max-w-none text-base leading-relaxed text-ink-dim">{caption}</p>
      </div>
    </div>
  );
}

function ProofImage({ src, alt }: { src: string; alt: string }) {
  return (
    <a
      href="https://www.youtube.com/watch?v=04l2TgnHqn8"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-video overflow-hidden rounded-[1.25rem] border-4 border-paper shadow-[0_22px_60px_rgba(11,29,51,0.2)]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/30">
        <span className="flex size-14 items-center justify-center rounded-full bg-paper/90 text-dodger opacity-0 shadow-[0_8px_20px_rgba(11,29,51,0.3)] transition-opacity group-hover:opacity-100">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 size-6">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
    </a>
  );
}

const collabMenu = [
  {
    name: "The Walk-Off",
    original: "Garlic Shrimp",
    description: "White shrimp, toasted garlic, sherry.",
    price: "Market",
  },
  {
    name: "Chavez Ravine Fries",
    original: "Beef Tallow Fries",
    description: "Dijonaise, ketchup.",
    price: "$14",
  },
  {
    name: "Blue Heaven Wings",
    original: "Wings (6)",
    description: "Lemon pepper, buffalo, or charred chile.",
    price: "$16",
  },
  {
    name: "Extra Innings",
    original: "From the bar — to be confirmed with Pawn Shop",
    description: "To be built with the bar team.",
    price: "$16",
  },
];

const upgrades = [
  {
    title: "Live audience in the room",
    body: "Not just a recording — an event. Seats are ticketed or door-priced, not empty tables.",
  },
  {
    title: "Streams live on YouTube simultaneously",
    body: "The room and the internet get the same moment at the same time — the audience isn’t capped at the door.",
  },
  {
    title: "Curated collab menu",
    body: "Four Pawn Shop dishes, renamed for the night, priced like the event it is.",
  },
];

export default function FormatShow() {
  return (
    <section id="proof" className="section-shell overflow-hidden">
      <div className="section-inner">
        <Reveal className="mb-14 md:grid md:grid-cols-[1fr_.7fr] md:items-end md:gap-12">
          <div>
          <span className="eyebrow">
            01 — The Format
          </span>
          <h2 className="section-title">
            Friends Keep Secrets meets Chicken Shop Date
          </h2>
          </div>
          <p className="section-lede">
            One host, one special guest, one table. Unscripted conversation about anything
            — no topic off limits. TDTM borrows its intimacy from one show and its
            setting-as-hook from the other.
          </p>
        </Reveal>

        {/* Part A — format reference */}
        <Reveal from="scale" className="flex flex-col items-stretch gap-6 md:flex-row">
          <ReferenceCard
            src="/friends.webp"
            alt="Friends Keep Secrets podcast key art"
            caption="What TDTM borrows: the candor. Unscripted, celebrity-comfortable conversation — guests who wouldn't normally open up, actually opening up."
          />
          <span
            aria-hidden
            className="flex size-16 shrink-0 items-center justify-center self-center rounded-full border-2 border-ink bg-gold font-display text-3xl text-ink shadow-lg"
          >
            ×
          </span>
          <ReferenceCard
            src="/chicken-shop-date.jpg"
            alt="Chicken Shop Date, two guests seated at a fast-food restaurant table"
            caption="What TDTM borrows: the venue-as-hook. One specific, recognizable table as the whole set. The location does half the marketing."
          />
        </Reveal>
        <p className="mx-auto mt-8 max-w-[30ch] text-center font-display text-2xl uppercase leading-tight text-ink">
          TDTM at Pawn Shop is both of these at once — except it&rsquo;s live, it&rsquo;s
          sports, and the audience is in the room.
        </p>

        {/* Part B — proof of concept */}
        <Reveal from="left" className="mt-24 md:grid md:grid-cols-[.65fr_1.35fr] md:gap-12">
          <div className="md:pt-8">
          <span className="eyebrow">
            This format already has proof
          </span>
          <h3 className="text-5xl leading-[.9] uppercase text-dodger">The Adrian Gonzalez Episode</h3>
          <p className="mt-5 text-base leading-relaxed text-ink-dim">
            Adrian Gonzalez is a former Dodgers first baseman who owns two restaurants in
            Los Angeles. Melissa filmed his podcast episode on location — kitchen
            walkthrough, promo videos, two locations in one day. The episode cost
            approximately $2,500 out of pocket and came out at a level the show hadn&rsquo;t
            reached before. The format worked because the restaurant was not the backdrop.
            It was the point.
          </p>
          <a
            href="https://www.youtube.com/watch?v=04l2TgnHqn8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-dodger px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide text-paper transition hover:-rotate-2 hover:bg-ink"
          >
            Watch on YouTube ↗
          </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:mt-0 md:grid-cols-2">
            <ProofImage
              src="/Podcast-ProofConcept1.png"
              alt="Melissa and a guest filming the Adrian Gonzalez podcast episode on location at Slizeria"
            />
            <ProofImage
              src="/Podcast-ProofConcept2.png"
              alt="Melissa and a guest laughing during the Adrian Gonzalez podcast episode"
            />
          </div>
        </Reveal>

        {/* Part C — the interactive upgrade */}
        <Reveal from="right" className="mt-24 rounded-[1.5rem] bg-dodger p-7 text-paper md:p-10">
          <h3 className="max-w-[12ch] text-5xl leading-[.9] uppercase text-paper">At Pawn Shop, it goes further.</h3>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {upgrades.map((u, i) => (
              <li
                key={u.title}
                className="rounded-xl border border-paper/20 bg-paper/8 p-5"
              >
                <span className="font-display text-4xl text-paper">{i + 1}</span>
                <div>
                  <h4 className="mt-5 mb-2 font-display text-2xl leading-none uppercase text-paper">
                    {u.title}
                  </h4>
                  <p className="max-w-none text-sm leading-relaxed text-paper/70">{u.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Part D — interactive collab menu */}
        <Reveal className="mx-auto mt-24 max-w-4xl rotate-[-.5deg]">
          <div className="mb-5 flex items-end justify-between">
            <h3 className="text-5xl uppercase leading-none text-ink">Sample Collab Menu</h3>
            <span className="stamp">Kitchen<br />Riff</span>
          </div>
          <div className="overflow-hidden rounded-[1.25rem] border-2 border-ink bg-paper shadow-[8px_8px_0_var(--color-gold-dim)]">
            <ul>
              {collabMenu.map((item, i) => (
                <li
                  key={item.name}
                  className={`flex items-start justify-between gap-3.5 px-6 py-5 transition hover:bg-raised ${
                    i !== collabMenu.length - 1 ? "border-b border-dashed border-ink/25" : ""
                  }`}
                >
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-wide text-ink-faint">
                      Originally: {item.original}
                    </div>
                    <p className="mt-1 text-sm text-ink-dim">{item.description}</p>
                  </div>
                  <div className="whitespace-nowrap font-mono tabular-nums text-gold-dim">
                    {item.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-2.5 font-mono text-sm text-ink-faint italic">
            Names and pricing are starting points for a joint tasting with the kitchen —
            not final.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
