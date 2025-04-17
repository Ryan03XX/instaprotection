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
      { label: "Overview", href: "/platform/overview" },
      { label: "Technology", href: "/platform/tech" },
    ],
  },
  {
    label: "Programs",
    submenu: [
      { label: "Partner Program", href: "/programs/partners" },
      { label: "Affiliate", href: "/programs/affiliate" },
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

export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setActiveMenu(null); 
  };

  const toggleSubMenu = (label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  return (
    <div className="relative z-10">
      <button onClick={toggleMobileMenu} className="z-50 relative p-2 bg-transparent">
        <motion.div
          initial={false}
          animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center px-6 pt-24 space-y-6 overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-full text-center mt-10">
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
            </div>
            <nav className="w-full">
              {menuPhoneItems.map((item) => (
                <div key={item.label} className="border-t border-t-gray-300 py-8">
                  <button
                    className="w-full text-left font-semibold text-2xl flex justify-between items-center text-[#0A0842]"
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

                  <AnimatePresence>
                    {activeMenu === item.label && (
                      <motion.ul
                        className="pl-4 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.submenu.map((sub, idx) => (
                          <li key={idx}>
                            <Link
                              href={sub.href}
                              className="text-sm text-gray-600 hover:text-indigo-700 block py-1"
                              onClick={() => {
                                toggleMobileMenu();
                                setActiveMenu(null);
                              }}
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
