"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yellowX = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const blueX = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yellowXRight = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const blueXRight = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const purple = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const purpleXRight = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const familyX = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const cityX = useTransform(scrollYProgress, [0, 1], [0, -100]);


  return (
    <section ref={ref}>
      <div className="text-center z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to add insurance <br />
          to your customer
          <br /> journeys?
        </h1>
        <button className="relative overflow-hidden border px-6 py-2 text-md cursor-pointer border-white group bg-white mt-4 sm:mt-6">
          <span className="relative font-semibold z-10 text-[#0A0842] transition-opacity duration-300 group-hover:opacity-0">
            Let’s Connect
          </span>

          <span
            className="absolute left-0 top-0 w-full h-full flex items-center justify-center font-semibold
        opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 text-[#0A0842]"
          >
            Let’s Connect
          </span>

          <span
            className="absolute inset-0 bg-gray-300 transform scale-x-0 group-hover:scale-x-100 
        origin-left transition-transform duration-600 ease-out group-hover:bg-gray-300 text-[#0A0842]"
          ></span>
        </button>
      </div>

      <img
        src="/assets/ship.jpeg"
        className="absolute left-20 top-1/4 w-60 h-60 z-0"
      />

      <motion.img
        src="/assets/selfie.jpg"
        style={{ x: familyX }}
        className="absolute right-20 top-20 w-50 h-50 z-10"
      />

      <motion.img
        src="/assets/city.jpg"
        style={{ x: cityX }}
        className="absolute right-10 bottom-10 w-30 h-30 z-0"
      />

      <motion.div
        style={{ x: yellowX }}
        className="absolute -left-80 top-3/4 w-100 h-8 bg-yellow-300"
      />

      <motion.div
        style={{ x: blueX }}
        className="absolute -left-100 top-[20%] w-100 h-15 bg-cyan-200"
      />

      <motion.div
        style={{ x: yellowXRight }}
        className="absolute -right-20 top-[35%] w-48 h-8 bg-yellow-300 z-20"
      />

      <motion.div
        style={{ x: blueXRight }}
        className="absolute right-50 top-[42%] w-60 h-16 bg-cyan-200"
      />
      <motion.div
        style={{ x: purple }}
        className="absolute left-120 top-[60%] w-25 h-25 bg-gray-600"
      />

      <motion.div
        style={{ x: purpleXRight }}
        className="absolute right-100 top-[75%] w-25 h-25 bg-gray-600 z-20"
      />
    </section>
  );
}
