export type Course = {
  id: number;
  title: string;
  slug: string;
  batch: string;
  startDate: string;
  price: string;
  features: string[];
  popular?: boolean;
  live?: boolean;
  tags: string[]; // categories
};

export const courses: Course[] = [
  {
    id: 1,
    title: 'GS Foundation Course 2026 - Batch 3',
    slug: 'live-gs-foundation-course-2026-batch-3',
    batch: 'Batch 3',
    startDate: '1st April 2025',
    price: '₹19,456',
    features: [
      'Comprehensive Foundation Course',
      'Interactive Classes',
      'Complete GS Coverage',
      'Expert Faculty Guidance'
    ],
    live: true,
    tags: ['GS Foundation']
  },
  {
    id: 2,
    title: 'GS Foundation Course 2026 - Batch 3 Plus',
    slug: 'live-gs-foundation-course-2026-batch-3-plus',
    batch: 'Batch 3 Plus',
    startDate: '1st April 2025',
    price: '₹29,198',
    features: [
      'Comprehensive Foundation Course',
      '1:1 Mentorship',
      'Interactive Classes',
      'Complete GS Coverage',
      'Premium Support'
    ],
    popular: true,
    live: true,
    tags: ['GS Foundation']
  },
  {
    id: 3,
    title: 'Mains Mentorship Program Plus (MMP+) 2026',
    slug: 'mains-mentorship-program-plus-mmp-2026',
    batch: 'MMP+ 2026',
    startDate: '15th January 2025',
    price: '₹12,979',
    features: [
      'One Stop Solution for Mains Answer Writing',
      'Personal Mentorship',
      'Answer Writing Practice',
      'Regular Feedback'
    ],
    tags: ['Mentorship', 'Mains']
  },
  {
    id: 4,
    title: 'PSIR Mains Test Series for UPSC 2026',
    slug: 'psir-mains-test-series-upsc-2026',
    batch: 'Test Series 2026',
    startDate: '1st February 2025',
    price: '₹7,787',
    features: [
      'Master PSIR Mains with powerful Test Series',
      '2 Free Content Inside',
      'Comprehensive Question Bank',
      'Detailed Solutions'
    ],
    tags: ['PSIR', 'Test Series', 'Mains']
  },
  {
    id: 5,
    title: 'PSIR Quality Enrichment Program for UPSC 2026',
    slug: 'live-psir-quality-enrichment-program-upsc-2026',
    batch: 'PSIR 2026',
    startDate: '10th March 2025',
    price: '₹7,787',
    features: [
      'All in One Complete Course for PSIR Mains',
      '1 Free Content Inside',
      'Interactive Sessions',
      'Quality Content'
    ],
    live: true,
    tags: ['PSIR']
  },
  {
    id: 6,
    title: 'PSIR Quality Enrichment Program Plus for UPSC 2026',
    slug: 'live-psir-quality-enrichment-program-plus-upsc-2026',
    batch: 'PSIR Plus 2026',
    startDate: '10th March 2025',
    price: '₹12,979',
    features: [
      'All in One Complete Course for PSIR Mains',
      '2 Free Content Inside',
      'Premium PSIR Coverage',
      'Additional Support'
    ],
    live: true,
    tags: ['PSIR']
  },
  {
    id: 7,
    title: 'Economy Foundation Course by Dr Shivin',
    slug: 'live-economy-foundation-course-dr-shivin',
    batch: 'Economy Foundation',
    startDate: '20th February 2025',
    price: '₹3,995',
    features: [
      'Prepare Economy for UPSC 2025 with Dr. Shivin',
      'Expert Faculty Guidance',
      'Comprehensive Coverage',
      'Interactive Classes'
    ],
    live: true,
    tags: ['Economy', 'Foundation']
  },
  {
    id: 8,
    title: 'CSAT Foundation Course for UPSC 2026',
    slug: 'live-csat-foundation-course-upsc-2026',
    batch: 'CSAT Foundation',
    startDate: '1st March 2025',
    price: '₹6,791',
    features: [
      '100-Day Foundation Program builds strength',
      '1 Free Content Inside',
      'Comprehensive CSAT Coverage',
      'Problem Solving Techniques'
    ],
    live: true,
    tags: ['CSAT', 'Foundation']
  },
  {
    id: 9,
    title: 'PSIR Foundation Course for UPSC CSE 2026',
    slug: 'live-psir-foundation-course-upsc-cse-2026',
    batch: 'PSIR Foundation',
    startDate: '15th February 2025',
    price: '₹29,499',
    features: [
      'Comprehensive Program covering the syllabus',
      '1 Free Content Inside',
      'Complete PSIR Foundation',
      'Expert Faculty'
    ],
    live: true,
    tags: ['PSIR', 'Foundation']
  },
  {
    id: 10,
    title: 'GS Foundation Course 2026 - Batch 5',
    slug: 'live-gs-foundation-course-2026-batch-5',
    batch: 'Batch 5',
    startDate: '14th July 2025',
    price: '₹19,465',
    features: [
      'Comprehensive Foundation Course',
      'Interactive Classes',
      'Complete GS Coverage',
      'Expert Faculty Guidance'
    ],
    live: true,
    tags: ['GS Foundation']
  },
  {
    id: 11,
    title: 'Bundle Course - GS 3 Mains Module + Test Series',
    slug: 'live-bundle-course-gs3-mains-module-test-series',
    batch: 'GS3 Bundle',
    startDate: '5th April 2025',
    price: '₹5,427',
    features: [
      'Complete Coverage of GS 3 Mains Syllabus',
      '3 Free Content Inside',
      'Test Series Included',
      'Comprehensive Practice'
    ],
    live: true,
    tags: ['GS 3', 'Mains', 'Bundle']
  },
  {
    id: 12,
    title: 'CSAT Samvaad for UPSC 2026 by Ram Mohan Panwar',
    slug: 'csat-samvaad-upsc-2026-ram-mohan-panwar',
    batch: 'CSAT Samvaad',
    startDate: '1st January 2025',
    price: '₹1',
    features: [
      'Start your CSAT Preparation for UPSC CSE',
      '1 Free Content Inside',
      'Expert Guidance',
      'Interactive Sessions'
    ],
    tags: ['CSAT']
  },
  {
    id: 13,
    title: 'FREE PSIR Active Recall & PYQ Sessions',
    slug: 'live-free-psir-active-recall-pyq-sessions',
    batch: 'Free PSIR',
    startDate: '1st December 2024',
    price: '₹1',
    features: [
      'Free PSIR revision through Active Recall',
      '1 Free Content Inside',
      'PYQ Practice',
      'Interactive Learning'
    ],
    live: true,
    tags: ['PSIR', 'Free']
  },
  {
    id: 14,
    title: 'Write Smart - Answer Writing through Classes',
    slug: 'live-write-smart-answer-writing-live-classes',
    batch: 'Write Smart',
    startDate: '10th January 2025',
    price: '₹3,245',
    features: [
      'Learn Answer Writing through Classes',
      '3 Free Content Inside',
      'Expert Guidance',
      'Practice Sessions'
    ],
    live: true,
    tags: ['Answer Writing', 'Mains']
  },
  {
    id: 15,
    title: 'Mains Test Series with Write Smart Bundle',
    slug: 'mains-test-series-live-write-smart-bundle',
    batch: 'Mains Bundle',
    startDate: '15th February 2025',
    price: '₹15,929',
    features: [
      'Focused Mains preparation course combining',
      '2 Free Content Inside',
      'Test Series + Answer Writing',
      'Comprehensive Practice'
    ],
    tags: ['Mains', 'Test Series', 'Bundle']
  },
  {
    id: 16,
    title: 'GS 2 Mains Module for UPSC CSE 2026',
    slug: 'live-gs2-mains-module-upsc-cse-2026',
    batch: 'GS2 Mains',
    startDate: '20th March 2025',
    price: '₹3,245',
    features: [
      'Coverage of all GS 2 subjects such as Polity',
      'Complete GS2 Coverage',
      'Interactive Classes',
      'Expert Faculty'
    ],
    live: true,
    tags: ['GS 2', 'Mains']
  },
  {
    id: 17,
    title: 'GS Foundation Course 2026 - Batch 4',
    slug: 'live-gs-foundation-course-2026-batch-4',
    batch: 'Batch 4',
    startDate: '26th May 2025',
    price: '₹19,465',
    features: [
      'Comprehensive Foundation Course',
      'Interactive Classes',
      'Complete GS Coverage',
      'Expert Faculty Guidance'
    ],
    live: true,
    tags: ['GS Foundation']
  },
  {
    id: 18,
    title: 'CSAT PYQs - UPSC CSAT PYQs (2021-2025) with Solutions',
    slug: 'csat-pyqs-upsc-2021-2025-solutions',
    batch: 'CSAT PYQ',
    startDate: '1st November 2024',
    price: '₹1',
    features: [
      'Master the UPSC CSAT with 5 years of Previous Years Questions',
      'Detailed Solutions',
      'Comprehensive Practice',
      'Question Analysis'
    ],
    tags: ['CSAT', 'PYQ']
  },
  {
    id: 19,
    title: 'CSAT Book for UPSC 2026 by Ram Mohan Panwar',
    slug: 'csat-book-upsc-2026-ram-mohan-panwar',
    batch: 'Physical Material',
    startDate: 'Available Now',
    price: '₹487',
    features: [
      'CSAT Book authored by Ram Mohan Panwar',
      '1 Free Content Inside',
      'Comprehensive Study Material',
      'Physical Book'
    ],
    tags: ['CSAT', 'Books']
  },
  {
    id: 20,
    title: 'GS Foundation Course 2026 - Batch 4 Plus',
    slug: 'live-gs-foundation-course-2026-batch-4-plus',
    batch: 'Batch 4 Plus',
    startDate: '26th May 2025',
    price: '₹29,198',
    features: [
      'Comprehensive Foundation Course',
      '1:1 Mentorship',
      'Interactive Classes',
      'Premium Support'
    ],
    live: true,
    tags: ['GS Foundation']
  },
  {
    id: 21,
    title: 'Mains Ready by December by Dr. Shivin',
    slug: 'mains-ready-december-dr-shivin',
    batch: 'Free Initiative',
    startDate: '1st December 2024',
    price: '₹1',
    features: [
      'Free Initiative for Mains by Dr. Shivin Chhabra',
      'Mains Preparation Strategy',
      'Expert Guidance',
      'Time-bound Preparation'
    ],
    tags: ['Mains', 'Free']
  },
  {
    id: 22,
    title: 'Essay Mains Module with Essay Mains Test Series',
    slug: 'live-essay-mains-module-test-series',
    batch: 'Essay Mains',
    startDate: '1st February 2025',
    price: '₹5,899',
    features: [
      'A to Z essay writing course for UPSC',
      '2 Free Content Inside',
      'Complete Essay Coverage',
      'Test Series Included'
    ],
    live: true,
    tags: ['Essay', 'Mains']
  },
  {
    id: 23,
    title: 'Ethics Mains Test Series for UPSC CSE 2026',
    slug: 'ethics-mains-test-series-upsc-cse-2026',
    batch: 'Ethics Test Series',
    startDate: '15th March 2025',
    price: '₹5,899',
    features: [
      'Ethics Mains Test Series designed for practice',
      'Comprehensive Question Bank',
      'Detailed Solutions',
      'Expert Evaluation'
    ],
    tags: ['Ethics', 'Test Series', 'Mains']
  },
  {
    id: 24,
    title: 'Ethics Mains Module with Ethics Mains Test Series',
    slug: 'live-ethics-mains-module-test-series',
    batch: 'Ethics Complete',
    startDate: '1st March 2025',
    price: '₹7,669',
    features: [
      'Complete coverage of Ethics by Mudit Jain',
      'Classes + Test Series',
      'Comprehensive Ethics Coverage',
      'Expert Faculty'
    ],
    live: true,
    tags: ['Ethics', 'Mains']
  },
  {
    id: 25,
    title: 'Ethics Mains Module for UPSC CSE 2026',
    slug: 'live-ethics-mains-module-upsc-cse-2026',
    batch: 'Ethics Mains',
    startDate: '1st March 2025',
    price: '₹3,245',
    features: [
      'Complete coverage of the Ethics syllabus',
      'Interactive Classes',
      'Expert Faculty Guidance',
      'Comprehensive Coverage'
    ],
    live: true,
    tags: ['Ethics', 'Mains']
  },
  {
    id: 26,
    title: 'GS 3 Mains Module for UPSC CSE 2026',
    slug: 'live-gs3-mains-module-upsc-cse-2026',
    batch: 'GS3 Mains',
    startDate: '15th April 2025',
    price: '₹3,245',
    features: [
      'Comprehensive coverage of all GS 3 topics',
      '2 Free Content Inside',
      'Interactive Classes',
      'Expert Faculty'
    ],
    live: true,
    tags: ['GS 3', 'Mains']
  },
  {
    id: 27,
    title: 'Current Affairs Course by Mudit Jain for UPSC 2026',
    slug: 'current-affairs-course-mudit-jain-upsc-2026',
    batch: 'Current Affairs',
    startDate: '1st May 2025',
    price: '₹4,709',
    features: [
      'Current Affairs Coverage of May 2025 onwards',
      '1 Free Content Inside',
      'Expert Analysis',
      'Regular Updates'
    ],
    live: true,
    tags: ['Current Affairs']
  },
  {
    id: 28,
    title: 'Free PSIR Monthly Current Affair Magazine',
    slug: 'free-psir-monthly-current-affair-magazine',
    batch: 'Free Magazine',
    startDate: 'Monthly',
    price: '₹1',
    features: [
      'Free Monthly Compilation of Current Affairs',
      'PSIR Focused Content',
      'Regular Updates',
      'Expert Analysis'
    ],
    tags: ['PSIR', 'Current Affairs', 'Free']
  }
];


