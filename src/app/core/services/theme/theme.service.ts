import { DOCUMENT } from '@angular/common';
import { computed, inject, signal, Service } from '@angular/core';
import { Theme } from './models/theme.model';

@Service()
export class ThemeService {
  public readonly isDark = computed(() => this.themeState() === 'dark');
  public readonly toggleIcon = computed(() => {
    switch (this.themeState()) {
      case 'dark':
        return 'light_mode';
      case 'light':
        return 'palette';
      case 'violet':
        return 'dark_mode';
    }
  });
  public readonly toggleLabel = computed(() => {
    switch (this.themeState()) {
      case 'dark':
        return 'Switch to light theme';
      case 'light':
        return 'Switch to violet theme';
      case 'violet':
        return 'Switch to dark theme';
    }
  });

  private readonly themeState = signal<Theme>('dark');
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public readonly theme = this.themeState.asReadonly();

  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'portfolio-theme';

  public initialize(): void {
    this.setTheme(this.getInitialTheme());
  }

  public toggleTheme(): void {
    const nextTheme: Record<Theme, Theme> = {
      dark: 'light',
      light: 'violet',
      violet: 'dark',
    };

    this.setTheme(nextTheme[this.themeState()]);
  }

  public setTheme(theme: Theme): void {
    this.themeState.set(theme);
    this.document.documentElement.classList.toggle('app-theme-dark', theme === 'dark');
    this.document.documentElement.classList.toggle('app-theme-light', theme === 'light');
    this.document.documentElement.classList.toggle('app-theme-violet', theme === 'violet');
    this.document.documentElement.style.colorScheme = theme === 'light' ? 'light' : 'dark';
    localStorage.setItem(this.storageKey, theme);
  }

  private getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem(this.storageKey);

    if (savedTheme === 'dark' || savedTheme === 'light' || savedTheme === 'violet') {
      return savedTheme;
    }

    return 'dark';
  }
}
