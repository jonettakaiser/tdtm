"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { guests, type Guest } from "@/data/guests";
import { liveNightMenu, watchPartyIncludes } from "@/data/menu";

/**
 * One shared "night" the reader builds as they scroll: a headliner from the
 * lineup, a collab order from the menu, and the room settings for a watch
 * party. Every section reads from and writes to this, so the numbers in the
 * hero scoreboard and the ticket stub in The Ask are the reader's own.
 */

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
const roundTo5 = (n: number) => Math.round(n / 5) * 5;

export const LIFT_RANGE = { min: 0, max: 60 } as const;
export const PRICE_RANGE = { min: 25, max: 85 } as const;

/** Starting order — one entrée, one cocktail, one mocktail. */
const DEFAULT_ORDER: Record<string, number> = {
  melt: 1,
  "extra-innings": 1,
  stretch: 1,
};

const DEFAULT_INCLUDES = ["room", "catering", "bartender"];

export interface NightValue {
  headliner: Guest | null;
  setHeadliner: (guest: Guest | null) => void;

  order: Record<string, number>;
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  resetOrder: () => void;
  orderTotal: number;
  orderCount: number;

  baseCheck: number;
  setBaseCheck: (n: number) => void;

  includes: string[];
  toggleInclude: (id: string) => void;

  audience: number;
  setAudience: (n: number) => void;
  nights: number;
  setNights: (n: number) => void;
  split: number;
  setSplit: (n: number) => void;

  lift: number;
  liftFromMenu: number;
  liftOverridden: boolean;
  setLift: (n: number) => void;
  syncLift: () => void;

  capacity: number;
  setCapacity: (n: number) => void;
  events: number;
  setEvents: (n: number) => void;

  price: number;
  priceFromIncludes: number;
  priceOverridden: boolean;
  setPrice: (n: number) => void;
  syncPrice: () => void;

  date: string;
  setDate: (value: string) => void;

  liveNightRevenue: number;
  watchPartyRevenue: number;
  monthlyTotal: number;
  venueShare: number;
  tdtmShare: number;
}

const NightContext = createContext<NightValue | null>(null);

export function NightProvider({ children }: { children: React.ReactNode }) {
  const [headliner, setHeadliner] = useState<Guest | null>(null);
  const [order, setOrder] = useState<Record<string, number>>(DEFAULT_ORDER);
  const [baseCheck, setBaseCheck] = useState(26);
  const [includes, setIncludes] = useState<string[]>(DEFAULT_INCLUDES);

  const [audience, setAudience] = useState(60);
  const [nights, setNights] = useState(2);
  const [split, setSplit] = useState(15);
  const [liftOverride, setLiftOverride] = useState<number | null>(null);

  const [capacity, setCapacity] = useState(40);
  const [events, setEvents] = useState(6);
  const [priceOverride, setPriceOverride] = useState<number | null>(null);

  const [date, setDate] = useState("");

  const addItem = useCallback((id: string) => {
    setOrder((current) => ({ ...current, [id]: Math.min(9, (current[id] ?? 0) + 1) }));
  }, []);

  const removeItem = useCallback((id: string) => {
    setOrder((current) => {
      const next = { ...current };
      const qty = (next[id] ?? 0) - 1;
      if (qty > 0) next[id] = qty;
      else delete next[id];
      return next;
    });
  }, []);

  const resetOrder = useCallback(() => setOrder(DEFAULT_ORDER), []);

  const toggleInclude = useCallback((id: string) => {
    setIncludes((current) =>
      current.includes(id) ? current.filter((i) => i !== id) : [...current, id],
    );
  }, []);

  const value = useMemo<NightValue>(() => {
    const orderTotal = liveNightMenu.reduce(
      (sum, item) => sum + (order[item.id] ?? 0) * item.amount,
      0,
    );
    const orderCount = Object.values(order).reduce((sum, qty) => sum + qty, 0);

    // What the collab order adds on top of a normal-night check, per guest.
    const liftFromMenu = clamp(
      Math.round(orderTotal - baseCheck),
      LIFT_RANGE.min,
      LIFT_RANGE.max,
    );
    const lift = liftOverride ?? liftFromMenu;

    // What the room owes per head, given what's bundled into the ticket.
    const base = watchPartyIncludes
      .filter((item) => !item.premium && includes.includes(item.id))
      .reduce((sum, item) => sum + item.value, 0);
    const multiplier = watchPartyIncludes
      .filter((item) => item.premium && includes.includes(item.id))
      .reduce((product, item) => product * item.value, 1);
    const priceFromIncludes = clamp(
      roundTo5(base * multiplier),
      PRICE_RANGE.min,
      PRICE_RANGE.max,
    );
    const price = priceOverride ?? priceFromIncludes;

    const liveNightRevenue = audience * lift * nights;
    const watchPartyRevenue = price * capacity * events;
    const tdtmShare = liveNightRevenue * (split / 100);

    return {
      headliner,
      setHeadliner,
      order,
      addItem,
      removeItem,
      resetOrder,
      orderTotal,
      orderCount,
      baseCheck,
      setBaseCheck: (n) => setBaseCheck(clamp(Math.round(n), 0, 200)),
      includes,
      toggleInclude,
      audience,
      setAudience,
      nights,
      setNights,
      split,
      setSplit,
      lift,
      liftFromMenu,
      liftOverridden: liftOverride !== null,
      setLift: (n) => setLiftOverride(n),
      syncLift: () => setLiftOverride(null),
      capacity,
      setCapacity,
      events,
      setEvents,
      price,
      priceFromIncludes,
      priceOverridden: priceOverride !== null,
      setPrice: (n) => setPriceOverride(n),
      syncPrice: () => setPriceOverride(null),
      date,
      setDate,
      liveNightRevenue,
      watchPartyRevenue,
      monthlyTotal: liveNightRevenue + watchPartyRevenue,
      venueShare: liveNightRevenue - tdtmShare,
      tdtmShare,
    };
  }, [
    headliner,
    order,
    addItem,
    removeItem,
    resetOrder,
    baseCheck,
    includes,
    toggleInclude,
    audience,
    nights,
    split,
    liftOverride,
    capacity,
    events,
    priceOverride,
    date,
  ]);

  return <NightContext.Provider value={value}>{children}</NightContext.Provider>;
}

export function useNight() {
  const context = useContext(NightContext);
  if (!context) throw new Error("useNight must be used inside <NightProvider>");
  return context;
}

/** Suggested headliner for an unbuilt night — the strongest built-in tie-in. */
export const defaultHeadliner = guests[0];

export const money = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
