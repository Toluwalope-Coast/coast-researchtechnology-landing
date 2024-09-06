"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./TestimonialCarousel.module.css";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  image: string;
  name: string;
  text: string;
  url: string;
}

interface CarouselProps {
  slides: Slide[];
}

const TestimonialCarousel: React.FC<CarouselProps> = ({ slides }) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 630,
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

  // Function to truncate text to 20 words
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "... "
      : text;
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <Link href={slide.url}>
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
                  <div className={styles.slideText}>
                    {truncateText(slide.text, 30)}
                    <Link href="/services" className="readReviews">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
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
