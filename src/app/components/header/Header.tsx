"use client";

import React, { useState, useEffect } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { TopBar } from "./TopBar";
import { TopHeader } from "./TopHeader";
import { FixedHeader } from "./FixedHeader";

export default function Header() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'main' | 'fixed' | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeMenu ? "hidden" : "auto";
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeMenu]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const newDirection = latest > previous ? "down" : "up";

    if (activeMenu) {
      setIsVisible(true);
      return;
    }

    if (latest <= 150) {
      setIsVisible(false);
    } else {
      setIsVisible(newDirection === "up");
    }

    if (newDirection === "down" && activeMenu) {
      setActiveMenu(null);
    }
  });

  const handleMenuToggle = (menuType: 'main' | 'fixed') => {
    if (window.scrollY > 150) {
      setActiveMenu(activeMenu === 'fixed' ? null : 'fixed');
    } else {
      setActiveMenu(activeMenu === menuType ? null : menuType);
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="z-10 absolute top-0 left-0 right-0 flex flex-col justify-center transition-opacity duration-300">
        <TopBar />
        <TopHeader 
          activeMenu={activeMenu}
          onMenuToggle={() => handleMenuToggle('main')}
        />
      </header>

      <FixedHeader 
        isVisible={isVisible}
        activeMenu={activeMenu}
        onMenuToggle={() => handleMenuToggle('fixed')}
      />
    </>
  );
}