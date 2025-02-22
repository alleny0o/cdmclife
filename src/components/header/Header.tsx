"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useScroll } from "framer-motion";
import { TopBar } from "./TopBar";
import { TopHeader } from "./TopHeader";
import { FixedHeader } from "./FixedHeader";
import { MegaMenuProvider } from "./context/MegaMenuContext";

export function isTransparentPath(pathname: string): boolean {
  return ["/", "/about", "/worship", "/missions"].includes(pathname);
};

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"main" | "fixed" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle body scroll lock
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

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const latest = scrollY.get();
      const isScrollingUp = latest < lastScrollY;
      
      setIsVisible(latest > 150 && isScrollingUp);
      setLastScrollY(latest);
    };

    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeMenu && !(event.target as Element).closest('.mobile-menu')) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeMenu]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeMenu) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [activeMenu]);

  // Close menu on route change
  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  const handleMenuToggle = (menuType: "main" | "fixed") => {
    setActiveMenu((prev) => {
      // If the same menu is clicked, close it
      if (prev === menuType) {
        return null;
      }
      // If a different menu is clicked, close the current one and open the new one
      return menuType;
    });
  };

  // Determine if header should be transparent
  const isTransparent = isTransparentPath(pathname);

  return (
    <MegaMenuProvider>
      <header
        className={`z-50 ${
          isTransparent ? "absolute" : "relative bg-deepBlack"
        } top-0 left-0 right-0 flex flex-col justify-center transition-opacity duration-300`}
      >
        <TopBar />
        <TopHeader 
          activeMenu={activeMenu} 
          onMenuToggle={() => handleMenuToggle("main")} 
        />
      </header>
      <FixedHeader 
        isVisible={isVisible} 
        activeMenu={activeMenu} 
        onMenuToggle={() => handleMenuToggle("fixed")} 
      />
    </MegaMenuProvider>
  );
}