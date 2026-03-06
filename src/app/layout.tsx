import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rodrigo Lizalde Sanchez — Software Engineer",
    template: "%s | Rodrigo Lizalde Sanchez",
  },
  description:
    "Full-stack software engineer proficient in TypeScript, Python, and PostgreSQL with hands-on experience in AI/LLM integration and RAG pipelines.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rodrigolizaldesanchez.com",
    siteName: "Rodrigo Lizalde Sanchez",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
