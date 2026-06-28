import { Component, signal, computed } from '@angular/core';
import { TrainingDayId } from './models/training-day-id.model';
import { GymSession } from './models/gym-session.model';
import { GYM_SESSIONS } from './data/gym-sessions.data';
import { TRAINING_FILTERS } from './data/training-filter.data';

@Component({
  selector: 'app-gym-workout',
  templateUrl: './gym-workout.html',
})
export class GymWorkout {
  protected readonly selectedDay = signal<TrainingDayId>('all');

  protected readonly filters = TRAINING_FILTERS;
  protected readonly sessions = GYM_SESSIONS;

  protected readonly visibleSessions = computed(() => {
    const selectedDay = this.selectedDay();

    if (selectedDay === 'all') {
      return this.sessions;
    }

    return this.sessions.filter((session) => session.id === selectedDay);
  });

  protected readonly totalExercises = computed(() =>
    this.visibleSessions().reduce((total, session) => total + session.exercises.length, 0),
  );

  protected selectDay(day: TrainingDayId): void {
    this.selectedDay.set(day);
  }

  protected getFilterClasses(filterId: TrainingDayId): string {
    const baseClasses = 'shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition';

    return this.selectedDay() === filterId
      ? `${baseClasses} border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 dark:border-cyan-300 dark:bg-cyan-300 dark:text-slate-950 dark:shadow-cyan-300/20`
      : `${baseClasses} border-slate-200 bg-white/80 text-slate-700 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white`;
  }

  protected getIntensityClasses(intensity: GymSession['intensity']): string {
    const baseClasses = 'rounded-full border px-3 py-1 text-xs';

    return intensity === 'Hard'
      ? `${baseClasses} border-orange-300 bg-orange-50 text-orange-700 dark:border-orange-300/30 dark:bg-orange-300/10 dark:text-orange-200`
      : `${baseClasses} border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-300/30 dark:bg-emerald-300/10 dark:text-emerald-200`;
  }
}
