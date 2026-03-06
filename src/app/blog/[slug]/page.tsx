import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-10"
      >
        <ArrowLeft size={14} /> Back to blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-3">{post.title}</h1>
        <div className="flex items-center gap-4 flex-wrap">
          <time className="text-xs font-mono text-[var(--muted)]">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <article className="prose">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
