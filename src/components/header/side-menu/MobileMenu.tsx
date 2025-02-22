"use client";
import { type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./link/NavLink";
import DropdownLink from "./link/DropdownLink";
import { LINKS } from "@/constants/nav-links";
import styles from "./MobileMenu.module.scss";

interface MobileMenuProps {
  isActive: boolean;
  setIsActive: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isActive, setIsActive }) => {
  return (
    <div className="relative mobile-menu">
      <button 
        onClick={setIsActive}
        className={styles.button}
        aria-label="Toggle mobile menu"
      >
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`} />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-screen bg-deepBlack overflow-y-auto z-[100]"
          >
            <div className="min-h-screen py-24 px-8">
              <div className="max-w-lg mx-auto space-y-2">
                {LINKS.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.subLinks ? (
                      <DropdownLink {...link} />
                    ) : (
                      <NavLink link={link} setIsActive={setIsActive} />
                    )}
                  </motion.div>
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