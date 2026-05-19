export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  category: string;
  image?: string;
  imagePosition?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  positioning: string;
  image?: string;
  imagePosition?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  image?: string;
}
