import styles from "./Button.module.scss";
import { motion } from "framer-motion";

type ButtonProps = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
};

function Button(input: ButtonProps) {
  return (
    <div onClick={() => input.setIsActive(!input.isActive)} className={styles.button}>
      <motion.div 
        className={styles.slider}
        animate={{ top: input.isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
      >
        <div className={styles.el}>
          <PerspectiveText label="Menu" />
        </div>
        <div className={styles.el}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

export default Button;

type PerspectiveTextProps = {
  label: string;
};

function PerspectiveText(input: PerspectiveTextProps) {
  return (
    <div className={styles.perspectiveText}>
      <p>{input.label}</p>
      <p>{input.label}</p>
    </div>
  );

};
