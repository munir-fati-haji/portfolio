import { ContactLink } from '../models/contact-link.model';

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'Email',
    value: 'munir.fati.haji@gmail.com',
    href: 'mailto:munir.fati.haji@gmail.com',
    external: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/munir-fati-haji',
    href: 'https://github.com/munir-fati-haji',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/munir-fati-haji',
    href: 'https://www.linkedin.com/in/munir-fati-haji',
    external: true,
  },
];
