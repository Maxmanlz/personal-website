import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, tools, and craft.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">Blog</h1>
        <div className="h-1 w-12 rounded bg-[var(--accent)] mb-4" />
        <p className="text-[var(--muted)] mb-12">
          Thoughts on software, tools, and things I find interesting.
        </p>
      </AnimatedSection>

      {posts.length === 0 ? (
        <AnimatedSection delay={0.1}>
          <p className="text-[var(--muted)] text-sm">No posts yet — check back soon.</p>
        </AnimatedSection>
      ) : (
        <div className="flex flex-col divide-y divide-[var(--border)]">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.07}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 py-7 hover:pl-2 transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h2>
                  <ArrowRight
                    size={16}
                    className="text-[var(--muted)] shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </div>
                <time className="text-xs font-mono text-[var(--muted)]">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {post.summary && (
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{post.summary}</p>
                )}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>
  );
}
