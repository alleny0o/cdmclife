"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useScroll } from "framer-motion";
import { TopBar } from "./TopBar";
import { TopHeader } from "./TopHeader";
import { FixedHeader } from "./FixedHeader";
import { MegaMenuProvider } from "./context/MegaMenuContext";

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"main" | "fixed" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Lock/unlock body scroll only when menu is manually opened
    document.body.style.overflow = activeMenu ? "hidden" : "auto";
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setActiveMenu(null);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeMenu]);

  useEffect(() => {
    const handleScroll = () => {
      const latest = scrollY.get();
      const isScrollingUp = latest < lastScrollY;
      
      // Only update visibility based on scroll position
      setIsVisible(latest > 150 && isScrollingUp);
      setLastScrollY(latest);
    };

    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  const handleMenuToggle = (menuType: "main" | "fixed") => {
    setActiveMenu((prev) => (prev === menuType ? null : menuType));
  };

  const isTransparent = ["/", "/about", "/worship", "/missions"].includes(pathname);

  return (
    <MegaMenuProvider>
      <header
        className={`z-50 ${
          isTransparent ? "absolute" : "relative bg-deepBlack"
        } top-0 left-0 right-0 flex flex-col justify-center transition-opacity duration-300`}
      >
        <TopBar />
        <TopHeader activeMenu={activeMenu} onMenuToggle={() => handleMenuToggle("main")} />
      </header>
      <FixedHeader 
        isVisible={isVisible} 
        activeMenu={activeMenu} 
        onMenuToggle={() => handleMenuToggle("fixed")} 
      />
    </MegaMenuProvider>
  );
}