import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FOOTER_COPYRIGHT } from './data/footer-copyright';
import { FOOTER_LINKS } from './data/footer-links';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, MatIconModule, MatTooltipModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly copyright = FOOTER_COPYRIGHT;
  protected readonly links = FOOTER_LINKS;
}
