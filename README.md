# Moaaz Elmahi — Animated Portfolio

A modern, highly interactive, and visually stunning portfolio site built with Next.js 14, Tailwind CSS, and Framer Motion. It features neon gradients, glassmorphism, particles, section entrance animations, dark/light mode, GitHub-powered projects, skills aggregation, resume embed, and a contact form.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- next-themes (dark/light toggle)
- react-tsparticles (animated background)

## Getting Started

1. Install dependencies

```pwsh
npm install
```

2. (Optional) Create a `.env.local` file to increase GitHub API limits

```
GITHUB_TOKEN=ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

3. Run the dev server

```pwsh
npm run dev
```

Then open http://localhost:3000.

## Customization
- Replace `/public/profile.jpg` with your portrait.
- Add an ambient audio file at `/public/audio/ambient.mp3` (optional).
- Edit `data/skills.json` to include LinkedIn/fallback skills.
- Update personal links in `data/profile.ts` and `src/components/Navbar.tsx`.

## Notes
- LinkedIn skill extraction requires OAuth; this project uses a curated fallback list instead.
- Contact form uses `mailto:` by default. Integrate EmailJS/Resend/Formspree for production.

## License
MIT
