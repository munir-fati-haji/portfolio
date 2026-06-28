import { SharedChipButtonVariant } from '../models/shared-chip-button-variant.model';

export const SHARED_CHIP_BUTTON_VARIANT_CLASSES_BY_VARIANT: Record<SharedChipButtonVariant, string> = {
  amber:
    'border-amber-300/70 bg-amber-50 text-amber-800 shadow-amber-100/70 hover:border-amber-400 hover:bg-amber-100 hover:text-amber-900 dark:border-amber-300/35 dark:bg-amber-300/12 dark:text-amber-100 dark:shadow-amber-950/30 dark:hover:border-amber-300/55 dark:hover:bg-amber-300/18 dark:hover:text-white',
  cyan: 'border-cyan-300/60 bg-cyan-50 text-cyan-800 shadow-cyan-100/70 hover:border-cyan-500/60 hover:bg-cyan-100 hover:text-cyan-900 dark:border-cyan-300/25 dark:bg-cyan-300/12 dark:text-cyan-100 dark:shadow-cyan-950/30 dark:hover:border-cyan-300/50 dark:hover:bg-cyan-300/18 dark:hover:text-white',
  emerald:
    'border-emerald-300/65 bg-emerald-50 text-emerald-800 shadow-emerald-100/70 hover:border-emerald-500/60 hover:bg-emerald-100 hover:text-emerald-900 dark:border-emerald-300/35 dark:bg-emerald-300/12 dark:text-emerald-100 dark:shadow-emerald-950/30 dark:hover:border-emerald-300/50 dark:hover:bg-emerald-300/18 dark:hover:text-white',
  orange:
    'border-orange-300/75 bg-orange-50 text-orange-800 shadow-orange-100/70 hover:border-orange-500/60 hover:bg-orange-100 hover:text-orange-900 dark:border-orange-300/35 dark:bg-orange-300/12 dark:text-orange-200 dark:shadow-orange-950/30 dark:hover:border-orange-300/55 dark:hover:bg-orange-300/18 dark:hover:text-white',
  slate:
    'border-slate-300/70 bg-white text-slate-700 shadow-slate-200/70 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 dark:border-white/12 dark:bg-white/[0.07] dark:text-slate-300 dark:shadow-black/20 dark:hover:border-slate-300/30 dark:hover:bg-white/12 dark:hover:text-white',
};
