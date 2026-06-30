import React, { ReactNode } from "react";
import { motion, useInView } from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  staggerChildren?: number;
  triggerOnce?: boolean;
  key?: React.Key;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 30,
  className = "",
  staggerChildren = 0,
  triggerOnce = true
}: ScrollRevealProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: triggerOnce, margin: "-100px 0px" });

  if (staggerChildren > 0) {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delay,
        }
      }
    };

    const itemVariants = {
      hidden: { opacity: 0, y: y },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: duration,
          ease: [0.16, 1, 0.3, 1] // Custom ease-out cubic [0.16, 1, 0.3, 1]
        }
      }
    };

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return (
              <motion.div variants={itemVariants}>
                {child}
              </motion.div>
            );
          }
          return child;
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: y }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
