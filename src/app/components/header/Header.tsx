"use client";

import { MdLocationPin } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { SOCIAL_MEDIAS } from "@/app/constants/social-medias";
import Link from "next/link";
import Image from "next/image";
import { links } from "../../constants/nav-links";
import { BiChevronDown } from "react-icons/bi";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Button from "./side-menu/Button";
import SideMenu from "./side-menu/SideMenu";

function Header() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSideMenuActive, setIsSideMenuActive] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isSideMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSideMenuActive]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const newDirection = latest > previous ? "down" : "up";

    if (latest <= 150) {
      setIsVisible(false);
    } else {
      setIsVisible(newDirection === "up");
    }

    // Close side menu when scrolling down
    if (newDirection === "down" && isSideMenuActive) {
      setIsSideMenuActive(false);
    }
  });

  // Determine which menu should be shown
  const showFixedMenu = mounted && isVisible;

  return (
    <>
      {/* Absolute (Main) Header */}
      <header className="z-10 absolute top-0 left-0 right-0 flex flex-col justify-center transition-opacity duration-300">
        {/* Top Header */}
        <div className="block w-full h-full border-b-[1px] border-white/10">
          <div className="grid w-full grid-cols-12 px-2 max-w-7xl mx-auto">
            <div className="flex items-center gap-x-1 col-span-9">
              <MdLocationPin className="text-lg text-softWhite" />
              <span className="sm:text-sm text-[12px] text-softWhite">
                12811 Glen Rd, Gaithersburg, MD 20878
              </span>
            </div>
            <div className="flex justify-end items-center col-span-3">
              <div className="inline-block">
                <div className="flex">
                  {SOCIAL_MEDIAS.map((socialMedia, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center sm:h-12 sm:w-12 w-10 h-10 border-l-[1px] border-white/10 hover:bg-warmGray cursor-pointer"
                    >
                      <Link href={socialMedia.url} target="_blank">
                        {socialMedia.icon({
                          className: "text-2xl text-softWhite",
                        })}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Header */}
        <div className="block w-full h-full">
          <div className="grid grid-cols-12 max-w-7xl mx-auto px-8 py-4 items-center">
            {/* Logo */}
            <div className="relative flex col-span-6 lg:col-span-2">
              <Link href="/">
                <Image
                  src="/logo.jpg"
                  alt="CDMC"
                  width={50}
                  height={50}
                  className="h-16 w-16 object-cover rounded-lg"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-center items-center col-span-8 gap-6">
              {links.map((link, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={link.href}
                    onClick={(e) => link.subLinks && e.preventDefault()}
                    className="flex items-center text-softWhite font-medium px-3 py-2 transition-colors hover:text-dustyBlue"
                  >
                    {link.label.toUpperCase()}
                    {link.subLinks && <BiChevronDown className="ml-1 w-4 h-4" />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Mobile Navigation & Button */}
            <div className="relative flex items-center justify-end lg:col-span-2 col-span-6">
              <button
                className="hidden lg:block py-2 px-5 uppercase bg-buttonBlue text-softWhite font-semibold rounded-sm shadow transition duration-300 hover:bg-hoverButtonBlue hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sageGreen"
                aria-label="Visit Us"
              >
                VISIT US
              </button>
              {/* Only show SideMenu when fixed header is not visible */}
              {!showFixedMenu && (
                <div className="lg:hidden relative w-full h-full">
                  <SideMenu isActive={isSideMenuActive} setIsActive={setIsSideMenuActive} />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Fixed Navbar with Global Colors */}
      {showFixedMenu && (
        <motion.header
          initial={{ y: "-100%" }}
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="z-30 fixed top-0 flex w-full h-24 bg-slate-800/95 backdrop-blur-sm items-center shadow-lg"
        >
          <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-12 items-center">
            {/* Logo */}
            <div className="flex col-span-6 lg:col-span-2">
              <Link href="/" aria-label="Home">
                <Image
                  src="/logo.jpg"
                  alt="CDMC Logo"
                  width={50}
                  height={50}
                  className="h-16 w-16 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-center items-center col-span-8 gap-6">
              {links.map((link, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={link.href}
                    onClick={(e) => link.subLinks && e.preventDefault()}
                    aria-label={link.label}
                    className="flex items-center text-softWhite font-medium px-3 py-2 transition-colors duration-200 hover:text-dustyBlue"
                  >
                    {link.label.toUpperCase()}
                    {link.subLinks && <BiChevronDown className="ml-1 w-4 h-4" />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Button */}
            <div className="flex items-center justify-end lg:col-span-2 col-span-6">
              <button
                className="hidden lg:block py-2 px-5 uppercase bg-buttonBlue text-softWhite font-semibold rounded-sm shadow transition duration-300 hover:bg-hoverButtonBlue hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sageGreen"
                aria-label="Visit Us"
              >
                VISIT US
              </button>
              <div className="lg:hidden relative w-full h-full">
                <SideMenu isActive={isSideMenuActive} setIsActive={setIsSideMenuActive} />
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </>
  );
}

export default Header;
