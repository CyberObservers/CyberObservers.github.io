# cyberobservers.github.io

Personal site. Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # serves the built site locally
```

## Structure

```
src/
  consts.ts            # site title, author, nav links
  data/
    publications.ts    # academic publications
    projects.ts        # project portfolio
  content/
    config.ts          # blog content collection schema
    blog/*.md          # blog posts
  pages/
    index.astro        # home / about
    publications.astro
    projects.astro
    blog/index.astro
    blog/[...slug].astro
    rss.xml.ts
  layouts/BaseLayout.astro
  components/Header.astro, Footer.astro
  styles/global.css
public/                # static assets (favicon, CV pdf, images)
```

## Adding content

- **Blog post**: create `src/content/blog/your-slug.md` with frontmatter (`title`, `pubDate`, etc — see `hello-world.md`).
- **Publication**: edit `src/data/publications.ts`.
- **Project**: edit `src/data/projects.ts`.
- **CV**: drop `cv.pdf` into `public/`.

## First-time deployment

1. Create a public GitHub repo named exactly `CyberObservers.github.io`.
2. From this directory:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial commit"
   git remote add origin git@github.com:CyberObservers/CyberObservers.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow at `.github/workflows/deploy.yml` runs automatically on push to `main`.
5. Live at https://cyberobservers.github.io
