"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function SunRiseFromLine({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <div
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : controls}
        transition={{
          duration: 1.0,
          ease: [0.42, 0, 0.58, 1],
        }}
        variants={{
          hidden: {
            y: "100%",
            opacity: 0,
          },
          visible: {
            y: "0%",
            opacity: 1,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
