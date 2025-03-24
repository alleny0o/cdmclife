"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { SubMenu } from "@/constants/nav-links";

type DropdownLinkProps = {
  header: string;
  subMenu: SubMenu[];
  isOpen: boolean;
  onToggle: () => void;
};

const DropdownLink = ({ header, subMenu, isOpen, onToggle }: DropdownLinkProps) => {
  const pathname = usePathname();
  const hasActiveSublink = subMenu?.some(item => item.href === pathname);

  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className="w-full group"
        aria-expanded={isOpen}
      >
        <div className={`
          flex items-center justify-between
          font-medium text-xl sm:text-base lg:text-lg py-2
          transition-colors duration-300 relative
          ${hasActiveSublink ? "text-dustyBlue tracking-wider" : "text-vintageCream"}
        `}>
          {header.toUpperCase()}
          <span className="transition-transform duration-300 ml-1">
            {isOpen ? (
              <HiChevronDown className={`${hasActiveSublink ? "text-dustyBlue" : "text-vintageCream"} text-sm`} />
            ) : (
              <HiChevronRight className={`${hasActiveSublink ? "text-dustyBlue" : "text-vintageCream"} text-sm`} />
            )}
          </span>
          <span className={`
            absolute -bottom-1 left-0 w-0 h-[1px] 
            transition-all duration-300 ease-in-out
            group-hover:w-full
            ${isOpen ? "w-full" : ""} 
            ${hasActiveSublink ? "bg-dustyBlue w-full" : "bg-vintageCream"}
          `}/>
        </div>
        <div className={`
          h-[1px] w-full transition-colors duration-300
          ${hasActiveSublink ? "bg-dustyBlue" : "bg-vintageCream"}
        `}/>
      </button>

      <AnimatePresence>
        {isOpen && subMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 bg-[#1c1c1c] shadow-md rounded-lg p-2">
              {subMenu.length > 8 ? (
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                  {subMenu.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={i}
                        href={item.href}
                        target={item.external ? "_blank" : "_self"}
                        className={`
                          flex items-start gap-1.5 p-1.5 rounded-md
                          transition-all duration-300
                          hover:bg-white/5
                          active:bg-white/10
                          text-vintageCream
                          ${isActive ? "bg-white/10" : ""}
                        `}
                      >
                        {item.icon && (
                          <item.icon className="text-xs flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <div className="font-medium text-base">{item.label}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-0.5">
                  {subMenu.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={i}
                        href={item.href}
                        target={item.external ? "_blank" : "_self"}
                        className={`
                          flex items-start gap-1.5 p-1.5 rounded-md
                          transition-all duration-300
                          hover:bg-white/5
                          active:bg-white/10
                          text-vintageCream
                          ${isActive ? "bg-white/10" : ""}
                        `}
                      >
                        {item.icon && (
                          <item.icon className="text-lg flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <div className="font-medium sm:text-sm text-base">{item.label}</div>
                          {item.caption && (
                            <p className="sm:text-xs text-sm text-stone-400 opacity-75">{item.caption}</p>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownLink;