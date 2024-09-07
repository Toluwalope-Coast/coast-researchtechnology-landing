import React from "react";
import Image from "next/image";
import Styles from "./courses.module.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const courses = [];

const CoursesPage = () => {
  return (
    <main>
      <section className={Styles.heroSection}>
        <div>
          <Image
            src="/spiral.webp"
            alt="vision reality"
            width={1000}
            height={1000}
            className={Styles.heroSectionImage}
          />
          <Image
            src="/virtual-reality.webp"
            alt="vision reality"
            width={200}
            height={200}
            className={Styles.heroSectionVRImage}
          />
        </div>
        <div className={Styles.heroSectionContent}>
          <h1>Transform Your Future with Advanced Tech Training</h1>
          <p>
            Explore cutting-edge tech innovations. Coast Research Technology
            Training Institute offers industry-leading courses to boost your
            skills and career potential. Dive into the future—start your journey
            today!
          </p>
          <Button className={Styles.button}>
            <Link href="#">Apply</Link>
          </Button>
        </div>
      </section>
      <section>
        <div></div>
      </section>
    </main>
  );
};

export default CoursesPage;
