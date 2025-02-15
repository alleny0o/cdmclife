import MobileMenu from "./side-menu/MobileMenu";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { VisitButton } from "./VisitButton";

interface TopHeaderProps {
    activeMenu: 'main' | 'fixed' | null;
    onMenuToggle: () => void;
  }
  
  export const TopHeader = ({ activeMenu, onMenuToggle }: TopHeaderProps) => (
    <div className="block w-full h-full">
      <div className="grid grid-cols-12 max-w-7xl mx-auto px-8 py-4 items-center">
        <div className="relative flex col-span-6 md:col-span-2">
          <Logo />
        </div>
        <Navigation />
        <div className="relative flex items-center justify-end md:col-span-2 col-span-6">
          <VisitButton />
          <div className="md:hidden relative w-full h-full flex items-center justify-end">
            <MobileMenu 
              isActive={activeMenu === 'main'} 
              setIsActive={onMenuToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );