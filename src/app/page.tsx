import { AnimatedCounter } from "./animatedCounter";
import FadeInWhenVisible from "./fadeIn";
import NewsSection from "./newsSection";
import TwoColumnMenu from "./twoColumnMenu";
import IndustrySection from "./industrySection";
import LottiePlayer from "./lottiePlayer";
import Image from "next/image";
import FadeInOnceOnScroll from "./fadeIn2";
import FadeInOnceFromHorizon from "./horizonFadeIn";
import BackToTopButton from "./backToTopButton";

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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          <span
            style={{
              display: "block",
              position: "relative",
              paddingBottom: "0.2em",
            }}
          >
            Connecting the World to the{" "}
          </span>
          <span
            style={{
              display: "block",
              position: "relative",
              paddingBottom: "0.2em",
            }}
          >
            Right Protection at the Right Time
          </span>
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl text-white z-10">
          Seamlessly embed protection products into any customer journey
        </h3>
        <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-8 md:mb-6 z-10">
          right where and when they're needed most.
        </h3>
        <a href="/contact">
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
        </a>
      </main>

      <section className="w-full bg-gray-100 z-10 py-10">
        <h3 className="text-[#0A0842] font-bold text-lg mb-6 text-center relative z-20">
          Trusted by world leading brands
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
      <FadeInOnceFromHorizon>
        <section className="px-6 md:px-4 py-20 z-20 relative bg-gray-100">
          <div className="flex justify-center relative">
            <div className="max-w-7xl w-full bg-cyan-500 overflow-hidden px-4 sm:px-8 md:px-10 py-8 sm:py-10 relative">
              <div className="p-4 sm:p-6">
                <h6 className="text-black text-lg md:text-2xl lg:text-3xl leading-relaxed font-bold">
                  Innovating the Future of Protection Technology
                </h6>
              </div>
              <div className="p-4 sm:p-6">
                <h6 className="text-black text-sm sm:text-base md:text-2xl lg:text-2xl leading-relaxed">
                  At InstaProtection, we’re redefining how protection works. Our
                  passionate team of experts is dedicated to delivering advanced
                  platforms, products, and services that empower individuals and
                  businesses to stay secure with smart, effective, and
                  comprehensive solutions.
                </h6>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnceFromHorizon>

      <section className="px-10 py-50 bg-white relative z-30">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 items-center flex flex-col-reverse md:mb-60">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Driven by technology
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Join the future of protection{" "}
            </h2>
            <p className="text-lg text-[#0A0842] leading-relaxed">
              Our cloud-based platform seamlessly connects underwriters,
              distribution partners, and end customers—enabling scalable,
              omni-channel protection distribution and world-class servicing
              through a robust and flexible digital ecosystem.
            </p>
            <a href="/contact">
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
            </a>
          </div>
          <FadeInWhenVisible>
            <div className="overflow-hidden h-[300px] relative flex justify-end">
              <LottiePlayer
                path="/animation/animation1.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 items-center flex flex-col-reverse mb-30 md:mb-60">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Scalable and Flexible Distribution Platform
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Empower Your Business with Seamless Protection Solutions
            </h2>
            <p className="text-lg text-[#0A0842] leading-relaxed">
              Accelerate growth and simplify operations with our scalable,
              modular platform. Designed for flexibility, it empowers you to run
              tailored protection programs or launch entirely new business
              models—quickly, efficiently, and without added complexity.
            </p>
            <a href="/distributionEngine">
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
            </a>
          </div>

          <FadeInWhenVisible>
            <div className="overflow-hidden h-[300px] relative flex justify-end mt-12 md:mt-0">
              <LottiePlayer
                path="/animation/animation2.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 items-center flex flex-col-reverse mb-30 md:mb-60">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Sales
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Accelerate Growth Across Every Channel
            </h2>
            <p className="text-lg text-[#0A0842] leading-relaxed">
              Integrate protection solutions into any customer journey with
              ease. Expand your reach, optimize engagement, and deliver a
              seamless experience through a flexible, omni-channel distribution
              network designed to drive results.
            </p>
            <a href="/sales">
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
            </a>
          </div>

          <FadeInWhenVisible>
            <div className="overflow-hidden h-[300px] relative flex justify-end">
              <LottiePlayer
                path="/animation/animation3.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 items-center flex flex-col-reverse mb-30 md:mb-60">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Servicing
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Put Your Customers at the Center of Every Interaction
            </h2>
            <p className="text-lg text-[#0A0842] leading-relaxed">
              Seamlessly manage the full lifecycle of protection programs—from
              post-purchase support to claims handling—while delivering smooth,
              personalized experiences that build trust, loyalty, and long-term
              satisfaction.
            </p>
            <a href="/servicing">
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
            </a>
          </div>

          <FadeInWhenVisible>
            <div className="overflow-hidden h-[300px] relative flex justify-end">
              <LottiePlayer
                path="/animation/animation4.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 items-center flex flex-col-reverse mb-30 md:mb-60">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Custom solutions
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Solutions as Unique as Your Business
            </h2>
            <p className="text-2xl md:text-2xl font-bold text-[#534F85] leading-relaxed mb-8 italic">
              Partner with a team that builds around your vision—every step of
              the way.
            </p>
            <p className="text-lg text-[#0A0842] leading-relaxed">
              We combine deep technology and protection expertise to craft
              solutions tailored to your unique goals. Whether it’s building
              marketplaces, launching new ventures, or expanding into new
              markets, we work hand-in-hand with you to design and deliver the
              right strategy for your growth.
            </p>
            <a href="/customSolutions">
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
            </a>
          </div>

          <FadeInWhenVisible>
            <div className="overflow-hidden h-[300px] relative flex justify-end">
              <LottiePlayer
                path="/animation/animation5.json"
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
                Unmatched Reach and Scale in Asia
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6">
                The Leading Technology-Enabled Ecosystem for Protection
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-lg text-[#0A0842] leading-relaxed">
                We’re building one of Asia’s largest and most advanced InsurTech
                ecosystems, designed to close the protection gap and drive
                financial inclusion. By enabling consumers to access the right
                protection at the right time, we’re empowering the industry to
                achieve new levels of accessibility and impact across the
                region.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A0842] mb-6 mt-8">
                Why Asia?
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-lg text-[#0A0842] leading-relaxed">
                Asia represents the future of protection, with a rapidly growing
                middle class, diverse consumer needs, and an expanding digital
                landscape. Our platform is uniquely positioned to address these
                challenges and opportunities, offering scalable, adaptable
                solutions to meet the region’s evolving demand for protection
                products. We’re committed to driving innovation and growth
                across key markets, from Southeast Asia to East Asia, ensuring
                that protection reaches every corner of the continent.
              </p>
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <div className="overflow-hidden h-[300px] relative flex justify-end">
              <LottiePlayer
                path="/animation/animation6.json"
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

      {/* <section className="w-full z-10 bg-gray-100 py-20 sm:py-32 md:py-40">
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
      </section> */}

      <section className="px-6 md:px-20 py-20 md:py-30 bg-white relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 items-center">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-4">
              Our Protection Solutions
            </p>
            <h2 className="text-3xl md:text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Connecting Your Customers with Comprehensive Ways to Safeguard
              What Matters Most
            </h2>
            <p className="text-base text-lg text-[#0A0842] leading-relaxed">
              Discover our extensive range of protection solutions, crafted to
              meet the unique needs of your customers. From essential items to
              specialized coverage, we offer scalable, tailored products that
              ensure your customers can protect the things they value most.
            </p>
          </div>
          <TwoColumnMenu />
        </div>
      </section>

      <section className="px-6 md:px-20 bg-white relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 items-center">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-4">
              Case studies
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Accelerating Growth Through Digital Transformation
            </h2>
            <p className="text-base sm:text-lg text-[#0A0842] leading-relaxed">
              Discover how businesses are modernizing their protection products
              and scaling operations through digital transformation. Explore
              real-world examples of innovation and success that drive
              efficiency, growth, and improved customer experiences.
            </p>
          </div>
          <FadeInOnceOnScroll>
            <IndustrySection />
          </FadeInOnceOnScroll>
        </div>
      </section>

      <section className="bg-gray-100 relative px-6 md:px-20 py-30 md:py-30">
        <NewsSection />
      </section>

      <BackToTopButton />
    </div>
  );
}
