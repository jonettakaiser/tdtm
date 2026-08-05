"use client";

import Image from "next/image";
import { defaultHeadliner, money, useNight } from "./NightProvider";
import Ticker from "./Ticker";

export default function Hero() {
  const night = useNight();
  const guestName = night.headliner?.name ?? defaultHeadliner.name;
  const guestPicked = night.headliner !== null;

  return (
    <section className="relative isolate min-h-[calc(100svh-68px)] overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/Podcast-ProofConcept1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 grayscale-[20%] contrast-125"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,29,51,.96)_0%,rgba(11,29,51,.75)_48%,rgba(11,29,51,.2)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(11,29,51,.9)_0%,transparent_55%)]" />

      <div className="mx-auto grid min-h-[calc(100svh-68px)] max-w-[1280px] items-end gap-8 px-7 pt-20 pb-10 md:grid-cols-[1.25fr_.75fr] md:items-center md:gap-10 md:px-10 md:pb-14">
        <div>
          <span className="mb-5 block font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gold">
            A Partnership Proposal · Melrose, Los Angeles
          </span>
          <h1 className="max-w-[11ch] font-display text-[clamp(3.6rem,9vw,8rem)] leading-[0.84] uppercase text-paper">
            Talk Dodgers
            <span className="block">To Me</span>
            <span className="block text-gold">LIVE</span>
            <span className="block">at Pawn Shop</span>
          </h1>
          <div className="mt-8 flex max-w-[720px] flex-col items-start gap-8 md:flex-row md:items-end md:gap-10">
            <p className="text-base leading-relaxed text-paper/75 md:text-lg">
              Two nights a month, Talk Dodgers To Me tapes live in the room — special-guest
              podcast nights and ticketed Dodgers watch parties that turn Pawn Shop&rsquo;s
              quietest nights into its fullest.
            </p>
            <a
              href="#live-nights"
              className="group relative top-10 hidden shrink-0 items-center gap-3 rounded-full bg-paper px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide text-ink transition duration-300 hover:-rotate-2 hover:scale-105 hover:bg-gold md:inline-flex"
            >
              Build the night <span className="transition-transform group-hover:translate-y-1">↓</span>
            </a>
          </div>
        </div>

        <aside className="ticket-cut rotate-1 overflow-hidden rounded-xl border border-paper/25 bg-paper text-ink shadow-[0_30px_90px_rgba(0,0,0,.35)] transition-transform duration-500 hover:rotate-0">
          <div className="flex items-center justify-between bg-dodger px-5 py-3 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-paper">
            <span>Your residency ticket</span>
            <span>{guestPicked ? "Locked in" : "Suggested"}</span>
          </div>
          <div className="p-5">
            <div className="border-b border-dashed border-ink/25 pb-5">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink-faint">
                Tonight&rsquo;s headliner
              </span>
              <div className="mt-1 font-display text-4xl leading-none uppercase text-dodger">
                {guestName}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-5 font-mono">
              <div>
                <span className="block text-[0.58rem] uppercase text-ink-faint">Live floor / mo</span>
                <b key={night.liveNightRevenue} className="number-pop text-lg tabular-nums">
                  {money(night.liveNightRevenue)}
                </b>
              </div>
              <div>
                <span className="block text-[0.58rem] uppercase text-ink-faint">Watch tickets / mo</span>
                <b key={night.watchPartyRevenue} className="number-pop text-lg tabular-nums">
                  {money(night.watchPartyRevenue)}
                </b>
              </div>
            </div>
            <div className="flex items-end justify-between border-t-2 border-ink pt-4">
              <span className="font-mono text-[0.62rem] font-bold uppercase tracking-wide">
                Combined event revenue
              </span>
              <strong
                key={night.monthlyTotal}
                className="number-pop font-display text-4xl leading-none text-gold"
              >
                {money(night.monthlyTotal)}
              </strong>
            </div>
          </div>
        </aside>
        <a
          href="#live-nights"
          className="group mx-auto mt-4 mb-6 inline-flex items-center gap-3 rounded-full bg-paper px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide text-ink transition duration-300 hover:-rotate-2 hover:scale-105 hover:bg-gold md:hidden"
        >
          Build the night <span className="transition-transform group-hover:translate-y-1">↓</span>
        </a>
      </div>

      <Ticker items={["Live podcast", "Watch party", "Collab menu"]} />
    </section>
  );
}
