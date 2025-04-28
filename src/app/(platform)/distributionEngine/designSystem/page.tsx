import FadeInOnceOnScroll from "@/app/fadeIn2";
import FadeInOnceFromHorizon from "@/app/horizonFadeIn";
import FadeInOnceFromHorizon2 from "@/app/horizonFadeIn2";
import IndustrySection from "@/app/industrySection";
import NewsSection from "@/app/newsSection";
import React from "react";

const features = [
  {
    title: "Insurer library",
    description:
      "Access a broad library of hundreds of pre-integrated insurers and their insurance coverages...",
    bullets: [
      "Expanded market access",
      "Greater choice to close more transactions",
      "Easy access to hard markets",
    ],
    image: "/assets/home.png",
  },
  {
    title: "Dynamic quoting questionnaire",
    description:
      "Generate competitive and more tailored insurance quotes faster through a comprehensive underwriting interview...",
    bullets: [
      "Filter carriers based on customer responses",
      "Present fewer questions for faster quotes",
      "Leverage one interview for multiple carriers",
    ],
    image: "/assets/mobile.jpg",
  },
  {
    title: "Product configurator",
    description:
      "Create both simple and complex insurance solutions, or enable bundling and differentiated offerings...",
    bullets: [
      "Enter new markets quickly",
      "Provide customers with greater choice and flexibility",
      "Expand your lines of business",
    ],
    image: "/assets/healtech.jpg",
  },
  {
    title: "Data marketplace",
    description:
      "Create both simple and complex insurance solutions, or enable bundling and differentiated offerings...",
    bullets: [
      "Enter new markets quickly",
      "Provide customers with greater choice and flexibility",
      "Expand your lines of business",
    ],
    image: "/assets/global.jpg",
  },
];

export default function About() {
  return (
    <div>
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/background1.jpg')" }}
      />
      <main className="flex max-w-7xl mx-auto min-h-screen flex-col items-start justify-center px-6 md:px-0">
        <FadeInOnceFromHorizon2>
          <h3 className="text-xl md:text-2xl text-white z-10 font-bold z-30 mb-6">
            <span
              style={{
                display: "block",
                position: "relative",
                overflow: "hidden",
              }}
            >
              Insurance distribution engine
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
              Become an insurance
              <br />
              destination
            </span>
          </h1>
        </FadeInOnceFromHorizon2>

        <div></div>
        <FadeInOnceFromHorizon>
          <h3 className="text-xl md:text-2xl text-white z-10">
            Scalable and modular insurtech that powers product choice
          </h3>
        </FadeInOnceFromHorizon>
      </main>
      <section className="w-full px-20 z-10 bg-white py-40">
        <h3 className="text-xl md:text-2xl font-bold text-[#534F85] text-center items-center mb-6">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            Insurance solutions, driven by technology
          </span>
        </h3>
        <h1 className="text-2xl md:text-5xl font-bold text-[#0A0842] text-center items-center">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            Our distribution engine puts you in control
          </span>
        </h1>
      </section>
      <section className="bg-white py-20 px-6 mx-auto space-y-24 max-w-7xl">
        {features.map((feature, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center`}
            >
              <div className={isOdd ? "md:order-2" : ""}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full"
                />
              </div>

              <div className={isOdd ? "md:order-1" : ""}>
                <h3 className="text-2xl md:text-5xl font-bold mb-4 text-[#0A0842]">
                  {feature.title}
                </h3>
                <p className="text-[#0A0842] mb-4">{feature.description}</p>
                <ul className="list-disc list-inside space-y-2 text-[#0A0842]">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
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
      <section className="bg-gray-100 relative px-6 sm:px-10 md:px-20 py-30 md:py-30">
              <NewsSection />
            </section>
      <section className="w-full z-10 bg-gray-100 py-5"></section>
    </div>
  );
}
