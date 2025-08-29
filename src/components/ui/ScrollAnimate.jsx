import React from "react";
import { motion } from "framer-motion";

/**
 * Universal scroll animation wrapper
 * Props:
 * - children: JSX content to animate
 * - direction: "up" | "down" | "left" | "right" (default "up")
 * - duration: animation duration in seconds (default 0.8)
 * - delay: delay before animation starts (default 0)
 * - className: additional classes for styling
 */
const ScrollAnimate = ({
  children,
  direction = "up",
  duration = 0.5,
  delay = 0,
  className = "",
}) => {
  let initial = {};

  switch (direction) {
    case "up":
      initial = { opacity: 0, y: 50 };
      break;
    case "down":
      initial = { opacity: 0, y: -50 };
      break;
    case "left":
      initial = { opacity: 0, x: 50 };
      break;
    case "right":
      initial = { opacity: 0, x: -50 };
      break;
    default:
      initial = { opacity: 0, y: 50 };
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimate;
