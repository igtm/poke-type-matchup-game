# Repository Guidelines

## Project Structure & Module Organization

Application code lives in `src/`. `src/App.tsx` composes the single-screen game UI, `src/components/` holds presentational pieces, and `src/lib/` contains pure game logic such as matchup rules, storage, RNG, and stats helpers. Generated Pokemon data is checked in at `src/data/pokemon.ts`. Static assets are served from `public/`, with sprite files under `public/pokemon-icons/`. Regeneration logic lives in `scripts/generate-pokemon-data.mjs`. CI and Pages deployment workflows are in `.github/workflows/`.

## Build, Test, and Development Commands

- `pnpm dev`: start the Vite dev server.
- `pnpm build`: run TypeScript project checks and produce a production build in `dist/`.
- `pnpm preview`: serve the built app locally.
- `pnpm test`: run the Vitest suite once.
- `pnpm test:watch`: run Vitest in watch mode.
- `pnpm generate:data`: rebuild `src/data/pokemon.ts` and `public/pokemon-icons/` from PokéAPI.

## Coding Style & Naming Conventions

Use TypeScript with SolidJS patterns already in the repo: 2-space indentation, single quotes, and no semicolons. Prefer small, focused modules. Components use `PascalCase` file names such as `PokemonCard.tsx`; utility modules use lowercase or kebab-free names such as `matchup.ts` and `storage.ts`. Keep pure logic in `src/lib/` and avoid mixing data generation concerns into runtime code.

Write contributor-facing responses, code comments, commit/PR descriptions, and user-facing UI copy in Japanese by default. Keep identifiers, library APIs, and file names in English unless the existing code already uses Japanese.

## Testing Guidelines

Tests use `Vitest`, `jsdom`, and `@solidjs/testing-library`. Follow the existing naming pattern `*.test.ts` and `*.test.tsx`, colocated under `src/`. Add or update tests for any change to type logic, local storage behavior, or mobile/interaction flows. Run `pnpm test` before every commit.

## Commit & Pull Request Guidelines

Recent history uses short, imperative commit messages like `Implement Pokemon type matchup game` and `Fix mobile layout`. Keep that style. For pull requests, include a concise description, note any generated-data changes, and attach screenshots or short recordings for UI changes, especially mobile. Mention whether `pnpm test`, `pnpm build`, and `pnpm generate:data` were run.

## Generated Data & Deployment Notes

Do not hand-edit `src/data/pokemon.ts` or files in `public/pokemon-icons/`; regenerate them. This repo deploys to GitHub Pages with Vite `base: '/poke-type-matchup-game/'`, so keep asset paths base-safe.
