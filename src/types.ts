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
