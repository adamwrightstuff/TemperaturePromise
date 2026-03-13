# TemperaturePromise

Static Vrbo checkout prototype showing a **WeatherPromise** add-on (Rain + Temperature protection) for a Miami, FL property. Single page, no backend.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production (e.g. Vercel)

```bash
npm run build
```

Output is in `dist/`. Static hosting works as-is.

## Connect to GitHub & Vercel

1. Create a new repo on GitHub (e.g. `TemperaturePromise`).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Vrbo checkout + WeatherPromise prototype"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/TemperaturePromise.git
   git push -u origin main
   ```
3. In [Vercel](https://vercel.com): **Add New… → Project** → Import the `TemperaturePromise` repo. Deploy.

## What’s in the prototype

- **Checkout context:** Property name, Miami dates (July 14–21, 2025), payment summary.
- **WeatherPromise module:** Bundle (Rain + Temperature), Miami July historical range (91°F / 78°F), plain-language trigger, single bundle price, “Add to booking” CTA.
- **Design:** Vrbo-style layout and colors, mobile-friendly, single static page.
