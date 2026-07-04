import { Pipe, PipeTransform } from '@angular/core';
import { SharedChipButtonVariant } from '@shared/components/shared-chip-button/models/shared-chip-button-variant.model';
import { SkillItem } from '../models/skill-item.model';

const SKILL_LEVEL_VARIANT: Record<SkillItem['level'], SharedChipButtonVariant> = {
  Advanced: 'cyan',
  Strong: 'emerald',
  Practical: 'amber',
  Basic: 'slate',
};

@Pipe({ name: 'skillLevelVariant' })
export class SkillLevelVariantPipe implements PipeTransform {
  public transform(level: SkillItem['level']): SharedChipButtonVariant {
    return SKILL_LEVEL_VARIANT[level];
  }
}
