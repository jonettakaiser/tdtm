export interface MenuItem {
  id: string;
  name: string;
  tag: string;
  original?: string;
  description: string;
  price: string;
  /** Numeric price, used by the live-night check model. */
  amount: number;
  kind: "food" | "drink";
}

export const liveNightMenu: MenuItem[] = [
  {
    id: "chavez-ravine-fries",
    name: "Chavez Ravine Fries",
    tag: "Food · Collab",
    original: "Beef Tallow Fries",
    description: "Dijonaise | ketchup",
    price: "$16",
    amount: 16,
    kind: "food",
  },
  {
    id: "blue-heaven-wings",
    name: "Blue Heaven Wings",
    tag: "Food · Collab",
    original: "Wings 6",
    description: "Lemon pepper | buffalo | charred chile",
    price: "$23",
    amount: 23,
    kind: "food",
  },
  {
    id: "walk-off",
    name: "The Walk-Off",
    tag: "Food · Collab",
    original: "Garlic Shrimp",
    description: "White shrimp | toasted garlic | sherry",
    price: "$30",
    amount: 30,
    kind: "food",
  },
  {
    id: "starting-nine",
    name: "The Starting Nine",
    tag: "Food · Collab",
    original: "Pan con Tomate",
    description: "Smoked tomato | boquerones | urfa",
    price: "$23",
    amount: 23,
    kind: "food",
  },
  {
    id: "extra-innings",
    name: "Extra Innings",
    tag: "Cocktail · Collab",
    description:
      "Built with Mookie's tequila, poured at Pawn Shop — to be finalized with the bar team",
    price: "$18",
    amount: 18,
    kind: "drink",
  },
  {
    id: "seventh-inning",
    name: "The 7th Inning",
    tag: "Cocktail · Collab",
    description: "Second cocktail, spirit-forward — to be finalized with the bar team",
    price: "$16",
    amount: 16,
    kind: "drink",
  },
  {
    id: "blue-heaven-zero",
    name: "Blue Heaven Zero",
    tag: "Mocktail · Collab",
    description: "Citrus | blue butterfly pea flower | soda",
    price: "$12",
    amount: 12,
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
