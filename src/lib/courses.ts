export type Course = {
  id: number;
  title: string;
  slug: string;
  batch: string;
  startDate: string;
  price: string;
  features: string[];
  popular?: boolean;
  tags: string[]; // categories
};

export const courses: Course[] = [
  {
    id: 1,
    title: 'Live GS Foundation Course 2026 Plus',
    slug: 'live-gs-foundation-course-2026-plus-batch-5-plus',
    batch: 'Batch 5 Plus',
    startDate: '14th July 2025',
    price: '₹29,999',
    features: [
      'Live Foundation Class',
      'Flip Learning Method',
      'Live Answer Writing Session',
      'Mains & Interview Preparation',
      'PYQ-Based Practice'
    ],
    popular: true,
    tags: ['GS Foundation']
  },
  {
    id: 2,
    title: 'Live GS Foundation Course 2026',
    slug: 'live-gs-foundation-course-2026-batch-5',
    batch: 'Batch 5',
    startDate: '14th July 2025',
    price: '₹19,999',
    features: [
      'Live Foundation Class',
      'Flip Learning Method',
      'Live Answer Writing Session',
      'Mains & Interview Preparation',
      'PYQ-Based Practice'
    ],
    tags: ['GS Foundation']
  },
  {
    id: 3,
    title: 'Decode UPSC with AIR 1 Shakti Dubey',
    slug: 'decode-upsc-with-air-1-shakti-dubey',
    batch: 'Special Initiative',
    startDate: '29th May 2024',
    price: 'Free',
    features: [
      'UPSC Strategy',
      'Beginner Friendly',
      'Topper Sessions',
      'Note-Making',
      'Answer Writing'
    ],
    tags: ['Mentorship']
  },
  {
    id: 4,
    title: "Beginners' Kit",
    slug: 'beginners-kit-understand-upsc',
    batch: 'Batch 1',
    startDate: '2nd July 2025',
    price: 'Contact Us',
    features: [
      'Comprehensive Foundation Building',
      'Personalized Study Plans',
      'Answer Writing Sessions',
      'Motivation and Mindset Development'
    ],
    tags: ['Mentorship']
  },
  {
    id: 5,
    title: 'Live GS Foundation Course 2026 (Batch 4)',
    slug: 'live-gs-foundation-course-2026-batch-4',
    batch: 'Batch 4',
    startDate: '26th May 2025',
    price: '₹19,999',
    features: [
      'Live Foundation Class',
      'Flip Learning Method',
      'Live Answer Writing Session',
      'Mains & Interview Preparation',
      'PYQ-Based Practice'
    ],
    tags: ['GS Foundation']
  },
  {
    id: 6,
    title: 'Live GS Foundation Course 2026 Plus (Batch 4)',
    slug: 'live-gs-foundation-course-2026-plus-batch-4',
    batch: 'Batch 4 Plus',
    startDate: '26th May 2025',
    price: '₹29,999',
    features: [
      'Live Foundation Class',
      '1:1 Mentorship',
      'Bi-Weekly Study Plans',
      'Live Answer Writing Sessions',
      'Prelims & Mains Revision'
    ],
    tags: ['GS Foundation']
  },
  {
    id: 7,
    title: 'Live GS Foundation Course 2026 Plus (Batch 3)',
    slug: 'live-gs-foundation-course-2026-plus-batch-3',
    batch: 'Batch 3 Plus',
    startDate: '1st April 2025',
    price: '₹29,999',
    features: [
      'Live Foundation Class',
      '1:1 Mentorship',
      'Bi-Weekly Study Plans',
      'Live Answer Writing Sessions',
      'Prelims & Mains Revision'
    ],
    tags: ['GS Foundation']
  },
  {
    id: 8,
    title: 'Live GS Foundation Course 2026 (Batch 3)',
    slug: 'live-gs-foundation-course-2026-batch-3',
    batch: 'Batch 3',
    startDate: '1st April 2025',
    price: '₹19,999',
    features: [
      'Live Foundation Class',
      'Complete Mains Coverage',
      'Live Answer Writing Session',
      'Prelims Revision'
    ],
    tags: ['GS Foundation']
  }
];


