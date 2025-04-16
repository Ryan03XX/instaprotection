import { AnimatedCounter } from "./animatedCounter";
import FadeInWhenVisible from "./fadeIn";
import NewsSection from "./newsSection";
import TwoColumnMenu from "./twoColumnMenu";
import IndustrySection from "./industrySection";
import LottiePlayer from "./lottiePlayer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/background1.jpg')" }}
      />

      <main className="flex text-left px-20 w-full min-h-screen flex flex-col items-start justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
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
            right insurance at the
          </span>
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            right time
          </span>
        </h1>
        <div></div>
        <h3 className="text-xl md:text-2xl text-white mb-8">
          Embed insurance and protection products into any customer journey
        </h3>
        <button className="relative overflow-hidden border px-4 py-3 text-md cursor-pointer border-cyan-500 group bg-cyan-500">
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
      <section className="mb-120 w-full -mt-60 px-20 z-10">
        <h3 className="text-white font-bold text-md mb-4 text-center relative z-20">
          Trusted by world leading brands
        </h3>

        <div className="overflow-hidden relative">
          <div className="flex animate-scroll whitespace-nowrap gap-12">
            <div className="flex animate-scroll whitespace-nowrap gap-12">
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo2.svg"
                  alt="Logo 1"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo2.svg"
                  alt="Logo 2"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo2.svg"
                  alt="Logo 3"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo4.svg"
                  alt="Logo 4"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo5.svg"
                  alt="Logo 5"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo6.svg"
                  alt="Logo 6"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo7.svg"
                  alt="Logo 7"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo8.svg"
                  alt="Logo 8"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo9.svg"
                  alt="Logo 9"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo2.svg"
                  alt="Logo 1"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo2.svg"
                  alt="Logo 2"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo2.svg"
                  alt="Logo 3"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo4.svg"
                  alt="Logo 4"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo5.svg"
                  alt="Logo 5"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo6.svg"
                  alt="Logo 6"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo7.svg"
                  alt="Logo 7"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo8.svg"
                  alt="Logo 8"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/logo9.svg"
                  alt="Logo 9"
                  width={300}
                  height={120}
                  className="h-30 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-20 py-10 -mt-120 z-20 relative">
        <div className="flex justify-center relative">
          <div className="max-w-7xl py-10 px-10 w-full bg-cyan-500 shadow-lg overflow-hidden">
            <div className="p-6">
              <h6 className="text-black text-base md:text-3xl mb-4">
                bolttech‘s platform enables any business to embed tailored and
                affordable insurance products directly into their existing
                customer journeys. Whether you’re new to insurance or
                experienced, we empower you to offer the right protection at the
                right time, driving growth and staying ahead in the evolving
                insurance ecosystem.
              </h6>
            </div>
            <div className="absolute left-[0%] top-6 w-18 h-20 bg-blue-900 rounded-md shadow-md z-20"></div>

            <div className="absolute right-[-5%] bottom-6 w-48 h-12 bg-yellow-300 rounded-md shadow-md z-20"></div>
          </div>
        </div>
      </section>
      <section className="px-20 py-50 bg-white relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Driven by technology
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
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
            <div className="overflow-hidden h-[400px] relative flex justify-end">
              <LottiePlayer
                path="/animation/animation2.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-70">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Distribution Engine
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
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
            <div className="overflow-hidden h-[400px] relative flex justify-end">
              <LottiePlayer
                path="/animation/animation3.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-70">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Sales
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
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
            <div className="overflow-hidden h-[400px] relative flex justify-end">
              <LottiePlayer
                path="/animation/animation4.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-70">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Servicing
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
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
            <div className="overflow-hidden h-[400px] relative flex justify-end">
              <LottiePlayer
                path="/animation/animation5.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-70">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
              Custom solutions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Leverage our tech and insurance expertise tailored to your
              business’ needs
            </h2>
            <p className="text-lg text-[#0A0842] leading-relaxed">
              Our team uniquely combines deep technology and insurance expertise
              to create tailored and innovative solutions alongside our partners
              – building marketplaces, launching new businesses, expanding
              across markets, and more.
            </p>
            <button className="relative overflow-hidden border px-4 py-3 text-md cursor-pointer border-cyan-500 group bg-cyan-500">
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
            <div className="overflow-hidden h-[400px] relative flex justify-end">
              <LottiePlayer
                path="/animation/animation6.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-70">
          <div>
            <FadeInWhenVisible>
              <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-8">
                Unmatched global reach and scale
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
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
            <div className="overflow-hidden h-[400px] relative flex justify-end">
              <LottiePlayer
                path="/animation/animation1.json"
                height={300}
                width={300}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="max-w-9xl mx-auto mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
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
            <AnimatedCounter to={6000} suffix="" label="Products on platform" />
          </div>
        </div>
      </section>
      <section className="w-full px-20 z-10 bg-gray-100 py-40">
        <h3 className="text-[#534F85] font-bold text-2xl mb-4 text-center relative z-20">
          An award-winning insurtech
        </h3>

        <div className="overflow-hidden relative mt-12">
          <div className="flex animate-scroll whitespace-nowrap gap-12">
            <div className="flex flex-col items-center">
              <Image
                src="/assets/award1.png"
                alt="Logo 1"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 1
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/award2.jpg"
                alt="Logo 2"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 2
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/award3.jpg"
                alt="Logo 3"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 3
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/award4.jpg"
                alt="Logo 4"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 4
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/award5.jpg"
                alt="Logo 5"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 5
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/award6.png"
                alt="Logo 6"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 6
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/award7.png"
                alt="Logo 7"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 7
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/award8.jpg"
                alt="Logo 8"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 7
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/award9.jpg"
                alt="Logo 9"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 7
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/award10.jpg"
                alt="Logo 10"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 7
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/award1.png"
                alt="Logo 1"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 1
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/award2.jpg"
                alt="Logo 2"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 2
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/award3.jpg"
                alt="Logo 3"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 3
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/award4.jpg"
                alt="Logo 4"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 4
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/award5.jpg"
                alt="Logo 5"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 5
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/award6.png"
                alt="Logo 6"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 6
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/award7.png"
                alt="Logo 7"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 7
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/award8.jpg"
                alt="Logo 8"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 7
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/award9.jpg"
                alt="Logo 9"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 7
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/award10.jpg"
                alt="Logo 10"
                width={300}
                height={120}
                className="h-30 w-auto"
              />
              <p className="text-center text-lg text-[#0A0842] mt-4">
                Description for Logo 7
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-20 py-30 bg-white relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-4">
              Our programs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Connecting your customers with more ways to protect the things
              they value{" "}
            </h2>
            <p className="text-lg text-[#0A0842] leading-relaxed">
              Discover the wide range of insurance and protection products
              available to meet your customers’ needs and help them get
              protected.
            </p>
          </div>
          <TwoColumnMenu />
        </div>
      </section>
      <section className="px-20 py-20 bg-white relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
          <div className="ml-30">
            <p className="text-2xl md:text-3xl font-bold text-[#534F85] leading-relaxed mb-4">
              Case studies
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Fast-track growth with digital transformation
            </h2>
            <p className="text-lg text-[#0A0842] leading-relaxed">
              See how the worlds’s leading brands are modernizing their
              insurance products while scaling their business with bolttech.
            </p>
          </div>
          <FadeInWhenVisible>
            <IndustrySection />
          </FadeInWhenVisible>
        </div>
      </section>
      <section className="-mt-40 z-40 relative px-20 py-40">
        <NewsSection />
      </section>
    </div>
  );
}
