import Image from "next/image";
import Link from "next/link";
import Styles from "./coast-craft.module.css";

export const VideoArea = () => {
  return (
    <section className={`${Styles.section} video-area`}>
      <div className="video-nooverlay overlay2">
        <p className="small">August 31, 2023</p>
        <h2>
          HTML5 and CSS3 Building the Foundations of Modern Web Development
        </h2>
      </div>
      <div className="video-overlay">
        <div className="blog5">
          <Link href="#">
            <Image
              src="/Diving into Responsive Design Crafting User-Friendly Interfaces.png"
              alt="Diving into Responsive Design Crafting User-Friendly Interfaces"
              width={1000}
              height={1000}
            />
          </Link>
          <div className="blog5-content">
            <p className="small"> SEPTEMBER 28, 2024 </p>
            <Link href="#">
              Diving into Responsive Design Crafting User-Friendly Interfaces
            </Link>
            <p className="small">By Toluwalope Coast </p>
          </div>
        </div>
        <div className="blog5">
          <Link href="#">
            <Image
              src="/DevOps Dynamics Streamlining Development to Deployment Workflows.png"
              alt="DevOps Dynamics Streamlining Development to Deployment Workflows"
              width={1000}
              height={1000}
            />
          </Link>
          <div className="blog5-content">
            <p className="small"> SEPTEMBER 28, 2024 </p>
            <Link href="#">
              DevOps Dynamics: Streamlining Development to Deployment Workflows
            </Link>
            <p className="small">By Toluwalope Coast </p>
          </div>
        </div>
        <div className="blog5">
          <Link href="#">
            <Image
              src="/Mastering App State Management The Key to Crafting Seamless User Experiences.png"
              alt="Mastering App State Management The Key to Crafting Seamless User Experiences"
              width={1000}
              height={1000}
            />
          </Link>
          <div className="blog5-content">
            <p className="small"> SEPTEMBER 21, 2024 </p>
            <Link href="#">
              Mastering App State Management: The Key to Crafting Seamless User
              Experiences.
            </Link>
            <p className="small">By Toluwalope Coast </p>
          </div>
        </div>
      </div>
    </section>
  );
};
