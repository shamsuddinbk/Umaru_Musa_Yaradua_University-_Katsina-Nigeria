import { NavItem, Faculty, NewsItem, EventItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Portals', href: '#portals' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export const FACULTIES: Faculty[] = [
  { 
    name: 'Faculty of Agriculture', 
    description: 'Nurturing sustainable farming and agricultural innovation.',
    href: 'https://umyu.edu.ng/agriculture/',
    icon: 'Sprout'
  },
  { 
    name: 'Basic Medical Sciences', 
    description: 'Advancing healthcare through rigorous scientific research.',
    href: 'https://umyu.edu.ng/basic-medical-sciences/',
    icon: 'Stethoscope'
  },
  { 
    name: 'Earth and Environmental Sciences', 
    description: 'Studying the planet to ensure a sustainable future.',
    href: 'https://umyu.edu.ng/earth-and-environmental-sciences/',
    icon: 'Globe'
  },
  { 
    name: 'Faculty of Education', 
    description: 'Shaping the future of teaching and learning.',
    href: 'https://umyu.edu.ng/education/',
    icon: 'GraduationCap'
  },
  { 
    name: 'Faculty of Humanities', 
    description: 'Exploring human culture, history, and language.',
    href: 'https://umyu.edu.ng/humanities/',
    icon: 'BookOpen'
  },
  { 
    name: 'Faculty of Law', 
    description: 'Upholding justice and the rule of law.',
    href: 'https://umyu.edu.ng/law/',
    icon: 'Scale'
  },
  { 
    name: 'Faculty of Management Sciences', 
    description: 'Developing leaders for the global business landscape.',
    href: 'https://umyu.edu.ng/management-sciences/',
    icon: 'Briefcase'
  },
  { 
    name: 'Faculty of Natural and Applied Sciences', 
    description: 'Innovation through scientific discovery.',
    href: 'https://umyu.edu.ng/natural-and-applied-sciences/',
    icon: 'FlaskConical'
  },
  { 
    name: 'Faculty of Social Sciences', 
    description: 'Understanding society and human behavior.',
    href: 'https://umyu.edu.ng/social-sciences/',
    icon: 'Users'
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    title: 'Commencement of First Semester 2025/2026 Registration',
    date: 'March 10, 2026',
    category: 'Academics',
    excerpt: 'Registration for returning students for the 2025/2026 academic session has officially commenced.',
    image: 'https://picsum.photos/seed/umyu1/800/600'
  },
  {
    id: '2',
    title: 'Postgraduate Application Form for 2025/2026 Session',
    date: 'March 05, 2026',
    category: 'Admissions',
    excerpt: 'Applications are now open for postgraduate programmes for the upcoming academic session.',
    image: 'https://picsum.photos/seed/umyu2/800/600'
  },
  {
    id: '3',
    title: 'Direct Entry Admission List Released',
    date: 'February 28, 2026',
    category: 'Admissions',
    excerpt: 'The university has released the Direct Entry (DE) admission list for the 2025/2026 session.',
    image: 'https://picsum.photos/seed/umyu3/800/600'
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'Convocation Ceremony 2026',
    date: 'April 15, 2026',
    location: 'University Convocation Ground'
  },
  {
    id: 'e2',
    title: 'Matriculation for New Students',
    date: 'May 10, 2026',
    location: 'Main Auditorium'
  },
  {
    id: 'e3',
    title: 'Annual Research Symposium',
    date: 'June 22, 2026',
    location: 'Faculty of Natural Sciences'
  }
];
