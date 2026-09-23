# Biblical Leadership Match (Vite + TypeScript revamp)

A full revamp of the **Biblical Leadership Match** quiz app, rebuilt as a modern
Node.js + TypeScript + Vite project. Answer 20 quick scenario questions and get
matched to a Bible leader, your leadership "superpower," and a level-up habit to
practice for 7 days — in English or Spanish.

This project is a faithful port **plus** a complete UI refresh of the original
single-file version (`../source/index.html`). All quiz content, trait data,
leaders, translations, and scoring logic were ported verbatim; only the
presentation and project structure are new.

## Features

- **20-question quiz** with bilingual (EN/ES) questions and answers
- **6 leadership traits** (Visionary, Strategic, Relational, Bold, Executor, Counselor)
  scored live as you answer, with animated score bars
- **8 Bible leader matches** (Moses, Nehemiah, Joseph, David, Solomon, Peter, Paul, Deborah)
  ranked by trait-distance scoring
- **Traits explorer**: trait cards with descriptions and per-trait level-up habits
- **Result view**: match hero, animated trait mix, superpower, 7-day habit,
  key verse, secondary vibe
- **Share** (Web Share API with clipboard fallback), **Copy**, and **Email me**
  (opens your mail app via `mailto:`)
- **Saved progress + last result** in `localStorage` (same storage key as the
  original, so existing saves carry over), with a "Load saved" resume flow
- **Language toggle** (EN/ES) persisted, haptic + beep feedback toggles
- **Keyboard shortcuts** during the quiz: `1–4` to answer, `←` to go back, `Esc` to quit
- Mobile-first bottom-tab navigation, accessible buttons and focus states,
  `prefers-reduced-motion` support

## Tech

- [Vite](https://vite.dev/) 6 + TypeScript 5 (strict)
- Zero runtime dependencies — just `vite` + `typescript` as dev dependencies
- Typed modules: `src/data/*` (content), `src/i18n/*` (locales),
  `src/views/*` (Home / Quiz / Traits / Result), `src/app.ts` (orchestrator)

## Run locally

```bash
npm install
npm run dev      # start the dev server with hot reload
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build    # type-checks (tsc) and emits a production build to dist/
npm run preview  # serve the production build locally
```

## Deploy

The build output in `dist/` is fully static — no server needed. It works from any
path (`base: './'` keeps asset URLs relative), so it's friendly to:

- **GitHub Pages**: push `dist/` to `gh-pages`, or use an Actions workflow that
  runs `npm run build` and publishes `dist/`
- Any static host: Netlify, Vercel, Cloudflare Pages, or plain file hosting

## Project structure

```
blm-vite/
├── index.html              # Vite entry: header, tab bar, view shells
├── src/
│   ├── main.ts             # entry: imports CSS, boots the app
│   ├── app.ts              # view switching, quiz actions, wiring, shortcuts
│   ├── style.css           # deep navy + gold theme, mobile-first
│   ├── types.ts            # shared domain types
│   ├── state.ts            # quiz state + scoring (ported logic)
│   ├── storage.ts          # localStorage persistence
│   ├── share.ts            # share / copy / email
│   ├── feedback.ts         # haptic + beep
│   ├── data/
│   │   ├── questions.ts    # 20 bilingual questions (ported)
│   │   ├── traits.ts       # 6 traits + level-up habits (ported)
│   │   └── leaders.ts      # 8 leaders (ported)
│   ├── i18n/
│   │   ├── index.ts        # t() helper + language holder
│   │   └── locales/
│   │       ├── en.ts       # English strings (ported)
│   │       └── es.ts       # Spanish strings (ported)
│   └── views/
│       ├── home.ts         # start view
│       ├── quiz.ts         # quiz view
│       ├── traits.ts       # traits explorer + animated bars
│       └── result.ts       # result view
└── package.json
```

## Notes

- Content and scoring are intentionally unchanged from the original single-file
  app. New strings were added only for the refreshed navigation chrome
  (`tab_*`, empty states, section titles) — see the header comment in
  `src/i18n/locales/en.ts`.
- The original's 3-step panel flow became a 4-tab mobile navigation
  (Home / Quiz / Traits / Result); the always-visible trait sidebar is now the
  Traits tab plus a compact live trait strip during the quiz.
