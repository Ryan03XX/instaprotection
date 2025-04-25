import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeInOnceOnScroll from "./fadeIn2";

export default function NewsSection() {
  return (
    <section className="px-4">
      <div className="max-w-7xl mx-auto">
        <FadeInOnceOnScroll>
          <h2 className="text-2xl md:text-3xl font-bold text-[#534F85] mb-2">
            Stay in the know
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-[#0A0842] mb-8">
            News & insights
          </h2>
        </FadeInOnceOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <FadeInOnceOnScroll>
              <div className="bg-white p-6 py-20 h-120 shadow-sm cursor-pointer relative bg-white p-6 py-20 h-120 shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[3px] hover:after:bg-[#0A0842] after:transition-all after:duration-300">
                <p className="text-sm text-gray-500 mb-2">05 December 2024</p>
                <h3 className="text-xl font-semibold text-[#0A0842] mb-2">
                  Global insurtech bolttech announces Series C funding led by
                  Dragon Fund to drive continued expansion{" "}
                </h3>
                <p className="text-sm text-[#0A0842] mb-4">
                  Singapore, 20 December 2024 – bolttech, the fast-growing
                  global insurtech, today announced Dragon Fund, by Liquidity
                  and MUFG, is leading bolttech’s Series C funding round
                  alongside investors Baillie Gifford, Generali – through Lion
                  River, the Group’s company dedicated to Private...
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center text-md text-[#0A0842] transition group mt-2"
                >
                  Read more
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeInOnceOnScroll>
            <FadeInOnceOnScroll>
              <div className="bg-white p-6 py-20 h-120 shadow-sm cursor-pointer relative shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[3px] hover:after:bg-[#0A0842] after:transition-all after:duration-300">
                <p className="text-sm text-gray-500 mb-2">14 June 2024</p>
                <h3 className="text-xl font-semibold text-[#0A0842] mb-2">
                  A new milestone for Stellantis Insurance: Stellantis Financial
                  Services US launches Embedded Insurance Program with bolt to
                  Expand Customer Choice
                </h3>
                <p className="text-sm text-[#0A0842] mb-4">
                  SAN FRANCISCO, CA – June 18, 2024 – Stellantis Financial
                  Services US, the captive automotive finance company of
                  Stellantis in North America, today announced Link new
                  partnership with bolt, the insurtech with the world’s largest
                  technology-enabled insurance exchange, to support customers...{" "}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center text-md text-[#0A0842] transition group mt-2"
                >
                  Read more
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeInOnceOnScroll>
          </div>

          <div className="space-y-6">
            <FadeInOnceOnScroll>
              <div className="bg-white p-4 cursor-pointer relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[3px] hover:after:bg-[#0A0842] after:transition-all after:duration-300">
                <p className="text-sm text-gray-500 mb-1">16 August 2024</p>
                <div className="relative mb-2">
                  <span className="absolute top-1 left-1 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                    Insights
                  </span>
                  <Image
                    src="/assets/home.png"
                    className="rounded"
                    width={300}
                    height={120}
                    alt="News"
                  />
                </div>
                <h4 className="text-base font-semibold text-[#0A0842]">
                  Wearables impact on underwriting
                </h4>

                <Link
                  href="#"
                  className="inline-flex items-center text-md text-[#0A0842] transition group mt-2"
                >
                  Read more
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeInOnceOnScroll>
            <FadeInOnceOnScroll>
              <div className="bg-white p-4 cursor-pointer relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[3px] hover:after:bg-[#0A0842] after:transition-all after:duration-300">
                <p className="text-sm text-gray-500 mb-1">23 March 2024</p>
                <h4 className="text-base font-semibold text-[#0A0842] mb-2">
                  Partnership with Singtel
                </h4>

                <Link
                  href="#"
                  className="inline-flex items-center text-md text-[#0A0842] transition group mt-2"
                >
                  Read more
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeInOnceOnScroll>
            <FadeInOnceOnScroll>
              <div className="bg-white p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[3px] hover:after:bg-[#0A0842] after:transition-all after:duration-300">
                <p className="text-sm text-gray-500 mb-1">1 July 2024</p>
                <div className="relative mb-2">
                  <span className="absolute top-1 left-1 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                    Insights
                  </span>
                  <Image
                    src="/assets/healtech.jpg"
                    className="rounded"
                    width={300}
                    height={120}
                    alt="News"
                  />
                </div>
                <h4 className="text-base font-semibold text-[#0A0842]">
                  Interview with our Group CEO
                </h4>

                <Link
                  href="#"
                  className="inline-flex items-center text-md text-[#0A0842] transition group mt-2"
                >
                  Read more
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeInOnceOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
