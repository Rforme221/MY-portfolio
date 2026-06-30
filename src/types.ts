export interface Project {
  id: string;
  title: string;
  category: string;
  image: string; // Background / cover image
  description: string;
  year: string;
  client: string;
  location: string;
  role: string;
  services: string[];
  results: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}
