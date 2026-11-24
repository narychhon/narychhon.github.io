# Personal Multidisciplinary Portfolio

A responsive React + TypeScript portfolio built with Vite.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` directory to Netlify, Vercel, GitHub Pages, or another static host.

## Update content

Edit `src/data.ts`:

- `profile`: name, biography, email, CV, LinkedIn, and GitHub
- `technologies`: technical and research projects
- `designWorks`: creative work cards
- `events`: hosting, speaking, moderation, and organization entries
- `achievements`: awards, certificates, training, and recognition

## Add real assets

Use these folders:

- `public/images/profile/` — professional portrait
- `public/images/technology/` — project screenshots
- `public/images/design/` — artwork and visual work
- `public/images/events/` — event photographs
- `public/images/achievements/` — certificates and awards
- `public/documents/` — CV and supporting documents

Replace `public/documents/cv-placeholder.txt` with a PDF and set `cvUrl` to `/documents/your-cv.pdf`.

The current creative, event, portrait, project, and achievement areas are intentionally marked as placeholders and do not claim fictional accomplishments.
