"use client";

import {
  Building,
  ShieldCheck,
  Briefcase,
  ChevronRight,
  Phone,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { AnimatedCounter } from "./animatedCounter";
import Image from "next/image";
import Link from "next/link";

const data = {
  financial: {
    title: "Financial services",
    icon: Building,
    image: "/assets/healtech.jpg",
    text: "A personal lines broker partnered with bolttech to modernize its operations, adopting a fully digital insurance platform. This shift improved client service, streamlined quoting processes, and drove substantial growth in premium volume, maintaining their reputation for tailored solutions.",
    stats: [
      { label: "Increased revenue", value: "75%+" },
      { label: "Conversion increase", value: "135%" },
      { label: "Improved net promoter score", value: "80%+" },
    ],
  },
  insurer: {
    title: "Insurer",
    icon: ShieldCheck,
    image: "/assets/home.jpg",
    text: "A national insurer partnered with bolttech to implement a unified insurance distribution platform, expanding its agent network, increasing quoted premiums, and improving service efficiency to meet growing market demands while enhancing customer satisfaction nationwide.",
    stats: [
      { label: "Agent growth in 5 year", value: "300%" },
      { label: "In quoted premiums since 2021", value: "4000" },
      { label: "Daily insurance quotes", value: "20000" },
    ],
  },
  telco: {
    title: "Telco",
    icon: Phone,
    image: "/assets/mobile.jpg",
    text: "An Italian mobile network operator partnered with bolttech to implement advanced device protection and lifecycle solutions, boosting sales, expanding its market, and enhancing customer loyalty while positioning itself as a market leader in device management.",
    stats: [
      { label: "Sales increase", value: "5x" },
      { label: "Improved NPS", value: "50+" },
      { label: "Service requests processed within 24hrs", value: "99%" },
    ],
  },
  broker: {
    title: "Broker",
    icon: Briefcase,
    image: "/assets/background.jpg",
    text: "A personal lines broker partnered with bolttech to modernize its operations, adopting a fully digital insurance platform. This shift improved client service, streamlined quoting processes, and drove substantial growth in premium volume, maintaining their reputation for tailored solutions.",
    stats: [
      { label: "Premium growth", value: "113%" },
      { label: "Digital Transformation", value: "100%" },
    ],
  },
};

const IndustrySection = () => {
  const [active, setActive] = useState<
    "financial" | "insurer" | "telco" | "broker"
  >("financial");
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const current = data[active];
  const Icon = current.icon;

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        else {
          const keys = Object.keys(data) as (
            | "financial"
            | "insurer"
            | "telco"
            | "broker"
          )[];
          const currentIndex = keys.indexOf(active);
          const nextIndex = (currentIndex + 1) % keys.length;
          setActive(keys[nextIndex]);
          return 0;
        }
      });
    }, 60); // 100% in 60 seconds

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [active]);

  const handleTabClick = (
    key: "financial" | "insurer" | "telco" | "broker"
  ) => {
    setActive(key);
    setProgress(0); // Reset progress when tab is clicked manually
  };

  const menuKeys = Object.keys(data) as Array<
    "financial" | "insurer" | "telco" | "broker"
  >;
  const activeIndex = menuKeys.indexOf(active);

  return (
    <div className="w-full px-8 py-12 bg-white">
      <div className="flex justify-center gap-12 pb-6 relative">
        {Object.entries(data).map(([key, item], index) => {
          const IconComponent = item.icon;
          return (
            <button
              key={key}
              onClick={() => handleTabClick(key as any)}
              className={`flex items-center gap-4 px-10 py-2 text-2xl font-semibold transition-all duration-200 cursor-pointer relative text-[#0A0842]`}
            >
              <IconComponent className="w-5 h-5" />
              <span>{item.title}</span>

              {/* Blue Underline */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-[#534F85]`}
              ></div>

              {/* Cyan Progress Line */}
              {active === key && (
                <div
                  className="absolute bottom-0 left-0 h-1 bg-cyan-500 transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                  }}
                ></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Content Section */}
      <div className="mt-12 flex flex-col md:flex-row">
        {/* Image Block */}
        <div className="relative w-full md:w-[70%] h-[480px] overflow-hidden ml-20">
          <Image
            src={current.image}
            alt={current.title}
            width={300}
            height={120}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-transparent text-white p-6 max-w-md">
            <p className="text-md leading-relaxed">{current.text}</p>
            <Link
              href="#"
              className="inline-flex items-center text-white mt-4 group"
            >
              <span className="font-semibold">See the case study</span>
              <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="w-full md:w-[30%] flex flex-col justify-center gap-8 pl-10">
          {current.stats.map((stat, index) => {
            const hasSuffix = stat.value.includes("%");
            const numericValue = parseFloat(stat.value);

            return (
              <AnimatedCounter
                key={index}
                to={numericValue}
                label={stat.label}
                suffix={hasSuffix ? "%" : ""}
                duration={1.8}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndustrySection;
