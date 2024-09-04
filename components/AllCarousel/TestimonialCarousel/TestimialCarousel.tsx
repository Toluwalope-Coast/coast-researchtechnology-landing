"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./TestimonialCarousel.module.css";
import Image from "next/image";

interface Slide {
  image: string;
  name: string;
  text: string;
}

interface CarouselProps {
  slides: Slide[];
}

const TestimonialCarousel: React.FC<CarouselProps> = ({ slides }) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.slideContainer}>
              <Image
                src={slide.image}
                alt={`Slide ${index}`}
                className={styles.slideImage}
                width={1000}
                height={1000}
              />
              <div className={styles.slideContent}>
                <h3 className={styles.slideName}>{slide.name}</h3>
                <div className={styles.slideText}>{slide.text}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <button
        className={`${styles.arrowButton} ${styles.arrowLeft}`}
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>
      <button
        className={`${styles.arrowButton} ${styles.arrowRight}`}
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
