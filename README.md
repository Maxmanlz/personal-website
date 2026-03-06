# Personal Website

Personal portfolio site built with Next.js 16, Tailwind CSS, and Framer Motion. Self-hosted on Ubuntu behind Nginx with Cloudflare SSL.

## Stack

- **Framework** — Next.js 16 (App Router, TypeScript)
- **Styling** — Tailwind CSS
- **Animations** — Framer Motion
- **Icons** — Lucide React
- **Blog** — MDX via `next-mdx-remote`
- **Contact form** — Nodemailer (SMTP)

## Pages

| Route | Description |
|---|---|
| `/` | Hero + featured projects |
| `/about` | Bio, skills, timeline |
| `/projects` | Filterable project grid |
| `/blog` | MDX blog post list |
| `/blog/[slug]` | Individual post |
| `/resume` | Styled resume + PDF download |
| `/contact` | Contact form |

## Getting Started

```bash
npm install
npm run dev
```

## Configuration

Copy `.env.local` and fill in your SMTP credentials for the contact form:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=you@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO=you@example.com
```

## Adding Content

**Projects** — edit [`src/data/projects.ts`](src/data/projects.ts)

**Skills / Timeline** — edit [`src/data/skills.ts`](src/data/skills.ts)

**Blog posts** — add `.mdx` files to `content/posts/` with frontmatter:

```mdx
---
title: "Post Title"
date: "2026-03-05"
summary: "A short summary."
tags: ["tag1", "tag2"]
---

Post content here.
```

**Resume PDF** — drop your PDF at `public/resume.pdf`

## Deployment

Build for production:

```bash
npm run build
```

Run as a systemd service (see [`personal-website.service`](personal-website.service)):

```bash
sudo cp personal-website.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now personal-website
```

Nginx proxies `localhost:<PORT>` → your domain. Cloudflare handles SSL.
