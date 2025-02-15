import styles from "./MobileMenu.module.scss";
import { links } from "@/app/constants/nav-links";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./link/NavLink";

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
      }
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
        delay: 0.5,
      }
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
    <>
      {/* Burger Button - Remains in Flow */}
      <div onClick={() => setIsActive(!isActive)} className={styles.button}>
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
      </div>

      {/* Animated Menu - Absolute and Below Button Initially */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`fixed origin-top left-0 top-0 w-full h-screen bg-deepBlack ${
              isActive ? "z-10 pointer-events-auto" : "z-[-1] pointer-events-none"
            }`}
          >
            <motion.div variants={containerVariants} initial="initial" animate="open" exit="initial" className="flex flex-col h-full justify-center items-center">
              {links.map((link, index) => (
                <div key={index} className="overflow-hidden">
                  <NavLink {...link} />
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;


