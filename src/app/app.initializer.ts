import { inject, provideAppInitializer } from '@angular/core';
import { SvgIconRegistry } from '@core/services/svg-icon-registry/svg-icon-registry';
import { ThemeService } from '@core/services/theme/theme.service';

export const appInitializerProvider = provideAppInitializer(() => {
  inject(SvgIconRegistry).register();
  inject(ThemeService).initialize();
});
