import FadeInOnceOnScroll from "@/app/fadeIn2";
import IndustrySection from "@/app/industrySection";
import TwoColumnMenu from "@/app/twoColumnMenu";
import Image from "next/image";
import React from 'react';

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

  const services = [
    {
      title: "Flexible Device Switch",
      description: "Switch devices across different brands, models, and colors—no questions asked.",
    },
    {
      title: "Click-to-Protect",
      description: "Award-winning digital diagnostics to cover aged and SIMO devices.",
    },
    {
      title: "Repairs and Protection",
      description: "Insurance solutions for new, SIMO, and aged devices.",
    },
    {
      title: "Dynamic Trade-In",
      description: "Options to add guaranteed value.",
    },
    {
      title: "Device Acquisition Strategy",
      description: "Flexible options for device rental, upgrade, and second-life devices.",
    },
    {
      title: "Device Circularity Essentials",
      description: "Secure wiping and device refresh services.",
    },
  ];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-0 bg-no-repeat"
        style={{ backgroundImage: "url('/assets/background1.jpg')" }}
      ></div>

      <main className="flex max-w-7xl mx-auto min-h-screen flex-col items-start justify-center px-6 md:px-0">
        <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            Mobile devices
          </span>
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            Comprehensive protection for
          </span>
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            all your devices
          </span>
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl text-white z-10">
          Our market-leading device protection solutions ensure your customers
          get the best
        </h3>
        <h3 className="text-lg sm:text-xl md:text-2xl text-white z-10">
          service, most relevant products, and comprehensive coverage with fast
          fulfillment,
        </h3>
        <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 z-10">
          keeping them connected and stress-free.
        </h3>
      </main>

      <section className="w-full mb-20 mt-20 z-10">
        <h3 className="text-[#534F85] font-bold text-lg sm:text-md mb-4 text-center relative z-20">
        Trusted by some of the world's top brands
        </h3>

        <div className="overflow-hidden relative">
          <div className="flex animate-scroll whitespace-nowrap gap-6 sm:gap-10 md:gap-12">
            {[...Array(2)].flatMap((_, i) =>
              [
                "/assets/logo2.svg",
                "/assets/logo2.svg",
                "/assets/logo2.svg",
                "/assets/logo4.svg",
                "/assets/logo5.svg",
                "/assets/logo6.svg",
                "/assets/logo7.svg",
                "/assets/logo8.svg",
                "/assets/logo9.svg",
              ].map((src, index) => (
                <div
                  className="flex flex-col items-center shrink-0"
                  key={`${i}-${index}`}
                >
                  <Image
                    src={src}
                    alt={`Logo ${index + 1}`}
                    width={150}
                    height={60}
                    className="h-16 w-auto sm:h-20 md:h-20"
                  />
                </div>
              ))
            )}

            {[...Array(2)].flatMap((_, i) =>
              [
                "/assets/logo2.svg",
                "/assets/logo2.svg",
                "/assets/logo2.svg",
                "/assets/logo4.svg",
                "/assets/logo5.svg",
                "/assets/logo6.svg",
                "/assets/logo7.svg",
                "/assets/logo8.svg",
                "/assets/logo9.svg",
              ].map((src, index) => (
                <div
                  className="flex flex-col items-center shrink-0"
                  key={`${i}-${index}`}
                >
                  <Image
                    src={src}
                    alt={`Logo ${index + 1}`}
                    width={150}
                    height={60}
                    className="h-16 w-auto sm:h-20 md:h-20"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h4 className="text-lg font-semibold text-gray-800">Benefits</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          With our device protection we’ll help you<br />
          offer more value to your customers
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-blue-50 p-6 rounded-lg text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="px-6 sm:px-10 md:px-20 py-20 sm:py-24 md:py-30 bg-white relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 items-center">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-4">
              Our programs
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Connecting your customers with more ways to protect the things
              they value
            </h2>
            <p className="text-base sm:text-lg text-[#0A0842] leading-relaxed">
              Discover the wide range of insurance and protection products
              available to meet your customers’ needs and help them get
              protected.
            </p>
          </div>
          <TwoColumnMenu />
        </div>
      </section>

      <section className="bg-cyan-600 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-sm font-medium">Device lifecycle services</p>
          <h2 className="text-3xl font-bold mt-2 leading-snug">
            Offer complete device support with <br />
            sustainable, flexible solutions
          </h2>
        </div>

        <div className="space-y-6">
          {services.map((item, index) => (
            <div key={index} className="border-t border-white/40 pt-4">
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-white/90 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
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
      <section className="w-full z-10 bg-gray-100 py-5"></section>

    </div>
  );
}
