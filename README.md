# SmartMovess Consulting Zone

Recruitment and career-consulting website built from the SmartMovess Figma design.

**Stack:** Next.js (App Router) · TypeScript · React · Tailwind CSS v4 · MongoDB + Mongoose · Zod · Lucide icons.
No Docker, no Redux, no extra services.

## Run locally

```bash
npm install
cp .env.example .env.local      # then edit MONGODB_URI if needed
npm run dev                     # http://localhost:3000
```

You need a MongoDB instance. Either:

- **Local:** `mongod` listening on `127.0.0.1:27017` (the default in `.env.example`), or
- **Atlas:** create a free cluster, allow your IP, and put its connection string in `MONGODB_URI`.

| Variable | Purpose |
| --- | --- |
| `MONGODB_URI` | MongoDB connection string (server-side only, never sent to the browser) |
| `NEXT_PUBLIC_SITE_URL` | Public URL, used for sitemap, canonical URLs and Open Graph |

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` / `npm start` | Production build and server |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm test` | Vitest unit tests (validation schemas) |
| `npm run test:e2e` | Playwright journeys on desktop (1440) and mobile (390). Needs MongoDB running; **submits real records** using `@example.com` addresses |

## Pages

| Route | Figma frame |
| --- | --- |
| `/` | 01 — Home |
| `/for-employers` | 02 — For Employers (includes hiring inquiry form) |
| `/for-candidates` | 03 — For Candidates |
| `/services` | 04 — Services & Pricing |
| `/contact` | 05 — Contact & Booking (message form + booking form) |
| `/internship` | 06A — Internship Program (+ enrollment popup 06B) |
| `/internship/enrolled` | 06C — Enrollment success |
| `/instagram-audit` | 07A — Instagram Audit (+ inquiry popup 07B) |
| `/instagram-audit/submitted` | 07C — Audit request success |

## Forms and data

Every form validates on the client and again on the server with the same Zod schema (`lib/validations.ts`).

| Form | Endpoint | Collection |
| --- | --- | --- |
| Internship enrollment (popup) | `POST /api/internship` | `internshipapplications` |
| Instagram audit inquiry (popup) | `POST /api/instagram-audit` | `instagramauditrequests` |
| Hiring requirements | `POST /api/hiring` | `employerinquiries` |
| Contact message | `POST /api/contact` | `contactmessages` |
| Consultation booking | `POST /api/booking` | `consultationbookings` |

All records carry `createdAt`/`updatedAt` and a `status` (`new`, `in_review`, `contacted`, `completed`, `rejected`).

Behaviour shared by every endpoint (`lib/handle-submission.ts`):

- Rate limit: 5 requests per minute per IP per endpoint → `429`.
- Hidden honeypot field: bot submissions return success and store nothing.
- Duplicate guard: the same person submitting the same request within 24 hours → `409` with a friendly message.
- Validation failures → `422` with per-field messages; database errors are logged server-side and never leaked.
- The submit button is disabled while a request is in flight, so double-clicks cannot create duplicates.

## Project structure

```
app/                     routes, API route handlers, sitemap, robots
components/layout/       Header, Footer
components/sections/     Hero, shared cards/steps/banners, FAQ, page-specific visuals
components/forms/        field primitives, useForm hook, the five forms
components/modals/       Modal (bottom sheet on mobile) + provider
components/ui/           Button, Logo, section primitives, icons
lib/                     site content, zod schemas, mongodb connection, submission handler
models/                  Mongoose models
tests/                   unit (Vitest) and e2e (Playwright)
public/images/           photography exported from Figma
```

## Deploying

The app is a standard Next.js app and deploys to Vercel or any Node host.

1. Create a MongoDB Atlas cluster (or any hosted MongoDB) and copy the connection string.
2. Set `MONGODB_URI` and `NEXT_PUBLIC_SITE_URL` in the host's environment settings.
3. Build with `npm run build`, start with `npm start` (Vercel does this automatically).

Notes: `next/font` downloads Manrope and Inter at build time, so the build machine needs internet access. The rate limiter is in-memory per server instance; if you scale out or run serverless at high volume, back it with a shared store (e.g. Redis/Upstash).

## Content still to be supplied by the client

These come straight from the Figma file as placeholders and need real values before launch:

- Footer email, phone, office address and social links (shown as "(placeholder)").
- Testimonials on the home page (the design itself labels them as placeholder content).
- Internship batch start dates and the list of internship domains / batches (currently "To be announced", plus a plausible domain list).
- Instagram audit "Primary goal" options (the design shows one example option; the rest are suggestions).
- Descriptions under "Who can apply" and "Who is this service for?" (the design prefixes them with "Placeholder description:"; the prefix was dropped, the wording is unchanged).
