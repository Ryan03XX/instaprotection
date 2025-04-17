"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function FadeInOnceFromHorizon({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, controls]);

  return (
    <motion.div
  ref={ref}
  initial="hidden"
  animate={hasAnimated ? "visible" : controls}
  transition={{
    duration: 1,
    ease: [0.5, 1, 0.5, 1],
  }}
  style={{ position: "relative" }} 
  variants={{
    hidden: {
      opacity: 0,
      y: 40, 
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }}
>
  {children}
</motion.div>

  );
}
