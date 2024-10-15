'use client';

import Image from 'next/image';
import React from 'react';
import './contact.css';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const ContactPage: React.FC = () => {
  return (
    <main className="first-section">
      <section className="contact-section">
        <div className="contact-container">
          <h1>Contact</h1>
          <div className="attach">
            <Image
              src="/phone.png"
              alt="Phone"
              className="phone"
              width={1000}
              height={1000}
            />
            <Image
              src="/headset.png"
              alt="Headset"
              className="headset"
              width={1000}
              height={1000}
            />
            <div className="headset-mobile">
              <Image
                src="/headset-mobile.png"
                alt="Headset"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="contact-content">
            <form>
              <div className="input-container">
                <input
                  placeholder="Enter text"
                  className="input-field"
                  type="text"
                />
                <label className="input-label">Enter text</label>
                <span className="input-highlight"></span>
              </div>
            </form>

            <div className="contact-details">
              <div>
                <p className="contact-subtitle">GET IN TOUCH</p>
                <p className="tel-number">+235 807 299 1328</p>
              </div>
              <div>
                <p className="contact-subtitle">Follow us on</p>
                <div className="social">
                  <Link href="#" aria-label="Facebook">
                    <FacebookIcon />
                  </Link>
                  <Link href="#" aria-label="X (Twitter)">
                    <FaXTwitter />
                  </Link>
                  <Link href="#" aria-label="Instagram">
                    <InstagramIcon />
                  </Link>
                  <Link href="#" aria-label="LinkedIn">
                    <LinkedinIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15825.64383068179!2d3.8716554!3d7.4196884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d7fb999f27b%3A0xeb0ad645e4453680!2sCoast%20Research%20Technology%20-Best%20software%20engineering%20company%20%7C%20Best%20software%20company%20in%20ibadan%20%7C%20Top%20computer%20training%20school!5e0!3m2!1sen!2sng!4v1723323828230"
            width="800"
            height="400"
            loading="lazy"
            aria-hidden="false"
          />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
