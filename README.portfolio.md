# Nary Chhon — Portfolio

A responsive React + TypeScript portfolio built with Vite and deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173`; if occupied, Vite uses the next free port such as `5175`).

## Check before publishing

```bash
npm run lint
npm run build
```

`dist/` is the production output. Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and deploys it to GitHub Pages. The Vite `base` is `/` because this repo is published at the domain root (`narychhon.github.io`).

## Update content

Edit `src/data.ts`:

- `profile`: name, bio, email, CV, LinkedIn
- `technologies`: project case studies
- `designWorks`: creative work cards
- `events`: memory-board event photos and names
- `achievements`: certificates and training

## Assets

Optimized files used by the site live in `public/`:

- `public/images/profile/` — portrait
- `public/images/about/` — childhood photo
- `public/images/projects/` — project slides
- `public/images/design/` — artwork
- `public/images/events/` — event photos
- `public/images/achievements/` — certificates
- `public/documents/` — CV and pitch decks

Original, full-size source files are kept outside `public/` in their source folders and are not needed by the deployed site. Prefer WebP images and keep `public/documents/` to files that are actually linked from `src/data.ts`.
