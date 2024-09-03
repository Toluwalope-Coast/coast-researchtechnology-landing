import React from "react";
import AboutSection from "@/views/aboutSection";
import ServicesSection from "@/views/servicesSection";
import BlobApp from "@/views/bubblesBackground";
import HeroSectionSlider from "@/views/heroSlider";
import TestimonialSection from "@/views/testimonialCarousel";
import { EmblaOptionsType } from "embla-carousel";

import Carousel from "@/components/carousel/carousel";

const Home: React.FC = () => {
  const slides = [
    {
      image: "/tutorial.png",
      heading: "Master tech skills effortlessly",
      text: "The past few years have seen a steady increase in the demand for tech skills in the industry, passing out from the college or the university will not guarantee you the technical know-how to get you ready for the industry. At Coast Research Technology, you will actively acquire the technical skills to get you ready for the industry and keep up with its evolving technologies",
      Link: "www.coastresearchtechnology.com.ng",
    },
    {
      image: "/companyhero.png",
      heading: "Your Idea Journey Starts Now!",
      text: "The past few years have seen a steady increase in the demand for tech skills in the industry, passing out from the college or the university will not guarantee you the technical know-how to get you ready for the industry. At Coast Research Technology, you will actively acquire the technical skills to get you ready for the industry and keep up with its evolving technologies",
      Link: "www.coastresearchtechnology.com.ng",
    },
    {
      image: "/recruit.png",
      heading: "Recruiting",
      text: "Let’s help bridge the gap between your idea and your product, thereby providing solutions to many of your problems.",
      Link: "www.coastresearchtechnology.com.ng",
    },
    {
      image: "/craft.png",
      heading: "Coast Craft",
      text: "The past few years have seen a steady increase in the demand for tech skills in the industry, passing out from the college or the university will not guarantee you the technical know-how to get you ready for the industry. At Coast Research Technology, you will actively acquire the technical skills to get you ready for the industry and keep up with its evolving technologies",
      Link: "www.coastresearchtechnology.com.ng",
    },
  ];

  // const OPTIONS: EmblaOptionsType = { loop: true };
  // const SLIDE_COUNT = 8;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <main>
      {/* Hero Section Slider */}
      {/* <Slider /> */}
      {/* <HeroSectionSlider />1    */}
      <Carousel slides={slides} />

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
