import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EducationCertificate } from './models/education-certificate.model';
import { EducationItem } from './models/education-item.model';

@Component({
  selector: 'app-education',
  imports: [MatIconModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  public readonly eyebrow = 'Education';

  public readonly title = 'Academic background';

  public readonly description =
    'My education combines robotics, automatic control, mechanical engineering, and software-focused problem solving. This technical foundation helps me approach frontend development with structure, logic, and system-level thinking.';

  public readonly educationItems: EducationItem[] = [
    {
      degree: 'M.Sc. Robotics and Automatic Control',
      school: 'Warsaw University of Technology',
      location: 'Warsaw, Poland',
      period: 'October 2021 — June 2023',
      grade: 'GPA 4.69 / 5',
      icon: 'precision_manufacturing',
      description:
        'Studied robotics, automation, control systems, and intelligent systems, with a strong focus on engineering problem solving and applied software development.',
      highlights: [
        'Completed a master’s degree in Robotics and Automatic Control.',
        'Worked on computer vision and vehicle tracking for autonomous systems.',
        'Built a strong foundation in algorithms, control, automation, and engineering analysis.',
        'Developed practical research, experimentation, and technical documentation skills.',
      ],
      skills: [
        {
          name: 'Robotics',
          icon: 'precision_manufacturing',
        },
        {
          name: 'Control Systems',
          icon: 'settings_input_component',
        },
        {
          name: 'Computer Vision',
          icon: 'visibility',
        },
        {
          name: 'Python',
          icon: 'terminal',
        },
        {
          name: 'Research',
          icon: 'science',
        },
      ],
    },
    {
      degree: 'B.Sc. Mechanical Engineering',
      school: 'Debre Berhan University',
      location: 'Debre Berhan, Ethiopia',
      period: 'October 2015 — January 2021',
      grade: 'GPA 3.81 / 4',
      icon: 'engineering',
      description:
        'Built a strong engineering foundation through mechanical systems, design, analysis, mathematics, manufacturing, and practical problem solving.',
      highlights: [
        'Completed a bachelor’s degree in Mechanical Engineering.',
        'Developed strong analytical, mathematical, and engineering design skills.',
        'Gained a foundation in mechanical systems, manufacturing, and technical problem solving.',
        'Built the engineering mindset that later supported my transition into software development.',
      ],
      skills: [
        {
          name: 'Engineering',
          icon: 'engineering',
        },
        {
          name: 'Mechanical Design',
          icon: 'architecture',
        },
        {
          name: 'Problem Solving',
          icon: 'psychology',
        },
        {
          name: 'Mathematics',
          icon: 'functions',
        },
      ],
    },
  ];

  public readonly certificates: EducationCertificate[] = [
    {
      school: 'University of Silesia in Katowice',
      title: 'Certificate, Polish Language Preparatory Course — A2',
      location: 'Katowice, Poland',
      period: 'February 2021 — June 2021',
      icon: 'translate',
      skills: ['Polish A2', 'Teamwork'],
    },
    {
      school: 'Cracow University of Technology',
      title: 'Certificate, Polish Language Preparatory Course — A1',
      location: 'Cracow, Poland',
      period: 'October 2020 — February 2021',
      icon: 'language',
      skills: ['Polish A1', 'Teamwork'],
    },
  ];
}
