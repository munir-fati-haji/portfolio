import { Pipe, PipeTransform } from '@angular/core';
import { GymSession } from '../models/gym-session.model';

@Pipe({ name: 'gymIntensityClasses' })
export class GymIntensityClassesPipe implements PipeTransform {
  public transform(intensity: GymSession['intensity']): string {
    const baseClasses = 'rounded-full border px-3 py-1 text-xs';

    return intensity === 'Hard'
      ? `${baseClasses} border-orange-300 bg-orange-50 text-orange-700 dark:border-orange-300/30 dark:bg-orange-300/10 dark:text-orange-200`
      : `${baseClasses} border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-300/30 dark:bg-emerald-300/10 dark:text-emerald-200`;
  }
}
