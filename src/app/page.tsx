import { AnimatedCounter } from "./animatedCounter";
import FadeInWhenVisible from "./fadeIn";
import NewsSection from "./newsSection";
import TwoColumnMenu from "./twoColumnMenu";
import IndustrySection from "./industrySection";
import LottiePlayer from "./lottiePlayer";
import Image from "next/image";
import FadeInOnceOnScroll from "./fadeIn2";
import FadeInOnceFromHorizon from "./horizonFadeIn";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
        src="/mainbackground/video_3.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <main className="flex max-w-7xl mx-auto min-h-screen flex-col items-start justify-center px-6 md:px-0">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            Connecting the world to the
          </span>
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            right insurance at the right time
          </span>
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-8 md:mb-6 z-10">
          Embed insurance and protection products into any customer journey
        </h3>
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

      <section className="w-full bg-gray-100 mb-20 mt-20 z-10">
        <h3 className="text-[#0A0842] font-bold text-sm sm:text-md mb-6 text-center relative z-20">
          Trusted by world leading brands
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
      <FadeInOnceFromHorizon>
        <section className="px-6 md:px-4 py-20 mt-[-60px] z-20 relative">
          <div className="flex justify-center relative">
            <div className="max-w-7xl w-full bg-cyan-500 overflow-hidden px-4 sm:px-8 md:px-10 py-8 sm:py-10 relative">
              <div className="p-4 sm:p-6">
                <h6 className="text-black text-sm sm:text-base md:text-2xl lg:text-3xl leading-relaxed">
                  bolttech‘s platform enables any business to embed tailored and
                  affordable insurance products directly into their existing
                  customer journeys. Whether you’re new to insurance or
                  experienced, we empower you to offer the right protection at
                  the right time, driving growth and staying ahead in the
                  evolving insurance ecosystem.
                </h6>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnceFromHorizon>

      <section className="px-10 py-50 bg-white relative z-30">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 items-center flex flex-col-reverse mb-60">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Driven by technology
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Join the future of insurance{" "}
            </h2>
            <p className="text-lg text-[#0A0842] leading-relaxed">
              Our cloud-based platform seamlessly connects insurers,
              distribution partners, and end-customers to power omni-channel
              insurance distribution and world-class servicing – all through a
              single API.
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
          <FadeInWhenVisible>
            <div className="overflow-hidden h-[300px] relative flex justify-end">
              <LottiePlayer
                path="/animation/animation2.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 items-center flex flex-col-reverse mb-60">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Distribution Engine
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Launch your own insurance offering seamlessly
            </h2>
            <p className="text-lg text-[#0A0842] leading-relaxed">
              Grow revenue, reduce complexity, and manage product choices with
              over 220+ microservices on our scalable, modular platform. Use our
              embedded insurance platform to run your insurance programs and
              launch (or invent) new business models with unmatched speed and
              flexibility.
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

          <FadeInWhenVisible>
            <div className="overflow-hidden h-[300px] relative flex justify-end mt-8 md:mt-0">
              <LottiePlayer
                path="/animation/animation3.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 items-center flex flex-col-reverse mb-60">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Sales
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Accelerate insurance sales across any channel
            </h2>
            <p className="text-lg text-[#0A0842] leading-relaxed">
              Embed insurance products and protection offerings in any customer
              journey, optimize conversions, and enhance the customer experience
              with omni-channel distribution capabilities.
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

          <FadeInWhenVisible>
            <div className="overflow-hidden h-[300px] relative flex justify-end mt-8 md:mt-0">
              <LottiePlayer
                path="/animation/animation4.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 items-center flex flex-col-reverse mb-60">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Servicing
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Empower your business with world-class insurance programs
            </h2>
            <p className="text-lg text-[#0A0842] leading-relaxed">
              Manage the entire insurance and protection programs lifecycle,
              from post-sales to the claims process, to deliver industry-leading
              customer experiences tailored to your brand.
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

          <FadeInWhenVisible>
            <div className="overflow-hidden h-[300px] relative flex justify-end mt-8 md:mt-0">
              <LottiePlayer
                path="/animation/animation5.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 items-center flex flex-col-reverse mb-60">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Custom solutions
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Leverage our tech and insurance expertise tailored to your
              business’ needs
            </h2>
            <p className="text-lg text-[#0A0842] leading-relaxed">
              Our team uniquely combines deep technology and insurance expertise
              to create tailored and innovative solutions alongside our partners
              – building marketplaces, launching new businesses, expanding
              across markets, and more.
            </p>
            <button className="relative overflow-hidden border px-4 py-3 text-md cursor-pointer border-cyan-500 group bg-cyan-500 mt-6">
              <span className="mt-6 relative font-bold z-10 text-[#0A0842] transition-opacity duration-300 group-hover:opacity-0">
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

          <FadeInWhenVisible>
            <div className="overflow-hidden h-[300px] relative flex justify-end mt-8 md:mt-0">
              <LottiePlayer
                path="/animation/animation6.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 items-center flex flex-col-reverse">
          <div>
            <FadeInWhenVisible>
              <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
                Unmatched global reach and scale
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6">
                The most globally scaled insurtech in the world
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-lg text-[#0A0842] leading-relaxed">
                We’re building the world’s leading technology-enabled ecosystem
                for protection and embedded insurance – enabling the industry to
                close the protection gap and advance financial inclusion by
                facilitating consumers’ access to the right insurance at the
                right time.
              </p>
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <div className="overflow-hidden h-[300px] relative flex justify-end mt-8 md:mt-0">
              <LottiePlayer
                path="/animation/animation1.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <div className="max-w-7xl mx-auto mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-33">
              <AnimatedCounter
                to={50}
                suffix="B+"
                prefix="US$"
                label="Quoted premiums annually"
              />
              <AnimatedCounter
                to={35}
                suffix="+"
                label="Markets across four continents"
              />
              <AnimatedCounter
                to={700}
                suffix="+"
                label="Distribution partners"
              />
              <AnimatedCounter
                to={6000}
                suffix=""
                label="Products on platform"
              />
            </div>
          </div>
        </FadeInWhenVisible>
      </section>

      <section className="w-full z-10 bg-gray-100 py-20 sm:py-32 md:py-40">
        <h3 className="text-[#534F85] font-bold text-xl sm:text-2xl mb-4 text-center relative z-20">
          An award-winning insurtech
        </h3>

        <div className="overflow-x-auto relative mt-12 hide-scrollbar">
          <div className="flex animate-scroll whitespace-nowrap gap-8 sm:gap-12">
            <div className="flex flex-col items-center min-w-[250px] max-w-xs">
              <Image
                src="/assets/award1.png"
                alt="Logo 1"
                width={300}
                height={120}
                className="w-full h-50"
              />
              <p className="text-center text-base sm:text-lg text-[#0A0842] mt-4">
                Description for Logo 1
              </p>
            </div>
            <div className="flex flex-col items-center min-w-[250px] max-w-xs">
              <Image
                src="/assets/award2.jpg"
                alt="Logo 1"
                width={300}
                height={120}
                className="w-full h-50"
              />
              <p className="text-center text-base sm:text-lg text-[#0A0842] mt-4">
                Description for Logo 1
              </p>
            </div>
            <div className="flex flex-col items-center min-w-[250px] max-w-xs">
              <Image
                src="/assets/award3.jpg"
                alt="Logo 1"
                width={300}
                height={120}
                className="w-full h-50"
              />
              <p className="text-center text-base sm:text-lg text-[#0A0842] mt-4">
                Description for Logo 1
              </p>
            </div>
            <div className="flex flex-col items-center min-w-[250px] max-w-xs">
              <Image
                src="/assets/award4.jpg"
                alt="Logo 1"
                width={300}
                height={120}
                className="w-full h-50"
              />
              <p className="text-center text-base sm:text-lg text-[#0A0842] mt-4">
                Description for Logo 1
              </p>
            </div>
            <div className="flex flex-col items-center min-w-[250px] max-w-xs">
              <Image
                src="/assets/award5.jpg"
                alt="Logo 1"
                width={300}
                height={120}
                className="w-full h-50"
              />
              <p className="text-center text-base sm:text-lg text-[#0A0842] mt-4">
                Description for Logo 1
              </p>
            </div>
            <div className="flex flex-col items-center min-w-[250px] max-w-xs">
              <Image
                src="/assets/award6.png"
                alt="Logo 1"
                width={300}
                height={120}
                className="w-full h-50"
              />
              <p className="text-center text-base sm:text-lg text-[#0A0842] mt-4">
                Description for Logo 1
              </p>
            </div>
            <div className="flex flex-col items-center min-w-[250px] max-w-xs">
              <Image
                src="/assets/award7.png"
                alt="Logo 1"
                width={300}
                height={120}
                className="w-full h-50"
              />
              <p className="text-center text-base sm:text-lg text-[#0A0842] mt-4">
                Description for Logo 1
              </p>
            </div>
            <div className="flex flex-col items-center min-w-[250px] max-w-xs">
              <Image
                src="/assets/award8.jpg"
                alt="Logo 1"
                width={300}
                height={120}
                className="w-full h-50"
              />
              <p className="text-center text-base sm:text-lg text-[#0A0842] mt-4">
                Description for Logo 1
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 md:px-20 py-20 sm:py-24 md:py-30 bg-white relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 items-center">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-4">
              Our programs
            </p>
            <h2 className="text-3xl md:text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Connecting your customers with more ways to protect the things
              they value
            </h2>
            <p className="text-base text-lg text-[#0A0842] leading-relaxed">
              Discover the wide range of insurance and protection products
              available to meet your customers’ needs and help them get
              protected.
            </p>
          </div>
          <TwoColumnMenu />
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

      <section className="-mt-20 sm:-mt-32 md:-mt-40 z-40 relative px-6 sm:px-10 md:px-20 py-20 sm:py-32 md:py-40">
        <NewsSection />
      </section>
    </div>
  );
}
