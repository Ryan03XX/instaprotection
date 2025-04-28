"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sub } from "framer-motion/client";
import Image from "next/image";

const menuItems = [
  {
    title: "Mobile Devices",
    subtitle: "Reliable protection for mobile devices",
    description:
      "Offer comprehensive coverage and fast, dependable repairs or replacements, ensuring customers always have the devices they rely on, with 24/7 support and a streamlined claims process for a stress-free experience.",
    image: "/assets/mobile.jpg",
  },
  {
    title: "Health Tech",
    subtitle: "Comprehensive protection for health tech",
    description:
      "Provide tailored insurance coverage for essential health tech devices like hearing aids and eyewear, enhancing customer loyalty through seamless service and long-term protection.",
    image: "/assets/healtech.jpg",
  },
  {
    title: "Home",
    subtitle: "Holistic protection for modern homes",
    description:
      "Offer comprehensive coverage for both physical and digital aspects of home life, with customizable plans that meet each household’s unique needs, driving customer retention and enabling seamless cross-selling opportunities.",
    image: "/assets/home.png",
  },
  {
    title: "Consumer Electronics",
    subtitle: "Holistic protection for modern homes",
    description:
      "Offer comprehensive coverage for both physical and digital aspects of home life, with customizable plans that meet each household’s unique needs, driving customer retention and enabling seamless cross-selling opportunities.",
    image: "/assets/home.png",
  },
];

export default function TwoColumnMenu() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex flex-col md:flex-row w-full h-auto bg-white">
  {/* Menu List */}
  <div className="w-full md:w-1/3 bg-white space-y-6 mb-10">
    {menuItems.map((item, index) => (
      <div
        key={index}
        onMouseEnter={() => setActiveIndex(index)}
        className={`relative cursor-pointer text-2xl md:text-3xl transition-colors ${
          activeIndex === index ? "text-[#011826] font-semibold" : "text-gray-600"
        }`}
      >
        {item.title}
        {activeIndex === index && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            ➜
          </motion.div>
        )}
      </div>
    ))}
  </div>

  {/* Content Display */}
  <div className="w-full md:w-2/3 relative bg-white">
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.4 }}
        className="px-6"
      >
        <div className="relative w-full h-64 md:h-96 mb-4 md:mb-0">
          <Image
            src={menuItems[activeIndex]?.image}
            alt={menuItems[activeIndex]?.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-cyan-100 p-6">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
            {menuItems[activeIndex]?.subtitle}
          </h2>
          <p className="text-gray-700 mb-6 text-sm md:text-md">
            {menuItems[activeIndex]?.description}
          </p>
          <button className="mt-4 border border-cyan-500 bg-cyan-500 text-white font-bold px-4 py-2 transition-all hover:bg-cyan-600 cursor-pointer">
            Learn More
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</div>

  );
}
