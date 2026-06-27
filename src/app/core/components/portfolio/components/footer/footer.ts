import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FOOTER_COPYRIGHT, FOOTER_LINKS } from './data';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly copyright = FOOTER_COPYRIGHT;
  protected readonly links = FOOTER_LINKS;
}
