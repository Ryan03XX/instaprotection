import Image from "next/image";
import { AnimatedCounter } from "../animatedCounter";
import FadeInOnceFromHorizon from "../horizonFadeIn";
import FadeInOnceFromHorizon2 from "../horizonFadeIn2";

export default function About() {
  return (
    <div>
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/background1.jpg')" }}
      />
      <main className="flex max-w-7xl mx-auto min-h-screen flex-col items-start justify-center px-6 md:px-0">
        <FadeInOnceFromHorizon2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span
              style={{
                display: "block",
                position: "relative",
                overflow: "hidden",
              }}
            >
              Who we are
            </span>
          </h1>
        </FadeInOnceFromHorizon2>

        <div></div>
        <FadeInOnceFromHorizon>
          <h3 className="text-xl md:text-2xl text-white z-10 font-bold">
            Founded in 2016, INSTAPROTECTION is{" "}
          </h3>
          <h3 className="text-xl md:text-2xl text-white mb-8 z-10 font-bold">
            a leading InsurTech service provider in South-East Asia
          </h3>
        </FadeInOnceFromHorizon>
      </main>
      <section className="w-full px-20 z-10 bg-gradient-to-r from-cyan-500 to-white py-40">
        <h1 className="text-2xl md:text-4xl font-bold text-[#0A0842] text-center items-center">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            Our mission is to build the world’s leading,
          </span>
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold text-[#0A0842] text-center items-center">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            technology-enabled ecosystem for
          </span>
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold text-[#0A0842] mb-6 text-center items-center">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            protection and insurance.
          </span>
        </h1>
      </section>
      <section className="px-5 md:px-20 py-50 bg-white relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4sA-_z01eSo"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Our story so far
            </h2>
            <p className="text-md text-[#0A0842] leading-relaxed mb-4">
              Founded in 2016, INSTAPROTECTION is a leading InsurTech service
              provider in South-East Asia offering cutting-edge, comprehensive
              and user-friendly InsurTech Platforms, Solutions, Products and
              Services for consumers and corporations.
            </p>
            <p className="text-md text-[#0A0842] leading-relaxed">
              Today InstaProtection has partnered with some of the largest OEM
              Device manufacturers and global Insurance Groups expanding his
              PRESENCE IN ASIA with over 7,500 IT & Mobile Retails Outlets, 500
              Walk-In Services Centres and more then 500,000 device Protection
              Policies issued.
            </p>
          </div>
        </div>
      </section>
      <section className="px-5 md:px-20 py-50 bg-gradient-to-r from-cyan-500 to-white relative z-30">
        <div className="max-w-9xl mx-auto mt-4">
          <div className="items-center justify-center flex flex-col text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
              Our global footprint
            </h2>
            <p className="text-md text-[#0A0842] leading-relaxed font-bold">
              Our team serves millions of customers through distribution
              partners from across a multitude of industry verticals, and we
            </p>
            <p className="text-md text-[#0A0842] leading-relaxed mb-4 font-bold">
              are growing our footprint all the time.
            </p>
          </div>
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
              label="across four continents"
            />
            <AnimatedCounter
              to={1600}
              suffix="+"
              label="Distribution partners"
            />
            <AnimatedCounter to={230} suffix="" label="Products on platform" />
          </div>
        </div>
      </section>
      <section className="w-full md:px-20 z-10 bg-gray-100 py-40">
        <h3 className="text-[#0A0842] font-bold text-2xl md:text-5xl mb-4 text-center relative z-20">
          Backed by the best
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
      <section className="px-5 md:px-20 py-50 bg-white relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0842] mb-6">
              OUR DNA
            </h2>
            <p className="text-md text-[#0A0842] leading-relaxed mb-4">
              At INSTAPROTECTION we strive to innovate and disrupt the
              traditional InsurTech industry. We are passionate about what we
              do, and our team of experts is dedicated to provide most efficient
              and advanced InsurTech platforms, products and services to enable
              customers and corporations to secure and offer relevant, effective
              and comprehensive services.
            </p>
          </div>
          <div>
            <Image
              src="/assets/home.png"
              alt="About Image"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
      <section className="w-full z-10 bg-gray-100 py-5"></section>
    </div>
  );
}