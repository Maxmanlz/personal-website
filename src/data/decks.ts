export type DeckFormat =
  | "Commander"
  | "Modern"
  | "Standard"
  | "Pioneer"
  | "Legacy"
  | "Pauper";

export type Deck = {
  name: string;
  format: DeckFormat;
  // The main card whose image is shown front and centre
  commanderName: string;
  // Up to 3 supporting cards that fan out behind on hover
  keyCardNames: string[];
  description: string;
  themes: string[];
  moxfield?: string;
};

export const decks: Deck[] = [
  {
    name: "Ziatora Incinerate!",
    format: "Commander",
    commanderName: "Ziatora the Incinerator",
    keyCardNames: [
      "Jumbo Cactuar",
      "Mayhem Devil",
      "City on Fire",
    ],
    description:
      "Jund semi-tribal burn deck, with a focus on pumping creatures and dealing big direct damage",
    themes: ["Tribal", "Pump", "Dragons", "Sacrifice", "Burn", "Jund"],
    moxfield: "https://moxfield.com/decks/DxujWVprIkiZwEdqJh8-iw",
  },
  {
    name: "Dinosaur Office",
    format: "Commander",
    commanderName: "Gishath Sun's Avatar",
    keyCardNames: [
      "Zacama primal calamity",
      "Last March of The Ents",
      "Wakening Sun's Avatar",
    ],
    description:
      "Ramp out until you can play your big dinos then go wild",
    themes: ["Tribal", "Dinosaur", "Naya"],
    moxfield: "https://moxfield.com/decks/PBP9NcEJYUaNiO7ntU6DtQ",
  },
  // Add more decks here — just fill in real card names and they'll
  // be fetched automatically from Scryfall.
];
