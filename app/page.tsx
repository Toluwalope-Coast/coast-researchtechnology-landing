import React from "react";
import AboutSection from "@/views/aboutSection";
import ServicesSection from "@/views/servicesSection";
import BlobApp from "@/views/bubblesBackground";
import Carousel from "@/components/AllCarousel/HeroCarousel/carousel";
import { slides, testimonial } from "@/lib/data";
import TestimonialCarousel from "@/components/AllCarousel/TestimonialCarousel/TestimialCarousel";

const Home: React.FC = () => {
  // const OPTIONS: EmblaOptionsType = { loop: true };
  // const SLIDE_COUNT = 8;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <main>
      {/* Hero Section Slider */}
      <Carousel slides={slides} />

      {/* About Us Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      <BlobApp />

      <TestimonialCarousel slides={testimonial} />
    </main>
  );
};

export default Home;
