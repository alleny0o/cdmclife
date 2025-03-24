"use client";
import MobileMenu from "./side-menu/MobileMenu";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { ContactButton } from "./ContactButton";

interface TopHeaderProps {
  activeMenu: "main" | "fixed" | null;
  onMenuToggle: () => void;
}

export const TopHeader = ({ activeMenu, onMenuToggle }: TopHeaderProps) => {
  const isActive = activeMenu === "main";

  return (
    <div className="w-full transition-opacity duration-300">
      <div className="grid grid-cols-12 max-w-7xl mx-auto px-8 py-4 items-center">
        <div className="flex col-span-6 md:col-span-2">
          <Logo />
        </div>

        <div className="col-span-8 hidden md:flex justify-center">
          <Navigation />
        </div>

        <div className="flex items-center justify-end md:col-span-2 col-span-6 gap-4">
          <ContactButton />
          <div className="md:hidden mobile-menu">
            <MobileMenu isActive={isActive} setIsActive={onMenuToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};