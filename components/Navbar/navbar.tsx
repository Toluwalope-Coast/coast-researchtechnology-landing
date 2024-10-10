/** @format */

'use client';
import Link from 'next/link';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { FaCaretDown } from 'react-icons/fa';
import './navbar.css';

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

// Define the type for navigation links
interface NavLinkData {
  href: string;
  label: string;
  submenu?: NavLinkData[]; // Optional submenu for dropdowns
}

// Define the data for the navigation links, including submenus
const navLinks: NavLinkData[] = [
  { href: '/', label: 'Home' },
  {
    href: '/training',
    label: 'Training',
    submenu: [
      { href: '/training/courses', label: 'Courses' },
      { href: '#', label: 'Admission' },
    ],
  },
  {
    href: '',
    label: 'About Us',
    submenu: [
      { href: '/about-us/our-vision', label: 'Our Vision' },
      { href: '/about-us/our-mission', label: 'Our Mission' },
    ],
  },
  { href: '/contact', label: 'Contact Us' },
  { href: '/services', label: 'Services' },
  { href: '/career', label: 'Career' },
  { href: '/coast-craft', label: 'Coast Craft' },
];

// Component for individual navigation links or dropdown triggers
const NavLink: React.FC<{ link: NavLinkData }> = ({ link }) => {
  if (link.submenu) {
    return (
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">
            {link.label} <FaCaretDown className="ml-1" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label={`${link.label} Submenu`}
          className="bg-[#610083] text-white"
        >
          {link.submenu.map((sublink, index) => (
            <DropdownItem
              key={index}
              as="a"
              href={sublink.href}
              className="hover:bg-white hover:text-[#610083]"
            >
              {sublink.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <Link href={link.href} className="hover:opacity-70">
      {link.label}
    </Link>
  );
};

export const Navbar: React.FC = () => {
  const [animationParent] = useAutoAnimate();
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const renderedNavLinks = useMemo(
    () =>
      navLinks.map((link, index) => (
        <li key={index} role="listitem">
          <NavLink link={link} />
        </li>
      )),
    []
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    if (isDark) {
      document.body.classList.add('dark');
    }
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('dark');
    const currentTheme = document.body.classList.contains('dark')
      ? 'dark'
      : 'light';
    localStorage.setItem('theme', currentTheme);
    setIsDarkMode(currentTheme === 'dark'); // Update state based on the theme
  };

  return (
    <header className={`${showMenu ? 'active' : ''}`}>
      <nav className="nav-bar">
        {/* Menu hamburger */}
        <button onClick={toggleMenu}>
          <Menu className="fa-solid fa-bars-staggered sidebarOpen" />
        </button>
        {/* Coast Research Technology Logo */}
        <Link href="/" className="logo">
          <Image src="/logoCoast.png" alt="Coast Logo" width={50} height={50} />
          <span>COAST RESEARCH TECHNOLOGY</span>
        </Link>

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
            {renderedNavLinks}
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
