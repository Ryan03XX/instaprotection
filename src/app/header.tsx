"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Phone,
  HeartPulse,
  Car,
  Shield,
  Laptop,
  Home,
  Plane,
  User,
  Rocket,
  Users,
  Newspaper,
  Sprout,
  ChevronRight,
  Earth,
  Headset,
  Milestone,
  MessageCircleQuestion,
  PersonStanding,
  X,
  Menu,
} from "lucide-react";
import Link from "next/link";
import MobileMenu from "./phoneMenu";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [activeSubTab, setActiveSubTab] = useState("By Industry");
  const [resourceActiveSubTab, setResourceActiveSubTab] =
    useState("Resource Hub");
  const [platformActiveSubTab, setPlatformActiveSubTab] = useState(
    "Distribution Engine"
  );
  const [casesIndicatorStyle, setUseCasesIndicatorStyle] = useState({});
  const [resourceIndicatorStyle, setResourceIndicatorStyle] = useState({});
  const [platformIndicatorStyle, setPlatformIndicatorStyle] = useState({});

  const useCasesTabs = ["By Industry", "By Insurance Player"];
  const resourceTabs = ["Resource Hub"];
  const platformTabs = [
    "Distribution Engine",
    "Sales",
    "Servicing",
    "Custom Solutions",
  ];
  const tabRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const resourceTabRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const platformTabRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [showHeader, setShowHeader] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    if (activeMenu === "Platform") {
      setTimeout(() => {
        const activeTab = platformTabRefs.current[platformActiveSubTab];
        if (activeTab) {
          const { offsetLeft, clientWidth } = activeTab;
          setPlatformIndicatorStyle({
            left: offsetLeft,
            width: clientWidth,
          });
        }
      }, 0);
    }
  }, [activeMenu]);

  useEffect(() => {
    if (activeMenu === "Use cases") {
      setTimeout(() => {
        const activeTab = tabRefs.current[activeSubTab];
        if (activeTab) {
          const { offsetLeft, clientWidth } = activeTab;
          setUseCasesIndicatorStyle({
            left: offsetLeft,
            width: clientWidth,
          });
        }
      }, 0);
    }
  }, [activeMenu]);

  useEffect(() => {
    if (activeMenu === "Resources") {
      setTimeout(() => {
        const activeTab = resourceTabRefs.current[resourceActiveSubTab];
        if (activeTab) {
          const { offsetLeft, clientWidth } = activeTab;
          setResourceIndicatorStyle({
            left: offsetLeft,
            width: clientWidth,
          });
        }
      }, 0);
    }
  }, [activeMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
  
      if (window.scrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
  
      lastScrollY.current = window.scrollY;
    };
  
    if (window.scrollY === 0) {
      setAtTop(true);
      setShowHeader(true);
    } else {
      setAtTop(false);
      setShowHeader(false);
    }
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  useEffect(() => {
    const activeTab = tabRefs.current[activeSubTab];
    if (activeTab) {
      const { offsetLeft, clientWidth } = activeTab;
      setUseCasesIndicatorStyle({
        left: offsetLeft,
        width: clientWidth,
      });
    }
  }, [activeSubTab]);

  useEffect(() => {
    const activeTab = resourceTabRefs.current[resourceActiveSubTab];
    if (activeTab) {
      const { offsetLeft, clientWidth } = activeTab;
      setResourceIndicatorStyle({
        left: offsetLeft,
        width: clientWidth,
      });
    }
  }, [resourceActiveSubTab]);

  useEffect(() => {
    const activeTab = platformTabRefs.current[platformActiveSubTab];
    if (activeTab) {
      const { offsetLeft, clientWidth } = activeTab;
      setPlatformIndicatorStyle({
        left: offsetLeft,
        width: clientWidth,
      });
    }
  }, [platformActiveSubTab]);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setIsHovering(false);
    }, 200);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isHovering && atTop && isLangOpen) {
      setIsLangOpen(false);
    }
  }, [isHovering, atTop, isLangOpen]);


  const menuItems = [
    { label: "Platform" },
    { label: "Programs" },
    { label: "Use cases" },
    { label: "Resources" },
    { label: "Company" },
  ];

  const platformTab1 = [
    {
      icon: Rocket,
      title: "Insurer Library",
      desc: "Expand offerings, boost conversions, and increase revenue with a flexible insurance distribution platform.",
      href: "/distributionEngine/insurerLibrary",
    },
    {
      icon: Users,
      title: "Dynamic Quoting Questionnaire",
      desc: "Expand carrier and product access, streamline operations, and drive growth with more diverse insurance solutions.",
      href: "/distributionEngine/dynamicQQ",
    },
    {
      icon: Rocket,
      title: "Product Configurator",
      desc: "Expand offerings, boost conversions, and increase revenue with a flexible insurance distribution platform.",
      href: "/distributionEngine/productConfigurator",
    },
    {
      icon: Users,
      title: "Data Marketplace",
      desc: "Expand carrier and product access, streamline operations, and drive growth with more diverse insurance solutions.",
      href: "/distributionEngine/dataMarketplace",
    },
    {
      icon: Rocket,
      title: "Data Insights",
      desc: "Expand offerings, boost conversions, and increase revenue with a flexible insurance distribution platform.",
      href: "/distributionEngine/dataInsights",
    },
    {
      icon: Users,
      title: "UI Design System",
      desc: "Expand carrier and product access, streamline operations, and drive growth with more diverse insurance solutions.",
      href: "/distributionEngine/designSystem",
    },
  ];

  const platformTab2 = [
    {
      icon: Rocket,
      title: "Embedded Insurance API",
      desc: "Expand offerings, boost conversions, and increase revenue with a flexible insurance distribution platform.",
      href: "/sales/embeddedInsurance",
    },
    {
      icon: Users,
      title: "Consumer Portal",
      desc: "Expand carrier and product access, streamline operations, and drive growth with more diverse insurance solutions.",
      href: "/sales/consumerPortal",
    },
    {
      icon: Rocket,
      title: "Enablement",
      desc: "Expand offerings, boost conversions, and increase revenue with a flexible insurance distribution platform.",
      href: "/sales/enablement",
    },
    {
      icon: Users,
      title: "Agency Portal",
      desc: "Expand carrier and product access, streamline operations, and drive growth with more diverse insurance solutions.",
      href: "/sales/agencyPortal",
    },
    {
      icon: Rocket,
      title: "Partner portal",
      desc: "Expand offerings, boost conversions, and increase revenue with a flexible insurance distribution platform.",
      href: "/sales/partnerPortal",
    },
    {
      icon: Users,
      title: "Fulfillment",
      desc: "Expand carrier and product access, streamline operations, and drive growth with more diverse insurance solutions.",
      href: "/sales/fulfillment",
    },
  ];

  const platformTab3 = [
    {
      icon: Rocket,
      title: "Servicing and claim portal",
      desc: "Expand offerings, boost conversions, and increase revenue with a flexible insurance distribution platform.",
      href: "/servicing/sncPortal",
    },
    {
      icon: Users,
      title: "Global contact centers",
      desc: "Expand carrier and product access, streamline operations, and drive growth with more diverse insurance solutions.",
      href: "/servicing/gcontactCenters",
    },
    {
      icon: Rocket,
      title: "Engagement Portal",
      desc: "Expand offerings, boost conversions, and increase revenue with a flexible insurance distribution platform.",
      href: "/servicing/engagementPortal",
    },
    {
      icon: Users,
      title: "IPolicy Admin",
      desc: "Expand carrier and product access, streamline operations, and drive growth with more diverse insurance solutions.",
      href: "/servicing/policyAdmin",
    },
    {
      icon: Rocket,
      title: "Servicing Ecosystem",
      desc: "Expand offerings, boost conversions, and increase revenue with a flexible insurance distribution platform.",
      href: "/servicing/servicingEcosystem",
    },
  ];

  const platformTab4 = [
    {
      icon: Rocket,
      title: "Product Manufacturing",
      desc: "Expand offerings, boost conversions, and increase revenue with a flexible insurance distribution platform.",
      href: "/customSolutions/productManufacturing",
    },
    {
      icon: Users,
      title: "Insurance Entity Setup",
      desc: "Expand carrier and product access, streamline operations, and drive growth with more diverse insurance solutions.",
      href: "/customSolutions/insuranceEntitySetup",
    },
    {
      icon: Rocket,
      title: "Professional Services",
      desc: "Expand offerings, boost conversions, and increase revenue with a flexible insurance distribution platform.",
      href: "/customSolutions/professionalServices",
    },
    {
      icon: Users,
      title: "Insurer Advisory Services",
      desc: "Expand carrier and product access, streamline operations, and drive growth with more diverse insurance solutions.",
      href: "/customSolutions/insurerAdvisoryServices",
    },
    {
      icon: Rocket,
      title: "Integrations",
      desc: "Expand offerings, boost conversions, and increase revenue with a flexible insurance distribution platform.",
      href: "/customSolutions/integrations",
    },
  ];

  const programs = [
    {
      icon: Phone,
      title: "Mobile Devices",
      desc: "Market leading device lifecycle solutions.",
      href: "/mobile",
    },
    {
      icon: HeartPulse,
      title: "Health Tech",
      desc: "Comprehensive device protection.",
      href: "/healTech",
    },
    {
      icon: Laptop,
      title: "Consumer Electronics",
      desc: "Tech protection and fast repairs.",
      href: "/electronics",
    },
    {
      icon: Car,
      title: "Mobility",
      desc: "Integrated solutions for car insurance.",
      href: "/mobility",
    },
    {
      icon: Home,
      title: "Home",
      desc: "Holistic modularized coverage.",
      href: "/home",
    },
    {
      icon: Plane,
      title: "Travel",
      desc: "Travel protection for roaming customers.",
      href: "/travel",
    },
    {
      icon: Shield,
      title: "Cyber",
      desc: "Online safety and insurance coverage.",
      href: "/cyber",
    },
    {
      icon: User,
      title: "Customized",
      desc: "Unique insurance for diverse needs.",
      href: "/customized",
    },
  ];

  const useCasesTab1 = [
    {
      icon: Phone,
      title: "Financial Services",
      href: "/financialServices",
    },
    {
      icon: HeartPulse,
      title: "Retailers",
      href: "/retailers",
    },
    {
      icon: Laptop,
      title: "Real Estate",
      href: "/realEstate",
    },
    {
      icon: Car,
      title: "Telco",
      href: "/telco",
    },
    {
      icon: Plane,
      title: "Device OEMs",
      href: "/deviceOEM",
    },
    {
      icon: Shield,
      title: "Everyone Else",
      href: "/everyoneElse",
    },
    {
      icon: User,
      title: "Experiences",
      href: "/experiences",
    },
    {
      icon: User,
      title: "Mobility OEMs",
      href: "/mobilityOEMs",
    },
  ];

  const useCasesTab2 = [
    {
      icon: Rocket,
      title: "Insurers",
      desc: "Expand offerings, boost conversions, and increase revenue with a flexible insurance distribution platform.",
      href: "/insurers",
    },
    {
      icon: Users,
      title: "Insurance Agencies",
      desc: "Expand carrier and product access, streamline operations, and drive growth with more diverse insurance solutions.",
      href: "/insuranceAgencies",
    },
  ];

  const resources = [
    {
      icon: Rocket,
      title: "Case Studies",
      desc: "Explore real-world success stories and industry solutions.",
      href: "/caseStudy",
    },
    {
      icon: Newspaper,
      title: "News",
      desc: "Stay updated with the latest industry news and trends.",
      href: "/resourcesNews",
    },
    {
      icon: Users,
      title: "Insights",
      desc: "Gain expert perspectives and in-depth analysis on key tools.",
      href: "/insights",
    },
  ];

  const company = [
    {
      icon: Rocket,
      title: "Who We Are",
      desc: "Founded in 2016, INSTAPROTECTION is a leading InsurTech service provider in South-East Asia",
      href: "/about",
    },
    {
      icon: Newspaper,
      title: "News",
      desc: "Read the latest news and insights from Instaprotection",
      href: "/news",
    },
    {
      icon: PersonStanding,
      title: "Our Leadership",
      desc: "Instaprotection is led by an extraordinary team with the vision to shape the future and the experience to make it happen",
      href: "/leadership",
    },
    {
      icon: Milestone,
      title: "Milestones",
      desc: "Discover our journey from inception to becoming a trusted InsurTech leader in South-East Asia. Explore key moments, achievements, and innovations that define instaprotection's success story",
      href: "/milestones",
    },
    {
      icon: Users,
      title: "Careers",
      desc: "Join our team of pioneers transforming the way insurance is bought and sold. Be a part of dynamic and purpose-driven organization",
      href: "/careers",
    },
    {
      icon: MessageCircleQuestion,
      title: "FAQs",
      desc: "Frequently asked questions",
      href: "/faqs",
    },
  ];

  return (
    <div
      className="relative z-50"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsHovering(true);
      }}
    >
      <header
        className={`fixed top-0 left-0 w-full z-20 transition-colors duration-400 ${
          showHeader
            ? isHovering || !atTop
              ? "bg-white text-black"
              : "bg-transparent text-white"
            : "hidden"
        }`}
      >
        <div className="flex justify-between items-center px-4 md:px-0 py-8 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-indigo-700 cursor-pointer z-20">
            <Link
              onClick={() => (window.location.href = "/")}
              href="/"
              className={`${
                showHeader && (isHovering || !atTop)
                  ? "text-black"
                  : "text-white"
              }`}
            >
              <img
                src={
                  isHovering || !atTop
                    ? "/instaLogo/insta_logo_black.svg"
                    : "/instaLogo/insta_logo_white.svg"
                }
                alt="instaProtection Logo"
                className="w-auto h-8"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 ml-[-120px]">
            {menuItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => handleMouseEnter(item.label)}
                className="relative space-x-5"
              >
                <button
                  className={`relative px-1 py-1 text-md transition-colors duration-200 cursor-pointer
              ${
                activeMenu === item.label
                  ? isHovering || !atTop
                    ? "text-indigo-700"
                    : "text-white"
                  : isHovering || !atTop
                  ? "text-black hover:text-indigo-600"
                  : "text-white hover:text-gray-300"
              }
            `}
                >
                  {item.label}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left transform transition-transform duration-400
                    ${
                      activeMenu === item.label
                        ? "scale-x-100 bg-indigo-700"
                        : "scale-x-0 group-hover:scale-x-100 bg-indigo-400"
                    }
                    `}
                  />
                </button>

                <ChevronDown
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-transform duration-400 ${
                    activeMenu === item.label ? "rotate-180" : ""
                  }`}
                  size={16}
                />
              </div>
            ))}
          </nav>
          <div className="flex items-center space-x-8 hidden md:flex relative">
            <div className="relative">
              <button
                className="relative flex items-center gap-3 text-lg font-medium cursor-pointer group px-3 py-2"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <Earth className="w-6 h-6" />
                EN
                
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Dropdown */}
              {/* {isLangOpen && (
                <ul className="absolute right-0 mt-3 w-36 bg-white shadow-xl border z-50 text-base">
                  <li
                    onClick={() => {
                      // 切换到英文
                      setIsLangOpen(false);
                    }}
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                  >
                    English
                  </li>
                  <li
                    onClick={() => {
                      // 切换到中文
                      setIsLangOpen(false);
                    }}
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                  >
                    中文
                  </li>
                  <li
                    onClick={() => {
                      // 切换到马来文
                      setIsLangOpen(false);
                    }}
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                  >
                    Bahasa Melayu
                  </li>
                </ul>
              )} */}
            </div>
          </div>
          <div className="md:hidden">
            <MobileMenu
              isOpen={isMobileMenuOpen}
              setIsOpen={setIsMobileMenuOpen}
            />
          </div>
        </div>
      </header>

      {activeMenu === "Platform" && (
        <div
          className="fixed left-0 top-[88px] w-full bg-white"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto pt-6 pb-10">
            <div className="relative flex gap-6 mb-6">
              {platformTabs.map((tab) => (
                <div
                  key={tab}
                  ref={(el) => {
                    platformTabRefs.current[tab] = el;
                  }}
                  onClick={() => setPlatformActiveSubTab(tab)}
                  className={`cursor-pointer pb-2 text-lg transition-colors font-bold ${
                    platformActiveSubTab === tab
                      ? "text-black"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  {tab}
                </div>
              ))}

              <span
                className="absolute bottom-0 h-0.5 bg-black transition-all duration-300 ease-in-out"
                style={{
                  ...platformIndicatorStyle,
                  position: "absolute",
                }}
              />
            </div>

            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-1">
                <p className="text-lg text-gray-600 mb-2">
                  {platformActiveSubTab === "Distribution Engine" &&
                    "Comprehensive B2B2C protection and insurance platform that scales your business and powers embedded product choice"}
                  {platformActiveSubTab === "Sales" &&
                    "Unlock new revenue opportunities and streamline your insurance distribution with our sales solutions."}
                  {platformActiveSubTab === "Servicing" &&
                    "World class capabilities to support protection and insurance programs."}
                  {platformActiveSubTab === "Custom Solutions" &&
                    "Leverage deep industry and technology expertise to develop tailored protection and insurance solutions."}
                </p>

                {(platformActiveSubTab === "Distribution Engine" ||
                  platformActiveSubTab === "Sales" ||
                  platformActiveSubTab === "Servicing" ||
                  platformActiveSubTab === "Custom Solutions") && (
                  //   <Link
                  //   href={
                  //     platformActiveSubTab === "Distribution Engine"
                  //       ? "/distributionEngine"
                  //       : platformActiveSubTab === "Sales"
                  //       ? "/sales"
                  //       : platformActiveSubTab === "Servicing"
                  //       ? "/servicing"
                  //       : "/customSolutions"
                  //   }
                  //   className="inline-flex items-center text-md text-black transition group mt-2"
                  // >
                  //   Learn more
                  //   <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                  // </Link>
                  <a
                    href={
                      platformActiveSubTab === "Distribution Engine"
                        ? "/distributionEngine"
                        : platformActiveSubTab === "Sales"
                        ? "/sales"
                        : platformActiveSubTab === "Servicing"
                        ? "/servicing"
                        : "/customSolutions"
                    }
                    className="inline-flex items-center text-md text-black transition group mt-2"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                )}
              </div>

              {platformActiveSubTab === "Distribution Engine" ? (
                <div className="col-span-3 grid grid-cols-3 gap-6">
                  {platformTab1.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => (window.location.href = item.href)}
                    >
                      <div className="flex flex-col justify-between h-30 hover:bg-cyan-100 p-4 cursor-pointer hover:cyan-300">
                        <div className="flex space-x-3">
                          <item.icon className="text-indigo-700 w-5 h-5 mt-1 shrink-0 " />
                          <div>
                            <h4 className="font-semibold text-md text-gray-900">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-3">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : platformActiveSubTab === "Sales" ? (
                <div className="col-span-3 grid grid-cols-2 gap-2">
                  {platformTab2.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => (window.location.href = item.href)}
                    >
                      <div className="flex flex-col h-20 hover:bg-cyan-100 p-4 cursor-pointer hover:cyan-300 items-center justify-center">
                        <div className="flex space-x-3">
                          <item.icon className="text-indigo-700 w-5 h-5 mt-1 shrink-0 " />
                          <div>
                            <h4 className="font-semibold text-md text-gray-900">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-3">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : platformActiveSubTab === "Servicing" ? (
                <div className="col-span-3 grid grid-cols-2 gap-6">
                  {platformTab3.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => (window.location.href = item.href)}
                    >
                      <div className="flex flex-col h-20 hover:bg-cyan-100 p-4 cursor-pointer hover:cyan-300 items-center justify-center">
                        <div className="flex space-x-3">
                          <item.icon className="text-indigo-700 w-5 h-5 mt-1 shrink-0 " />
                          <div>
                            <h4 className="font-semibold text-md text-gray-900">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-3">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : platformActiveSubTab === "Custom Solutions" ? (
                <div className="col-span-3 grid grid-cols-2 gap-6">
                  {platformTab4.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => (window.location.href = item.href)}
                    >
                      <div className="flex flex-col justify-center items-center h-20 hover:bg-cyan-100 p-4 rounded cursor-pointer hover:cyan-300">
                        <div className="flex space-x-3">
                          <item.icon className="text-indigo-700 w-5 h-5 mt-1 shrink-0 " />
                          <div>
                            <h4 className="font-semibold text-md text-gray-900">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-3">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}

      {activeMenu === "Company" && (
        <div
          className="fixed left-0 top-[88px] w-full bg-white"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto py-10 grid grid-cols-3 gap-8">
            <div className="col-span-1">
              <p className="text-lg font-medium text-indigo-800 mb-2">
                At the heart of everything we do is the power of connection
              </p>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-6">
              {company.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => (window.location.href = item.href)}
                >
                  <div className="flex flex-col justify-between h-25 hover:bg-cyan-100 p-4 rounded cursor-pointer hover:cyan-300">
                    <div className="flex space-x-3">
                      <item.icon className="text-indigo-700 w-5 h-5 mt-1 shrink-0 " />
                      <div>
                        <h4 className="font-semibold text-md text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-600 line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeMenu === "Use cases" && (
        <div
          className="fixed left-0 top-[88px] w-full bg-white"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto pt-6 pb-10">
            <div className="relative flex gap-6 mb-6">
              {useCasesTabs.map((tab) => (
                <div
                  key={tab}
                  ref={(el) => {
                    tabRefs.current[tab] = el;
                  }}
                  onClick={() => setActiveSubTab(tab)}
                  className={`cursor-pointer pb-2 text-lg font-bold transition-colors ${
                    activeSubTab === tab
                      ? "text-black"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  {tab}
                </div>
              ))}

              <span
                className="absolute bottom-0 h-0.5 bg-black transition-all duration-300 ease-in-out"
                style={{
                  ...casesIndicatorStyle,
                  position: "absolute",
                }}
              />
            </div>

            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-1">
                <p className="text-md text-gray-600">
                  {activeSubTab === "By Industry"
                    ? "Embedded insurance solutions tailored for any industry, streamlining coverage with seamless digital integration"
                    : "Enabling insurers and agencies with comprehensive insurance solutions that optimize distribution, customer experience, and operational efficiency"}
                </p>
              </div>

              {activeSubTab === "By Industry" ? (
                <div className="col-span-3 grid grid-cols-3 gap-2">
                  {useCasesTab1.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => (window.location.href = item.href)}
                    >
                      <div className="flex flex-col justify-between h-15 hover:bg-cyan-100 p-4 rounded cursor-pointer hover:cyan-300">
                        <div className="flex space-x-3">
                          <item.icon className="text-indigo-700 w-5 h-5 mt-1 shrink-0 " />
                          <div>
                            <h4 className="font-semibold text-md text-gray-900">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : activeSubTab === "By Insurance Player" ? (
                <div className="col-span-3 grid grid-cols-3 gap-6">
                  {useCasesTab2.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => (window.location.href = item.href)}
                    >
                      <div className="flex flex-col justify-between h-30 hover:bg-cyan-100 p-4 rounded cursor-pointer hover:cyan-300">
                        <div className="flex space-x-3">
                          <item.icon className="text-indigo-700 w-5 h-5 mt-1 shrink-0 " />
                          <div>
                            <h4 className="font-semibold text-md text-gray-900">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-3">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}

      {activeMenu === "Programs" && (
        <div
          className="fixed left-0 top-[88px] w-full bg-white"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto py-10 grid grid-cols-4 gap-8">
            <div className="col-span-1">
              <p className="text-lg font-medium text-indigo-800 mb-2">
                Tailored protection solutions
              </p>
              <p className="text-md text-gray-600">
                Comprehensive coverage and exceptional service to meet unique
                customer needs.
              </p>
            </div>

            <div className="col-span-3 grid grid-cols-3 gap-6">
              {programs.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => (window.location.href = item.href)}
                >
                  <div className="flex flex-col justify-between h-20 hover:bg-cyan-100 p-4 rounded cursor-pointer hover:cyan-300">
                    <div className="flex space-x-3">
                      <item.icon className="text-indigo-700 w-5 h-5 mt-1 shrink-0 " />
                      <div>
                        <h4 className="font-semibold text-md text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-600 line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeMenu === "Resources" && (
        <div
          className="fixed left-0 top-[88px] w-full bg-white"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto pt-6 pb-10">
            <div className="relative flex gap-6 mb-6">
              {resourceTabs.map((tab) => (
                <div
                  key={tab}
                  ref={(el) => {
                    resourceTabRefs.current[tab] = el;
                  }}
                  onClick={() => setResourceActiveSubTab(tab)}
                  className={`cursor-pointer pb-2 text-lg font-bold transition-colors ${
                    resourceActiveSubTab === tab
                      ? "text-black"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  {tab}
                </div>
              ))}

              <span
                className="absolute bottom-0 h-0.5 bg-black transition-all duration-300 ease-in-out"
                style={{
                  ...resourceIndicatorStyle,
                  position: "absolute",
                }}
              />
            </div>

            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-1">
                <p className="text-md text-gray-600 mb-2">
                  {resourceActiveSubTab === "Resource Hub"
                    ? "Access key resources, insights, and the latest updates."
                    : ""}
                </p>

                {resourceActiveSubTab === "Resource Hub" && (
                  <a
                    href="resources"
                    className="inline-flex items-center text-md text-black transition group mt-2"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                )}
              </div>

              {resourceActiveSubTab === "Resource Hub" ? (
                <div className="col-span-3 grid grid-cols-3 gap-6">
                  {resources.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => (window.location.href = item.href)}
                    >
                      <div className="flex flex-col justify-between h-30 hover:bg-cyan-100 p-4 rounded cursor-pointer hover:cyan-300">
                        <div className="flex space-x-3">
                          <item.icon className="text-indigo-700 w-5 h-5 mt-1 shrink-0 " />
                          <div>
                            <h4 className="font-semibold text-md text-gray-900">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-3">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
