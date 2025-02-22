"use client";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { VisitButton } from "./VisitButton";
import MobileMenu from "./side-menu/MobileMenu";

interface FixedHeaderProps {
  isVisible: boolean;
  activeMenu: "main" | "fixed" | null;
  onMenuToggle: () => void;
}

export const FixedHeader = ({ isVisible, activeMenu, onMenuToggle }: FixedHeaderProps) => {
  const isActive = activeMenu === "fixed";

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={isVisible || isActive ? { y: 0 } : { y: "-100%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="z-20 fixed top-0 flex w-full md:h-28 h-24 bg-deepBlack items-center shadow-lg border-b border-white/10"
      >
      <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-12 items-center">
        <div className="flex col-span-6 md:col-span-2">
          <Logo />
        </div>
        <Navigation />
        <div className="flex items-center justify-end md:col-span-2 col-span-6">
          <VisitButton />
          <div className="md:hidden relative w-full h-full flex items-center justify-end mobile-menu">
            <MobileMenu 
              isActive={isActive}
              setIsActive={onMenuToggle}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};