import React from "react";
import style from "./training.module.css";
import Image from "next/image";
import Carousel from "@/components/AllCarousel/HeroCarousel/carousel";

import Link from "next/link";
import { trainingSlides } from "@/lib/data";

// const slides = [
//   {
//     image: "/lawal_abdulateef.png",
//     text: "Slide 1: This is the first slide description.",
//   },
//   {
//     image: "/segun_joseph.png",
//     text: "Slide 2: Here is some more text for the second slide.",
//   },
//   {
//     image: "/testimonial-1.jpg",
//     text: "Slide 3: And this is the third slide description.",
//   },
// ];

const page = () => {
  return (
    <main>
      <section className={style.techie}>
        <Image
          src="/coast-segun-dup.png"
          alt="coast-tech individual"
          width={1000}
          height={1000}
          className={style.coastTechie}
          priority={true}
        />
        <Image
          src="/coast-segun.png"
          alt="coast-tech individual"
          width={1000}
          height={1000}
          className={style.coastTechie2}
          priority={true}
        />
        <p className={style.coastTech}>
          Do you want <span>COASTECH</span> to your name?
        </p>
        {/* <div className={style.coastStudent}> */}
        <div className={style.coastTechText}>
          <h1>
            Meet <br />
            <span>COASTECH SEGUN</span>
          </h1>
          <p>
            Hello World! Connect with us; the global community for designers,
            creative professionals, analysts and developers.
          </p>
        </div>

        <div className={style.heroImagesContainer}>
          <Link href="#">
            <div className={style.imageWrapper}>
              <Image
                src="/vision-1.png"
                alt="VR image"
                width={200}
                height={200}
                className={style.vrImage}
              />
              <div className={style.hoverText}>UI/UX</div>
            </div>
          </Link>
          <Link href="#">
            <div className={style.imageWrapper}>
              <Image
                src="/vision-2.png"
                alt="VR image"
                width={200}
                height={200}
                className={style.vrImage}
              />
              <div className={style.hoverText}>WEB DEVELOPMENT</div>
            </div>
          </Link>
          <Link href="#">
            <div className={style.imageWrapper}>
              <Image
                src="/vision-3.png"
                alt="VR image"
                width={200}
                height={200}
                className={style.vrImage}
              />
              <div className={style.hoverText}>APP DEVELOPMENT</div>
            </div>
          </Link>
          <Link href="#">
            <div className={style.imageWrapper}>
              <Image
                src="/vision-4.png"
                alt="VR image"
                width={200}
                height={200}
                className={style.vrImage}
              />
              <div className={style.hoverText}>DATABASE ADMINISTRATOR</div>
            </div>
          </Link>
        </div>
        {/* </div> */}
      </section>
      <section className={style.coastPacks}>
        {/* <div className={style.welcome}>
          <h2>Welcome to</h2>
          <h3>Coast Research Technology</h3>
        </div> */}
        <Image
          src="/coast-techie-packs.png"
          alt="coast-tech individual"
          width={1000}
          height={1000}
          className={style.techiePacks}
        />
      </section>
      <section>
        <Carousel slides={trainingSlides} />
      </section>
    </main>
  );
};

export default page;
