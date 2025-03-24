"use client";
import { type FC, useState } from "react";
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
  const [openSection, setOpenSection] = useState<string | null>(null);
  const primaryLinks = LINKS.filter(link => !link.subLinks);
  const moreLink = LINKS.find(link => link.label === "More");

  // Handle section toggle - only allow one open section at a time
  const handleSectionToggle = (sectionHeader: string) => {
    if (openSection === sectionHeader) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionHeader);
    }
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 8 }
  };

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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-full h-screen bg-deepBlack overflow-y-auto z-[100]"
          >
            <div className="min-h-screen py-28 px-4 sm:px-6">
              <div className="max-w-sm mx-auto">
                {/* Main Navigation section */}
                <div className="border-l-2 border-dustyBlue pl-2 mb-4">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-softWhite text-2xl uppercase tracking-widest mb-0 font-light"
                  >
                    Main Navigation
                  </motion.p>
                </div>
                
                {/* Regular links */}
                <motion.div 
                  className="space-y-0.5 mb-14"
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {primaryLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      transition={{ duration: 0.25 }}
                    >
                      <NavLink link={link} setIsActive={setIsActive} />
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* More section */}
                {(moreLink?.subLinks ?? []).length > 0 && (
                  <>
                    <div className="border-l-2 border-vintageCream pl-2 mb-4">
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="text-softWhite text-2xl uppercase tracking-widest mb-0 font-light"
                      >
                        More
                      </motion.p>
                    </div>
                    <motion.div 
                      className="space-y-0.5"
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {moreLink?.subLinks?.map((section, index) => (
                        <motion.div
                          key={`section-${index}`}
                          variants={itemVariants}
                          transition={{ duration: 0.25, delay: 0.15 + (index * 0.05) }}
                        >
                          <DropdownLink 
                            header={section.header || ""} 
                            subMenu={section.subMenu || []}
                            isOpen={openSection === section.header}
                            onToggle={() => handleSectionToggle(section.header || "")}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;