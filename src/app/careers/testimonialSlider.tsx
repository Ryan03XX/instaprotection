"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Gayathri Kumarasamy",
    role: "Senior Manager – Corporate Communications",
    quote:
      "I’m proud to be part of Instaprotection. The collaboration and energy here are amazing.",
    image: "/leaders/leader7.jpg",
  },
  {
    name: "Alex Tan",
    role: "Product Lead – Asia",
    quote:
      "Working here lets me innovate every day. The pace is exciting and inspiring.",
    image: "/leaders/leader3.jpg",
  },
  {
    name: "Linda Zhang",
    role: "Head of Marketing",
    quote:
      "Every day brings new challenges, and I love solving them with this brilliant team.",
    image: "/leaders/leader9.jpg",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">
        <div className="w-full md:w-1/2 h-[300px] relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={index} // important for animation to trigger
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="rounded-lg w-full h-full object-cover absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        <div className="md:w-1/2">
          <p className="text-gray-700 font-semibold mb-4">“{testimonials[index].quote}”</p>
          <p className="text-gray-900 font-bold">{testimonials[index].name}</p>
          <p className="text-sm text-gray-500 mb-4">{testimonials[index].role}</p>
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="text-lg p-2 bg-gray-200 hover:bg-gray-300 rounded-full text-black"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="text-lg p-2 bg-gray-200 hover:bg-gray-300 rounded-full text-black"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
