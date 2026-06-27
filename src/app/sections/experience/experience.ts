import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ExperienceMetric } from './models/experience-metric.model';
import { ExperienceItem } from './models/experience-item.model';

@Component({
  selector: 'app-experience',
  imports: [MatIconModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  public readonly eyebrow = 'Experience';

  public readonly title = 'Where I have built real-world software';

  public readonly description =
    'A focused timeline of my frontend work across enterprise Angular applications, modernization, reusable UI systems, real-time communication, testing, and API-driven products.';

  public readonly metrics: readonly ExperienceMetric[] = [
    {
      value: '3+',
      label: 'Years frontend experience',
    },
    {
      value: 'v13 → v21',
      label: 'Angular migration ownership',
    },
    {
      value: '50+',
      label: 'REST APIs integrated',
    },
    {
      value: '100%',
      label: 'Backend downtime removed',
    },
  ];

  public readonly experiences: readonly ExperienceItem[] = [
    {
      company: 'Hyland',
      location: 'Wrocław, Poland',
      role: 'Frontend Angular Software Developer',
      period: 'May 2026 — Current',
      type: 'Current Role',
      icon: 'work',
      summary:
        'Developing and maintaining enterprise-grade Angular applications while collaborating with developers, QA, and business stakeholders.',
      highlights: [
        'Develop and maintain enterprise Angular applications.',
        'Deliver new features and resolve defects with cross-functional teams.',
        'Investigate production and development issues to improve stability and user experience.',
        'Build reusable UI components, services, and frontend utilities.',
        'Refactor existing code to improve maintainability, readability, and scalability.',
      ],
      skills: [
        { name: 'Angular', icon: 'code' },
        { name: 'TypeScript', icon: 'data_object' },
        { name: 'RxJS', icon: 'sync_alt' },
        { name: 'Enterprise UI', icon: 'dashboard' },
      ],
    },
    {
      company: 'BNY',
      location: 'Wrocław, Poland',
      role: 'Specialist Frontend Engineer II, React',
      period: 'February 2026 — May 2026',
      type: 'React Platform',
      icon: 'web',
      summary:
        'Worked on frontend features using React and Java while contributing to state management, backend data processing, and API-driven application flows.',
      highlights: [
        'Developed frontend features using React and Java.',
        'Used Redux for state management in existing applications.',
        'Integrated frontend components with Java backend services through REST APIs.',
        'Worked with Apache Kafka consumers as part of backend data processing.',
        'Created and maintained dynamic forms using Forms.io.',
      ],
      skills: [
        { name: 'React', icon: 'code' },
        { name: 'Redux', icon: 'sync_alt' },
        { name: 'Java', icon: 'terminal' },
        { name: 'REST API', icon: 'api' },
        { name: 'Kafka', icon: 'hub' },
        { name: 'Forms.io', icon: 'dynamic_form' },
      ],
    },
    {
      company: 'BNY',
      location: 'Wrocław, Poland',
      role: 'Associate Frontend Engineer II, Angular',
      period: 'March 2025 — February 2026',
      type: 'Angular Modernization',
      icon: 'rocket_launch',
      summary:
        'Led Angular modernization work on a large enterprise application, improving architecture, performance, real-time communication, and developer experience.',
      highlights: [
        'Led a solo migration of a large Angular application from v13 to v21.',
        'Migrated the application to standalone components, Signals, signal-based inputs/outputs, modern control flow, and inject().',
        'Implemented WebSocket communication to replace 10-second polling and improve real-time responsiveness.',
        'Improved application performance with build optimization and lazy-loaded components.',
        'Built and maintained admin dashboards, personal dashboards, and workflow viewer features.',
        'Used AG Grid heavily for enterprise tables, reporting flows, filtering, and data-heavy user interfaces.',
        'Created custom ESLint rules and improved shared frontend utilities.',
        'Built and maintained REST APIs using Java, Spring Boot, and Oracle DB.',
      ],
      skills: [
        { name: 'Angular', icon: 'code' },
        { name: 'Signals', icon: 'bolt' },
        { name: 'TypeScript', icon: 'data_object' },
        { name: 'WebSockets', icon: 'hub' },
        { name: 'Lazy Loading', icon: 'speed' },
        { name: 'Build Optimization', icon: 'construction' },
        { name: 'AG Grid Enterprise', icon: 'table_chart' },
        { name: 'ESLint', icon: 'fact_check' },
        { name: 'Spring Boot', icon: 'eco' },
        { name: 'Oracle DB', icon: 'storage' },
      ],
    },
    {
      company: 'BNY',
      location: 'Wrocław, Poland',
      role: 'Graduate Frontend Developer, Angular',
      period: 'August 2023 — March 2025',
      type: 'Enterprise UI',
      icon: 'dashboard',
      summary:
        'Built enterprise Angular features for risk assessment workflows, dashboards, reporting, forms, and data-heavy business applications.',
      highlights: [
        'Developed and maintained Angular frontend solutions for enterprise risk assessment platforms.',
        'Built user-friendly form workflows that were later used for reports and Excel exports.',
        'Created dashboards for administration and personal user views.',
        'Built workflow viewer features to make complex business processes easier to understand.',
        'Used AG Grid Enterprise for reporting, Excel exports, filtering, and large data presentation.',
        'Worked with Angular Material, reactive forms, services, and reusable UI components.',
        'Partnered with UI/UX designers and business stakeholders to improve usability.',
        'Wrote and maintained unit tests using Jasmine and Karma.',
      ],
      skills: [
        { name: 'Angular', icon: 'code' },
        { name: 'TypeScript', icon: 'data_object' },
        { name: 'Angular Material', icon: 'widgets' },
        { name: 'Reactive Forms', icon: 'fact_check' },
        { name: 'AG Grid Enterprise', icon: 'table_chart' },
        { name: 'Excel Export', icon: 'file_download' },
        { name: 'Dashboards', icon: 'dashboard' },
        { name: 'Jasmine', icon: 'science' },
        { name: 'Karma', icon: 'bug_report' },
      ],
    },
    {
      company: 'Freelance',
      location: 'Wrocław, Poland',
      role: 'Angular Developer',
      period: 'January 2023 — August 2023',
      type: 'Foundation',
      icon: 'code',
      summary:
        'Built and maintained a request management web application with scalable UI features, API integrations, authentication, and workflow automation.',
      highlights: [
        'Built scalable and maintainable Angular UI features.',
        'Integrated 50+ REST APIs.',
        'Developed bulk Excel upload and AG Grid CSV export.',
        'Automated workflows to reduce operational errors.',
        'Configured GitHub CI pipelines and Husky pre-commit hooks.',
        'Implemented secure JWT authentication and role-based access control.',
      ],
      skills: [
        { name: 'Angular', icon: 'code' },
        { name: 'REST API', icon: 'api' },
        { name: 'AG Grid', icon: 'table_chart' },
        { name: 'Excel Upload', icon: 'upload_file' },
        { name: 'JWT', icon: 'vpn_key' },
        { name: 'RBAC', icon: 'admin_panel_settings' },
        { name: 'CI/CD', icon: 'account_tree' },
        { name: 'Husky', icon: 'verified' },
      ],
    },
  ];
}
