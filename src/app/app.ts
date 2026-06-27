import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgIconRegistry } from './core/services/svg-icon-registry/svg-icon-registry';
import { ThemeService } from './core/services/theme/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly svgIconRegistry = inject(SvgIconRegistry);
  private readonly themeService = inject(ThemeService);

  public ngOnInit(): void {
    this.svgIconRegistry.register();
    this.themeService.initialize();
  }
}
