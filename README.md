# Sivas S B Portfolio

Fashion designer portfolio built with Next.js 15, React 19, and TypeScript.

## Project Structure

```
app/
  layout.tsx           # Root layout (NavBar + Footer)
  globals.css          # Global design system styles
  page.tsx             # About (landing page)
  not-found.tsx        # 404 page
  projects/
    page.tsx           # Projects listing
    [slug]/
      page.tsx         # Dynamic project detail route
  resume/
    page.tsx           # Resume page
components/
  NavBar.tsx           # Responsive navigation
  Footer.tsx           # Footer
  ProjectDetail.tsx    # Reusable project detail renderer
lib/
  projects.ts          # Centralized project config & utilities
public/
  projects/
    royal-renaissance/ # 10 pages (01.webp – 10.webp)
    sheesh-mahal/      # 10 pages
    aerostruct/        # 24 pages
    ann/               # 27 pages
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

- `/` — About / landing
- `/projects` — Project listing
- `/projects/royal-renaissance` — The Royal Renaissance
- `/projects/sheesh-mahal` — Sheesh Mahal
- `/projects/aerostruct` — Aerostruct
- `/projects/ann` — ANN
- `/resume` — Web resume
