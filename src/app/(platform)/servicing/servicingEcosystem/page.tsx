import FadeInOnceOnScroll from "@/app/fadeIn2";
import FadeInOnceFromHorizon from "@/app/horizonFadeIn";
import FadeInOnceFromHorizon2 from "@/app/horizonFadeIn2";
import IndustrySection from "@/app/industrySection";
import NewsSection from "@/app/newsSection";
import TwoColumnMenu from "@/app/twoColumnMenu";
import React from "react";
import HeroSection from "./heroSection";

const benefits = [
  {
    title: "Customer satisfaction",
    description:
      "With our wide product range, comprehensive protection coverage, fast fulfillment, and supreme customer experience, we guarantee customer satisfaction with our best-in-class device protection and service products.",
    icon: "💙",
  },
  {
    title: "Lifetime value",
    description:
      "Our unique device lifecycle proposition empowers partners to offer products that meet every need—from purchasing and renting to protecting, retiring, and upgrading devices—creating a closed loop that prevents customer attrition.",
    icon: "📈",
  },
  {
    title: "Eco-friendly",
    description:
      "We recycle and repurpose every device returned through protection claims, trade-ins, and upgrades, maximizing its value by giving it multiple lifecycles.",
    icon: "♻️",
  },
];

export default function About() {
  return (
    <div>
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/background1.jpg')" }}
      />
      <main className="flex text-left px-5 md:px-20 w-full min-h-screen flex flex-col items-start justify-center px-4">
        <FadeInOnceFromHorizon2>
          <h3 className="text-xl md:text-2xl text-white z-10 font-bold z-30 mb-6">
            <span
              style={{
                display: "block",
                position: "relative",
                overflow: "hidden",
              }}
            >
              Embedded insurance API
            </span>
          </h3>
        </FadeInOnceFromHorizon2>
        <FadeInOnceFromHorizon2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span
              style={{
                display: "block",
                position: "relative",
                overflow: "hidden",
              }}
            >
              Seamless insurance integration,
              <br />
              endless possibilities
            </span>
          </h1>
        </FadeInOnceFromHorizon2>

        <div></div>
        <FadeInOnceFromHorizon>
          <h3 className="text-xl md:text-2xl text-white z-10">
            Our Embedded insurance API enables businesses to offer tailored
            insurance solutions
            <br />
            directly within their digital platforms. Simplify your customers’
            experience with instant
            <br />
            insurance and protection quotes delivered at the right moment,
            maximizing conversion
            <br />
            and eliminating friction from the purchasing journey.
          </h3>
        </FadeInOnceFromHorizon>
        <button className="relative overflow-hidden border px-4 py-3 text-md cursor-pointer border-cyan-500 group bg-cyan-500 mt-4 sm:mt-6">
          <span className="relative font-bold z-10 text-[#0A0842] transition-opacity duration-300 group-hover:opacity-0">
            Get started
          </span>

          <span
            className="absolute left-0 top-0 w-full h-full flex items-center justify-center font-bold
        opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
            style={{ color: "#0A0842" }}
          >
            Get started
          </span>

          <span
            className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 
        origin-left transition-transform duration-600 ease-out group-hover:bg-cyan-600"
          ></span>
        </button>
      </main>
      <section className="px-5 md:px-20 py-20 bg-[#EEFDFF] relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-[#534F85] mb-4">
              Overview
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0842] mb-6">
              Powering frictionless insurance
              <br />
              experiences
            </h2>
            <p className="text-md text-[#0A0842] leading-relaxed mb-4">
              Our API connects you to a wide network of carriers and products,
              allowing for instant quoting, binding, and policy servicing
              without requiring a traditional front-end setup. Designed for
              scalability and ease of use, this solution enables you to offer
              protection at critical touchpoints in your customer’s journey,
              enhancing satisfaction and loyalty while simplifying the insurance
              process.
            </p>
          </div>
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full shadow-lg"
              src="https://www.youtube.com/embed/4sA-_z01eSo"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="px-6 sm:px-10 md:px-20 py-20 sm:py-24 md:py-30 bg-white relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 items-center">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-4">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Comprehensive protection, fast solutions, and exceptional service
            </h2>
            <p className="text-base sm:text-lg text-[#0A0842] leading-relaxed">
              We go beyond basic warranties to provide protection plans that
              cover all the devices your customers rely on, from smartphones to
              smart home systems. With fast, reliable repairs or replacements,
              our global network ensures customers are never left without the
              tech they depend on. And with a streamlined claims process and
              24/7 support, we deliver a superior experience that keeps
              customers satisfied and stress-free.
            </p>
          </div>
          <TwoColumnMenu />
        </div>
      </section>
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h4 className="text-xl font-semibold text-gray-800">Features</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Insurance integration made simple,
            <br />
            powerful, and reliable
          </h2>
          <h4 className="text-sm md:text-md text-gray-900 mt-4">
            Our API’s capabilities are built for seamless insurance
            distribution, offering a reliable, flexible, and secure connection
            to a comprehensive
            <br />
            network of insurance carriers.
          </h4>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="relative bg-gradient-to-r from-cyan-100 to-white p-6 text-left shadow-sm hover:shadow-md transition-shadow rounded-lg"
              >
                <div className="absolute -top-4 -right-8 p-3 rounded-full text-5xl">
                  {benefit.icon}
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2 mt-8">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section  className="relative py-48 bg-gradient-to-b from-[#0A0842] to-[#1B1560] flex items-center justify-center overflow-hidden text-white">
        <HeroSection />
      </section>
      <section className="px-6 sm:px-10 md:px-20 py-20 bg-white relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 items-center">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-4">
              Case studies
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Fast-track growth with digital transformation
            </h2>
            <p className="text-base sm:text-lg text-[#0A0842] leading-relaxed">
              See how the world's leading brands are modernizing their insurance
              products while scaling their business with bolttech.
            </p>
          </div>
          <FadeInOnceOnScroll>
            <IndustrySection />
          </FadeInOnceOnScroll>
        </div>
      </section>
      <section className="-mt-20 sm:-mt-32 md:-mt-40 z-40 relative px-6 sm:px-10 md:px-20 py-20 sm:py-32 md:py-40">
        <NewsSection />
      </section>
      <section className="w-full z-10 bg-gray-100 py-5"></section>
    </div>
  );
}
