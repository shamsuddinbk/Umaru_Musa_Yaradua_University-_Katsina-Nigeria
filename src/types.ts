export interface NavItem {
  label: string;
  href: string;
}

export interface Faculty {
  name: string;
  description: string;
  href: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  icon: string;
}
