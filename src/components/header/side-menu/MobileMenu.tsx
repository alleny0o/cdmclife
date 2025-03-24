"use client";

import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MOBILE_LINKS } from "@/constants/nav-links";
import styles from "./MobileMenu.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";

interface MobileMenuProps {
  isActive: boolean;
  setIsActive: () => void;
}

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
  exit: { opacity: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
};

const MobileMenu: FC<MobileMenuProps> = ({ isActive, setIsActive }) => {
  const pathname = usePathname();
  const hasPast150 = useScrollThreshold();

  return (
    <div className="relative mobile-menu">
      <button onClick={setIsActive} className={styles.button} aria-label="Toggle mobile menu">
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`} />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-full h-screen bg-deepBlack overflow-y-auto z-[100]"
          >
            <div className={`min-h-screen ${hasPast150 ? 'pt-20' : 'pt-32'} pb-28 px-8`}>
              <div className="max-w-md mx-auto">
                {MOBILE_LINKS.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-10">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.05 }}
                      className="border-l-2 border-dustyBlue pl-2 mb-4"
                    >
                      <p className="text-softWhite text-2xl uppercase tracking-widest font-light">{section.header}</p>
                    </motion.div>

                    <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="exit" className="space-y-3">
                      {section.subMenu.map((item, itemIndex) => {
                        const isActiveLink = 
                          item.href === '/' 
                            ? pathname === '/' 
                            : pathname.startsWith(item.href);
                        return (
                          <motion.div
                            key={itemIndex}
                            variants={itemVariants}
                            transition={{ duration: 0.25, delay: itemIndex * 0.03 }}
                            className={`px-2 py-1.5 rounded-md transition hover:bg-white hover:bg-opacity-10 ${
                              isActiveLink ? "bg-white bg-opacity-10" : ""
                            }`}
                          >
                            <Link
                              href={item.href}
                              target={item.external ? "_blank" : "_self"}
                              rel={item.external ? "noopener noreferrer" : undefined}
                              onClick={setIsActive}
                              className={`flex items-center space-x-4 text-left text-softWhite ${
                                isActiveLink ? "font-semibold text-white" : ""
                              }`}
                            >
                              {item.icon && (
                                <span className="text-xl">
                                  <item.icon />
                                </span>
                              )}
                              <span className="flex flex-col">
                                <span className="text-base">{item.label}</span>
                                {item.caption && <span className="text-sm font-light text-gray-400">{item.caption}</span>}
                              </span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;