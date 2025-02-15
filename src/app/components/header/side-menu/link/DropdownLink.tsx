"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Links } from "@/app/constants/nav-links";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";
import Image from "next/image";
import { usePathname } from "next/navigation";

function DropdownLink(input: Links) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const hasActiveSublink = input.subLinks?.some((section) => section.subMenu?.some((item) => item.href === pathname));

  const containerVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const dropdownVariants = {
    initial: { height: 0, opacity: 0 },
    animate: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.8, ease: "easeOut" },
        opacity: { duration: 0.2 },
      },
    },
    exit: {
      height: 0,
      transition: {
        height: { duration: 0.8, ease: "easeIn" },
      },
    },
  };

  return (
    <motion.div variants={containerVariants} className="w-full">
      <div className="group cursor-pointer w-full relative" onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`
          flex items-center justify-between
          font-medium lg:text-3xl text-2xl lg:px-3 md:px-2 py-2
          transition-all duration-300
          ${hasActiveSublink ? "text-dustyBlue tracking-wider" : "text-vintageCream"}
        `}
        >
          {input.label.toUpperCase()}
          {isOpen ? (
            <TbMinus className={`duration-300 ${hasActiveSublink ? "text-dustyBlue" : "text-vintageCream"}`} />
          ) : (
            <GoPlus className={`duration-300 ${hasActiveSublink ? "text-dustyBlue" : "text-vintageCream"}`} />
          )}
        </div>
        <span
          className={`
            absolute -bottom-1 left-0 h-[1px] bg-vintageCream
            ${isOpen ? "w-full transition-[width] duration-300 ease-in-out" : "w-0 transition-all duration-300 ease-in-out"}
            ${hasActiveSublink ? "w-full bg-dustyBlue" : ""}
          `}
        />
      </div>

      <div className={`h-[1px] w-full ${hasActiveSublink ? "bg-dustyBlue" : "bg-vintageCream"}`} />

      <AnimatePresence mode="wait">
        {isOpen && input.subLinks && (
          <motion.div
            variants={dropdownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ overflow: "hidden" }}
            className="mt-2.5 bg-[#1c1c1c] shadow-md rounded-2xl w-full"
          >
            <div className="px-4 py-5">
              {input.subLinks.map((subLink, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  {subLink.header && <h3 className="text-lg font-semibold mb-2 text-white uppercase">{subLink.header}</h3>}

                  {subLink.subMenu && (
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                      {subLink.subMenu.map((menuItem, i) => {
                        const isActiveSublink = pathname === menuItem.href;
                        return (
                          <motion.div
                            key={i}
                            className="relative flex items-start space-x-3 group/item"
                            whileHover={{ scale: 1.02, x: 5 }} // Slight scale-up on hover
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <motion.div
                              className="mt-1"
                              whileHover={{ scale: 1.2, rotate: 3 }} // Rotate and scale-up effect on icon
                              transition={{ duration: 0.2 }}
                            >
                              {menuItem.icon && <menuItem.icon className="text-vintageCream text-lg" />}
                            </motion.div>

                            <Link
                              href={menuItem.href}
                              className={`block transition-all duration-300 relative ${
                                isActiveSublink ? "text-dustyBlue" : "text-vintageCream"
                              }`}
                            >
                              <div>
                                <div className="font-medium">{menuItem.label}</div>
                              </div>
                              {menuItem.caption && <p className="text-wrap text-sm text-stone-400">{menuItem.caption}</p>}

                              {/* Underline animation */}
                              <motion.span
                                className="absolute bottom-0 left-0 w-0 h-[1px] bg-dustyBlue"
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                              />
                            </Link>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}

                  {subLink.subImages && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {subLink.subImages.map((imgItem, i) => (
                        <Link href={imgItem.href} key={i} className="block transition-transform duration-200 hover:scale-105">
                          <Image
                            src={imgItem.image}
                            alt={imgItem.label}
                            width={100}
                            height={100}
                            className="w-full h-auto mb-2 rounded-lg"
                          />
                          <p className="text-sm font-medium text-vintageBurgundy">{imgItem.label}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default DropdownLink;
