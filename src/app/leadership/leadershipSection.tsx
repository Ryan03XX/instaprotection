"use client";

import Image from "next/image";
import { useState } from "react";

type Leader = {
  name: string;
  title: string;
  img: string;
};

const leaders: Record<string, Leader[]> = {
  "Our Board": [
    {
      name: "Richard Li",
      title: "Chairman",
      img: "/leaders/leader4.jpg",
    },
    {
      name: "Malcolm Turnbull",
      title: "Non-executive Director",
      img: "/leaders/leader3.jpg",
    },
    {
      name: "Connie Liu",
      title: "Non-executive Director",
      img: "/leaders/leader1.jpeg",
    },
    {
      name: "Findy Lam",
      title: "Non-executive Director",
      img: "/leaders/leader2.jpg",
    },
  ],
  "Our Leaders": [
    {
        name: "Richard Li",
        title: "Chairman",
        img: "/leaders/leader6.jpg",
      },
      {
        name: "Malcolm Turnbull",
        title: "Non-executive Director",
        img: "/leaders/leader8.jpg",
      },
      {
        name: "Connie Liu",
        title: "Non-executive Director",
        img: "/leaders/leader5.jpg",
      },
      {
        name: "Findy Lam",
        title: "Non-executive Director",
        img: "/leaders/leader7.jpg",
      },
  ],
//   "US Leadership": [],
//   "Regional Leadership": [],
};

export default function LeadershipSection() {
  const tabKeys = Object.keys(leaders); 
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
            }` }
          >
            {tab}
          </button>
        ))}
      </div>

      {leaders[activeTab].length > 0 ? (
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
          {leaders[activeTab].map((leader) => (
            <div key={leader.name} className="text-center group">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={leader.img}
                  alt={leader.name}
                  width={300}
                  height={300}
                  className="w-[300px] h-[300px] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#0A0842]">
                {leader.name}
              </h3>
              <p className="text-[#5B5A8C]">{leader.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[#5B5A8C] text-center text-lg">
          No data available for this section.
        </p>
      )}
    </div>
  );
}
