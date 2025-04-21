import TestimonialSlider from "./testimonialSlider";
import Value from "./value";
import FadeInOnceFromHorizon from "../horizonFadeIn";
import FadeInOnceFromHorizon2 from "../horizonFadeIn2";

export default function About() {
  return (
    <div>
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/background1.jpg')" }}
      />
      <main className="flex text-left px-5 md:px-20 w-full min-h-screen flex flex-col items-start justify-center px-4">
        <FadeInOnceFromHorizon2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span
              style={{
                display: "block",
                position: "relative",
                overflow: "hidden",
              }}
            >
              Grow with us
            </span>
          </h1>
        </FadeInOnceFromHorizon2>

        <div></div>
        <FadeInOnceFromHorizon>
          <h3 className="text-xl md:text-2xl text-white z-10 font-bold">
            Join our team of pioneers transforming the way insurance is bought
            and sold
          </h3>
        </FadeInOnceFromHorizon>
      </main>

      <section className="px-5 md:px-20 py-50 bg-gradient-to-r from-cyan-500 to-white relative z-30">
        <div className="max-w-9xl mx-auto mt-4">
          <div className="items-center justify-center flex flex-col text-center mb-10">
            <h2 className="text-2xl md:text-6xl font-bold text-[#0A0842]">
              We’re looking for passionate
            </h2>
            <h2 className="text-2xl md:text-6xl font-bold text-[#0A0842] mb-6">
              people who share our vision
            </h2>
            <p className="text-md md:text-lg text-[#0A0842] leading-relaxed font-bold">
              Instaprotecion is a globally-scaled insurtech with big ambitions.
              We’re on a mission to make{" "}
            </p>
            <p className="text-md md:text-lg text-[#0A0842] leading-relaxed mb-4 font-bold">
              protection and insurance better for customers and multiply
              opportunities for partners.{" "}
            </p>
            <p className="text-md md:text-lg text-[#0A0842] leading-relaxed font-bold">
              Bring your passion and skill to work every day. Our extraordinary
              team enjoys opportunities to work
            </p>
            <p className="text-md md:text-lg text-[#0A0842] leading-relaxed mb-4 font-bold">
              on exciting products across three continents, using the latest
              technology and pushing the industry forward.
            </p>
          </div>
        </div>
      </section>

      <section className="px-20 py-30 bg-white relative z-30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
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

      <section className="px-5 md:px-20 py-30 bg-white relative z-30">
        <Value />
      </section>

      <section className="bg-[#f0fdff] py-10">
        <div className="overflow-hidden relative">
          <div className="flex gap-4 px-20 animate-scroll whitespace-nowrap">
            <div className="flex flex-col gap-2 w-[280px] flex-shrink-0">
              <img
                src="/values/value5.jpg"
                className="h-[240px] w-full object-cover"
              />
              <img
                src="/values/value6.jpg"
                className="h-[240px] w-full object-cover"
              />
            </div>
            <img
              src="/values/value3.jpg"
              className="h-[488px] w-[280px] object-cover flex-shrink-0"
            />
            <div className="flex flex-col gap-2 w-[280px] flex-shrink-0">
              <img
                src="/values/value7.jpeg"
                className="h-[240px] w-full object-cover"
              />
              <img
                src="/values/value8.jpg"
                className="h-[240px] w-full object-cover"
              />
            </div>
            <img
              src="/values/value4.jpg"
              className="h-[488px] w-[280px] object-cover flex-shrink-0"
            />
            <div className="flex flex-col gap-2 w-[280px] flex-shrink-0">
              <img
                src="/values/value2.jpg"
                className="h-[240px] w-full object-cover"
              />
              <img
                src="/values/value1.jpg"
                className="h-[240px] w-full object-cover"
              />
            </div>
            <img
              src="/values/value9.jpg"
              className="h-[488px] w-[280px] object-cover flex-shrink-0"
            />
            <div className="flex flex-col gap-2 w-[280px] flex-shrink-0">
              <img
                src="/values/value5.jpg"
                className="h-[240px] w-full object-cover"
              />
              <img
                src="/values/value6.jpg"
                className="h-[240px] w-full object-cover"
              />
            </div>
            <img
              src="/values/value3.jpg"
              className="h-[488px] w-[280px] object-cover flex-shrink-0"
            />
            <div className="flex flex-col gap-2 w-[280px] flex-shrink-0">
              <img
                src="/values/value7.jpeg"
                className="h-[240px] w-full object-cover"
              />
              <img
                src="/values/value8.jpg"
                className="h-[240px] w-full object-cover"
              />
            </div>
            <img
              src="/values/value4.jpg"
              className="h-[488px] w-[280px] object-cover flex-shrink-0"
            />
            <div className="flex flex-col gap-2 w-[280px] flex-shrink-0">
              <img
                src="/values/value2.jpg"
                className="h-[240px] w-full object-cover"
              />
              <img
                src="/values/value1.jpg"
                className="h-[240px] w-full object-cover"
              />
            </div>
            <img
              src="/values/value9.jpg"
              className="h-[488px] w-[280px] object-cover flex-shrink-0"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-5 md:px-20">
        <TestimonialSlider />
      </section>

      <section className="w-full z-10 bg-gray-100 py-20 text-center">
        <h2 className="text-6xl md:text-6xl font-bold text-[#0A0842] mb-6">
          Join our team
        </h2>
        <button className="mt-6 relative overflow-hidden border px-4 py-3 text-md cursor-pointer border-cyan-500 group bg-cyan-500">
          <span className="relative font-bold z-10 text-[#0A0842] transition-opacity duration-300 group-hover:opacity-0">
            View Open Positions
          </span>

          <span
            className="absolute left-0 top-0 w-full h-full flex items-center justify-center font-bold
              opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
            style={{ color: "#0A0842" }}
          >
            View Open Positions
          </span>

          <span
            className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 
              origin-left transition-transform duration-600 ease-out group-hover:bg-cyan-600"
          ></span>
        </button>
      </section>
    </div>
  );
}
