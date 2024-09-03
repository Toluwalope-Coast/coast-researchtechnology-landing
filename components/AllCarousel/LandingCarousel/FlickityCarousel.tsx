"use client"

import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "./landingPageSlider.css";

const FlickityCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const flickityOptions = {
      // Add Flickity options here
      cellAlign: "left",
      contain: true,
      pageDots: false,
    };

    // Initialize Flickity
    const flickityInstance = new Flickity(carouselRef.current!, flickityOptions);

    return () => flickityInstance.destroy();
  }, []);

  return (
    <div ref={carouselRef} className="carousel">
      <div className="carousel-cell">Slide 1</div>
      <div className="carousel-cell">Slide 2</div>
      <div className="carousel-cell">Slide 3</div>
      <div className="carousel-cell">Slide 4</div>
      <div className="carousel-cell">Slide 5</div>
    </div>
  );
};

export default FlickityCarousel;
