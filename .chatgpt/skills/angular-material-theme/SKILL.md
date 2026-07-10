# Angular Material Theme Skill

Use this skill whenever modifying Angular templates, components, styles, or shared UI patterns in this portfolio project.

## Main priority

Always prefer Angular Material components, Angular Material theming, and Angular Material design tokens over custom UI implementations, custom themes, or hard-coded visual styles.

The app should feel like a clean Angular Material application first. Do not preserve custom visual styling when Angular Material provides a suitable replacement.

## Angular Material first

Prefer Angular Material components for structure, interactions, accessibility, and visual consistency.

Use Material components such as:

- `mat-toolbar`
- `mat-sidenav`, `mat-drawer`, `mat-drawer-container`
- `mat-nav-list`, `mat-list`, `mat-list-item`
- `mat-card`, `mat-card-header`, `mat-card-title`, `mat-card-subtitle`, `mat-card-content`, `mat-card-actions`
- `mat-button`, `mat-flat-button`, `mat-stroked-button`, `mat-icon-button`, `mat-fab`, `mat-mini-fab`
- `mat-menu`
- `mat-divider`
- `mat-chip`, `mat-chip-set`
- `mat-tabs`
- `mat-accordion`, `mat-expansion-panel`
- `mat-form-field`, `mat-input`, `mat-select`
- `mat-checkbox`, `mat-radio-button`, `mat-slide-toggle`
- `mat-dialog`
- `mat-tooltip`
- `mat-progress-bar`, `mat-progress-spinner`
- `mat-stepper`
- `mat-table`, `mat-paginator`, `mat-sort`

Replace custom versions of these patterns when practical.

## Theming rules

Use Angular Material theming as the visual source of truth.

Do not hard-code colors, shadows, gradients, borders, hover colors, dark-mode colors, or one-off visual effects unless there is no reasonable Material alternative.

When a small amount of custom styling is unavoidable, use Angular Material system tokens, for example:

```scss
background: var(--mat-sys-surface);
color: var(--mat-sys-on-surface);
border-color: var(--mat-sys-outline-variant);
```

Prefer tokens such as:

- `var(--mat-sys-primary)`
- `var(--mat-sys-on-primary)`
- `var(--mat-sys-primary-container)`
- `var(--mat-sys-on-primary-container)`
- `var(--mat-sys-surface)`
- `var(--mat-sys-surface-container)`
- `var(--mat-sys-surface-container-low)`
- `var(--mat-sys-on-surface)`
- `var(--mat-sys-on-surface-variant)`
- `var(--mat-sys-outline)`
- `var(--mat-sys-outline-variant)`
- `var(--mat-sys-error)`

## Tailwind usage

Use Tailwind only for layout and spacing.

Allowed Tailwind examples:

- `flex`
- `grid`
- `gap-*`
- `items-center`
- `justify-between`
- `w-full`
- `max-w-*`
- `mx-auto`
- `p-*`, `px-*`, `py-*`, `m-*`, `mt-*`
- responsive layout utilities such as `sm:*`, `md:*`, `lg:*`, `xl:*`

Do not use Tailwind for theming or visual design.

Avoid Tailwind utilities for:

- colors such as `text-*`, `bg-*`, `border-*` when they encode visual color choices
- shadows
- gradients
- borders as visual styling
- hover colors
- dark-mode visual styling
- custom opacity-based visual effects

## Buttons and navigation

Do not create custom button-like elements with plain HTML and classes.

Use Angular Material buttons:

```html
<button mat-button type="button">Default</button>
<button mat-flat-button type="button">Primary</button>
<button mat-stroked-button type="button">Secondary</button>
<button mat-icon-button type="button" aria-label="Open menu">
  <mat-icon>menu</mat-icon>
</button>
```

For internal navigation, prefer Material buttons with `routerLink`:

```html
<button mat-button type="button" routerLink="/projects">Projects</button>
```

For external navigation, prefer Material buttons with a click handler:

```html
<button mat-stroked-button type="button" (click)="openExternalUrl('https://example.com')">
  Visit Website
</button>
```

Do not add `<a>` tags unless the user explicitly asks for semantic anchors and accepts the exception.

## Styling boundaries

Do not target or override Angular Material private/internal classes, including:

- `.mat-mdc-*`
- `.mdc-*`
- deeply nested generated Material DOM classes

Use public Angular Material APIs, inputs, variants, theming, and system tokens instead.

Keep component SCSS small. Prefer simple host/layout classes and Material tokens. Remove obsolete custom classes when replacing UI with Angular Material.

## Accessibility

Preserve or improve accessibility when refactoring.

- Use clear button labels.
- Add `aria-label` for icon-only buttons.
- Use `type="button"` on buttons that do not submit forms.
- Keep keyboard navigation working.
- Use Angular Material built-in accessibility features instead of rebuilding interactions manually.

## Project style

Follow the existing Angular project style:

- Use modern standalone Angular APIs.
- Do not add unnecessary NgModules.
- Do not add explicit `standalone: true` if the project already uses Angular's modern defaults.
- Do not add explicit `changeDetection: ChangeDetectionStrategy.OnPush` if the project already uses Angular's modern defaults.
- Use explicit access modifiers in TypeScript classes.
- Do not use `readonly` inside interfaces.
- Keep one interface/model per file.
- Do not add barrel files unless already required.

## Validation

Do not run install, build, test, start, watch, or dev-server commands unless explicitly requested.

After code changes, tell the user which local commands to run, usually:

```bash
npm run lint:check
npm run build
npm test
npm start
```
