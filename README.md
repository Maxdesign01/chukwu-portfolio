# Chukwu Sunday Nwabueze · Maxdesign — portfolio

Plain HTML + CSS + JavaScript. No frameworks, no build step, no dependencies.
Everything lives in this one folder (`index.html`, `styles.css`, `script.js`, `assets/`).

## Preview it right now

The folder is served on your machine at http://localhost:8099 (a tiny local test server is
already running). You can also just double-click `index.html`.

## Deploy to Vercel

1. Go to https://vercel.com/new
2. Either upload this folder (drag & drop into the dashboard) or push it to GitHub and import the repo.
3. No framework preset needed. Leave every setting default. Deploy.

## Deploy to Cloudflare Pages

1. Go to https://dash.cloudflare.com → Workers & Pages → Create → Pages → **Upload assets**.
2. Drag this whole folder in. Deploy.
3. (Or connect a GitHub repo; the build command can stay empty.)

## Where to edit what

| What                         | Where |
|------------------------------|-------|
| All contact links            | Comment block at the top of `script.js` (they're also plain `<a href>`s in `index.html`) |
| Calendly + WhatsApp popup    | `index.html`, section `BOOKING POPUP` |
| Project cards & case studies | `PROJECTS` object at the top of `script.js` |
| Services, about, testimonials, steps | `index.html` (each section is labeled with a comment banner) |
| Profile photo                | Replace `assets/profile-picture.png` with any square photo, keep the same filename |
| Logo                         | `assets/logo.png` (square) and `assets/logo-wordmark.png` (transparent wordmark) |
| Colors                       | `:root` variables at the top of `styles.css` |
| Animations                   | CSS transitions + the blocks near the top of `script.js`; all of it already respects the visitor's reduced-motion setting |
| Favicon                      | `assets/favicon.png` |

## Built-in behaviors

- Booking popup ("Let's talk", "Hire me", "Book a call") with Calendly slot + WhatsApp Business + email.
- Floating WhatsApp button after scrolling past the hero.
- Custom cursor, magnetic buttons, scroll reveals, count-up stats, marquees, accordion services, work filters, project popups, card tilt, auto-cycling process steps.
- Keyboard + screen-reader safe (skip link, focus states, aria labels), 100/100 Lighthouse accessibility, best-practices and SEO scores at build time.
- Reduced motion: every non-essential animation switches off automatically.
