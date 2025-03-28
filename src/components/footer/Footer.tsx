"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import Next.js pathname hook
import React from "react";
import { Logo } from "../header/Logo";
import { SOCIAL_MEDIAS } from "@/constants/social-medias";
import { FOOTER_LINKS } from "@/constants/nav-links";
import { Phone } from "lucide-react";
import { MdLocationPin } from "react-icons/md";

function Footer() {
  const pathname = usePathname(); // Get current active route

  return (
    <footer className="bg-deepBlack py-16 relative overflow-hidden">
      {/* Large Christian Cross Background Element */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Full-height vertical beam positioned toward right side */}
        <div className="absolute right-1/4 top-0 bottom-0 w-1.5 bg-white opacity-10"></div>

        {/* Horizontal beam positioned at upper third */}
        <div className="absolute right-0 top-1/3 w-3/4 h-1.5 bg-white opacity-10"></div>

        {/* Subtle radial gradient in bottom right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-white to-transparent opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-20">
          {/* Left Section: Logo, Contact, and Social */}
          <div className="space-y-8">
            <Logo />

            <div className="space-y-6">
              <div>
                <h3 className="text-white text-xs sm:text-sm tracking-wider uppercase mb-2">Our Sanctuary</h3>
                <Link
                  href="https://www.google.com/maps/dir//12811+Glen+Rd,+Gaithersburg,+MD+20878/@39.070793,-77.3474369,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b633ca225da1d1:0xe546426bf399fd2e!2m2!1d-77.265036!2d39.070822?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="text-vintageCream text-xs sm:text-sm font-light transition-all duration-200 hover:opacity-75 active:opacity-50 hover:underline hover:underline-offset-2 hover:decoration-vintageCream/50 inline-flex items-center gap-1.5"
                >
                  <MdLocationPin size={15} className="opacity-50" />
                  12811 Glen Rd, Gaithersburg, MD 20878
                </Link>
              </div>

              <div>
                <h3 className="text-white text-xs sm:text-sm tracking-wider uppercase mb-2">Reach Out</h3>
                <div className="flex flex-col space-y-1">
                  <Link
                    href="tel:13018362098"
                    className="text-vintageCream text-xs sm:text-sm font-light transition-all duration-200 hover:opacity-75 active:opacity-50 inline-flex items-center gap-2"
                  >
                    <Phone size={14} className="opacity-50" />
                    (301) 836-2098
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-5">
              {SOCIAL_MEDIAS.map(({ url, icon: Icon }, index) => (
                <Link
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vintageCream transition-colors hover:text-white"
                  aria-label={`Visit our social media page ${index + 1}`}
                >
                  <Icon className="w-5 h-5 transition-transform duration-200 hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FOOTER_LINKS.map(({ title, links }, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-white text-xs sm:text-sm tracking-wider uppercase">{title}</h3>
                <ul className="space-y-2">
                  {links.map(({ name, path, external = false }, subIndex) => {
                    const isActive = path === "/about" ? pathname.startsWith("/about") : pathname === path;

                    return (
                      <li key={subIndex}>
                        <Link
                          href={path}
                          target={external ? "_blank" : "_self"}
                          rel={external ? "noopener noreferrer" : ""}
                          className={`relative text-vintageCream text-xs sm:text-sm font-light transition-colors hover:text-white
                            ${isActive ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:transition-all" : ""}
                          `}
                        >
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section with Subtle Border */}
        <div className="mt-12 pt-6 border-t-[1px] border-white/30">
          <p className="text-vintageCream text-xs tracking-wide">© {new Date().getFullYear()} CDMC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
