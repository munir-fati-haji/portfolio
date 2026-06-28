import { TrainingDayId } from './training-day-id.model';

export interface GymSession {
  readonly id: Exclude<TrainingDayId, 'all'>;
  readonly day: string;
  readonly title: string;
  readonly focus: string;
  readonly duration: string;
  readonly intensity: 'Moderate' | 'Hard';
  readonly exercises: readonly string[];
}
