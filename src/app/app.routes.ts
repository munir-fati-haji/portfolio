import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/components/portfolio/portfolio').then(({ Portfolio }) => Portfolio),
  },
];
