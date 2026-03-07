import type { Metadata } from "next";
import { decks } from "@/data/decks";
import { fetchCard, getCardImageUrl, type ScryfallCard } from "@/lib/scryfall";
import DeckCard, { type ResolvedDeck } from "@/components/DeckCard";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "MTG Decks",
  description: "My Magic: The Gathering decks.",
};

// Revalidate card images once per day
export const revalidate = 86400;

async function resolveDeck(
  deck: (typeof decks)[number]
): Promise<ResolvedDeck> {
  // Fetch all cards for this deck in parallel
  const [commanderResult, ...keyCardResults] = await Promise.allSettled([
    fetchCard(deck.commanderName),
    ...deck.keyCardNames.slice(0, 3).map(fetchCard),
  ]);

  const commanderCard =
    commanderResult.status === "fulfilled" ? commanderResult.value : null;

  const keyCards = keyCardResults
    .filter(
      (r): r is PromiseFulfilledResult<ScryfallCard | null> =>
        r.status === "fulfilled"
    )
    .map((r) => r.value)
    .filter((card): card is ScryfallCard => card !== null)
    .flatMap((card) => {
      const image = getCardImageUrl(card, "normal");
      return image ? [{ name: card.name, image }] : [];
    });

  return {
    name: deck.name,
    format: deck.format,
    commanderName: deck.commanderName,
    commanderImage: commanderCard ? getCardImageUrl(commanderCard, "normal") : null,
    commanderColors: commanderCard?.color_identity ?? [],
    keyCards,
    description: deck.description,
    themes: deck.themes,
    moxfield: deck.moxfield,
  };
}

export default async function MTGPage() {
  const deckData = await Promise.all(decks.map(resolveDeck));

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">
          MTG Decks
        </h1>
        <div className="h-1 w-12 rounded bg-[var(--accent)] mb-4" />
        <p className="text-[var(--muted)] mb-16 max-w-xl">
          My current Magic: The Gathering decks. Hover a card to see what&apos;s
          hiding behind it. Card images via{" "}
          <a
            href="https://scryfall.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            Scryfall
          </a>
          .
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {deckData.map((deck, i) => (
          <AnimatedSection key={deck.name} delay={i * 0.12}>
            <DeckCard deck={deck} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
