'use client'

import Image from "next/image";
import React from "react";
import "../aboutUs.css"
import Link from "next/link";
import { X } from "lucide-react";

const OurVisionPage: React.FC = () => {

    return (
        <main>
            <div className="about-bg">
                <div className="hero-hold">
                    <div className="heroImgMission  item1">
                        <Image src="/television.png" alt="Our mission background image" width={1000} height={1000} />
                    </div>
                    <div className="hero-space item2">
                    <h1>OUR VISION</h1>
                    <p>At Coast, our vision is to be a global leader in technology and innovation, transforming the way businesses and individuals interact with software solutions. We aspire to create a future where technology seamlessly integrates into everyday life, empowering people and organizations to reach their full potential.</p>
                        <button type="button" className="read-more-btn" aria-label="Open read more">
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
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>







                <section className="teams">
                    <h2 className="toggle-h2 mt-1">MEET OUR TEAM</h2>
                    <div className="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true }'>
                        <div className="carousel-cell team-carousel-cell">
                            <Image src="/Professional white head.png" alt="team" width={100} height={100} />
                            <div>
                                <h3>TECH LEAD</h3>
                                <p>NAME: TOLU COAST</p>
                            </div>
                        </div>
                        <div className="carousel-cell team-carousel-cell">
                            <Image src="/Professional dark head.png" alt="team" width={100} height={100} />
                            <div>
                                <h3>FRONT-END DEV</h3>
                                <p>NAME: ADELEKE SEGUN</p>
                            </div>
                        </div>
                        <div className="carousel-cell team-carousel-cell">
                            <Image src="/Professional white head.png" alt="team" width={100} height={100} />
                            <div>
                                <h3>TEAM</h3>
                                <p>NAME: IBRAHIM AL-AMIN</p>
                            </div>
                        </div>
                        <div className="carousel-cell team-carousel-cell">
                            <Image src="/Professional dark head.png" alt="team" width={100} height={100} />
                            <div>
                                <h3>TECH LEAD</h3>
                                <p>NAME: TOLU COAST</p>
                            </div>
                        </div>
                        <div className="carousel-cell team-carousel-cell">
                            <Image src="/testimonial-1.jpg" alt="team" width={100} height={100} />
                            <div>
                                <h3>TEAM</h3>
                                <p>NAME: TOLU COAST</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="coreValues" className="coreValues">
                    <div className="coreVlue-text">
                        <h2 className="toggle-h2">OUR CORE VALUES & CULTURE</h2>
                        <p className="justify-text">At Coast, our core values are the foundation of our identity, guiding every
                            decision we make and every action we take. These values reflect our commitment to excellence,
                            innovation, and integrity in all our endeavors. They drive us to deliver outstanding results and
                            foster a positive impact on our clients, employees, and the wider community.</p>
                        <p className="justify-text">In an age where technology plays a pivotal role in shaping the future, it is
                            essential to have a clear and unwavering set of values that guide our journey. Our commitment to
                            these core values ensures that we remain true to our purpose, delivering innovative solutions that
                            meet the diverse needs of our clients while contributing to the broader technological ecosystem. As
                            we continue to grow and evolve, these values will remain our guiding light, helping us to build a
                            sustainable, inclusive, and forward-thinking organization that stands the test of time.</p>
                        <button type="button" className="read-more-btn" aria-label="Open read more">
                            <Link href="#popup2">Summary</Link>
                        </button>
                    </div>
                </section>

                <div id="popup2" className="overlay">
                    <div className="popup">
                        <Link className="close" href="#coreValues">
                            <i className="fa-solid fa-circle-xmark"></i>
                        </Link>
                        <div className="hexagon-main">
                            <div className="readmore-hexagon-container">
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        12Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                                <div className="readmore-hexagon">
                                    <div className="readmore-hex-content">
                                        <i className="fab fa-facebook-f"></i>
                                        Full-Stack <br />Development
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default OurVisionPage;
