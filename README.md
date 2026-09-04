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

## Content (Sanity)

The site is connected to the real Pascal Method project (`1dvqx8j5` / `production`)
via `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_SANITY_DATASET` — set as environment
variables in Vercel, and in a local `.env` file if you run the site locally.

To add or edit content (team members, blog posts, podcast episodes), run the
Studio in the `studio/` folder:

    cd studio
    npm install
    npm run dev

That opens Sanity's editor at localhost:3333. The first time, it'll ask you to
log into Sanity in your browser. Once you save content there, it's live —
refresh the Astro site (or wait for the next deploy) to see it.

To get a permanent, hosted editing URL instead of running it locally every
time, run `npm run deploy` from inside `studio/` — that publishes it to
something like `pascal-method.sanity.studio`.

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
    studio/                        Sanity Studio (the content editor) — see below
      schemaTypes/                 person, post, podcastShow, podcastEpisode, caseStudy, pressItem
