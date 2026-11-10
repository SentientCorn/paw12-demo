# Next.js Weather API Live Demo (`fe-demo`)

A minimal, zero-API-key Next.js App Router demo built for live coding sessions. Uses the free [Open-Meteo API](https://open-meteo.com/) to demonstrate modern Next.js data fetching and best practices.

## Quick Start

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## Live Demo Walkthrough Order (Recommended)

### Step 1: Server Component & Caching (`app/components/WeatherCard.js`)
- Show `getWeatherByCity(city)` with `"use cache"` and `cacheLife("minutes")` for server-side caching per city.
- Show `export default async function WeatherCard({ searchParams })` awaiting `searchParams` and rendering the UI directly on the server.
- Show `WeatherSkeleton` for the streaming loading state.

### Step 2: Client Component Interactivity (`app/components/CitySearch.js`)
- Explain why `"use client"` is placed at the top of **only** this interactive component (`useState`, `useTransition`, `useRouter`).
- Show how updating the URL (`router.push("/?city=...")`) inside `startTransition` triggers the Server Component to re-fetch smoothly.

### Step 3: Page Composition & Streaming (`app/page.js`)
- Show how `Home` combines static HTML (header/footer), the interactive `<CitySearch />`, and `<WeatherCard />` wrapped in `<Suspense fallback={<WeatherSkeleton />}>`.

### Step 4: Bonus — Route Handler (`app/api/weather/route.js`)
- Visit `http://localhost:3000/api/weather?city=Tokyo` to show how Next.js can also serve JSON API endpoints using `NextResponse.json()`.
