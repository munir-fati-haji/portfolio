import { Pipe, PipeTransform } from '@angular/core';
import { TrainingDayId } from '../models/training-day-id.model';

@Pipe({ name: 'gymFilterClasses' })
export class GymFilterClassesPipe implements PipeTransform {
  public transform(filterId: TrainingDayId, selectedDay: TrainingDayId): string {
    const baseClasses = 'shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition';

    return selectedDay === filterId
      ? `${baseClasses} border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 dark:border-cyan-300 dark:bg-cyan-300 dark:text-slate-950 dark:shadow-cyan-300/20`
      : `${baseClasses} border-slate-200 bg-white/80 text-slate-700 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white`;
  }
}
