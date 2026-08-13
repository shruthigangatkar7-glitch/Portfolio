# Shruthi M G — Portfolio

Single-page static portfolio website for **Shruthi M G**, a final-year AI & Machine Learning engineering student at Don Bosco Institute of Technology, Bengaluru. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step, and no dependencies except Google Fonts.

## Features

- **Single-page layout** with sections: Home/Hero, About, Skills, Experience, Projects, Education, Contact, and Footer
- **Dark theme with glassmorphism** — translucent frosted-glass cards, violet-to-cyan gradient accents, and subtle grid overlay
- **Animated background** — floating blurred color blobs and a radial grid pattern
- **Scroll-reveal animations** — content fades/slides in as it enters the viewport, with staggered delays
- **Active nav highlighting** — the current section's link is highlighted via `IntersectionObserver`
- **Responsive design** — mobile hamburger menu, fluid grid layouts, and full responsiveness from phone to desktop
- **Sticky navbar** that gains a shadow on scroll
- **Back-to-top button** with smooth scrolling
- **Auto-updating footer year**
- **Downloadable resume** — "Download Resume" buttons link to `assets/Shruthi_MG_Resume.pdf`
- **SEO-ready** — descriptive `<title>` and `<meta name="description">`

## Tech Stack

| Layer    | Technology                                              |
| -------- | ------------------------------------------------------- |
| Markup   | HTML5 (semantic sections)                               |
| Styling  | CSS3 (custom properties, flexbox, grid, keyframe animations) |
| Scripting| Vanilla JavaScript (ES6, IntersectionObserver, classList) |
| Fonts    | Inter + Sora, loaded from Google Fonts                  |
| Assets   | Profile photo (JPG) and resume (PDF)                    |

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)

## Getting Started

The site is fully static and needs no installation or build step. Two ways to run it locally:

### Option 1 — Open directly

Double-click `index.html` (or drag it into a browser). Everything works from the `file://` protocol since there are no API calls or modules.

### Option 2 — Serve with a local server

Using Python (recommended for the most accurate preview):

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

You can also use any static file server, e.g. `npx serve` or a VS Code extension like Live Server.

## Project Structure

```
PORTFOLIO/
├── index.html          # Single-page site (all content lives here)
├── css/
│   └── style.css       # Dark theme, glassmorphism, gradient accents, animations, responsive rules
├── js/
│   └── script.js       # Nav shadow, mobile menu, active-link + reveal observers, back-to-top, footer year
└── assets/
    ├── profile.jpg     # Profile photo used in the hero section
    └── Shruthi_MG_Resume.pdf  # Resume linked from the "Download Resume" buttons
```

## Customization

All site content lives in `index.html`; styling lives in `css/style.css`; interactions live in `js/script.js`.

### Content

- **Sections & text** — edit the content inside each `<section>` in `index.html` (About, Skills, Experience, Projects, Education, Contact).
- **Navigation** — add or remove items in the `<ul class="nav-links">` list and matching sections.
- **Contact details** — update the `mailto:`, `tel:`, and LinkedIn links in the hero social icons and the Contact section.

### Photo & Resume

Replace the files in `assets/` keeping the same names:

- `assets/profile.jpg` — swap in a new photo (hero image).
- `assets/Shruthi_MG_Resume.pdf` — replace with an updated resume.

All "Download Resume" buttons and the nav CTA point to `assets/Shruthi_MG_Resume.pdf`, so no code changes are needed when you swap the files.

### Colors & Theme

Colors, fonts, radii, and shadows are defined as CSS custom properties in the `:root` block at the top of `css/style.css`. Key variables:

| Variable      | Default   | Purpose                    |
| ------------- | --------- | -------------------------- |
| `--bg`        | `#070a13` | Page background            |
| `--accent-1`  | `#7c5cff` | Primary accent (violet)    |
| `--accent-2`  | `#22d3ee` | Secondary accent (cyan)    |
| `--accent-3`  | `#f0abfc` | Tertiary accent (pink)     |
| `--gradient`  | violet-to-cyan | Gradient used on accents |
| `--font-body` | Inter     | Body font                  |
| `--font-head` | Sora      | Heading font               |

Change the hex values (and the `--gradient` definition) to re-theme the whole site. The background blobs are hard-coded colors in the `.blob-1/2/3` rules.

### Behavior

`js/script.js` is a single IIFE with clearly commented blocks — edit the `rootMargin`/`threshold` of the `IntersectionObserver`s to tune active-link detection and reveal timing, or the `(i % 4) * 60ms` stagger delay to change reveal pacing.

## Deployment

The site is a set of static files, so it works on any static hosting service. Two common options:

### GitHub Pages

1. Create a repository named `username.github.io` (or any repo) and push the project.
2. Go to **Settings → Pages**, choose the branch (`main`) and root (`/`) as the source.
3. Your site is live at `https://username.github.io`.

### Netlify

1. Drag-and-drop the project folder at `app.netlify.com/drop`, or
2. Connect a Git repository — Netlify auto-detects a static site; no build command is required (leave the build command and publish directory empty or set the publish directory to `/`).

### Vercel / Cloudflare Pages

Both also support direct folder deploys or Git-based deploys with no build configuration needed.

> Note: if the `download` attribute on the resume buttons behaves inconsistently on your host (some servers stream PDFs inline instead), add a header like `Content-Disposition: attachment` on the host's configuration, or keep the PDF name as-is — most static hosts serve `.pdf` downloads without issue.

---

Built with plain HTML, CSS, and JavaScript. No framework, no build step.
