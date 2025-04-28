"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type NewsItem = {
  date: string;
  category: string;
  title: string;
  img: string;
  a: string;
};

const newsData: Record<string, NewsItem[]> = {
  "Case Studies": [
    {
      date: "1 Jan 2024",
      category: "Case Studies",
      title: "Revolutionizing Fintech Solutions",
      img: "/assets/home.png",
      a: "#",
    },
    {
      date: "15 Feb 2024",
      category: "Case Studies",
      title: "AI Implementation in Healthcare",
      img: "/assets/healtech.jpg",
      a: "#",
    },
  ],
  News: [
    {
      date: "1 July 2024",
      category: "News",
      title: "Interview with our Group CEO",
      img: "/assets/global.jpg",
      a: "#",
    },
    {
      date: "20 August 2024",
      category: "News",
      title: "New Strategic Partnership Announced",
      img: "/assets/mobile.jpg",
      a: "#",
    },
  ],
  Insights: [
    {
      date: "10 March 2024",
      category: "Insights",
      title: "Top 5 Tech Trends in 2024",
      img: "/assets/mobile.jpg",
      a: "#",
    },
    {
      date: "30 April 2024",
      category: "Insights",
      title: "Building Sustainable Growth",
      img: "/assets/healtech.jpg",
      a: "#",
    },
  ],
};

const tabas: Record<string, string> = {
  "Case Studies": "/caseStudy",
  News: "/resourcesNews",
  Insights: "/insights",
};

export default function ResourcesSection() {
  const tabKeys = Object.keys(newsData);
  const [activeTab, setActiveTab] = useState(tabKeys[0]);

  return (
    <div className="px-6 md:px-20 py-12 bg-white">
      <div className="flex flex-wrap gap-6 text-lg font-semibold text-[#5B5A8C] mb-10 text-center items-center justify-center">
        {tabKeys.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition-all cursor-pointer px-2 ${
              activeTab === tab
                ? "text-[#0A0842] border-b-4 border-[#0A0842]"
                : "hover:text-[#0A0842]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {newsData[activeTab].length > 0 ? (
        <>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
            {newsData[activeTab].map((item) => (
              <div
                key={item.title}
                className="bg-white border p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[3px] hover:after:bg-[#0A0842] after:transition-all after:duration-300 relative"
              >
                <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                <div className="relative mb-2">
                  <span className="absolute top-1 left-1 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <Image
                    src={item.img}
                    className="rounded"
                    width={300}
                    height={120}
                    alt="News"
                  />
                </div>
                <h4 className="text-base font-semibold text-[#0A0842]">
                  {item.title}
                </h4>

                <a
                  href={item.a}
                  className="inline-flex items-center text-md text-[#0A0842] transition group mt-2"
                >
                  Read more
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a href={tabas[activeTab]}>
              <button className="relative overflow-hidden border px-4 py-3 text-md cursor-pointer border-cyan-500 group bg-cyan-500">
                <span className="relative font-bold z-10 text-[#0A0842] transition-opacity duration-300 group-hover:opacity-0">
                  View all {activeTab.toLowerCase()}
                </span>

                <span
                  className="absolute left-0 top-0 w-full h-full flex items-center justify-center font-bold
                  opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
                  style={{ color: "#0A0842" }}
                >
                  View all {activeTab.toLowerCase()}
                </span>

                <span
                  className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 
                  origin-left transition-transform duration-600 ease-out group-hover:bg-cyan-600"
                ></span>
              </button>
            </a>
          </div>
        </>
      ) : (
        <p className="text-[#5B5A8C] text-center text-lg">
          No data available for this section.
        </p>
      )}
    </div>
  );
}
