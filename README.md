# Be The Change — Content Website

A Next.js content site with a Zara-inspired editorial UI: bold typography, cream/ink palette, and minimal layout.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom theme, Cormorant Garamond + DM Sans + Oswald)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` — Routes and layout
- `components/` — Header, Footer, Hero, sections
- `lib/content.ts` — Copy and data for classes, sessions, testimonials
- `public/brand/` — **BTC logos and icons** (from [Google Drive branding kit](https://drive.google.com/drive/folders/1qaTQdMC868OEjcATKMzBEEqrLHdLbRUz))

### Using the BTC branding kit

1. Download the folder from [BTC by Aradhana – Google Drive](https://drive.google.com/drive/folders/1qaTQdMC868OEjcATKMzBEEqrLHdLbRUz) (CMYK, RGB, ICONS, PDFs).
2. From **RGB**, save the main logo as `public/brand/logo.png` (or `logo.svg`).
3. From **ICONS**, add `favicon.ico` and optionally `icon.png` to `public/brand/`.
4. The header and footer will show the logo; the browser tab will use the favicon. Until files are added, the site shows the text “Be The Change” as the logo.

## Contact form

The contact page includes a client-side form. Wire it to your backend or a service (e.g. Formspree, Resend) by replacing the submit handler in `app/contact/page.tsx`.
