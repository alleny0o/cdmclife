"use client";
import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useScroll } from "framer-motion";
import { TopBar } from "./TopBar";
import { TopHeader } from "./TopHeader";
import { FixedHeader } from "./FixedHeader";
import { MegaMenuProvider } from "./context/MegaMenuContext";

export function isTransparentPath(pathname: string): boolean {
  return ["/", "/about", "/worship", "/missions"].includes(pathname);
}

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"main" | "fixed" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle body scroll lock - optimized with useCallback
  useEffect(() => {
    document.body.style.overflow = activeMenu ? "hidden" : "auto";
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setActiveMenu(null);
      }
    };
    
    // Add passive flag for better performance
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [activeMenu]);

  // Memoize scroll handler with useCallback
  const handleScroll = useCallback(() => {
    // Use requestAnimationFrame to throttle scroll events
    requestAnimationFrame(() => {
      const latest = scrollY.get();
      const isScrollingUp = latest < lastScrollY;
      
      // Only update state if there's a significant change
      if (Math.abs(latest - lastScrollY) > 5) {
        setIsVisible(latest > 150 && isScrollingUp);
        setLastScrollY(latest);
      }
    });
  }, [scrollY, lastScrollY]);

  // Optimized scroll behavior
  useEffect(() => {
    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY, handleScroll]);

  // Handle click outside - memoized with useCallback
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (activeMenu && !(event.target as Element).closest('.mobile-menu')) {
      setActiveMenu(null);
    }
  }, [activeMenu]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  // Handle escape key - memoized with useCallback
  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && activeMenu) {
      setActiveMenu(null);
    }
  }, [activeMenu]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handleEscape]);

  // Close menu on route change
  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  // Memoized menu toggle handler
  const handleMenuToggle = useCallback((menuType: "main" | "fixed") => {
    setActiveMenu((prev) => prev === menuType ? null : menuType);
  }, []);

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