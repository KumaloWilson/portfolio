# Portfolio Website

Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Overview

This is the personal portfolio for Wilson Kumalo. It showcases projects, experience, tools, and blog content with a custom navigation system, motion-driven section reveals, and dedicated blog pages.

## Features

- Section-based navigation with smooth scrolling.
- Project, experience, and tools sections powered by a centralized data service.
- Blog list and detail pages with SEO metadata and sitemap support.
- Rich motion and hover interactions powered by Framer Motion.
- SEO-ready metadata, JSON-LD, and OpenGraph/Twitter cards.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- TypeScript
- Vercel Analytics

## Getting Started

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

The site will be available at `http://localhost:3000`.

## Scripts

- `pnpm dev`: Start the dev server
- `pnpm build`: Build for production
- `pnpm start`: Run the production build
- `pnpm lint`: Lint the codebase
- `pnpm typecheck`: TypeScript type check
- `pnpm analyze`: Bundle analysis

## Environment Variables

Set the public site URL to ensure canonical URLs and sitemap entries are correct:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Content Management

Most content is managed in `modules/shared/services/data.service.ts`, including:

- Profile data
- Projects
- Experience timeline
- Tools list
- Blog posts
- Stats and achievements

Blog routes are generated from the `slug` field in `blogPostsData`.

## SEO

SEO is configured in:

- `app/layout.tsx`: global metadata + JSON-LD
- `app/blogs/page.tsx`: blogs list metadata
- `app/blog/[slug]/page.tsx`: per-post metadata
- `app/sitemap.ts`: sitemap generation
- `app/robots.ts`: robots rules

## Project Structure

```
app/                 Next.js routes and layouts
modules/             Feature modules (home, projects, tools, etc.)
modules/shared/      Shared components, types, data, and state
public/              Static assets
lib/                 Shared utilities (site config)
styles/              Global styles
```

## Deployment

The project is ready for deployment to Vercel or any Next.js-compatible host:

```bash
pnpm build
pnpm start
```

## License

MIT License. See `LICENSE`.

## Design Inspiration

The visual design is inspired by the Sawad Framer project:
https://framer.com/projects/Sawad-copy--ITQ5UqtcH31fxBoZ6k9Q-8Ott3?duplicate=NRkfQQbzViP80JUxAfHy&node=augiA20Il
