import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

const socials = [
  { icon: Github, href: "https://github.com/maxmanlz", label: "GitHub", handle: "@Maxmanlz" },
  { icon: Linkedin, href: "https://linkedin.com/in/rodrigo-lizalde-sanchez", label: "LinkedIn", handle: "in/rodrigo-lizalde-sanchez" },
  { icon: Mail, href: "mailto:rlizalde7+website@gmail.com", label: "Email", handle: "rlizalde7@gmail.com" },
];

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">Contact</h1>
        <div className="h-1 w-12 rounded bg-[var(--accent)] mb-4" />
        <p className="text-[var(--muted)] mb-12 max-w-lg">
          Have a question, a project idea, or just want to say hi? Send me a
          message and I&apos;ll get back to you.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-[1fr_auto] gap-12">
        {/* Form */}
        <AnimatedSection delay={0.1}>
          <ContactForm />
        </AnimatedSection>

        {/* Socials sidebar */}
        <AnimatedSection delay={0.2} className="flex flex-col gap-5 md:min-w-[200px]">
          <p className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase">
            Find me at
          </p>
          {socials.map(({ icon: Icon, href, label, handle }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group"
            >
              <Icon size={16} className="group-hover:text-[var(--accent)] transition-colors" />
              <span className="text-sm">{handle}</span>
            </Link>
          ))}
        </AnimatedSection>
      </div>
    </div>
  );
}
