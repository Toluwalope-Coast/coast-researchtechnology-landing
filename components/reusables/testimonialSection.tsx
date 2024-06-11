"use client";

import React, { useState, useEffect } from "react";
import styles from "./component.module.css";
import { ITestimonialData } from "@/utils/type";
import TestimonialCard from "../cards/TestimonialCards";
import Image from "next/image";

const TestimonialsCarousel: React.FC<{ testimonials: ITestimonialData[] }> = ({
  testimonials,
}) => {
  const [activeIndex, setActiveIndex] = useState(1); // Initially set to position 2

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1)); // Loop through positions 0, 1, 2
    }, 5000); // Adjust the interval time as needed (5000 milliseconds = 5 seconds)

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index - 1); // Adjusting index to start from 0
  };

  return (
    <section className="testimonials flex flex-col px-16 md:px-28 h-[100vh] items-center">
      <h2 className="flex items-center gap-2 text-[#500480] text-[2rem] py-12 font-medium">
        <Image
          className={`${styles.graphic}`}
          src="/heading_polygon.png"
          alt=""
          width={50}
          height={50}
        />{" "}
        Testimonials
      </h2>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              testimonial={testimonial}
              isActive={index === activeIndex}
              key={testimonial.id}
              height={index === activeIndex ? 120 : 60} // Set height to 120 if active
            />
          ))}
        </div>
        {/* <div className="flex justify-center mb-16">
          {testimonials.map(({ position }) => (
            <div
              key={position}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                position === activeIndex + 1 ? "bg-purple-500" : "bg-gray-500"
              }`}
              onClick={() => handleDotClick(position)}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
