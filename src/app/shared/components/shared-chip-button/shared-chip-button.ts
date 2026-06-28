import { Component, computed, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SHARED_CHIP_BUTTON_ACTIVE_CLASSES } from './constants/shared-chip-button-active-classes';
import { SHARED_CHIP_BUTTON_BADGE_BASE_CLASSES } from './constants/shared-chip-button-badge-base-classes';
import { SHARED_CHIP_BUTTON_BADGE_CLASSES_BY_VARIANT } from './constants/shared-chip-button-badge-classes-by-variant';
import { SHARED_CHIP_BUTTON_BASE_CLASSES } from './constants/shared-chip-button-base-classes';
import { SHARED_CHIP_BUTTON_DEFAULT_SIZE } from './constants/shared-chip-button-default-size';
import { SHARED_CHIP_BUTTON_DEFAULT_VARIANT } from './constants/shared-chip-button-default-variant';
import { SHARED_CHIP_BUTTON_DISABLED_CLASSES } from './constants/shared-chip-button-disabled-classes';
import { SHARED_CHIP_BUTTON_META_CLASSES } from './constants/shared-chip-button-meta-classes';
import { SHARED_CHIP_BUTTON_SELECTABLE_CLASSES } from './constants/shared-chip-button-selectable-classes';
import { SHARED_CHIP_BUTTON_SELECTABLE_CYAN_CLASSES } from './constants/shared-chip-button-selectable-cyan-classes';
import { SHARED_CHIP_BUTTON_SIZE_CLASSES_BY_SIZE } from './constants/shared-chip-button-size-classes-by-size';
import { SHARED_CHIP_BUTTON_VARIANT_CLASSES_BY_VARIANT } from './constants/shared-chip-button-variant-classes-by-variant';
import { SharedChipButtonSize } from './models/shared-chip-button-size.model';
import { SharedChipButtonVariant } from './models/shared-chip-button-variant.model';

@Component({
  selector: 'app-shared-chip-button',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './shared-chip-button.html',
})
export class SharedChipButton {
  public readonly label = input.required<string>();
  public readonly icon = input<string>();
  public readonly badgeLabel = input<string>();
  public readonly metaLabel = input<string>();
  public readonly active = input(false);
  public readonly disabled = input(false);
  public readonly selectable = input(false);
  public readonly size = input<SharedChipButtonSize>(SHARED_CHIP_BUTTON_DEFAULT_SIZE);
  public readonly variant = input<SharedChipButtonVariant>(SHARED_CHIP_BUTTON_DEFAULT_VARIANT);
  public readonly selected = output<void>();
  protected readonly metaClasses = SHARED_CHIP_BUTTON_META_CLASSES;

  protected readonly chipClasses = computed(() => {
    const classes = [SHARED_CHIP_BUTTON_BASE_CLASSES, this.sizeClasses(), this.variantClasses()];

    if (this.selectable()) {
      classes.push(SHARED_CHIP_BUTTON_SELECTABLE_CLASSES);
    }

    if (this.disabled()) {
      classes.push(SHARED_CHIP_BUTTON_DISABLED_CLASSES);
    }

    return classes.join(' ');
  });

  protected readonly badgeClasses = computed(() => {
    const classes = [SHARED_CHIP_BUTTON_BADGE_BASE_CLASSES];
    classes.push(SHARED_CHIP_BUTTON_BADGE_CLASSES_BY_VARIANT[this.variant()]);

    return classes.join(' ');
  });

  protected select(): void {
    if (this.disabled()) {
      return;
    }

    this.selected.emit();
  }

  private sizeClasses(): string {
    return SHARED_CHIP_BUTTON_SIZE_CLASSES_BY_SIZE[this.size()];
  }

  private variantClasses(): string {
    if (this.active()) {
      return SHARED_CHIP_BUTTON_ACTIVE_CLASSES;
    }

    if (this.selectable() && this.variant() === SHARED_CHIP_BUTTON_DEFAULT_VARIANT) {
      return SHARED_CHIP_BUTTON_SELECTABLE_CYAN_CLASSES;
    }

    return SHARED_CHIP_BUTTON_VARIANT_CLASSES_BY_VARIANT[this.variant()];
  }
}
