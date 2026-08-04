export interface MenuItem {
  name: string;
  tag: string;
  price: string;
}

export const liveNightMenu: MenuItem[] = [
  { name: "The Mookie Melt", tag: "Food · Collab", price: "$19" },
  { name: "Kiké's Curveball Fries", tag: "Food · Collab", price: "$14" },
  { name: "Chavez Ravine Wings", tag: "Food · Collab", price: "$17" },
  { name: "The Extra Innings", tag: "Cocktail · Collab", price: "$16" },
  { name: "7th Inning Stretch", tag: "Mocktail · Collab", price: "$10" },
  { name: "Blue Heaven", tag: "Cocktail · Collab", price: "$16" },
];

export const watchPartyIncludes: MenuItem[] = [
  { name: "Private room, game on the big screen", tag: "Room", price: "Incl." },
  { name: "On-site catering spread", tag: "Food", price: "Incl." },
  { name: "Dedicated bartender", tag: "Bar", price: "Incl." },
  { name: "Postseason nights", tag: "Premium tier", price: "+30–50%" },
];
