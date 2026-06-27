---
name: portfolio-angular
description: 'Project-specific workflow for the Angular portfolio app in C:\Users\munir\Projects\portfolio. Use when Codex is asked to build, debug, test, run, style, architect, design, refactor, or modify this portfolio project. On implementation prompts, think like an application architect first, apply SOLID, DRY, KISS, and clean folder structure practices, then add or update the code, especially for Angular standalone components, Tailwind CSS, npm scripts, or the VS Code launch configurations ng serve and ng test.'
---

# Portfolio Angular

## Project Shape

- Treat this as a single Angular application named `portfolio`.
- Use standalone Angular components. The root component is `src/app/app.ts`, with template and styles in `src/app/app.html` and `src/app/app.css`.
- Keep global styles in `src/styles.css`; Tailwind is imported there with `@import 'tailwindcss';`.
- Static public assets belong in `public/`.
- Routing is configured in `src/app/app.routes.ts`; app-level providers are in `src/app/app.config.ts`.

## Architect-First Workflow

- For build, feature, refactor, or styling prompts, start by reading the relevant files and infer the current architecture before editing.
- Think as an application architect: identify component boundaries, data flow, state ownership, routing impact, styling scope, accessibility, responsive behavior, and validation needs.
- Prefer the smallest coherent design that fits the existing app; avoid introducing services, stores, routes, dependencies, or abstractions unless they solve a concrete problem.
- Apply SOLID, DRY, KISS, separation of concerns, and dependency inversion where they make the code simpler and easier to change.
- After architectural reasoning, implement the required code changes. Do not stop at recommendations unless the user explicitly asks for advice only.
- When tradeoffs matter, mention the chosen direction briefly, then proceed with the code.

## Folder Architecture

- Organize new app code under `src/app/core`, `src/app/pages`, and `src/app/shared` when the feature grows beyond the root component.
- Use `core/` for singleton app-level services, guards, interceptors, configuration, layout shell code, and cross-cutting infrastructure.
- Use `pages/` for routed or top-level screens. Keep page-specific components, enums, models, and services inside the owning page folder when they are not reused elsewhere.
- Use `shared/` for reusable presentational components, directives, pipes, models, enums, utilities, and services used by more than one page or feature.
- For component-owned static data that is not reused outside the feature, colocate `data/` and `models/` under that component and expose grouped data through `data/index.ts`.
- Under `core`, `pages`, and `shared`, create `components/`, `enums/`, `models/`, and `services/` subfolders when that category exists. Do not create empty folders.
- Keep each model, enum, service, component, directive, and pipe in its own file. Do not define models or enums inline in component, service, or page files unless the type is truly private and trivial.
- Name files by responsibility with Angular conventions, such as `profile-card.component.ts`, `contact-message.model.ts`, `project-status.enum.ts`, and `portfolio-data.service.ts`.

## Commands

- Install dependencies with `npm install` only when dependencies are missing or package files changed.
- Run the app with `npm run start`; the VS Code `ng serve` launch config opens `http://localhost:4200/`.
- Build with `npm run build`.
- Run tests with `npm test`; the VS Code `ng test` launch config opens `http://localhost:9876/debug.html`.
- Use `npm run watch` for development builds when continuous build output is useful.

## Editing Guidance

- Prefer Angular 22 patterns already present in the repo: standalone imports, signals where local state is simple, and separate template/style files for the root component.
- For auto-provided Angular services in this Angular 22 project, prefer `@Service()` from `@angular/core` over `@Injectable({ providedIn: 'root' })`.
- Preserve the existing package manager choice: npm.
- Keep changes scoped to `src/` unless the task needs build, dependency, editor, or asset updates.
- Replace Angular starter placeholder markup when building the actual portfolio experience.
- Use Tailwind v4 utility syntax for styling by default; avoid adding component CSS unless Tailwind cannot express the behavior cleanly or an existing CSS file already owns that concern.
- Keep CSS responsive and inspect mobile behavior for layout-heavy changes.
- Add code in the right layer: templates for structure, component TypeScript for state and derived data, component CSS for local presentation, global CSS only for app-wide tokens or resets, and public assets only for static files.
- Keep UX changes feature-complete enough to run: include empty/loading/error states, keyboard/focus behavior, and mobile layout when relevant.

## Validation

- For TypeScript, template, routing, or style changes, run `npm run build`.
- For behavior covered by specs, run `npm test` or update `src/app/app.spec.ts` and then run tests.
- When starting a dev server for manual inspection, use `npm start` and report the local URL `http://localhost:4200/`.
