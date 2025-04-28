"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const values = [
  {
    title: "Be the pioneer",
    description:
      "We want to enable the market with new products and partnerships. We want to get there first and bring our partners with us.",
    image: "/values/value1.jpg",
  },
  {
    title: "Own it",
    description:
      "We empower each other to take decisions and make ourselves accountable to each other.",
    image: "/values/value2.jpg",
  },
  {
    title: "a together",
    description:
      "To achieve our vision, we have to bring together our capabilities. So we communicate in a way that’s transparent and we see every task as part of the whole.",
    image: "/values/value3.jpg",
  },
  {
    title: "Think outside-in",
    description:
      "Old thinking doesn’t solve new challenges. So we put ourselves in the shoes of our customers, our partners and each other.",
    image: "/values/value4.jpg",
  },
];

export default function Value() {
  const [activeIndex, setActiveIndex] = useState(0);
  const letters = ["B", "O", "L", "T"];

  return (
    <div>
      <section className="w-full bg-white px-6 md:px-20 py-20 relative">
        <h2 className="text-6xl font-bold text-[#0A0842] mb-10">Our values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex justify-center items-center h-full col-span-1">
            <div className="relative w-[300px] h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <Image
                    src={values[activeIndex].image}
                    alt="Value visual"
                    fill
                    className="rounded-lg object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 right-0 bg-[#0A0842] text-white font-bold text-xl leading-none p-2 z-10">
                <div>{letters[activeIndex]}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center col-span-2">
            {values.map((value, index) => (
              <div
                key={index}
                className={`cursor-pointer py-6 border-t border-[#0A0842] ${
                  index === values.length - 1 ? "border-b" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <h3 className="text-2xl font-bold text-[#0A0842] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#0A0842] text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
