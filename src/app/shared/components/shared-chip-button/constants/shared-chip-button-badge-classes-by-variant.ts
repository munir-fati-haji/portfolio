import { SharedChipButtonVariant } from '../models/shared-chip-button-variant.model';

export const SHARED_CHIP_BUTTON_BADGE_CLASSES_BY_VARIANT: Record<SharedChipButtonVariant, string> = {
  amber: 'bg-amber-200 text-amber-900 dark:bg-amber-300/18 dark:text-amber-100',
  cyan: 'bg-cyan-200 text-cyan-950 dark:bg-cyan-300/18 dark:text-cyan-100',
  emerald: 'bg-emerald-200 text-emerald-950 dark:bg-emerald-300/18 dark:text-emerald-100',
  orange: 'bg-orange-200 text-orange-950 dark:bg-orange-300/18 dark:text-orange-200',
  slate: 'bg-slate-200 text-slate-800 dark:bg-white/12 dark:text-slate-300',
};
