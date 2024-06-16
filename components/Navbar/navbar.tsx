/** @format */

"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const renderedNavLinks = useMemo(
    () =>
      navLinks.map((link, index) => (
        <NavLink key={index} href={link.href} label={link.label} />
      )),
    []
  );

  return (
    <header>
      <nav className="flex w-full max-w-full items-center justify-between h-[10vh] px-8 bg-background">
        <div className="logo">
          <Image
            src="/coastresearch.svg"
            alt="Coast Research Technology brand logo"
            width={150}
            height={50}
          />
        </div>

        <div className="hidden md:flex items-center gap-6 text-gray-700">
          {renderedNavLinks}
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/login" className="hover:opacity-80 font-semibold">
            Login
          </Link>

          <Link
            className="rounded-md bg-[#500480] px-4 py-2 font-semibold text-center text-[14px] text-background hover:opacity-80"
            href="/register"
          >
            Sign Up
          </Link>
        </div>

        <AnimatePresence>
          {showMenu && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={toggleMenu}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                className="fixed top-0 right-0 w-[80%] h-full transition-all duration-300 ease-in-out flex flex-col items-center rounded-l-xl bg-[#500480] text-white md:hidden z-50 pt-8"
              >
                <section className="my-8 flex flex-col items-center gap-6">
                  {renderedNavLinks}
                </section>
                <hr className="mx-auto w-[80%] border-gray-600" />

                <section className="flex flex-col gap-3 md:gap-6 items-center w-full py-4">
                  <Link
                    href="/login"
                    className="hover:opacity-70 font-semibold"
                  >
                    Login
                  </Link>

                  <Link
                    className="w-[80%] rounded-full bg-Cyan px-6 py-2 font-semibold text-center text-white hover:opacity-50"
                    href="/register"
                  >
                    Sign Up
                  </Link>
                </section>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <button
          ref={animationParent}
          onClick={toggleMenu}
          className="text-4xl md:hidden text-gray-400 relative z-50"
        >
          {showMenu ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </button>
      </nav>
    </header>
  );
};
