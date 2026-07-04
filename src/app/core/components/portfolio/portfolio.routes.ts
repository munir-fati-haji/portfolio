import { Routes } from '@angular/router';
import { Portfolio } from './portfolio';

const loadPortfolioComponent = (): Promise<typeof Portfolio> =>
  import('./portfolio').then(({ Portfolio }) => Portfolio);

export const portfolioSectionRoutes: Routes = [
  {
    path: '',
    title: 'Munir Fati Haji',
    data: { sectionId: 'hero' },
    loadComponent: loadPortfolioComponent,
  },
  {
    path: 'about',
    title: 'About | Munir Fati Haji',
    data: { sectionId: 'about' },
    loadComponent: loadPortfolioComponent,
  },
  {
    path: 'experience',
    title: 'Experience | Munir Fati Haji',
    data: { sectionId: 'experience' },
    loadComponent: loadPortfolioComponent,
  },
  {
    path: 'education',
    title: 'Education | Munir Fati Haji',
    data: { sectionId: 'education' },
    loadComponent: loadPortfolioComponent,
  },
  {
    path: 'skills',
    title: 'Skills | Munir Fati Haji',
    data: { sectionId: 'skills' },
    loadComponent: loadPortfolioComponent,
  },
  {
    path: 'projects',
    title: 'Projects | Munir Fati Haji',
    data: { sectionId: 'projects' },
    loadComponent: loadPortfolioComponent,
  },
  {
    path: 'working-on',
    title: 'Working On | Munir Fati Haji',
    data: { sectionId: 'working-on' },
    loadComponent: loadPortfolioComponent,
  },
  {
    path: 'case-study',
    title: 'Case Study | Munir Fati Haji',
    data: { sectionId: 'case-study' },
    loadComponent: loadPortfolioComponent,
  },
  {
    path: 'contact',
    title: 'Contact | Munir Fati Haji',
    data: { sectionId: 'contact' },
    loadComponent: loadPortfolioComponent,
  },
];
