'use client'

import Image from "next/image";
import React from "react";
import "./services.css"

const ServicesPage: React.FC = () => {

  return (
    <section className="parallax">
    <div id="scrolling-image" className="parallax__layer parallax__layer--back"></div>
    <div className="parallax__layer parallax__layer--base">

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>BRING YOUR<br />IDEA TO<br />LIVE</h1>
            <p>LET HELP BUILD YOUR<br />TECH STORY</p>
            <Image src="/coast code preview.png" alt="Code preview" width={250} height={250} />
          </div>
        </section>

        <section className="showcase">
          <div className="showcase-content">
            <h1>Experience Unparalleled Tech Solutions with COAST</h1>
            <div className="brief-services">
              <div className="tetragon">
                <div className="tetra-content">Software Development</div>
              </div>
              <div className="tetragon">
                <div className="tetra-content">Cloud Solutions</div>
              </div>
              <div className="tetragon">
                <div className="tetra-content">Cybersecurity Solutions</div>
              </div>
              <div className="tetragon">
                <div className="tetra-content">UX/UI Design & Development</div>
              </div>
            </div>
            <button className="explore-btn">Explore</button>

          </div>
        </section>

        <div className="plain-bg">
          <section className="programs">
            <div className="hexagon-main">
              <div className="readmore-hexagon-container">
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">Full-Stack <br />Development</div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">Mobile aapp <br />Development</div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">Data Science &<br />Analysis</div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">Cloud <br />Services</div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">DevOps</div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">Cyber security<br />Services</div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">Software Testing &<br />Quality Assurance</div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">API Development &<br />Integration</div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">IT<br />Consulting</div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">Microservices<br />Achitecture</div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">Maintanance/<br />Support</div>
                </div>
                <div className="readmore-hexagon">
                  <div className="readmore-hex-content">Digital Market<br />Planning</div>
                </div>
              </div>
            </div>
          </section>

          <section className="appointment">
            <div className="contact-info">
              +2358153071297
            </div>
            <p className="appointment-txt">
              Experience a dynamic range of services tailored to effective governance and environmental advocacy. As
              Special Assistant to the Honorable Speaker of the House of Assembly in Nigeria, I offer strategic
              advisory, constituency liaison, and stakeholder engagement. Additionally, as the founder of the BlueLily
              Foundation.
            </p>
            <button className="appointment-btn">make appointment</button>
          </section>
          <section className="process">
            <h2>OUR PROCESS</h2>
            <h3>Process <span>we follow</span></h3>

            <div className="steps">
              <div className="step">
                <h4>1</h4>
                <h5>Research Project</h5>
                <p>Focused research and development to create innovative solutions.</p>
              </div>
              <div className="step">
                <h4>2</h4>
                <h5>Assess Strategies</h5>
                <p>Detailed analysis to identify strengths and weaknesses in proposed methods.</p>
              </div>
              <div className="step">
                <h4>3</h4>
                <h5>Premier Results</h5>
                <p>Achieving the highest possible efficiency and effectiveness.</p>
              </div>
            </div>

          </section>
        </div>

        <section className="testimonials">
          <h2>What Clients Are Saying About Us</h2>
          <p>We have worrked with multiple clients from diversed skills of the nation</p>
          <div className="carousel" data-flickity='{ "groupCells": true, "autoPlay": true }'>
            <div className="carousel-cell testimonial-carousel-cell">
              <i className="fa-solid fa-quote-left"></i>

              <p className="limited-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto
                dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum
                eum molestiae odio! Ipsam, dolore! Hic?</p>


              <Image className="client-img" src="/Professional dark head.png" alt="Client 1" width={100} height={100} />
            </div>
            <div className="carousel-cell testimonial-carousel-cell">
              <i className="fa-solid fa-quote-left"></i>
              <p className="limited-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto
                dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum
                eum molestiae odio! Ipsam, dolore! Hic?</p>

              <Image className="client-img" src="/Professional white head.png" alt="Client 2" width={100} height={100} />
            </div>
            <div className="carousel-cell testimonial-carousel-cell">
              <i className="fa-solid fa-quote-left"></i>

              <p className="limited-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto
                dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum
                eum molestiae odio! Ipsam, dolore! Hic?</p>

                <Image className="client-img" src="/Professional white head.png" alt="Client 2" width={100} height={100} />
              </div>
            <div className="carousel-cell testimonial-carousel-cell">
              <i className="fa-solid fa-quote-left"></i>

              <p className="limited-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto
                dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum
                eum molestiae odio! Ipsam, dolore! Hic?</p>

              <Image className="client-img" src="/Professional white head.png" alt="Client 2" width={100} height={100} />
            </div>
            <div className="carousel-cell testimonial-carousel-cell">
              <i className="fa-solid fa-quote-left"></i>

              <p className="limited-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto
                dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum
                eum molestiae odio! Ipsam, dolore! Hic?</p>

              <Image className="client-img" src="/Professional dark head.png" alt="Client 1" width={100} height={100} />
            </div>
            <div className="carousel-cell testimonial-carousel-cell">
              <i className="fa-solid fa-quote-left"></i>

              <p className="limited-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto
                dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum
                eum molestiae odio! Ipsam, dolore! Hic?</p>
              <Image className="client-img" src="/Professional dark head.png" alt="Client 1" width={100} height={100} />

            </div>
            <div className="carousel-cell testimonial-carousel-cell">
              <i className="fa-solid fa-quote-left"></i>

              <p className="limited-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto
                dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum
                eum molestiae odio! Ipsam, dolore! Hic?</p>
              <Image className="client-img" src="/Professional dark head.png" alt="Client 1" width={100} height={100} />
            </div>
            <div className="carousel-cell testimonial-carousel-cell">
              <i className="fa-solid fa-quote-left"></i>

              <p className="limited-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto
                dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum
                eum molestiae odio! Ipsam, dolore! Hic?</p>
              <Image className="client-img" src="/Professional dark head.png" alt="Client 1" width={100} height={100} />
            </div>
            <div className="carousel-cell testimonial-carousel-cell">
              <i className="fa-solid fa-quote-left"></i>

              <p className="limited-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto
                dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum
                eum molestiae odio! Ipsam, dolore! Hic?</p>

              <Image className="client-img" src="/Professional dark head.png" alt="Client 1" width={100} height={100} />
            </div>
            <div className="carousel-cell testimonial-carousel-cell">
              <i className="fa-solid fa-quote-left"></i>

              <p className="limited-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto
                dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum
                eum molestiae odio! Ipsam, dolore! Hic?</p>

              <Image className="client-img" src="/Professional dark head.png" alt="Client 1" width={100} height={100} />

            </div>
            <div className="carousel-cell testimonial-carousel-cell">
              <i className="fa-solid fa-quote-left"></i>

              <p className="limited-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto
                dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum
                eum molestiae odio! Ipsam, dolore! Hic?</p>

              <Image className="client-img" src="/Professional dark head.png" alt="Client 1" width={100} height={100} />

            </div>
            <div className="carousel-cell testimonial-carousel-cell">
              <i className="fa-solid fa-quote-left"></i>

              <p className="limited-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto
                dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum
                eum molestiae odio! Ipsam, dolore! Hic?</p>

            <Image className="client-img" src="/logoCoast.png" alt="Client 1" width={100} height={100} />
            </div>
          </div>
        </section>
        
    </main>
    </div>
    </section>
  );
};

export default ServicesPage;