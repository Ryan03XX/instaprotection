import { AnimatedCounter } from "@/app/animatedCounter";
import FadeInOnceOnScroll from "@/app/fadeIn2";
import FadeInWhenVisible from "@/app/fadeIn";
import IndustrySection from "@/app/industrySection";
import TwoColumnMenu from "@/app/twoColumnMenu";
import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Flexible Device Switch",
    description:
      "Switch devices across different brands, models, and colors—no questions asked.",
  },
  {
    title: "Click-to-Protect",
    description:
      "Award-winning digital diagnostics to cover aged and SIMO devices.",
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
    description:
      "Flexible options for device rental, upgrade, and second-life devices.",
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
            Embedded insurance for financial services
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
            Transform your customer
          </span>
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            experience with embedded
          </span>
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            insurance
          </span>
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl text-white z-10">
          Embed insurance directly into your customer journey to address all
          your customers’
        </h3>
        <h3 className="text-lg sm:text-xl md:text-2xl text-white z-10">
          financial needs, improve their satisfaction and generate additional
          revenue streams.
        </h3>
        <h3 className="text-lg sm:text-xl md:text-2xl text-white z-10">
          Our solutions are designed to help customers quickly and easily find
          the best coverage
        </h3>
        <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 z-10">
          for them while streamlining your processes and optimizing your
          portfolio risk.
        </h3>
        <button className="mt-6 relative overflow-hidden border px-4 py-3 text-md cursor-pointer border-cyan-500 group bg-cyan-500">
          <span className="relative font-bold z-10 text-[#0A0842] transition-opacity duration-300 group-hover:opacity-0">
            Discover how
          </span>

          <span
            className="absolute left-0 top-0 w-full h-full flex items-center justify-center font-bold
              opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
            style={{ color: "#0A0842" }}
          >
            Discover how
          </span>

          <span
            className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 
              origin-left transition-transform duration-600 ease-out group-hover:bg-cyan-600"
          ></span>
        </button>
      </main>

      <section className="w-full mt-[-200px] mb-20 z-10">
        <h3 className="text-white text-sm sm:text-md mb-4 text-center relative z-20">
          Trusted by some of the world's top brands
        </h3>

        <div className="overflow-hidden relative mt-10">
          <div className="flex animate-scroll whitespace-nowrap gap-10 md:gap-20">
            {[...Array(2)].flatMap((_, i) =>
              [
                "/partnerLogo/aia-logo-png_seeklogo-172251.png",
                "/partnerLogo/AIG_new_logo.svg.png",
                "/partnerLogo/allianz-logo.png",
                "/partnerLogo/AXA_Logo.png",
                "/partnerLogo/Etiqa_Insurance_and_Takaful.png",
                "/partnerLogo/generali-logo.png",
                "/partnerLogo/Great_Eastern_logo.png",
                "/partnerLogo/images-(2).png",
                "/partnerLogo/ING_Group_N.V._Logo.png",
                "/partnerLogo/jpn_sompo-group_logomark_type-b_basic_posi.png",
                "/partnerLogo/Logo-Tune-Insurance.png",
                "/partnerLogo/Tokio_Marine.png",
                "/partnerLogo/Zurich_Insurance_Group_logo.svg.png",
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

      <section className="px-10 py-50 bg-white relative z-30">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 items-center flex flex-col-reverse">
          <div>
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6">
                Seamless embedded insurance for financial services{" "}
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-sm text-[#0A0842] leading-relaxed">
                Embedded insurance solutions better meet the unique needs of the
                financial services industry by extending the seamless trusted
                experience.
                <br />
                <br />
                Maximize personalized value for your clients while gaining
                operational efficiency. By using a leading-edge insurance
                marketplace, you give your clients a better experience with more
                options to help them reduce their risk. Our solutions can be
                tailored for your segment, including banking, wealth management,
                credit cards and loans.
              </p>
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <div className="overflow-hidden h-[300px] relative flex justify-end mt-8 md:mt-0">
              <Image
                src="/assets/mobile.jpg"
                alt="Logo 1"
                width={500}
                height={500}
                className="w-full w-full"
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <div className="max-w-3xl mx-auto mt-20 ">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <AnimatedCounter to={5} suffix="m" label="Active policies" />
              <AnimatedCounter
                to={60}
                suffix="k"
                label="Points of sale
"
              />
              <AnimatedCounter
                to={100}
                suffix="+"
                label="P&C carrier connections
"
              />
            </div>
          </div>
        </FadeInWhenVisible>
      </section>

      <section className="px-6 sm:px-10 md:px-20 py-20 sm:py-24 md:py-30 bg-white relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 items-center">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-4">
              Benefits
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Unlock new value for your customers and business{" "}
            </h2>
            <p className="text-base sm:text-lg text-[#0A0842] leading-relaxed">
              Our embedded insurance solutions offer financial institutions a
              unique opportunity to deliver tailored coverage, streamline
              operations, and grow revenue while deepening customer
              relationships.
            </p>
          </div>
          <TwoColumnMenu />
        </div>
      </section>

      <section className="bg-cyan-100 text-[#0A0842] py-16 px-6">
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
              <div key={index} className="border-t border-[#0A0842] pt-4">
                <h3 className="font-semibold text-[#0A0842]">{item.title}</h3>
                <p className="text-sm text-[#0A0842] mt-1">{item.description}</p>
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
