import { NavbarLink } from '../models/navbar-link.model';

export const NAVBAR_LINKS: NavbarLink[] = [
  {
    label: 'Home',
    icon: 'home',
    route: '/',
  },
  {
    label: 'About',
    icon: 'person',
    route: '/about',
  },
  {
    label: 'Experience',
    icon: 'work',
    route: '/experience',
  },
  {
    label: 'Education',
    icon: 'school',
    route: '/education',
  },
  {
    label: 'Skills',
    icon: 'code',
    route: '/skills',
  },
  {
    label: 'Projects',
    icon: 'folder',
    route: '/projects',
  },
  {
    label: 'Working On',
    icon: 'build',
    route: '/working-on',
  },
  {
    label: 'Case Study',
    icon: 'analytics',
    route: '/case-study',
  },
  {
    label: 'Contact',
    icon: 'mail',
    route: '/contact',
  },
];
