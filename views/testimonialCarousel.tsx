"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/layout/CarouselSection/CarouselArrowButton";
import styles from "@/layout/CarouselSection/Carousel.module.css";
import { testimonial } from "@/lib/data";
import Image from "next/image";
import { PauseCircle, PlayCircle, Quote } from "lucide-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const TestimonialSection: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);
  const [isPlaying, setIsPlaying] = useState(true);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <section className="flex flex-col items-center w-full bg-white">
      <div className={`${styles.testimonialHeader}`}>
        <h2 className={`${styles.testimonialHeading}`}>
          <Image
            className={`${styles.graphic}`}
            src="/heading_polygon.png"
            alt=""
            width={50}
            height={50}
          />{" "}
          Testimonials
        </h2>
      </div>
      <div className={styles.embla}>
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {testimonial.map((index) => (
              <div className={styles.emblaSlide} key={index.id}>
                <div className={styles.emblaSlideNumber}>
                  <Image
                    src={index.imageSrc}
                    alt={index.name}
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                  <h3 className="text-lg font-bold">{index.name}</h3>
                  <Quote size={30} className="text-gray-400 text-[3rem] pt-8" />
                  <p className="text-sm text-center">{index.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.emblaControls}>
          <div className={styles.emblaButtons}>
            <PrevButton
              onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={() => onButtonAutoplayClick(onNextButtonClick)}
              disabled={nextBtnDisabled}
            />
          </div>

          <button
            className={styles.emblaPlay}
            onClick={toggleAutoplay}
            type="button"
          >
            {isPlaying ? <PauseCircle size={30} /> : <PlayCircle size={30} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
