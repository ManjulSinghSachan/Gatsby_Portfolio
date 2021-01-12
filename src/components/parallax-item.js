import React from "react";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion";

export default function ParallaxItem({
  children,
  className,
  range = 0.2
}) {
  const { scrollY } = useViewportScroll();

  const springConfig = {
    damping: 100,
    stiffness: 100,
    mass: 3
  };

  const y = useSpring(
    useTransform(
      scrollY,
      [0, 500],
      ["0%", `${-range * 100}%`]
    ),
    springConfig
  );

  return (
    <div className={className}>
      <motion.div initial={{ y: 0 }} style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
