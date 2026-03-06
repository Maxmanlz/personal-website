import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/maxmanlz", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/rodrigo-lizalde-sanchez", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rlizalde7@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--muted)]">
          &copy; {new Date().getFullYear()} Rodrigo Lizalde Sanchez. Built with Next.js.
        </p>
        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              <Icon size={16} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
