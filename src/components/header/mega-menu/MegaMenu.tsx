"use client";

import { Links, links } from "@/constants/nav-links";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMegaMenu } from "../context/MegaMenuContext";

type MegaMenuProps = {
  activeMegaMenu: Links["id"] | null;
};

function MegaMenu(input: MegaMenuProps) {
  const { megaMenuColor, setMegaMenuColor } = useMegaMenu();
  const activeMenu = input.activeMegaMenu !== null ? links[input.activeMegaMenu - 1] : null;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setMegaMenuColor("white");
      } else {
        setMegaMenuColor("clear");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setMegaMenuColor]);

  const menuVariants = {
    initial: { 
      opacity: 0,
      y: 10,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      y: -10,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <AnimatePresence mode="wait">
      {activeMenu && (
        <motion.div
          id="overlay-content"
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`absolute z-50 right-0 left-0 top-[calc(100%)] ${
            megaMenuColor === "clear"
              ? "bg-[rgba(62,62,62,0.05)] backdrop-blur-[17px] border border-[rgba(255,255,255,0.18)] !border-l-0 !border-r-0"
              : "bg-white border border-gray-200 shadow-lg"
          } p-6 transition-all duration-300`}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-4">
            {activeMenu.subLinks?.map((section, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex flex-col space-y-2"
              >
                <h3
                  className={`text-base font-semibold mb-2 uppercase transition-colors duration-200 ${
                    megaMenuColor === "white" ? "text-gray-800" : "text-white/90"
                  }`}
                >
                  {section.header}
                </h3>
                <div className="flex flex-col space-y-2">
                  {section.subMenu?.map((item, subIndex) => (
                    <Link
                      key={subIndex}
                      href={item.href}
                      target={item.label === "Shop" ? "_blank" : "_self"}
                      className={`flex items-start space-x-3 p-2 rounded-[10px] transition-all duration-200 
                      ${
                        megaMenuColor === "white"
                          ? "hover:bg-gray-100 active:bg-gray-200"
                          : "hover:bg-[rgba(255,255,255,0.2)] active:bg-[rgba(255,255,255,0.2)]"
                      }`}
                    >
                      {item.icon && (
                        <span
                          className={`mt-0.5 transition-colors duration-200 ${
                            megaMenuColor === "white" ? "text-gray-600" : "text-white/80"
                          }`}
                        >
                          {React.createElement(item.icon)}
                        </span>
                      )}

                      <div>
                        <span
                          className={`block text-sm font-medium transition-colors duration-200 ${
                            megaMenuColor === "white" ? "text-gray-900" : "text-white/90"
                          }`}
                        >
                          {item.label}
                        </span>

                        {item.caption && (
                          <span
                            className={`block text-xs transition-colors duration-200 ${
                              megaMenuColor === "white" ? "text-gray-500" : "text-white/70"
                            }`}
                          >
                            {item.caption}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MegaMenu;