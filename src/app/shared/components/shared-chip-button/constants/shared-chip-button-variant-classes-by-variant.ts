import { SharedChipButtonVariant } from '../models/shared-chip-button-variant.model';

export const SHARED_CHIP_BUTTON_VARIANT_CLASSES_BY_VARIANT: Record<SharedChipButtonVariant, string> = {
  amber:
    'border-amber-300/30 bg-amber-300/10 text-amber-100 shadow-amber-950/30 hover:border-amber-300/45 hover:bg-amber-300/15 hover:text-white',
  cyan: 'border-cyan-300/20 bg-cyan-300/10 text-cyan-100 shadow-cyan-950/30 hover:border-cyan-300/40 hover:bg-cyan-300/15 hover:text-white',
  emerald:
    'border-emerald-300/25 bg-emerald-300/10 text-emerald-100 shadow-emerald-950/30 hover:border-emerald-300/40 hover:bg-emerald-300/15 hover:text-white',
  orange:
    'border-orange-300 bg-orange-50 text-orange-700 dark:border-orange-300/30 dark:bg-orange-300/10 dark:text-orange-200',
  slate:
    'border-white/10 bg-white/5 text-slate-300 shadow-black/20 hover:border-slate-300/25 hover:bg-white/10 hover:text-white dark:border-white/10 dark:bg-white/[0.06]',
};
