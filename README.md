# Agency Name — marketing site

Astro (frontend) + Sanity (content) + Vercel (hosting).

## Status

This is a working scaffold. Every page renders using placeholder content
in `src/lib/mockData.ts` until a real Sanity project is connected — at
that point the same pages automatically switch to live data with zero
code changes, because of the fallback logic in `src/lib/sanity.ts`.

## Run it locally

    npm install
    npm run dev

## Connect Sanity (once you have a project)

1. Copy `.env.example` to `.env` and fill in `PUBLIC_SANITY_PROJECT_ID`
   (and `PUBLIC_SANITY_DATASET` if it's not `production`).
2. Copy the three files in `sanity-schemas/` into your Studio project's
   schema folder and register them in your Studio's `sanity.config.ts`.
3. Restart `npm run dev` — content will now come from Sanity.

## Project structure

    src/
      layouts/Layout.astro       shared page shell
      components/                Header, Footer
      lib/
        sanity.ts                Sanity client + fallback logic
        queries.ts                GROQ queries
        types.ts                  content type definitions
        mockData.ts               placeholder content
      pages/
        index.astro, about.astro, services.astro, team.astro, contact.astro
        blog/index.astro, blog/[slug].astro
        podcast/index.astro, podcast/[slug].astro
    sanity-schemas/               schema files to drop into your Studio project
