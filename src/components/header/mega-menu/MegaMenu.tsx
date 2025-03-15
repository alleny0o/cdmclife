"use client";

import { Links, LINKS } from "@/constants/nav-links";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useCallback, useMemo } from "react";
import { useMegaMenu } from "../context/MegaMenuContext";
import { usePathname } from "next/navigation";
import { isTransparentPath } from "../Header";

type MegaMenuProps = {
  activeMegaMenu: Links["id"] | null;
  setActiveMegaMenu: (val: Links["id"] | null) => void;
};

function MegaMenu(input: MegaMenuProps) {
  const pathname = usePathname();
  const { megaMenuColor, setMegaMenuColor } = useMegaMenu();
  const activeMenu = input.activeMegaMenu !== null ? LINKS[input.activeMegaMenu - 1] : null;
  const isTransparent = isTransparentPath(pathname);

  // Memoize scroll handler for better performance
  const handleScroll = useCallback(() => {
    // Use requestAnimationFrame to throttle scroll events
    requestAnimationFrame(() => {
      const scrollPosition = window.scrollY;
      setMegaMenuColor(scrollPosition > 150 ? "white" : "clear");
    });
  }, [setMegaMenuColor]);

  useEffect(() => {
    // Add passive flag for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initialize color on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Memoize animations to prevent recreating them on each render
  const menuVariants = useMemo(() => ({
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
  }), []);

  const itemVariants = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  }), []);

  // Memoize background class determination
  const backgroundClass = useMemo(() => 
    (megaMenuColor === "clear" && isTransparent)
      ? "bg-[rgba(62,62,62,0.05)] backdrop-blur-[17px] border border-[rgba(255,255,255,0.18)] !border-l-0 !border-r-0"
      : "bg-white border border-gray-200 shadow-lg",
    [megaMenuColor, isTransparent]
  );

  // Helper function for text color determination
  const getTextColorClasses = useCallback((baseClass: string, activeClass: string) => {
    return (megaMenuColor === "white" || !isTransparent) 
      ? baseClass 
      : activeClass;
  }, [megaMenuColor, isTransparent]);

  // Early return if no active menu to avoid unnecessary computation
  if (!activeMenu) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {activeMenu && (
        <motion.div
          id="overlay-content"
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`absolute z-50 right-0 left-0 top-[calc(100%)] ${backgroundClass} p-6 transition-all duration-300`}
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
                    getTextColorClasses("text-gray-800", "text-white/90")
                  }`}
                >
                  {section.header}
                </h3>
                <div className="flex flex-col space-y-2">
                  {section.subMenu?.map((item, subIndex) => {
                    const isActive = pathname === item.href;
                    
                    // Compute background classes once for reuse
                    const bgClasses = isActive
                      ? getTextColorClasses("bg-gray-100", "bg-[rgba(255,255,255,0.2)]")
                      : getTextColorClasses(
                          "hover:bg-gray-100 active:bg-gray-200", 
                          "hover:bg-[rgba(255,255,255,0.2)] active:bg-[rgba(255,255,255,0.2)]"
                        );
                      
                    return (
                      <Link
                        key={subIndex}
                        href={item.href}
                        onClick={() => input.setActiveMegaMenu(null)}
                        target={item.label === "Shop" ? "_blank" : "_self"}
                        className={`flex items-start space-x-3 p-2 rounded-[10px] transition-all duration-200 ${bgClasses}`}
                      >
                        {item.icon && (
                          <span
                            className={`mt-0.5 transition-colors duration-200 ${
                              getTextColorClasses(
                                `text-gray-600 ${isActive ? "text-gray-800" : ""}`,
                                `text-white/80 ${isActive ? "text-white" : ""}`
                              )
                            }`}
                          >
                            {React.createElement(item.icon)}
                          </span>
                        )}

                        <div>
                          <span
                            className={`block text-sm font-medium transition-colors duration-200 ${
                              getTextColorClasses(
                                `text-gray-900 ${isActive ? "font-semibold" : ""}`,
                                `text-white/90 ${isActive ? "text-white font-semibold" : ""}`
                              )
                            }`}
                          >
                            {item.label}
                          </span>

                          {item.caption && (
                            <span
                              className={`block text-xs transition-colors duration-200 ${
                                getTextColorClasses(
                                  `text-gray-500 ${isActive ? "text-gray-700" : ""}`,
                                  `text-white/70 ${isActive ? "text-white/90" : ""}`
                                )
                              }`}
                            >
                              {item.caption}
                            </span>
                          )}
                        </div>
                      </Link>
                    );
                  })}
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