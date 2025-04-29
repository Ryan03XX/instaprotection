"use client";
import {
  FaAppStore,
  FaAppStoreIos,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

function FooterSection({
  title,
  as,
}: {
  title: string;
  as: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLUListElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

  return (
    <div className="w-full">
      <button
        className="w-full flex justify-between items-center text-md font-extrabold text-white md:cursor-default md:pointer-events-none mb-2"
        onClick={() => setOpen(!open)}
      >
        {title}
        <span className="md:hidden">
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <ul
        ref={contentRef}
        className="space-y-4 overflow-hidden transition-all duration-500 ease-in-out md:max-h-full md:block"
        style={{
          maxHeight: height,
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-10px)",
          transitionProperty: "max-height, opacity, transform",
        }}
      >
        {as.map((a, index) => (
          <li key={index}>
            <a href={a.href} className="text-gray-300 hover:underline">
              {a.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0842] text-gray-400 text-sm">
      <div className="w-full flex justify-center relative -mt-20">
        <div className="bg-cyan-100 px-8 py-6 md:py-12 w-full max-w-7xl transition-transform hover:scale-105">
          <div className="flex flex-col text-center md:flex-row justify-between items-center gap-4">
            <h2
              className="font-bold"
              style={{ fontSize: "2.125rem", color: "#0A0842" }}
            >
              Ready to transform your business?
            </h2>
            <a href="/contact">
              <button className="relative overflow-hidden border px-4 py-3 text-md cursor-pointer border-cyan-500 group bg-cyan-500">
                <span className="relative font-bold z-10 text-[#0A0842] transition-opacity duration-300 group-hover:opacity-0">
                  Get started
                </span>

                <span
                  className="absolute left-0 top-0 w-full h-full flex items-center justify-center font-bold
              opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
                  style={{ color: "#0A0842" }}
                >
                  Get started
                </span>

                <span
                  className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 
              origin-left transition-transform duration-600 ease-out group-hover:bg-cyan-600"
                ></span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-30 block md:hidden">
        <div className="md:grid md:grid-cols-5 md:gap-6 flex flex-col space-y-4 md:space-y-0">
          <h6 className="mb-4 text-xl text-cyan-300 cursor-default mt-10">
            Platform
          </h6>
          <FooterSection
            title="Distribution Engine"
            as={[
              { label: "Insurer Library", href: "/distributionEngine/insurerLibrary" },
              { label: "Dynamic Quoting Questionnaire", href: "/distributionEngine/dynamicQQ" },
              { label: "Product Configurator", href: "/distributionEngine/productConfigurator" },
              { label: "Data Marketplace", href: "/distributionEngine/dataMarketplace" },
              { label: "Data Insights", href: "/distributionEngine/dataInsights" },
              { label: "UI Design System", href: "/distributionEngine/designSystem" },
            ]}
          />
          <FooterSection
            title="Sales"
            as={[
              { label: "Embedded Insurance API", href: "/sales/embeddedInsurance" },
              { label: "Consumer Portal", href: "/sales/consumerPortal" },
              { label: "Enablement", href: "/sales/enablement" },
              { label: "Agency Portal", href: "/sales/agencyPortal" },
              { label: "Partner Portal", href: "/sales/partnerPortal" },
              { label: "Fulfillment", href: "/sales/fulfillment" },
            ]}
          />
          <FooterSection
            title="Servicing"
            as={[
              { label: "Servicing and claim Portal", href: "/servicing/sncPortal" },
              { label: "Global contact centers", href: "/servicing/gcontactCenters" },
              { label: "Engagement Portal", href: "/servicing/engagementPortal" },
              { label: "Policy Admin", href: "/servicing/policyAdmin" },
              { label: "Servicing Ecosystem", href: "/servicing/servicingEcosystem" },
            ]}
          />
          <FooterSection
            title="Custom Solutions"
            as={[
              { label: "Product Manufacturing", href: "/customSolutions/productManufacturing" },
              { label: "Insurance Entity Setup", href: "/customSolutions/insuranceEntitySetup" },
              { label: "Professional Services", href: "/customSolutions/profesionnalServices" },
              { label: "Insurer Advisory Services", href: "/customSolutions/insurerAdvisoryServices" },
              { label: "Integration", href: "/customSolutions/integration" },
            ]}
          />
        </div>
        <div className="md:grid md:grid-cols-5 md:gap-6 flex flex-col space-y-4 md:space-y-0">
          <h6 className="mb-4 text-xl text-cyan-300 cursor-default mt-10">
            Prorams
          </h6>
          <FooterSection
            title="Programs"
            as={[
              { label: "Mobile Devices", href: "/mobile" },
              { label: "Health Tech", href: "/healTech" },
              { label: "Consumer Electronics", href: "electronics" },
              { label: "Mobility", href: "/mobility" },
              { label: "Home", href: "/home" },
              { label: "Travel", href: "/travel" },
              { label: "Cyber", href: "/cyber" },
              { label: "Customized", href: "/customized" },
            ]}
          />
        </div>
        <div className="md:grid md:grid-cols-5 md:gap-6 flex flex-col space-y-4 md:space-y-0">
          <h6 className="mb-4 text-xl text-cyan-300 cursor-default mt-10">
            Use Cases
          </h6>
          <FooterSection
            title="By Industry"
            as={[
              { label: "Financial Services", href: "/financialServices" },
              { label: "Retailers", href: "/retailers" },
              { label: "Real Estate", href: "realEstate" },
              { label: "Telco", href: "/telco" },
              { label: "Device OEMs", href: "/deviceOEMs" },
              { label: "Everyone Else", href: "/everyoneElse" },
              { label: "Experiences", href: "/experiences" },
              { label: "Mobility OEMs", href: "mobilityOEMs" },
            ]}
          />
          <FooterSection
            title="By Insurance Player"
            as={[
              { label: "Insurers", href: "/insurers" },
              { label: "Insurance Agencies", href: "/insuranceAgencies" },
            ]}
          />
        </div>
        <div className="md:grid md:grid-cols-5 md:gap-6 flex flex-col space-y-4 md:space-y-0">
          <h6 className="mb-4 text-xl text-cyan-300 cursor-default mt-10">
            Resources
          </h6>
          <FooterSection
            title="Resource Hub"
            as={[
              { label: "Case Studies", href: "/caseStudy" },
              { label: "News", href: "/resourcesNews" },
              { label: "Insights", href: "/insights" },
            ]}
          />
        </div>
        <div className="md:grid md:grid-cols-5 md:gap-6 flex flex-col space-y-4 md:space-y-0">
          <h6 className="mb-4 text-xl text-cyan-300 cursor-default mt-10">
            Company
          </h6>
          <FooterSection
            title="Company"
            as={[
              { label: "Who We Are", href: "/about" },
              { label: "News", href: "/news" },
              { label: "Our Leadership", href: "/leadership" },
              { label: "Milestones", href: "/milestones" },
              { label: "Careers", href: "/careers" },
              { label: "FAQs", href: "/faqs" },
            ]}
          />
        </div>
        <div className="flex flex-col mt-8">
          <h1 className="text-white text-3xl font-semibold mb-4">
            Download App
          </h1>
          <div className="flex space-x-6 mr-35">
            <a
              href="https://apps.apple.com/my/app/instaprotection/id1497665476"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaAppStore className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ioiolab.instaprotect_droid&hl=en&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlay className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start mt-12 border-t pt-6">
          <div className="flex items-start space-x-6 text-md">
            <a href="/">
              <Image
                src="/instaLogo/insta_logo_white.svg"
                alt="Company Logo"
                width={300}
                height={120}
                className="h-15 w-60"
              />
            </a>
          </div>
          <div className="flex items-center space-x-6 text-md mt-6 font-bold">
            <a
              href="/privacyAndPolicy"
              className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
            >
              Privacy and Policy
            </a>

            <a
              href="/termsAndConditions"
              className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
            >
              Terms & Conditons
            </a>

            <a
              href="/disclaimer"
              className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
            >
              Disclaimer
            </a>
          </div>
          <div className="flex space-x-8 mt-16">
            <a
              href="https://www.facebook.com/InstaProtectionSG/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
            <a
              href="https://www.instagram.com/instaprotectionsg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaInstagram className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
            <a
              href="https://www.aedin.com/company/instaprotection-sg/?originalSubdomain=sg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaLinkedin className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
            <a
              href="https://wa.me/6598551971?text=hi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaWhatsapp className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
          </div>
          <div className="flex flex-col justify-center items-center mt-12">
            <div className="flex">
              <h4 className="text-md text-gray-400 cursor-default">
                © 2025 Instaprotection Pte. Ltd. All Rights Reserved
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 py-10 hidden md:block">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div>
            <h6 className="mb-6 text-xl text-cyan-300 cursor-default">
              Platform
            </h6>
            <a
              href="/distributionEngine"
              className="font-bold text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <h4>Distrubution Engine</h4>
            </a>
            <ul className="space-y-3">
              <li>
                <a
                  href="/distributionEngine/dataInsights"
                  className="underline-hover mt-3"
                >
                  Data Insights
                </a>
              </li>
              <li>
                <a
                  href="/distributionEngine/insurerLibrary"
                  className="underline-hover"
                >
                  Insurer library
                </a>
              </li>
              <li>
                <a
                  href="/distributionEngine/dynamicQQ"
                  className="underline-hover"
                >
                  Dynamic quoting questionnaire
                </a>
              </li>
              <li>
                <a
                  href="/distributionEngine/dataMarketPlace"
                  className="underline-hover"
                >
                  Data marketplace
                </a>
              </li>
              <li>
                <a
                  href="/distributionEngine/designSystem"
                  className="underline-hover"
                >
                  Design System
                </a>
              </li>
              <li>
                <a
                  href="/distributionEngine/productConfigurator"
                  className="underline-hover mb-6"
                >
                  Product Configurator
                </a>
              </li>
            </ul>

            <a
              href="/sales"
              className="font-bold text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <h4>Sales </h4>
            </a>
            <ul className="space-y-3">
              <li>
                <a href="/sales/enablement" className="underline-hover mt-3">
                  Enablement
                </a>
              </li>
              <li>
                <a href="/sales/fulfillment" className="underline-hover">
                  Fulfillment
                </a>
              </li>
              <li>
                <a href="/sales/partnerPortal" className="underline-hover">
                  Parter Portal
                </a>
              </li>
              <li>
                <a href="/sales/consumerPortal" className="underline-hover">
                  Consumer Portal
                </a>
              </li>
              <li>
                <a href="/sales/agencyPortal" className="underline-hover">
                  Agency Portal
                </a>
              </li>
              <li>
                <a href="/sales/partnerPortal" className="underline-hover mb-6">
                  Parter Portal
                </a>
              </li>
            </ul>

            <a
              href="/servicing"
              className="font-bold mb-3 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <h4>Customer Servicing </h4>
            </a>
            <ul className="space-y-3">
              <li>
                <a href="/servicing/sncPortal" className="underline-hover mt-3">
                  Servicing and Claim Portal
                </a>
              </li>
              <li>
                <a
                  href="/servicing/engagementPortal"
                  className="underline-hover"
                >
                  Engagement Portal
                </a>
              </li>
              <li>
                <a
                  href="/servicing/gcontactCenters"
                  className="underline-hover"
                >
                  Global contact centers
                </a>
              </li>
              <li>
                <a href="/servicing/policyAdmin" className="underline-hover">
                  Policy Admin
                </a>
              </li>
              <li>
                <a
                  href="/servicing/servicingEcosystem"
                  className="underline-hover mb-6"
                >
                  Servicing Ecosystem
                </a>
              </li>
            </ul>

            <a
              href="/customSolutions"
              className="font-bold text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <h4>Custom Solutions </h4>
            </a>
            <ul className="space-y-3">
              <li>
                <a
                  href="/customSolutions/productManufacturing"
                  className="underline-hover mt-3"
                >
                  Product Manufacturing
                </a>
              </li>
              <li>
                <a
                  href="/customSolutions/insuranceEntitySetup"
                  className="underline-hover"
                >
                  Insurance Entity Setup
                </a>
              </li>
              <li>
                <a
                  href="/customSolutions/professionalServices"
                  className="underline-hover"
                >
                  Professional Services
                </a>
              </li>
              <li>
                <a
                  href="/customSolutions/insurerAdvisoryServices"
                  className="underline-hover"
                >
                  Insurance Advisory Services
                </a>
              </li>
              <li>
                <a
                  href="/customSolutions/integrations"
                  className="underline-hover"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-6 text-lg text-cyan-300 cursor-default">
              Programs
            </h6>
            <h4 className="font-bold mb-3 text-md text-white cursor-default">
              By Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/mobile" className="underline-hover">
                  Mobile devices
                </a>
              </li>
              <li>
                <a href="/healTech" className="underline-hover">
                  Health Tech
                </a>
              </li>
              <li>
                <a href="/electronics" className="underline-hover">
                  Consumer Electrinics
                </a>
              </li>
              <li>
                <a href="/mobility" className="underline-hover">
                  Mobility
                </a>
              </li>
              <li>
                <a href="/home" className="underline-hover">
                  Home
                </a>
              </li>
              <li>
                <a href="/travel" className="underline-hover">
                  Travel
                </a>
              </li>
              <li>
                <a href="/cyber" className="underline-hover">
                  Cyber
                </a>
              </li>
              <li>
                <a href="/customized" className="underline-hover">
                  Customized
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-6 text-lg text-cyan-300 cursor-default">
              Use cases
            </h6>

            <h4 className="font-bold mb-3 text-md text-white cursor-default">
              By Industry
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/financialServices" className="underline-hover">
                  Financial services
                </a>
              </li>
              <li>
                <a href="/retailers" className="underline-hover">
                  Retailers
                </a>
              </li>
              <li>
                <a href="/realEstate" className="underline-hover">
                  Real Estate
                </a>
              </li>
              <li>
                <a href="/telco" className="underline-hover">
                  Telco
                </a>
              </li>
              <li>
                <a href="/deviceOEM" className="underline-hover">
                  Device OEM
                </a>
              </li>
              <li>
                <a href="/everyoneElse" className="underline-hover">
                  Everyone Else
                </a>
              </li>
              <li>
                <a href="/experiences" className="underline-hover">
                  Experiences
                </a>
              </li>
              <li>
                <a href="/mobilityOEMs" className="underline-hover mb-6">
                  Mobility OEMs
                </a>
              </li>
            </ul>

            <h4 className="font-bold mb-3 text-md text-white cursor-default">
              By insurance player
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/insurers" className="underline-hover">
                  Insurers
                </a>
              </li>
              <li>
                <a href="/insuranceAgencies" className="underline-hover">
                  Insurers Agencies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-6 text-lg text-cyan-300 cursor-default">
              Resources
            </h6>

            <a
              href="/resources"
              className="font-bold mb-3 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <h4>Resources Hub</h4>
            </a>
            <ul className="space-y-3">
              <li>
                <a href="/caseStudy" className="underline-hover mt-3">
                  Case studies
                </a>
              </li>
              <li>
                <a href="/resoucesNews" className="underline-hover">
                  News
                </a>
              </li>
              <li>
                <a href="/insights" className="underline-hover">
                  Insights
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-6 text-lg text-cyan-300 cursor-default">
              Company
            </h6>

            <h4 className="font-bold mb-3 text-md text-white cursor-default">
              About Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="underline-hover">
                  Who we are
                </a>
              </li>
              <li>
                <a href="/leadership" className="underline-hover">
                  Our leadership
                </a>
              </li>
              <li>
                <a href="/careers" className="underline-hover">
                  Careers
                </a>
              </li>
              <li>
                <a href="/milestones" className="underline-hover">
                  Milestones
                </a>
              </li>
              <li>
                <a href="/news" className="underline-hover">
                  News
                </a>
              </li>
              <li>
                <a href="/faqs" className="underline-hover">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-end -mt-40 mb-50 mr-50">
          <h1 className="text-white text-3xl font-semibold mb-4 cursor-default">
            Download App
          </h1>
          <div className="flex space-x-4 mr-35">
            <a
              href="https://apps.apple.com/my/app/instaprotection/id1497665476"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaAppStore className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ioiolab.instaprotect_droid&hl=en&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlay className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t pt-6">
          <div className="flex items-center space-x-6 text-md">
            <a href="/">
              <Image
                src="/instaLogo/insta_logo_white.svg"
                alt="Company Logo"
                width={300}
                height={120}
                className="h-15 w-70"
              />
            </a>

            <a
              href="/privacyAndPolicy"
              className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
            >
              Privacy Policy
            </a>

            <a
              href="/termsAndConditions"
              className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
            >
              Terms & Conditons
            </a>

            <a
              href="/disclaimer"
              className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
            >
              Disclaimer
            </a>
          </div>

          <div className="justify-between items-center flex space-x-4 mt-4 md:mt-0 gap-3">
            <a
              href="https://www.facebook.com/InstaProtectionSG/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
            <a
              href="https://www.instagram.com/instaprotectionsg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaInstagram className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
            <a
              href="https://www.aedin.com/company/instaprotection-sg/?originalSubdomain=sg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaLinkedin className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
            <a
              href="https://wa.me/6598551971?text=hi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaWhatsapp className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-8">
          <div className="flex text-md">
            <h4 className="text-md text-gray-400 cursor-default">
              © 2025 Instaprotection Pte. Ltd. All Rights Reserved
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
