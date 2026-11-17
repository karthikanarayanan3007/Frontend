# Diwali Day — source code

A lightweight single-page Diwali journal built with plain HTML, CSS, and JavaScript. It includes an editable celebration routine, a personal photo area, a sweets gallery, a short Ramayana story, and an interactive canvas fireworks finale with separate “send my wish” and show pause/resume controls.

## Run locally

Serve this folder with any static web server. For example, with Python 3:

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000` in a browser. The page uses browser `localStorage` for the routine, profile text, and compressed uploaded photos, so that data stays in the same browser/device rather than being uploaded to a server.

## Main files

- `index.html` — page structure and sections
- `styles.css` — responsive layout, festive styling, and reduced-motion treatment
- `app.js` — routine/photo/sweets interactions and the canvas firework animation
- `favicon.svg` — browser-tab diya icon
- `manus-routes.json` — route declaration used by the Manus preview
- `app.config.ts` — Manus project logo metadata

The hero and sweets still-life images in the Manus-hosted project use its `/manus-storage/` asset paths. If you run the files on another host, replace those two image URLs in `index.html` with image files/URLs available to that host.

The page also includes a four-part Ramayana story explaining Ravana's defeat and Rama's homecoming, plus a responsive digital firework display with a wish prompt and pause/resume control. The canvas honors the browser's reduced-motion preference.
