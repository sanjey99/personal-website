# Sanjey Personal Website

Modern portfolio built with Next.js + Tailwind, designed with an Apple-style cinematic feel and an "Order Book Monolith" centerpiece.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Local Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
npm start
```

## Sections
- Hero + Order Book Monolith
- Cinematic story block (Noise → Discovery → Edge → Execution)
- Featured Projects
- Experience
- Contact

## Deploy
Connected to Vercel via GitHub repo:
- `sanjey99/personal-website`

Any push to `main` redeploys automatically on Vercel.

## Security/Quality gates
- Lint clean
- Production build verified
- `npm audit` clean
- CI workflow runs lint/build/audit on push/PR
