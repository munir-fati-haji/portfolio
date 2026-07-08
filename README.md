# Munir Fati Haji Portfolio

Personal portfolio website for Munir Fati Haji, built with Angular and deployed with Cloudflare Workers.

## Overview

This project presents my frontend development experience, education, skills, projects, current work, case study content, contact details, and a separate gym sessions page.

Live site: <https://www.munirfatihaji.com/>

## Tech stack

- Angular 22
- Angular Material
- Tailwind CSS 4
- RxJS
- TypeScript 6
- Vitest
- ESLint and Prettier
- Cloudflare Workers with Wrangler

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Hero section |
| `/about` | About section |
| `/experience` | Professional experience |
| `/education` | Education background |
| `/skills` | Technical skills |
| `/projects` | Project highlights |
| `/working-on` | Current focus areas |
| `/case-study` | Featured case study |
| `/contact` | Contact section |
| `/gym` | Gym sessions page |

## Requirements

Use the Node.js version defined in `package.json`:

```bash
node >=24.15.0 <25
npm 11.17.0
```

## Getting started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm start
```

The app opens at `http://localhost:4200/`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the Angular development server and opens the app |
| `npm run build` | Builds the production application |
| `npm run watch` | Builds in watch mode with the development configuration |
| `npm test` | Runs unit tests with Vitest |
| `npm run lint` | Runs ESLint with auto-fix and zero warnings allowed |
| `npm run lint:check` | Runs ESLint check only with zero warnings allowed |
| `npm run deploy` | Builds the app and deploys with Wrangler |
| `npm run preview` | Builds the app and previews it locally with Wrangler |

## Development notes

- Keep the UI aligned with the Angular Material theme and shared design tokens.
- Prefer Angular Material components where they fit the interaction.
- Keep styling consistent with the existing Tailwind and Material setup.
- Avoid unnecessary wrapper elements that exist only for styling.
- Keep route and section updates reflected in this README.

## Validation

Before opening or merging UI-related changes, run the checks that match the update:

```bash
npm run build
npm run lint:check
npm test
```

For visual changes, also run:

```bash
npm start
```

Then review the app at `http://localhost:4200/`.

## Deployment

Production deployment is handled through Wrangler:

```bash
npm run deploy
```

The deploy script builds the Angular app first, then publishes it using Cloudflare Workers.