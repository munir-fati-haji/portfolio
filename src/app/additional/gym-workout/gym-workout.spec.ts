import { signal } from '@angular/core';
import { MockBuilder, MockRender } from 'ng-mocks';
import { vi } from 'vitest';

import { ThemeService } from '@core/services/theme/theme.service';
import { GYM_SESSIONS } from './data/gym-sessions.data';
import { TRAINING_FILTERS } from './data/training-filter.data';
import { GymWorkout } from './gym-workout';

describe('GymWorkout', () => {
  const themeService = {
    toggleIcon: signal('light_mode'),
    toggleLabel: signal('Switch to light theme'),
    toggleTheme: vi.fn(),
  };

  beforeEach(() => {
    themeService.toggleTheme.mockClear();

    return MockBuilder(GymWorkout).provide({ provide: ThemeService, useValue: themeService });
  });

  it('renders all training filters and sessions by default', () => {
    const fixture = MockRender(GymWorkout);
    const nativeElement = fixture.nativeElement as HTMLElement;
    const text = nativeElement.textContent;

    TRAINING_FILTERS.forEach((filter) => {
      expect(text).toContain(filter.label);
    });
    GYM_SESSIONS.forEach((session) => {
      expect(text).toContain(session.title);
    });
    expect(text).toContain(String(GYM_SESSIONS.length));
    expect(text).toContain(String(GYM_SESSIONS.reduce((total, session) => total + session.exercises.length, 0)));
  });

  it('filters visible sessions by selected training day', () => {
    const fixture = MockRender(GymWorkout);
    const nativeElement = fixture.nativeElement as HTMLElement;
    const selectedSession = GYM_SESSIONS[1];
    const selectedFilterIndex = TRAINING_FILTERS.findIndex((filter) => filter.id === selectedSession.id);
    const filterOptions = nativeElement.querySelectorAll<HTMLElement>('mat-chip-option');

    if (selectedFilterIndex === -1) {
      throw new Error(`Training filter for ${selectedSession.id} was not found.`);
    }

    filterOptions[selectedFilterIndex].click();
    fixture.detectChanges();

    expect(nativeElement.textContent).toContain(selectedSession.title);
    expect(nativeElement.textContent).not.toContain(GYM_SESSIONS[0].title);
  });

  it('toggles the theme from the hero action', () => {
    const fixture = MockRender(GymWorkout);
    const nativeElement = fixture.nativeElement as HTMLElement;
    const toggle = nativeElement.querySelector<HTMLButtonElement>('.gym-workout__theme-toggle');

    if (toggle === null) {
      throw new Error('Gym workout theme toggle was not found.');
    }

    toggle.click();

    expect(themeService.toggleTheme).toHaveBeenCalledOnce();
  });
});
