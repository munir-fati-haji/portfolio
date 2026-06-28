import { TrainingDayId } from './training-day-id.model';

export interface TrainingFilter {
  readonly id: TrainingDayId;
  readonly label: string;
}
