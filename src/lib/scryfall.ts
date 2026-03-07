export type ScryfallCard = {
  name: string;
  color_identity: string[];
  image_uris?: {
    small: string;
    normal: string;
    large: string;
    art_crop: string;
  };
  card_faces?: Array<{
    image_uris?: {
      small: string;
      normal: string;
      large: string;
      art_crop: string;
    };
  }>;
};

export async function fetchCard(name: string): Promise<ScryfallCard | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(
      `https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(name)}`,
      { next: { revalidate: 86400 }, signal: controller.signal }
    );
    clearTimeout(timeout);

    if (!res.ok) return null;
    return res.json() as Promise<ScryfallCard>;
  } catch {
    return null;
  }
}

export function getCardImageUrl(
  card: ScryfallCard,
  size: "small" | "normal" | "large" = "normal"
): string | null {
  if (card.image_uris?.[size]) return card.image_uris[size];
  if (card.card_faces?.[0]?.image_uris?.[size])
    return card.card_faces[0].image_uris[size];
  return null;
}
