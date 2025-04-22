"use client";
import FadeInOnceFromHorizon from "@/app/horizonFadeIn";
import FadeInOnceFromHorizon2 from "@/app/horizonFadeIn2";
import React, { useState } from "react";

type NewsItem = {
  date: string;
  title: string;
  link: string;
};

const newsList: NewsItem[] = [
  {
    date: "1 April 2025",
    title:
      "bolt Prevention Technology launches to help home insurers reduce water damage losses",
    link: "#",
  },
  {
    date: "17 March 2025",
    title: "bolttech appoints Ridhi Chaudhary to Board of Directors",
    link: "#",
  },
  {
    date: "18 March 2025",
    title: "bolt partners with C Spire to deliver C Spire Tech Protection",
    link: "#",
  },
  {
    date: "5 March 2025",
    title:
      "bolt Unveils Dynamic Quoting Questionnaire 2.1, Making Insurance Quotes Faster Than Ever",
    link: "#",
  },
  {
    date: "24 February 2025",
    title: "bolttech to participate in the inaugural Aurora Marathon 2025",
    link: "#",
  },
  {
    date: "20 December 2024",
    title:
      "Global insurtech bolttech announces Series C funding led by Dragon Fund to drive continued expansion",
    link: "#",
  },
  {
    date: "4 December 2024",
    title:
      "Thailand Post partners with bolttech to launch online motor insurance",
    link: "#",
  },
  {
    date: "20 November 2024",
    title: "bolttech and HSBC close up to USD50 million venture debt facility",
    link: "#",
  },
  {
    date: "22 October 2024",
    title:
      "Tune Protect and bolttech Insurance Partner to Launch AirAsia Travel Insurance in Hong Kong",
    link: "#",
  },
];

export default function About() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(newsList.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = newsList.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
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
              News
            </span>
          </h1>
        </FadeInOnceFromHorizon2>

        <div></div>
        <FadeInOnceFromHorizon>
          <h3 className="text-xl md:text-2xl text-white z-10 font-bold">
            The latest updates from bolttech
          </h3>
        </FadeInOnceFromHorizon>
      </main>
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">News</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
            {paginatedNews.map((news, index) => (
              <div
                key={index}
                className="bg-white border p-5 h-64 cursor-pointer relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[3px] hover:after:bg-[#0A0842] after:transition-all after:duration-300"
              >
                <div>
                  <p className="text-sm text-gray-500">{news.date}</p>
                  <h3 className="text-base font-semibold mt-2 text-blue-900">
                    {news.title}
                  </h3>
                </div>
                <a
                  href={news.link}
                  className="text-sm text-[#0A0842] font-medium mt-4"
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 space-x-2 text-sm">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border text-gray-500 hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 border cursor-pointer ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border text-gray-500 hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </section>
      <section className="w-full z-10 bg-gray-100 py-5"></section>
    </div>
  );
}
