/** @format */

"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import "./navbar.css";

const navLinks = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Services",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];

const NavLink: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => (
  <Link href={href} className="hover:opacity-70">
    {label}
  </Link>
);

export const Navbar: React.FC = () => {
  const [animationParent] = useAutoAnimate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const renderedNavLinks = useMemo(
    () =>
      navLinks.map((link, index) => (
        <NavLink key={index} href={link.href} label={link.label} />
      )),
    []
  );

  return (
    <header className={`${showMenu? 'active' : ''}`}>
      <nav className="nav-bar">
        {/* Menu hamburger */}
        <button onClick={toggleMenu}>
          <Menu className="fa-solid fa-bars-staggered sidebarOpen" />
        </button>
        {/* Coast Research Technology Logo */}
        <div className="logo">
          <Image src="/logoCoast.png" alt="Coast Logo" width={50} height={50} />
          <span>COAST RESEARCH TECHNOLOGY</span>
        </div>

        <div className="menu">
          <div className="menu-mobile-logo">
            <Link href="#" className="logo">
              <Image
                src="/logoCoast.png"
                alt="Coast Logo"
                width={50}
                height={50}
              />
              <span>CRT</span>
            </Link>
            <button>
              <X className="fa-solid fa-circle-xmark siderbarClose" onClick={toggleMenu} />
            </button>
          </div>

          <ul role="list" className="nav-links" onClick={toggleMenu}>
            <li role="listitem" className="active-li">
              <Link className="link" href="/" title="Home Page">
                Home
              </Link>
            </li>
            <li role="listitem" className="dropdown">
              <span className="dropbtn" title="About Coast Services">
                About Us <FaCaretDown className="fas fa-caret-down" />
              </span>
              <div className="dropdown-content">
                <Link href="/about-us/our-vision" className="dropdownlink">
                  Our Vision
                </Link>
                <Link href="/about-us/our-mission" className="dropdownlink">
                  Our Mission
                </Link>
              </div>
            </li>
            <li role="listitem">
              <Link className="link" href="/services" title="Our Services">
                Services
              </Link>
            </li>
            <li role="listitem">
              <Link className="link" href="/career" title="Career page">
                Career
              </Link>
            </li>
            <li role="listitem">
              <Link className="link" href="/contact" title="Contact Coast">
                Contact Us
              </Link>
            </li>
            <li role="listitem">
              <Link className="link" href="/training" title="Training at Coast">
                Training
              </Link>
            </li>
            <li role="listitem">
              <Link
                className="link"
                href="/coast-craft"
                title="coast-craft Blog"
              >
                coast-craft
              </Link>
            </li>
          </ul>
        </div>

        <button className="theme-toggle">
          <Moon className="fa-solid fa-moon moon" />
          <Sun className="fa-solid fa-sun sun" />
        </button>
      </nav>
    </header>
  );
};
