export interface ISlide {
  id: string;
  heading: string;
  text: string;
  Link: string;
  url?: string;
  image: string;
}

export interface ICarouselItem {
  id: string;
  image: string;
  text: string;
}

export interface ICarouselProps {
  data: ICarouselItem[];
}

export interface ITestimonialData {
  id: string;
  position?: number;
  image: string;
  text: string;
  name: string;
  isActive?: boolean;
  height?: number; // Define height prop
}

export interface ITestimonialsProps {
  testimonials: ITestimonialData[];
}
