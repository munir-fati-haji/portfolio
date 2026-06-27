import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SkillCategory } from './models/skill-category.model';
import { SkillStat } from './models/skill-stat.model';

@Component({
  selector: 'app-skills',
  imports: [MatIconModule],
  templateUrl: './skills.html',
})
export class Skills {
  public readonly eyebrow = 'Skills';

  public readonly title = 'Technical skills';

  public readonly description =
    'A focused overview of the technologies I use to build scalable frontend applications, enterprise dashboards, API-driven products, and maintainable user interfaces.';

  public readonly stats: SkillStat[] = [
    {
      value: 'Angular',
      label: 'Primary frontend framework',
    },
    {
      value: 'React',
      label: 'Practical experience, 3–4 months',
    },
    {
      value: 'AG Grid',
      label: 'Enterprise data-heavy UI',
    },
    {
      value: 'Java',
      label: 'Backend contribution',
    },
  ];

  public readonly categories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: 'code',
      description: 'Core technologies I use to build responsive, maintainable, and scalable user interfaces.',
      skills: [
        {
          name: 'Angular',
          icon: 'code',
          level: 'Advanced',
          experience: '3+ years',
        },
        {
          name: 'TypeScript',
          icon: 'data_object',
          level: 'Advanced',
          experience: '3+ years',
        },
        {
          name: 'React',
          icon: 'view_quilt',
          level: 'Practical',
          experience: '3–4 months',
        },
        {
          name: 'Redux',
          icon: 'sync_alt',
          level: 'Practical',
          experience: '3–4 months',
        },
        {
          name: 'JavaScript',
          icon: 'javascript',
          level: 'Strong',
        },
        {
          name: 'RxJS',
          icon: 'sync_alt',
          level: 'Strong',
        },
        {
          name: 'HTML',
          icon: 'html',
          level: 'Strong',
        },
        {
          name: 'CSS',
          icon: 'css',
          level: 'Strong',
        },
        {
          name: 'Tailwind CSS',
          icon: 'palette',
          level: 'Strong',
        },
        {
          name: 'Angular Material',
          icon: 'widgets',
          level: 'Strong',
        },
      ],
    },
    {
      title: 'Enterprise UI',
      icon: 'dashboard',
      description:
        'Experience building complex business interfaces, dashboards, workflows, forms, and reporting tools.',
      skills: [
        {
          name: 'AG Grid Enterprise',
          icon: 'table_chart',
          level: 'Advanced',
        },
        {
          name: 'Dashboards',
          icon: 'space_dashboard',
          level: 'Strong',
        },
        {
          name: 'Workflow Viewers',
          icon: 'account_tree',
          level: 'Strong',
        },
        {
          name: 'Reactive Forms',
          icon: 'fact_check',
          level: 'Strong',
        },
        {
          name: 'Forms.io',
          icon: 'dynamic_form',
          level: 'Practical',
        },
        {
          name: 'Excel Export',
          icon: 'file_download',
          level: 'Strong',
        },
        {
          name: 'Reusable Components',
          icon: 'extension',
          level: 'Strong',
        },
      ],
    },
    {
      title: 'Architecture & Quality',
      icon: 'architecture',
      description: 'Practices and tools I use to improve maintainability, performance, and long-term code quality.',
      skills: [
        {
          name: 'Signals',
          icon: 'bolt',
          level: 'Strong',
        },
        {
          name: 'Standalone Components',
          icon: 'view_module',
          level: 'Strong',
        },
        {
          name: 'Lazy Loading',
          icon: 'speed',
          level: 'Strong',
        },
        {
          name: 'Build Optimization',
          icon: 'construction',
          level: 'Practical',
        },
        {
          name: 'ESLint',
          icon: 'rule',
          level: 'Strong',
        },
        {
          name: 'Unit Testing',
          icon: 'science',
          level: 'Strong',
        },
        {
          name: 'Jasmine / Karma',
          icon: 'bug_report',
          level: 'Strong',
        },
      ],
    },
    {
      title: 'Backend & Integration',
      icon: 'hub',
      description:
        'Backend and integration skills used to connect frontend applications with reliable services and data flows.',
      skills: [
        {
          name: 'REST API',
          icon: 'api',
          level: 'Strong',
        },
        {
          name: 'WebSockets',
          icon: 'hub',
          level: 'Strong',
        },
        {
          name: 'Java',
          icon: 'terminal',
          level: 'Practical',
        },
        {
          name: 'Spring Boot',
          icon: 'eco',
          level: 'Practical',
        },
        {
          name: 'Oracle DB',
          icon: 'storage',
          level: 'Practical',
        },
        {
          name: 'PostgreSQL',
          icon: 'database',
          level: 'Basic',
        },
        {
          name: 'Kafka',
          icon: 'lan',
          level: 'Practical',
        },
      ],
    },
    {
      title: 'Tools & Workflow',
      icon: 'settings',
      description: 'Development tools and workflows I use for collaboration, delivery, debugging, and documentation.',
      skills: [
        {
          name: 'Git',
          icon: 'commit',
          level: 'Strong',
        },
        {
          name: 'GitLab CI',
          icon: 'account_tree',
          level: 'Practical',
        },
        {
          name: 'GitHub Actions',
          icon: 'automation',
          level: 'Practical',
        },
        {
          name: 'Jira',
          icon: 'task_alt',
          level: 'Strong',
        },
        {
          name: 'Confluence',
          icon: 'article',
          level: 'Strong',
        },
        {
          name: 'Postman',
          icon: 'send',
          level: 'Strong',
        },
        {
          name: 'IntelliJ',
          icon: 'terminal',
          level: 'Strong',
        },
      ],
    },
  ];
}
