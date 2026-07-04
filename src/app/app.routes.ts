import { Routes } from '@angular/router';
import { portfolioSectionRoutes } from '@core/components/portfolio/portfolio.routes';

export const routes: Routes = [
  ...portfolioSectionRoutes,
  {
    path: 'gym',
    title: 'Gym Sessions | Munir Fati Haji',
    loadComponent: () => import('./additional/gym-workout/gym-workout').then(({ GymWorkout }) => GymWorkout),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
