"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sub } from "framer-motion/client";

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
    image: "/assets/home.jpg",
  },
];

export default function TwoColumnMenu() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex w-full h-[500px] bg-white overflow-hidden">
      <div className="w-1/3 bg-white p-8 space-y-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            className={`relative cursor-pointer text-3xl transition-colors ${
              activeIndex === index
                ? "text-blue-900 font-semibold"
                : "text-gray-600"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <div className="w-2/3 relative bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 p-8"
          >
            <div className="absolute top-0 right-0">
              <motion.img
                src={menuItems[activeIndex]?.image}
                alt={menuItems[activeIndex]?.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                className="object-cover w-128 h-110 shadow-xl"
              />
            </div>

            <div className="px-16 py-16 absolute -bottom-0 left-0 bg-cyan-100 p-6 shadow-lg max-w-lg">
              <h2 className="text-4xl font-bold text-black mb-4">
                {menuItems[activeIndex]?.subtitle}
              </h2>
              <p className="text-gray-700 mb-6 text-md">
                {menuItems[activeIndex]?.description}
              </p>

              <button className="mt-6 relative overflow-hidden border px-4 py-3 text-md cursor-pointer border-cyan-500 group bg-cyan-500">
                <span className="relative font-bold z-10 text-[#0A0842] transition-opacity duration-300 group-hover:opacity-0">
                  Learn More
                </span>

                <span
                  className="absolute left-0 top-0 w-full h-full flex items-center justify-center font-bold
              opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
                  style={{ color: "#0A0842" }}
                >
                  Learn More
                </span>

                <span
                  className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 
              origin-left transition-transform duration-600 ease-out group-hover:bg-cyan-600"
                ></span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
