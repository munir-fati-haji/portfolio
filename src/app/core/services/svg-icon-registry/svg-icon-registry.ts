import { inject, Service } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SVG_ICON_NAMES, SvgIconName } from '../../constants/svg-icons';

@Service()
export class SvgIconRegistry {
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);

  public register(): void {
    SVG_ICON_NAMES.forEach((iconName) => {
      this.addIcon(iconName);
    });
  }

  private addIcon(name: SvgIconName): void {
    this.iconRegistry.addSvgIcon(name, this.getTrustedIconUrl(name));
  }

  private getTrustedIconUrl(name: SvgIconName): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`icons/${name}.svg`);
  }
}
