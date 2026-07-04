import { Component, computed, input, output } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SHARED_CHIP_BUTTON_DEFAULT_SIZE } from './constants/shared-chip-button-default-size';
import { SHARED_CHIP_BUTTON_DEFAULT_VARIANT } from './constants/shared-chip-button-default-variant';
import { SharedChipButtonSize } from './models/shared-chip-button-size.model';
import { SharedChipButtonVariant } from './models/shared-chip-button-variant.model';

@Component({
  selector: 'app-shared-chip-button',
  imports: [MatButtonModule, MatIconModule, NgTemplateOutlet],
  templateUrl: './shared-chip-button.html',
  styleUrl: './shared-chip-button.scss',
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
  public readonly selected = output();

  protected readonly chipClasses = computed(() => {
    const classes = ['chip-button', `chip-button--${this.size()}`, this.variantClasses()];

    if (this.selectable()) {
      classes.push('chip-button--selectable');
    }

    if (this.disabled()) {
      classes.push('chip-button--disabled');
    }

    return classes.join(' ');
  });

  protected readonly badgeClasses = computed(() => {
    return `chip-button__badge chip-button__badge--${this.variant()}`;
  });

  protected select(): void {
    if (this.disabled()) {
      return;
    }

    this.selected.emit();
  }

  private variantClasses(): string {
    if (this.active()) {
      return 'chip-button--active';
    }

    if (this.selectable() && this.variant() === SHARED_CHIP_BUTTON_DEFAULT_VARIANT) {
      return 'chip-button--selectable-cyan';
    }

    return `chip-button--${this.variant()}`;
  }
}
