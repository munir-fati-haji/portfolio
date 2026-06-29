import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService } from '../../core/services/theme/theme.service';
import { TrainingDayId } from './models/training-day-id.model';
import { GYM_SESSIONS } from './data/gym-sessions.data';
import { TRAINING_FILTERS } from './data/training-filter.data';

@Component({
  selector: 'app-gym-workout',
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatListModule, MatTooltipModule],
  templateUrl: './gym-workout.html',
  styleUrl: './gym-workout.scss',
})
export class GymWorkout {
  protected readonly themeService = inject(ThemeService);
  protected readonly selectedDay = signal<TrainingDayId>('all');

  protected readonly filters = TRAINING_FILTERS;
  protected readonly sessions = GYM_SESSIONS;

  protected readonly visibleSessions = computed(() => {
    const selectedDay = this.selectedDay();

    if (selectedDay === 'all') {
      return this.sessions;
    }

    return this.sessions.filter(({ id }) => id === selectedDay);
  });

  protected readonly totalExercises = computed(() =>
    this.visibleSessions().reduce((total, session) => total + session.exercises.length, 0),
  );

  protected selectDay(day: TrainingDayId): void {
    this.selectedDay.set(day);
  }

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
