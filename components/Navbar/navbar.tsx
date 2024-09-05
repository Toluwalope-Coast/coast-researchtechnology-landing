/** @format */

"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, MoonIcon, Sun, X } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import "./navbar.css";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const renderedNavLinks = useMemo(
    () =>
      navLinks.map((link, index) => (
        <NavLink key={index} href={link.href} label={link.label} />
      )),
    []
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    if (isDark) {
      document.body.classList.add("dark");
    }
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    const currentTheme = document.body.classList.contains("dark")
      ? "dark"
      : "light";
    localStorage.setItem("theme", currentTheme);
    setIsDarkMode(currentTheme === "dark"); // Update state based on the theme
  };

  return (
    <header className={`${showMenu ? "active" : ""}`}>
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
              <X
                className="fa-solid fa-circle-xmark siderbarClose"
                onClick={toggleMenu}
              />
            </button>
          </div>

          <ul role="list" className="nav-links" onClick={toggleMenu}>
            <li role="listitem" className="active-li">
              <Link className="link" href="/" title="Home Page">
                Home
              </Link>
            </li>
            <li role="listitem">
              <Dropdown>
                <DropdownTrigger>
                  <Button title="Career page" variant="bordered">
                    About Us <FaCaretDown className="fas fa-caret-down" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Static Actions"
                  className="bg-[#610083] text-white"
                >
                  <DropdownItem
                    href="/about-us/our-vision"
                    className="hover:bg-white hover:text-[#610083]"
                  >
                    Our Vision
                  </DropdownItem>
                  <DropdownItem
                    href="/about-us/our-mission"
                    className="hover:bg-white hover:text-[#610083]"
                  >
                    Our Mission
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
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

        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? (
            <Sun className="fa-solid fa-sun sun" />
          ) : (
            <Moon className="fa-solid fa-moon moon text-gray-600" />
          )}
        </button>
      </nav>
    </header>
  );
};
