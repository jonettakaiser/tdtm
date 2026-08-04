export interface MenuItem {
  id: string;
  name: string;
  tag: string;
  price: string;
  /** Numeric price, used by the live-night check model. */
  amount: number;
  kind: "food" | "drink";
}

export const liveNightMenu: MenuItem[] = [
  {
    id: "melt",
    name: "The Mookie Melt",
    tag: "Food · Collab",
    price: "$19",
    amount: 19,
    kind: "food",
  },
  {
    id: "fries",
    name: "Kiké's Curveball Fries",
    tag: "Food · Collab",
    price: "$14",
    amount: 14,
    kind: "food",
  },
  {
    id: "wings",
    name: "Chavez Ravine Wings",
    tag: "Food · Collab",
    price: "$17",
    amount: 17,
    kind: "food",
  },
  {
    id: "extra-innings",
    name: "The Extra Innings",
    tag: "Cocktail · Collab",
    price: "$16",
    amount: 16,
    kind: "drink",
  },
  {
    id: "stretch",
    name: "7th Inning Stretch",
    tag: "Mocktail · Collab",
    price: "$10",
    amount: 10,
    kind: "drink",
  },
  {
    id: "blue-heaven",
    name: "Blue Heaven",
    tag: "Cocktail · Collab",
    price: "$16",
    amount: 16,
    kind: "drink",
  },
];

export interface IncludeItem {
  id: string;
  name: string;
  tag: string;
  /** Per-head cost this line contributes to a ticket. */
  price: string;
  /** Dollars added to the suggested ticket price — or a multiplier when `premium`. */
  value: number;
  premium?: boolean;
}

export const watchPartyIncludes: IncludeItem[] = [
  {
    id: "room",
    name: "Private room, game on the big screen",
    tag: "Room",
    price: "$18",
    value: 18,
  },
  {
    id: "catering",
    name: "On-site catering spread",
    tag: "Food",
    price: "$17",
    value: 17,
  },
  {
    id: "bartender",
    name: "Dedicated bartender",
    tag: "Bar",
    price: "$10",
    value: 10,
  },
  {
    id: "postseason",
    name: "Postseason night",
    tag: "Premium tier",
    price: "+40%",
    value: 1.4,
    premium: true,
  },
];
