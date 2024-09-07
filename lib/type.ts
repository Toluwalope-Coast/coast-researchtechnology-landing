export interface ISlide {
  id: string;
  heading: string;
  text: string;
  Link: string;
  url?: string;
  image: string;
  title?: string;
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
  url: string;
  name: string;
  ceoName?: string;
  isActive?: boolean;
  height?: number; // Define height prop
}

export interface ITestimonialsProps {
  testimonials: ITestimonialData[];
}

export interface ITeamData {
  id: string;
  image: string;
  position: string;
  name: string;
}

export interface ITeamProps {
  team: ITeamData[];
}

export interface IReviewsData {
  id: string;
  image: string;
  text: string;
}

export interface IReviewsProps {
  reviews: IReviewsData[];
}
