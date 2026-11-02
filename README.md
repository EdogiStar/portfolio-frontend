# MxDev Portfolio

A React portfolio for Isah Muhammad, built with Vite and Tailwind CSS.

## Run locally

1. Install Node.js 20 or newer.
2. Install dependencies with `pnpm install` (or `npm install`).
3. Start the development server with `pnpm dev` (or `npm run dev`).
4. Open the local URL printed by Vite, usually `http://localhost:5173`.

To create a production build, run `pnpm build` (or `npm run build`). Preview it locally with `pnpm preview` (or `npm run preview`).

The frontend connects to `https://portfolio-backend-cfma.onrender.com/api` by default and loads projects from `/projects` and skills from `/skills`. To use another backend, set `VITE_API_URL` in a `.env` file to the API base URL (including `/api` if required).

## Stack

- React 19
- Vite
- Tailwind CSS 4
- Lucide React
