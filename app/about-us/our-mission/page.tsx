"use client";

import Image from "next/image";
import React from "react";
import "../aboutUs.css";
import Link from "next/link";
import { X } from "lucide-react";
import TeamCarousel from "@/components/AllCarousel/TeamCarousel/TeamCarousel";
import { team } from "@/lib/data";

const OurMissionPage: React.FC = () => {
  return (
    <main>
      <div className="about-bg">
        <div className="hero-hold">
          <div className="heroImgMission  item1">
            <Image
              src="/travelbg.png"
              alt="Our mission background image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="hero-space item2">
            <h1>OUR MISSION</h1>
            <p>
              Our mission at Coast Research Technology is to empower businesses
              and individuals through innovative software solutions, expert
              training, and strategic recruitment services. We are not just
              developers; we are innovators who craft intelligent, bespoke
              solutions that anticipate future needs, solve complex challenges,
              and drive growth. By combining creative thinking, advanced
              technology, and a deep commitment to excellence, we aim to make
              life easier through smart coding, transforming the way people work
              and live.
            </p>
            <button
              type="button"
              className="read-more-btn"
              aria-label="Open read more"
            >
              <Link href="#popup1">Summary</Link>
            </button>
          </div>
        </div>

        <div id="popup1" className="overlay">
          <div className="popup">
            <Link className="close" href="#">
              <X />
            </Link>
            <div className="hexagon-main">
              <div className="readmore-hexagon-container">
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">
                    <i className="fab fa-facebook-f"></i>
                    Full-Stack <br />
                    Development
                  </div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">
                    <i className="fab fa-facebook-f"></i>
                    Full-Stack <br />
                    Development
                  </div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">
                    <i className="fab fa-facebook-f"></i>
                    Full-Stack <br />
                    Development
                  </div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">
                    <i className="fab fa-facebook-f"></i>
                    Full-Stack <br />
                    Development
                  </div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">
                    <i className="fab fa-facebook-f"></i>
                    Full-Stack <br />
                    Development
                  </div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">
                    <i className="fab fa-facebook-f"></i>
                    Full-Stack <br />
                    Development
                  </div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">
                    <i className="fab fa-facebook-f"></i>
                    Full-Stack <br />
                    Development
                  </div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">
                    <i className="fab fa-facebook-f"></i>
                    Full-Stack <br />
                    Development
                  </div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">
                    <i className="fab fa-facebook-f"></i>
                    Full-Stack <br />
                    Development
                  </div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">
                    <i className="fab fa-facebook-f"></i>
                    Full-Stack <br />
                    Development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TeamCarousel slides={team} />

        <section id="coreValues" className="coreValues">
          <div className="coreVlue-text">
            <h2 className="toggle-h2">OUR CORE VALUES & CULTURE</h2>
            <p className="justify-text">
              At Coast Research Technology, we are driven by a commitment to
              innovation and excellence, constantly seeking creative and
              forward-looking solutions to address future needs and complex
              challenges. We strive to deliver high-quality software
              development, comprehensive training programs, and effective
              recruitment services that empower businesses and individuals to
              thrive in an ever-evolving digital landscape. Through our emphasis
              on precision, we ensure a meticulous and accurate approach to
              matching talent with opportunities, tailored to meet unique needs
              and drive success.
            </p>
            <p className="justify-text">
              We believe in fostering growth and transformation by nurturing
              talent and promoting a culture that values creativity,
              collaboration, and practical problem-solving. Our mission is to
              empower the next generation of tech professionals with the skills,
              confidence, and support needed to excel in their careers. By
              providing tailored solutions and strategic recruitment, we help
              businesses and individuals achieve their full potential, driving
              positive change and progress across the tech industry.
            </p>
            <button
              type="button"
              className="read-more-btn"
              aria-label="Open read more"
            >
              <Link href="/services">More Details</Link>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OurMissionPage;
