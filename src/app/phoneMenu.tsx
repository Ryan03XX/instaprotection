"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

// --- 型別定義 ---
type SubSubMenuItem = {
  label: string;
  href: string;
};

type SubMenuItem = {
  label: string;
  href: string;
  collapsible?: boolean;
  subsubmenu?: SubSubMenuItem[];
};

type MenuItem = {
  label: string;
  description?: string;
  submenu: SubMenuItem[];
};

// --- Menu Data ---
const menuPhoneItems: MenuItem[] = [
  {
    label: "Platform",
    submenu: [
      {
        label: "Distribution Engine",
        href: "/distributionEngine",
        collapsible: true,
        subsubmenu: [
          {
            label: "Insurer Library",
            href: "/distributionEngine/insurerLibrary",
          },
          {
            label: "Dynamic Quoting Questionnaire",
            href: "/distributionEngine/dynamicQQ",
          },
          {
            label: "Product Configurator",
            href: "/distributionEngine/productConfigurator",
          },
          {
            label: "Data Marketplace",
            href: "/distributionEngine/dataMarketplace",
          },
          { label: "Data Insights", href: "/distributionEngine/dataInsights" },
          {
            label: "UI Design System",
            href: "/distributionEngine/designSystem",
          },
        ],
      },
      {
        label: "Sales",
        href: "/sales",
        collapsible: true,
        subsubmenu: [
          { label: "Embedded insurance API", href: "/sales/embeddedInsurance" },
          { label: "Consumer Portal", href: "/sales/consumerPortal" },
          { label: "Enablement", href: "/sales/enablement" },
          { label: "Agency Portal", href: "/sales/agencyPortal" },
          { label: "Partner Portal", href: "/sales/partnerPortal" },
          { label: "Fulfillment", href: "/sales/fulfillment" },
        ],
      },
      {
        label: "Servicing",
        href: "/servicing",
        collapsible: true,
        subsubmenu: [
          { label: "Servicing and Claim Portal", href: "/servicing/sncPortal" },
          {
            label: "Global Contact Centers",
            href: "/servicing/gcontactCenters",
          },
          { label: "Engagement Portal", href: "/servicing/engagementPortal" },
          { label: "Policy Admin", href: "/servicing/policyAdmin" },
          {
            label: "Servicing Ecosystem",
            href: "/servicing/servicingEcosystem",
          },
        ],
      },
      {
        label: "Custom Solutions",
        href: "/customSolutions",
        collapsible: true,
        subsubmenu: [
          {
            label: "Product Manufacturing",
            href: "/customSolutions/productManufacturing",
          },
          {
            label: "Insurance Entity Setup",
            href: "/customSolutions/insuranceEntitySetup",
          },
          {
            label: "Professional Services",
            href: "/customSolutions/professionalServices",
          },
          {
            label: "Insurer Advisory Services",
            href: "/customSolutions/insurerAdvisoryServices",
          },
          { label: "Integrations", href: "/customSolutions/integrations" },
        ],
      },
    ],
  },
  {
    label: "Programs",
    // description:
    //   "Tailored protection solutions provide comprehensive coverage and exceptional service to meet unique customer needs",
    submenu: [
      { label: "Mobile devices", href: "/mobile" },
      { label: "Consumer electronics", href: "/electronics" },
      { label: "Health tech", href: "/healtech" },
      { label: "Home", href: "/home" },
      { label: "Cyber", href: "/cyber" },
      { label: "Mobility", href: "/mobility" },
      { label: "Travel", href: "/travel" },
      { label: "Customized", href: "/customized" },
    ],
  },
  {
    label: "Use cases",
    submenu: [
      {
        label: "By Industry",
        href: "/financialServices",
        collapsible: true,
        subsubmenu: [
          {
            label: "Financial Services",
            href: "/financialServices",
          },
          {
            label: "Retailers",
            href: "/retailers",
          },
          {
            label: "Real Estate",
            href: "/realEstate",
          },
          {
            label: "Telco",
            href: "/telco",
          },
          { label: "Device OEMs", href: "/deviceOEM" },
          {
            label: "Everyone Else",
            href: "/everyoneElse",
          },
          {
            label: "Experiences",
            href: "/experiences",
          },
          {
            label: "Mobility OEMs",
            href: "/mobilityOEMs",
          },
        ],
      },
      {
        label: "By Insurance Player",
        href: "/insurers",
        collapsible: true,
        subsubmenu: [
          {
            label: "Insurers",
            href: "/insurers",
          },
          {
            label: "Insurance Agencies",
            href: "/insuranceAgencies",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    submenu: [
      {
        label: "Resource Hub",
        href: "/resources",
        collapsible: true,
        subsubmenu: [
          {
            label: "Case Studies",
            href: "/resources/caseStudy",
          },
          {
            label: "News",
            href: "/resources/resoucesNews",
          },
          {
            label: "Insights",
            href: "/resources/insights",
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    submenu: [
      { label: "Who We Are", href: "/about" },
      { label: "News", href: "/news" },
      { label: "Our Leadership", href: "/leadership" },
      { label: "Milestones", href: "/milestones" },
      { label: "Careers", href: "/careers" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

// --- Component ---
export default function MobileMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label));
    setActiveSubMenu(null); // 切換主選單時清除子選單
  };

  const toggleSubSubMenu = (label: string) => {
    setActiveSubMenu((prev) => (prev === label ? null : label));
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
            className="fixed top-[80px] left-0 w-full h-[100dvh] bg-white z-40 flex flex-col items-center px-6 pt-6 space-y-6 overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            <nav className="w-full">
              {menuPhoneItems.map((item, index) => (
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

                  <AnimatePresence>
                    {activeMenu === item.label && (
                      <motion.ul
                        className={`mt-2 space-y-2 ${
                          item.description ? "p-4 rounded-md mt-4" : ""
                        }`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.description && (
                          <p className="text-sm text-gray-500 mt-2">
                            {item.description}
                          </p>
                        )}
                        {item.submenu.map((sub: SubMenuItem, idx: number) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 font-semibold"
                          >
                            {sub.collapsible && sub.subsubmenu ? (
                              <>
                                <button
                                  className="w-full flex justify-between items-center py-1"
                                  onClick={() => toggleSubSubMenu(sub.label)}
                                >
                                  {sub.label}
                                  <motion.span
                                    animate={{
                                      rotate:
                                        activeSubMenu === sub.label ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    {activeSubMenu === sub.label ? (
                                      <ChevronUp size={16} />
                                    ) : (
                                      <ChevronDown size={16} />
                                    )}
                                  </motion.span>
                                </button>
                                <AnimatePresence>
                                  {activeSubMenu === sub.label && (
                                    <motion.ul
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="ml-4 mt-2 space-y-2 p-4 rounded-md"
                                    >
                                      {sub.subsubmenu.map(
                                        (
                                          subsub: SubSubMenuItem,
                                          subIdx: number
                                        ) => (
                                          <li key={subIdx}>
                                            <a
                                              href={subsub.href}
                                              className="block py-1 text-gray-600 hover:text-indigo-700"
                                              onClick={() => toggleMobileMenu()}
                                            >
                                              {subsub.label}
                                            </a>
                                          </li>
                                        )
                                      )}
                                    </motion.ul>
                                  )}
                                </AnimatePresence>
                              </>
                            ) : (
                              <a
                                href={sub.href}
                                className="block py-1 hover:text-indigo-700"
                                onClick={() => toggleMobileMenu()}
                              >
                                {sub.label}
                              </a>
                            )}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  {index === menuPhoneItems.length - 1 && <div className="h-32" />}
                </div>

              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
