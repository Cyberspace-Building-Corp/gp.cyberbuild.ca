# gregpeterson.cyberbuild.ca

Personal portfolio site for Greg Peterson — Principal Solution Architect at [Cyberspace Building Corp.](https://cyberbuild.ca)

## Stack

- **Vite** — build tooling and dev server
- **TypeScript** — template functions and scroll animation
- **Plain CSS** — no framework, design tokens via CSS custom properties
- **JSON content files** — all copy lives in `content/`, injected at build time

## Project Structure

```
content/
  site.json          # Meta, hero stats, contact info
  timeline.json      # Career timeline eras
  projects.json      # Project showcase cards
  certs.json         # Certifications
  skills.json        # Skill domains
  leadership.json    # Leadership & mentorship cards

src/
  templates/
    types.ts         # Shared TypeScript interfaces
    hero.ts          # Hero section renderer
    timeline.ts      # Timeline era renderer
    projects.ts      # Project card renderer
    skills.ts        # Cert + skill domain renderers
    leadership.ts    # Leadership card renderer
    contact.ts       # Contact section renderer
    index.ts         # Re-exports all renderers
  styles/
    main.css         # All styles — design tokens, layout, animations
  main.ts            # Client-side scroll animations only

public/
  portrait.png       # Painterly oil portrait

index.html           # Shell with <!-- inject:section --> placeholders
vite.config.ts       # Content injection plugin + build config
```

## How It Works

All content is injected at **build time** — not at runtime. The Vite config includes a `transformIndexHtml` plugin that:

1. Reads each `content/*.json` file
2. Passes the data through the corresponding TypeScript template function
3. Replaces `<!-- inject:section -->` placeholders in `index.html`
4. Vite then bundles CSS and JS normally

The result is a `dist/index.html` with all content inline — no JavaScript required to render text, which means full SEO visibility and fast first paint.

`src/main.ts` only handles scroll-triggered animations. It never touches content.

## Development

```bash
npm install
npm run dev       # Dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

## Updating Content

Every piece of copy lives in `content/`. To update a project card:

```bash
# Edit content/projects.json
npm run build
```

No template changes needed unless you're changing structure.

## Portrait

`public/portrait.png` is referenced as `/portrait.png` — a static asset, not base64-embedded. Replace the file to update the portrait.

## Fonts

Loaded from Google Fonts: Orbitron (display), Rajdhani (body), Share Tech Mono (code/labels). Matches the corporate site at [cyberbuild.ca](https://cyberbuild.ca).

## Deployment

Build produces a static `dist/` folder. Deploy to any static host — Netlify, Vercel, GitHub Pages, or alongside the corporate site on the same server.

Point `gregpeterson.cyberbuild.ca` at `dist/`.
