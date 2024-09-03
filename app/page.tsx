import React from "react";
import AboutSection from "@/views/aboutSection";
import ServicesSection from "@/views/servicesSection";
import BlobApp from "@/views/bubblesBackground";
import FlickityCarousel from "@/components/AllCarousel/LandingCarousel/FlickityCarousel";
import HeroSectionSlider from "@/views/heroSlider";
import TestimonialSection from "@/views/testimonialCarousel";
import { EmblaOptionsType } from "embla-carousel";

const Home: React.FC = () => {
  // const OPTIONS: EmblaOptionsType = { loop: true };
  // const SLIDE_COUNT = 8;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <main>
      {/* Hero Section Slider */}
      {/* <Slider /> */}
      {/* <HeroSectionSlider />1    */}
      <FlickityCarousel />

      {/* About Us Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonial Section */}
      {/* <TestimonialSection slides={SLIDES} options={OPTIONS} /> */}

      <BlobApp />
    </main>
  );
};

export default Home;
