// Menu.tsx
import styles from "./MobileMenu.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./link/NavLink";
import DropdownLink from "./link/DropdownLink";
import { links } from "@/app/constants/nav-links";

type MenuProps = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
};

function Menu({ isActive, setIsActive }: MenuProps) {
  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
        delay: 0.5,
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className="relative">
      <div onClick={() => setIsActive(!isActive)} className={styles.button}>
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-deepBlack overflow-y-auto z-[100]"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              transformOrigin: 'top'
            }}
          >
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="open"
              exit="initial"
              className="py-24 min-h-screen flex flex-col items-center"
            >
              <div className="w-[80%] max-w-lg space-y-2">
                {links.map((link, index) => (
                  <div key={index} className="relative">
                    {link.subLinks ? <DropdownLink {...link} /> : <NavLink {...link} />}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;