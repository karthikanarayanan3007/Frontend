# My Diwali Memories 2026

A responsive React celebration journal built with Vite, TypeScript and custom CSS. It includes canvas fireworks, accessible controls, an interactive Diwali timeline, food gallery, replaceable personal-photo cards and decorative details.

## Run locally

```sh
pnpm install
pnpm dev
```

Create an optimized static build with `pnpm build`.

## Add personal photos

Copy your images into `public/photos/`. In `src/components/PhotoMemories.tsx`, set any card's `image` field to its public path, for example `image: '/photos/diwali-morning.jpg'`. Leave the field unset to keep the illustrated placeholder. Click a card to open the photo preview; the preview supports the left/right arrow keys and Escape.

The fireworks are rendered on canvas. The optional sound toggle enables a soft synthesized chime when a celebration button is pressed; it never plays automatically.
