"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function FadeInOutOnScroll({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // 持续监听是否在视口内

  useEffect(() => {
    if (isInView) {
      controls.start("visible");  // 入场动画
    } else {
      controls.start("exit");     // 退场动画
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      variants={{
        hidden: {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        exit: {
          opacity: 0,
          y: -40,     
          scale: 0.9,
          transition: {
            duration: 0.5,
            ease: "easeIn",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
