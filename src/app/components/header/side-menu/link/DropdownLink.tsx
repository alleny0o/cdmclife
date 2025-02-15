import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Links } from "@/app/constants/nav-links";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";
import Image from "next/image";

function DropdownLink(input: Links) {
  const [isOpen, setIsOpen] = useState(false);

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

  // Updated dropdown animation: expand/collapse height
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
      <div
        className="group cursor-pointer w-full flex items-center justify-between text-vintageCream font-medium lg:text-3xl text-2xl lg:px-3 md:px-2 py-2 transition-colors hover:text-dustyBlue"
        onClick={() => setIsOpen(!isOpen)}
      >
        {input.label.toUpperCase()}
        {isOpen ? (
          <TbMinus className="text-vintageCream duration-300 group-hover:text-dustyBlue" />
        ) : (
          <GoPlus className="text-vintageCream duration-300 group-hover:text-dustyBlue" />
        )}
      </div>

      <div
        className={`bg-vintageCream ${
          isOpen ? "bg-[#2b436d] h-[2.5px]" : "bg-vintageCream h-[1px]"
        } w-full`}
      ></div>

      <AnimatePresence mode="wait">
        {isOpen && input.subLinks && (
          <motion.div
            variants={dropdownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            // overflow hidden ensures the content is masked during the height transition
            style={{ overflow: "hidden" }}
            className="bg-stone-300 w-full"
          >
            <div className="px-4 py-3">
              {input.subLinks.map((subLink, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  {subLink.header && (
                    <h3 className="text-lg font-semibold mb-2 text-black">
                      {subLink.header}
                    </h3>
                  )}

                  {subLink.subMenu && (
                    <ul className="space-y-2">
                      {subLink.subMenu.map((menuItem, i) => (
                        <li key={i}>
                          <Link
                            href={menuItem.href}
                            className="block transition-all duration-200"
                          >
                            <div className="font-medium text-black">
                              {menuItem.label}
                            </div>
                            {menuItem.caption && (
                              <p className="text-sm text-stone-700">
                                {menuItem.caption}
                              </p>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {subLink.subImages && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {subLink.subImages.map((imgItem, i) => (
                        <Link
                          href={imgItem.href}
                          key={i}
                          className="block transition-transform duration-200 hover:scale-105"
                        >
                          <Image
                            src={imgItem.image}
                            alt={imgItem.label}
                            width={100}
                            height={100}
                            className="w-full h-auto mb-2 rounded-lg"
                          />
                          <p className="text-sm font-medium text-vintageBurgundy">
                            {imgItem.label}
                          </p>
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
