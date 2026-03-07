"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const COLOR_STYLES: Record<string, string> = {
  W: "bg-yellow-50 border-yellow-200",
  U: "bg-blue-500 border-blue-600",
  B: "bg-neutral-900 border-neutral-700",
  R: "bg-red-600 border-red-700",
  G: "bg-green-700 border-green-800",
};

const COLOR_LABELS: Record<string, string> = {
  W: "White",
  U: "Blue",
  B: "Black",
  R: "Red",
  G: "Green",
};

const FORMAT_STYLES: Record<string, string> = {
  Commander: "text-purple-400 border-purple-400/30 bg-purple-400/10",
  Modern: "text-blue-400 border-blue-400/30 bg-blue-400/10",
  Standard: "text-green-400 border-green-400/30 bg-green-400/10",
  Pioneer: "text-orange-400 border-orange-400/30 bg-orange-400/10",
  Legacy: "text-red-400 border-red-400/30 bg-red-400/10",
  Pauper: "text-gray-400 border-gray-400/30 bg-gray-400/10",
};

// How each key card fans out on hover — [left, centre, right]
const FAN: { rotate: number; x: number; y: number }[] = [
  { rotate: -22, x: -90, y: 10 },
  { rotate: 0, x: 0, y: -18 },
  { rotate: 22, x: 90, y: 10 },
];

export type ResolvedDeck = {
  name: string;
  format: string;
  commanderName: string;
  commanderImage: string | null;
  commanderColors: string[];
  keyCards: { name: string; image: string }[];
  description: string;
  themes: string[];
  moxfield?: string;
};

const SPRING = { type: "spring", stiffness: 280, damping: 22 } as const;

export default function DeckCard({ deck }: { deck: ResolvedDeck }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      {/* ── Card stack ── */}
      <div
        className="relative flex items-center justify-center"
        style={{ height: 300 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Key cards — fan out behind the commander */}
        {deck.keyCards.slice(0, 3).map((card, i) => {
          const pos = FAN[i] ?? FAN[1];
          return (
            <motion.div
              key={card.name}
              className="absolute w-36 rounded-xl overflow-hidden shadow-xl"
              style={{ zIndex: i + 1 }}
              initial={false}
              animate={{
                rotate: hovered ? pos.rotate : 0,
                x: hovered ? pos.x : 0,
                y: hovered ? pos.y : 0,
                scale: hovered ? 0.9 : 0.85,
              }}
              transition={SPRING}
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full object-cover select-none"
                draggable={false}
              />
            </motion.div>
          );
        })}

        {/* Commander — always on top */}
        <motion.div
          className="absolute w-44 rounded-xl overflow-hidden shadow-2xl ring-2 ring-[var(--accent)]/25"
          style={{ zIndex: deck.keyCards.length + 2 }}
          animate={{
            y: hovered ? -10 : 0,
            scale: hovered ? 1.05 : 1,
            boxShadow: hovered
              ? "0 25px 50px rgba(124,106,247,0.35)"
              : "0 10px 30px rgba(0,0,0,0.5)",
          }}
          transition={SPRING}
        >
          {deck.commanderImage ? (
            <img
              src={deck.commanderImage}
              alt={deck.commanderName}
              className="w-full object-cover select-none"
              draggable={false}
            />
          ) : (
            <div className="w-44 aspect-[5/7] bg-[#111120] flex items-center justify-center text-[var(--muted)] text-xs text-center p-4">
              {deck.commanderName}
            </div>
          )}
        </motion.div>
      </div>

      {/* ── Deck info ── */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-[var(--foreground)]">{deck.name}</h3>
          <span
            className={`text-xs px-2 py-0.5 rounded-full border shrink-0 ${
              FORMAT_STYLES[deck.format] ?? FORMAT_STYLES.Commander
            }`}
          >
            {deck.format}
          </span>
        </div>

        {/* Color identity pips */}
        {deck.commanderColors.length > 0 && (
          <div className="flex gap-1.5 items-center">
            {deck.commanderColors.map((c) => (
              <span
                key={c}
                title={COLOR_LABELS[c] ?? c}
                className={`w-3.5 h-3.5 rounded-full border ${COLOR_STYLES[c] ?? "bg-gray-500 border-gray-600"}`}
              />
            ))}
          </div>
        )}

        <p className="text-sm text-[var(--muted)] leading-relaxed">
          {deck.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {deck.themes.map((theme) => (
            <span
              key={theme}
              className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]"
            >
              {theme}
            </span>
          ))}
        </div>

        {deck.moxfield && (
          <Link
            href={deck.moxfield}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start text-xs px-3 py-1.5 rounded-lg border border-[var(--accent)]/40 text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors mt-1"
          >
            View Decklist <ExternalLink size={12} />
          </Link>
        )}
      </div>
    </div>
  );
}
