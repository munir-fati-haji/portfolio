import { signal } from '@angular/core';
import { MockBuilder, MockRender } from 'ng-mocks';
import { vi } from 'vitest';

import { ThemeService } from '@core/services/theme/theme.service';
import { GYM_SESSIONS } from './data/gym-sessions.data';
import { TRAINING_FILTERS } from './data/training-filter.data';
import { TrainingDayId } from './models/training-day-id.model';
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
    const text = fixture.nativeElement.textContent;

    TRAINING_FILTERS.forEach((filter) => expect(text).toContain(filter.label));
    GYM_SESSIONS.forEach((session) => expect(text).toContain(session.title));
    expect(text).toContain(String(GYM_SESSIONS.length));
    expect(text).toContain(String(GYM_SESSIONS.reduce((total, session) => total + session.exercises.length, 0)));
  });

  it('filters visible sessions by selected training day', () => {
    const fixture = MockRender(GymWorkout);
    const selectedSession = GYM_SESSIONS[1];

    (fixture.point.componentInstance as unknown as { selectDay: (event: { value: TrainingDayId }) => void }).selectDay({
      value: selectedSession.id,
    });
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(selectedSession.title);
    expect(fixture.nativeElement.textContent).not.toContain(GYM_SESSIONS[0].title);
  });

  it('toggles the theme from the hero action', () => {
    const fixture = MockRender(GymWorkout);
    const toggle = fixture.nativeElement.querySelector('.gym-workout__theme-toggle') as HTMLButtonElement;

    toggle.click();

    expect(themeService.toggleTheme).toHaveBeenCalledOnce();
  });
});
