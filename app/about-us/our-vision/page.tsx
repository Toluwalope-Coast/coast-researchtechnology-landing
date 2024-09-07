"use client";

import Image from "next/image";
import React from "react";
import "../aboutUs.css";
import Link from "next/link";
import { X } from "lucide-react";
import { team } from "@/lib/data";
import TeamCarousel from "@/components/AllCarousel/TeamCarousel/TeamCarousel";

const OurVisionPage: React.FC = () => {
  return (
    <main>
      <div className="about-bg">
        <div className="hero-hold">
          <div className="heroImgMission  item1">
            <Image
              src="/television.png"
              alt="Our mission background image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="hero-space item2">
            <h1>OUR VISION</h1>
            <p>
              At Coast Research Technology, our vision is to be the leading
              catalyst for transformative change in the technology landscape. We
              aspire to shape the future of software development, training, and
              recruitment by pioneering innovative solutions and fostering a
              culture of excellence. Our goal is to inspire and drive progress
              by creating technologies and opportunities that not only meet but
              exceed the evolving needs of businesses and individuals. We
              envision a world where our contributions elevate industry
              standards, empower communities, and create lasting impact through
              the power of smart coding and visionary talent.
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
              At Coast, our core values are the foundation of our identity,
              guiding every decision we make and every action we take. These
              values reflect our commitment to excellence, innovation, and
              integrity in all our endeavors. They drive us to deliver
              outstanding results and foster a positive impact on our clients,
              employees, and the wider community.
            </p>
            <p className="justify-text">
              In an age where technology plays a pivotal role in shaping the
              future, it is essential to have a clear and unwavering set of
              values that guide our journey. Our commitment to these core values
              ensures that we remain true to our purpose, delivering innovative
              solutions that meet the diverse needs of our clients while
              contributing to the broader technological ecosystem. As we
              continue to grow and evolve, these values will remain our guiding
              light, helping us to build a sustainable, inclusive, and
              forward-thinking organization that stands the test of time.
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

export default OurVisionPage;
