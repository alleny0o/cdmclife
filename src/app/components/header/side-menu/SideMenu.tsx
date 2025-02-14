import Button from "./Button";
import styles from "./SideMenu.module.scss";
import { motion } from "framer-motion";

type SideMenuProps = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
};

function SideMenu({ isActive, setIsActive }: SideMenuProps) {
  return (
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full h-full">
      <div className="relative w-full h-full">
        <motion.div
          className={styles.menu}
          initial={{ height: 35, width: 85, y: -17.5 }}
          animate={{
            height: isActive ? 600 : 35,
            width: isActive ? 475 : 85,
            top: isActive ? "-18px" : 0,
            right: isActive ? "-18px" : 0,
            y: isActive ? -17.5 : -17.5,
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
          style={{
            transformOrigin: "top right",
            borderRadius: 25,
            backgroundColor: "var(--golden-amber)",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 10
          }}
        />
        {/* Position the button behind the menu */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-50" 

        >
          <Button isActive={isActive} setIsActive={setIsActive} />
        </div>
      </div>
    </div>
  );
}

export default SideMenu;