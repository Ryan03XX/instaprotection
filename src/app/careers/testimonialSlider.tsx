"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Gayathri Kumarasamy",
    role: "Senior Manager – Corporate Communications",
    quote: "I’m proud to be part of Instaprotection. The collaboration and energy here are amazing.",
    image: "/leaders/leader2.jpg",
  },
  {
    name: "Alex Tan",
    role: "Product Lead – Asia",
    quote: "Working here lets me innovate every day. The pace is exciting and inspiring.",
    image: "/leaders/leader3.jpg",
  },
  {
    name: "Linda Zhang",
    role: "Head of Marketing",
    quote: "Every day brings new challenges, and I love solving them with this brilliant team.",
    image: "/leaders/leader4.jpg",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="bg-white py-16 px-20">
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">
        <img src={current.image} className="rounded-lg w-full md:w-1/2 h-[300px] object-cover shadow-md" />
        <div className="md:w-1/2">
          <p className="text-gray-700 font-semibold mb-4">“{current.quote}”</p>
          <p className="text-gray-900 font-bold">{current.name}</p>
          <p className="text-sm text-gray-500 mb-4">{current.role}</p>
          <div className="flex gap-4">
            <button onClick={prev} className="text-lg p-2 bg-gray-200 hover:bg-gray-300 rounded-full">←</button>
            <button onClick={next} className="text-lg p-2 bg-gray-200 hover:bg-gray-300 rounded-full">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
