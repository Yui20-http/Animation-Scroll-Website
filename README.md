# Welcome Itz Fizz — Scroll-Driven Hero

A responsive recreation of the supplied hero concept, built with Next.js, React, Tailwind CSS, GSAP, and ScrollTrigger. It features a staggered headline reveal, counting impact metrics, and a custom SVG car that moves across the road in sync with scroll. The pinned animation uses scrubbed scroll progress rather than autoplay, and reduced-motion preferences are respected.

## Run locally

1. Install Node.js 20.9 or newer.
2. Run `npm install`.
3. Run `npm run dev`, then open http://localhost:3000.

## Deploy to GitHub Pages

The app is configured for Next.js static export. Push the project to a GitHub repository, then in **Settings → Pages** choose **GitHub Actions** as the build and deployment source. The included workflow publishes the site on every push to `main`; the GitHub Pages URL appears in the workflow deployment summary. For a local export, run `npm run build`; the static site is written to `out/`.

The car illustration is inline SVG, so it does not require an external image service.

## Submission links

- Live site: https://yui20-http.github.io/Animation-Scroll-Website/
- GitHub repository: https://github.com/Yui20-http/Animation-Scroll-Website
