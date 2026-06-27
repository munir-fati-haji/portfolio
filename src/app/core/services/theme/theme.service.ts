import { DOCUMENT } from '@angular/common';
import { computed, inject, signal, Service } from '@angular/core';
import { Theme } from './models/theme.model';

@Service()
export class ThemeService {
  public readonly isDark = computed(() => this.themeState() === 'dark');
  public readonly toggleIcon = computed(() => (this.isDark() ? 'light_mode' : 'dark_mode'));
  public readonly toggleLabel = computed(() => (this.isDark() ? 'Switch to light theme' : 'Switch to dark theme'));

  private readonly themeState = signal<Theme>('dark');
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public readonly theme = this.themeState.asReadonly();

  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'portfolio-theme';

  public initialize(): void {
    this.setTheme(this.getInitialTheme());
  }

  public toggleTheme(): void {
    this.setTheme(this.isDark() ? 'light' : 'dark');
  }

  public setTheme(theme: Theme): void {
    this.themeState.set(theme);
    this.document.documentElement.classList.toggle('app-theme-dark', theme === 'dark');
    this.document.documentElement.classList.toggle('app-theme-light', theme === 'light');
    this.document.documentElement.style.colorScheme = theme;
    localStorage.setItem(this.storageKey, theme);
  }

  private getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem(this.storageKey);

    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }

    return 'dark';
  }
}
