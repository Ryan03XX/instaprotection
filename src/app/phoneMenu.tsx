"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const menuPhoneItems = [
  {
    label: "Platform",
    submenu: [
      {
        label: "Distribution Engine",
        href: "/platform/distribution",
        collapsible: true,
        subsubmenu: ["Sales", "Servicing", "Custom solutions"],
      },
    ],
  },
  {
    label: "Programs",
    description:
      "Tailored protection solutions provide comprehensive coverage and exceptional service to meet unique customer needs",
    submenu: [
      { label: "Mobile devices", icon: "📱", href: "/programs/mobile" },
      {
        label: "Consumer electronics",
        icon: "💻",
        href: "/programs/electronics",
      },
      { label: "Health tech", icon: "💊", href: "/programs/health" },
      { label: "Home", icon: "🏠", href: "/programs/home" },
      {
        label: "bolt Prevention Technology",
        icon: "💡",
        href: "/programs/prevention",
      },
      { label: "Mobility", icon: "🚗", href: "/programs/mobility" },
      { label: "Travel", icon: "✈️", href: "/programs/travel" },
    ],
  },
  {
    label: "Use cases",
    submenu: [
      { label: "Retail", href: "/use-cases/retail" },
      { label: "Telco", href: "/use-cases/telco" },
    ],
  },
  {
    label: "Resources",
    submenu: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Help Center", href: "/resources/help" },
    ],
  },
  {
    label: "Company",
    submenu: [
      { label: "About", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
];

export default function MobileMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
    setActiveMenu(null);
  };

  const toggleSubMenu = (label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  return (
    <div className="relative z-10">
      <button
        onClick={toggleMobileMenu}
        className="z-50 relative p-2 bg-transparent"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center px-6 pt-24 space-y-6 overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            {/* <div className="w-full text-center mt-10">
              <div className="flex justify-start gap-6 mb-6">
                <span className="flex items-center gap-2">
                  🌐 <span>EN</span>
                </span>
              </div>
              <div className="flex justify-start gap-6 mb-6">
                <span className="flex items-center gap-2">
                  🎧 <span>Customer service</span>
                </span>
              </div>
              <button className="w-full bg-[#00BAC7] text-[#0A0842] py-3 font-semibold mb-4">
                Get started
              </button>
            </div> */}
            <nav className="w-full">
              {menuPhoneItems.map((item) => (
                <div key={item.label} className="border-t border-gray-300 py-6">
                  <button
                    className="w-full text-left font-semibold text-xl flex justify-between items-center text-[#0A0842]"
                    onClick={() => toggleSubMenu(item.label)}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: activeMenu === item.label ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeMenu === item.label ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </motion.span>
                  </button>

                  {item.description && (
                    <p className="text-sm text-gray-500 mt-2">
                      {item.description}
                    </p>
                  )}

                  <AnimatePresence>
                    {activeMenu === item.label && (
                      <motion.ul
                        className={`mt-2 space-y-2 ${
                          item.description
                            ? "bg-blue-50 p-4 rounded-md mt-4"
                            : ""
                        }`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.submenu.map((sub, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-sm text-gray-700"
                          >
                            {/* {sub.icon && <span>{sub.icon}</span>} */}
                            <Link
                              href={sub.href}
                              className="hover:text-indigo-700 block py-1"
                              onClick={() => toggleMobileMenu()}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
