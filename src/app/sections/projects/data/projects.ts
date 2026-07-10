import { ProjectItem } from '../models/project-item.model';

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Automotive Request System Modernization',
    type: 'Freelance project',
    icon: 'account_tree',
    description:
      'Replaced a VBA and Excel-driven internal workflow with a cleaner request management system for an automotive company.',
    impact: [
      'Improved how teams submit, review, and track operational requests.',
      'Reduced manual spreadsheet handling and made request status easier to follow.',
      'Focused on a practical migration path from existing Excel habits to a structured application workflow.',
    ],
    stack: ['Angular', 'TypeScript', 'Workflow design', 'Legacy VBA replacement'],
  },
  {
    title: 'Multiple Object Tracking for Vehicles',
    type: 'Thesis project',
    icon: 'track_changes',
    description:
      'Built a video-based vehicle detection and tracking pipeline using YOLOv8 with ByteTrack for multi-object tracking.',
    impact: [
      'Detected cars frame by frame with YOLOv8, a state-of-the-art model at the time of the research.',
      'Associated detections across frames with ByteTrack to preserve vehicle identities over time.',
      'Explored practical computer vision tradeoffs around accuracy, tracking stability, and video conditions.',
    ],
    stack: ['YOLOv8', 'ByteTrack', 'Computer vision', 'Python', 'MOT'],
  },
];
