"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { TopBar } from "./TopBar";
import { TopHeader } from "./TopHeader";
import { FixedHeader } from "./FixedHeader";

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'main' | 'fixed' | null>(null);
  
  useEffect(() => {
    document.body.style.overflow = activeMenu ? "hidden" : "auto";
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setActiveMenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeMenu]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const isScrollingUp = latest < previous;
    
    if (latest > 150 && (isScrollingUp || activeMenu)) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const handleMenuToggle = (menuType: 'main' | 'fixed') => {
    if (window.scrollY > 150) {
      setActiveMenu(activeMenu === "fixed" ? null : "fixed");
    } else {
      setActiveMenu(activeMenu === menuType ? null : menuType);
    }
  };

  return (
    <>
      <header className={`z-50 ${pathname === "/" ? "absolute" : "relative bg-deepBlack"} top-0 left-0 right-0 flex flex-col justify-center transition-opacity duration-300`}>
        <TopBar />
        <TopHeader activeMenu={activeMenu} onMenuToggle={() => handleMenuToggle("main")} />
      </header>
      <FixedHeader isVisible={isVisible} activeMenu={activeMenu} onMenuToggle={() => handleMenuToggle("fixed")} />
    </>
  );
}
