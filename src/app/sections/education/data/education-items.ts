import { EducationItem } from '../models/education-item.model';

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: 'M.Sc. Robotics and Automatic Control',
    school: 'Warsaw University of Technology',
    location: 'Warsaw, Poland',
    period: 'Oct 2021 - Jun 2023',
    grade: 'GPA 4.69 / 5',
    icon: 'precision_manufacturing',
    description:
      'Studied robotics, automation, control systems, and intelligent systems, with a strong focus on engineering problem solving and applied software development.',
    highlights: [
      'Completed a master degree in Robotics and Automatic Control.',
      'Worked on computer vision and vehicle tracking for autonomous systems.',
      'Built a strong foundation in algorithms, control, automation, and engineering analysis.',
      'Developed practical research, experimentation, and technical documentation skills.',
    ],
    skills: [
      { name: 'Robotics', icon: 'precision_manufacturing' },
      { name: 'Control Systems', icon: 'settings_input_component' },
      { name: 'Computer Vision', icon: 'visibility' },
      { name: 'Python', icon: 'terminal' },
      { name: 'Research', icon: 'science' },
    ],
  },
  {
    degree: 'B.Sc. Mechanical Engineering',
    school: 'Debre Berhan University',
    location: 'Debre Berhan, Ethiopia',
    period: 'Oct 2015 - Jan 2021',
    grade: 'GPA 3.81 / 4',
    icon: 'engineering',
    description:
      'Built a strong engineering foundation through mechanical systems, design, analysis, mathematics, manufacturing, and practical problem solving.',
    highlights: [
      'Completed a bachelor degree in Mechanical Engineering.',
      'Developed strong analytical, mathematical, and engineering design skills.',
      'Gained a foundation in mechanical systems, manufacturing, and technical problem solving.',
      'Built the engineering mindset that later supported my transition into software development.',
    ],
    skills: [
      { name: 'Engineering', icon: 'engineering' },
      { name: 'Mechanical Design', icon: 'architecture' },
      { name: 'Problem Solving', icon: 'psychology' },
      { name: 'Mathematics', icon: 'functions' },
    ],
  },
];
