import { useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export const useScrollThreshold = (threshold = 150) => {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setHasScrolled(latest > threshold);
    });
  }, [scrollY, threshold]);

  return hasScrolled;
};