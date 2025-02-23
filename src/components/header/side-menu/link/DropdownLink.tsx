"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Links } from "@/constants/nav-links";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { usePathname } from "next/navigation";

const DropdownLink = (props: Links) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const hasActiveSublink = props.subLinks?.some(
    (section) => section.subMenu?.some((item) => item.href === pathname)
  );

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full group"
        aria-expanded={isOpen}
      >
        <div className={`
          flex items-center justify-between
          font-medium lg:text-3xl text-2xl py-2
          transition-colors duration-300 relative
          ${hasActiveSublink ? "text-dustyBlue tracking-wider" : "text-vintageCream"}
        `}>
          {props.label.toUpperCase()}
          {isOpen ? (
            <HiChevronDown className={hasActiveSublink ? "text-dustyBlue" : "text-vintageCream"} />
          ) : (
            <HiChevronRight className={hasActiveSublink ? "text-dustyBlue" : "text-vintageCream"} />
          )}
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
        {isOpen && props.subLinks && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="mt-2.5 bg-[#1c1c1c] shadow-md rounded-2xl p-4">
              {props.subLinks.map((section, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  {section.header && (
                    <h3 className="text-lg font-semibold mb-2 text-white uppercase">
                      {section.header}
                    </h3>
                  )}
                  {section.subMenu && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {section.subMenu.map((item, i) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={i}
                            href={item.href}
                            className={`
                              flex items-start gap-3 p-2 rounded-lg
                              transition-all duration-300
                              hover:bg-white/5
                              active:bg-white/10
                              text-vintageCream
                              ${isActive ? "bg-white/10" : ""}
                            `}
                            target={item.label === "Shop" ? "_blank" : "_self"}
                          >
                            {item.icon && (
                              <item.icon className="text-lg flex-shrink-0 mt-1" />
                            )}
                            <div>
                              <div className="font-medium">{item.label}</div>
                              {item.caption && (
                                <p className="text-sm text-stone-400">{item.caption}</p>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownLink;