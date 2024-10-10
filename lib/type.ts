import { ReactNode } from 'react';

export interface ISlide {
  id: string;
  heading?: string;
  text: string;
  link?: string;
  url?: string;
  image: string;
  tip?: string;
  position?: string;
  linkText?: string;
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

// Define Meta Information
export interface IMeta {
  description: string;
  keywords: string[];
  author: string;
}

// Define OpenGraph Meta Information
export interface IOpenGraph {
  title: string;
  description: string;
  type: string;
  post_url: string;
  post_image_url: string;
}

// Define Twitter Meta Information
export interface ITwitterMeta {
  card: string;
  title: string;
  description: string;
  post_image_url: string;
}

// Define Blog Meta Information
export interface IBlogMeta {
  title: string;
  time: number;
  post_url: string;
  post_image_url: string;
  read_duration: string;
  view_count: number;
  tags: string[];
  author: string;
}

// Define Block Elements
export interface IEditorBlock {
  type: string;
  data: any;
  accessibility?: {
    role?: string;
    ariaLevel?: number;
    alt?: string;
  };
}

// Define Blog Body
export interface IBlockBody {
  blocks: IEditorBlock[];
  version: string;
}

// Define Blog Post
export interface IBlogPost {
  id: string;
  meta: IMeta;
  opengraph: IOpenGraph;
  twittermeta: ITwitterMeta;
  blogmeta: IBlogMeta;
  blockbody: IBlockBody;
}

export interface ITrendingNewsProps {
  trendingNews: IBlogMeta[];
}

export interface IPostsProps {
  posts: IBlogMeta[];
}

export interface IBlogArea {
  blogArea: IBlogMeta[];
}

export interface DashboardLayoutProps {
  children?: React.ReactNode;
  title: string;
  description: string;
}

export interface ICourses {
  id: number;
  title: string;
  duration: string;
}
