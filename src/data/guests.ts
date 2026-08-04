export type GuestTag = "Pawn Shop Tie-In" | "TDTM Alum" | "Target Guest";

export interface Guest {
  no: string;
  name: string;
  who: string;
  tag: GuestTag;
}

export const guests: Guest[] = [
  {
    no: "01",
    name: "Mookie Betts",
    who: "Dodgers World Series champion — his tequila is already poured at Pawn Shop, and he's rumored to be an investor in the restaurant. The single strongest built-in tie-in on this list.",
    tag: "Pawn Shop Tie-In",
  },
  {
    no: "02",
    name: "Kiké Hernández",
    who: "Fan-favorite Dodgers infielder and one of the most-requested names for the pod. Already a TDTM guest, which makes a live follow-up an easy yes.",
    tag: "TDTM Alum",
  },
  {
    no: "03",
    name: "Freddie Freeman",
    who: "Dodgers first baseman, 2024 World Series MVP. Elite star power for a marquee first live episode.",
    tag: "Target Guest",
  },
  {
    no: "04",
    name: "Max & Kellie Muncy",
    who: "Dodgers infielder and his wife — both have already appeared on the podcast. A couple's episode plays well live, on camera and in the room.",
    tag: "TDTM Alum",
  },
  {
    no: "05",
    name: "Kelsie Whitmore",
    who: "The first woman to play professional baseball. A personal relationship with Melissa and a fast-growing profile — a genuinely fresh booking for the format.",
    tag: "Target Guest",
  },
  {
    no: "06",
    name: "Dave Roberts",
    who: "World Series–winning Dodgers manager. A leadership-and-legacy conversation that draws a different, older crowd through the door.",
    tag: "Target Guest",
  },
  {
    no: "07",
    name: "Clayton & Ellen Kershaw",
    who: "A Dodgers legend and his wife. A long-shot booking, but a natural fit for a collab with the Kershaw's Challenge foundation.",
    tag: "Target Guest",
  },
  {
    no: "08",
    name: "Magic Johnson",
    who: "NBA Hall of Famer and Dodgers part-owner. Crosses the podcast over from a baseball audience into a much wider LA sports and entertainment one.",
    tag: "Target Guest",
  },
];
