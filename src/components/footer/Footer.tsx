"use client";

import Link from "next/link";
import React from "react";
import { Logo } from "../header/Logo";
import { SOCIAL_MEDIAS } from "@/constants/social-medias";
import { FOOTER_LINKS } from "@/constants/nav-links";

function Footer() {
  return (
    <footer className="bg-deepBlack py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-20">
          {/* Left Section: Logo, Contact, and Social */}
          <div className="space-y-8">
            <Logo />
            
            <div className="space-y-6">
              <div>
                <p className="text-white text-sm font-bold mb-2">Address</p>
                <p className="text-vintageCream text-sm">
                  12811 Glen Rd, Gaithersburg, MD 20878
                </p>
              </div>
              
              <div>
                <p className="text-white text-sm font-bold mb-2">Contact</p>
                <div className="space-y-1">
                  <Link
                    href="tel:13018362098"
                    className="text-vintageCream text-sm hover:text-vintageCream/80 transition-colors block"
                  >
                    (301) 836-2098
                  </Link>
                  <Link
                    href="mailto:info@cdmc.io"
                    className="text-vintageCream text-sm hover:text-vintageCream/80 transition-colors block"
                  >
                    info@cdmc.io
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {SOCIAL_MEDIAS.map(({ url, icon: Icon }, index) => (
                <Link 
                  key={index} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-vintageCream hover:text-vintageCream/70 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FOOTER_LINKS.map(({ title, links }, index) => (
              <div key={index} className="space-y-3">
                <p className="text-white text-sm font-bold">{title}</p>
                <ul className="space-y-2">
                  {links.map(({ name, path, external = false }, subIndex) => (
                    <li key={subIndex}>
                      {external ? (
                        <Link
                          href={path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-vintageCream text-sm hover:text-vintageCream/80 transition-colors"
                        >
                          {name}
                        </Link>
                      ) : (
                        <Link 
                          href={path}
                          className="text-vintageCream text-sm hover:text-vintageCream/80 transition-colors"
                        >
                          {name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-vintageCream">
          <p className="text-vintageCream text-sm">
            © {new Date().getFullYear()} CDMC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;