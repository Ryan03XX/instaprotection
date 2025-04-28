"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { AnimatedCounter } from "../animatedCounter";
import FadeInOnceFromHorizon from "../horizonFadeIn";
import FadeInOnceFromHorizon2 from "../horizonFadeIn2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function About() {
  const connectSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (connectSectionRef.current) {
      connectSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/background1.jpg')" }}
      />

      <main className="flex max-w-7xl mx-auto min-h-screen flex-col items-start justify-center px-6 md:px-0 relative z-10">
        <FadeInOnceFromHorizon2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="block relative overflow-hidden">
              Get in touch with instaProtection
            </span>
          </h1>
        </FadeInOnceFromHorizon2>

        <FadeInOnceFromHorizon>
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
            <span className="block relative overflow-hidden">
              Let's Make it Happen
            </span>
          </h2>
        </FadeInOnceFromHorizon>
      </main>

      <section
        ref={connectSectionRef}
        className="w-full px-6 md:px-20 z-10 bg-[#130142] py-20 mb-20"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center mb-10">
          <span className="block relative overflow-hidden">
            Connect With Us
          </span>
        </h1>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 text-white">
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-md text-gray-300 mb-2">
                We're here to help and answer any questions you might have. We
                look forward to hearing from you!
              </h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+65 9855 1971</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">instaProtection@insta.sg</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Find us here</h3>
              <p className="text-gray-300">
                7500a Beach Road The Plaza #05-319
                <br />
                Singapore 199591.
                <br />{" "}
              </p>
            </div>
          </div>

          <form className="flex-1 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name *"
                className="flex-1 p-3 rounded bg-[#1f1b53] text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="flex-1 p-3 rounded bg-[#1f1b53] text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Company"
              className="w-full p-3 rounded bg-[#1f1b53] text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full p-3 rounded bg-[#1f1b53] text-white placeholder-gray-400 focus:outline-none"
            />
            <PhoneInput
              country={"sg"} 
              enableAreaCodes={true}
              inputClass="!w-full !bg-[#1f1b53] !text-white !border-none !px-14 !py-5 !rounded placeholder-gray-100 focus:outline-none"
              buttonClass="!bg-[#1f1b53] !border-none"
              dropdownClass="!bg-white text-gray-400"
              placeholder="Enter phone number"
              containerClass="w-full"
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: false,
              }}
            />

            <textarea
              placeholder="Message"
              className="w-full p-3 rounded bg-[#1f1b53] text-white placeholder-gray-400 h-32 resize-none focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 py-3 rounded font-bold text-white hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
