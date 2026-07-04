import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeService } from '@core/services/theme/theme.service';
import { FOOTER_COPYRIGHT } from './data/footer-copyright';
import { FOOTER_LINKS } from './data/footer-links';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly themeService = inject(ThemeService);
  protected readonly copyright = FOOTER_COPYRIGHT;
  protected readonly links = FOOTER_LINKS;
}
