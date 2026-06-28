import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Munir Fati Haji',
    loadComponent: () => import('./core/components/portfolio/portfolio').then(({ Portfolio }) => Portfolio),
  },
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
