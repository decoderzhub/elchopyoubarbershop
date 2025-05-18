export type Service = {
  id: number;
  name: string;
  price: string;
  duration: string;
  description?: string;
};

export type Testimonial = {
  id: number;
  text: string;
  author: string;
  source: string;
};

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

export type SocialLink = {
  id: number;
  name: string;
  url: string;
  icon: string;
};