"use client";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

function FooterSection({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
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
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-gray-300 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0842] text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-30 block md:hidden">
        <div className="md:grid md:grid-cols-5 md:gap-6 flex flex-col space-y-4 md:space-y-0">
          <h6 className="mb-4 text-xl text-cyan-300 cursor-default mt-10">
            Platform
          </h6>
          <FooterSection
            title="Distribution Engine"
            links={[
              { label: "By product", href: "#" },
              { label: "API integration", href: "#" },
              { label: "Embedded insurance", href: "#" },
              { label: "Digital broker", href: "#" },
              { label: "Insurance core systems", href: "#" },
            ]}
          />
          <FooterSection
            title="Sales"
            links={[
              { label: "By industry", href: "#" },
              { label: "By insurance player", href: "#" },
            ]}
          />
          <FooterSection
            title="Servicing"
            links={[
              { label: "Blog", href: "#" },
              { label: "Help center", href: "#" },
              { label: "Developers", href: "#" },
              { label: "Security", href: "#" },
            ]}
          />
          <FooterSection
            title="Customer Solutions"
            links={[
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Partners", href: "#" },
              { label: "Newsroom", href: "#" },
              { label: "Contact", href: "#" },
            ]}
          />
        </div>
        <div className="md:grid md:grid-cols-5 md:gap-6 flex flex-col space-y-4 md:space-y-0">
          <h6 className="mb-4 text-xl text-cyan-300 cursor-default mt-10">
            Prorams
          </h6>
          <FooterSection
            title="By Product"
            links={[
              { label: "By product", href: "#" },
              { label: "API integration", href: "#" },
              { label: "Embedded insurance", href: "#" },
              { label: "Digital broker", href: "#" },
              { label: "Insurance core systems", href: "#" },
            ]}
          />
        </div>
        <div className="md:grid md:grid-cols-5 md:gap-6 flex flex-col space-y-4 md:space-y-0">
          <h6 className="mb-4 text-xl text-cyan-300 cursor-default mt-10">
            Use Cases
          </h6>
          <FooterSection
            title="By Industry"
            links={[
              { label: "By product", href: "#" },
              { label: "API integration", href: "#" },
              { label: "Embedded insurance", href: "#" },
              { label: "Digital broker", href: "#" },
              { label: "Insurance core systems", href: "#" },
            ]}
          />
          <FooterSection
            title="By Insurance Player"
            links={[
              { label: "By product", href: "#" },
              { label: "API integration", href: "#" },
              { label: "Embedded insurance", href: "#" },
              { label: "Digital broker", href: "#" },
              { label: "Insurance core systems", href: "#" },
            ]}
          />
        </div>
        <div className="md:grid md:grid-cols-5 md:gap-6 flex flex-col space-y-4 md:space-y-0">
          <h6 className="mb-4 text-xl text-cyan-300 cursor-default mt-10">
            Resources
          </h6>
          <FooterSection
            title="Resource Hub"
            links={[
              { label: "By product", href: "#" },
              { label: "API integration", href: "#" },
              { label: "Embedded insurance", href: "#" },
              { label: "Digital broker", href: "#" },
              { label: "Insurance core systems", href: "#" },
            ]}
          />
          <FooterSection
            title="help"
            links={[
              { label: "By product", href: "#" },
              { label: "API integration", href: "#" },
              { label: "Embedded insurance", href: "#" },
              { label: "Digital broker", href: "#" },
              { label: "Insurance core systems", href: "#" },
            ]}
          />
        </div>
        <div className="md:grid md:grid-cols-5 md:gap-6 flex flex-col space-y-4 md:space-y-0">
          <h6 className="mb-4 text-xl text-cyan-300 cursor-default mt-10">
            Company
          </h6>
          <FooterSection
            title="About Us"
            links={[
              { label: "By product", href: "#" },
              { label: "API integration", href: "#" },
              { label: "Embedded insurance", href: "#" },
              { label: "Digital broker", href: "#" },
              { label: "Insurance core systems", href: "#" },
            ]}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start mt-12 border-t pt-6">
          <div className="flex items-start space-x-6 text-md">
            <Link href="/">
              <Image
                src="/assets/logo.jpg"
                alt="Company Logo"
                width={300}
                height={120}
                className="h-15 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-6 text-md mt-6 font-bold">
            <Link
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
            >
              Disclaimer
            </Link>

            <Link
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
            >
              Privacy Notice - Global
            </Link>

            <Link
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
            >
              Cookie Policy
            </Link>
          </div>
          <div className="flex space-x-8 mt-16">
            <Link href="#">
              <FaLinkedinIn className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </Link>
            <Link href="#">
              <FaYoutube className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-2 py-30 hidden md:block">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div>
            <h6 className="mb-6 text-xl text-cyan-300 cursor-default">
              Platform
            </h6>
            <h4 className="font-bold mb-3 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Distrubution Engine
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="underline-hover">
                  Insurer library
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Dynamic quoting questionnaire
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Data marketplace
                </Link>
              </li>
            </ul>

            <h4 className="font-bold mb-3 mt-8 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Sales
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="underline-hover">
                  Device Protection
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Embedded insurance API
                </Link>
              </li>
            </ul>

            <h4 className="font-bold mb-3 mt-8 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Customer Servicing
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="underline-hover">
                  Servicing and claims portal
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Policy admin
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Global contact centers
                </Link>
              </li>
            </ul>

            <h4 className="font-bold mb-3 mt-8 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Solutions
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="underline-hover">
                  Device Protection
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  insurer advisory services
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Insurance entity setup
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-6 text-lg text-cyan-300 cursor-default">
              Programs
            </h6>
            <h4 className="font-bold mb-3 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              By Product
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="underline-hover">
                  Mobile devices
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Consumer electronics
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Customized
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-6 text-lg text-cyan-300 cursor-default">
              Use cases
            </h6>

            <h4 className="font-bold mb-3 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              By Industry
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="underline-hover">
                  Financial services
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Financial services
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Mobility OEMs
                </Link>
              </li>
            </ul>

            <h4 className="font-bold mb-3 mt-6 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              By insurance player
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="underline-hover">
                  Insurers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-6 text-lg text-cyan-300 cursor-default">
              Resources
            </h6>

            <h4 className="font-bold mb-3 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Resource Hub
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="underline-hover">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Insights
                </Link>
              </li>
            </ul>

            <h4 className="font-bold mb-3 mt-6 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Help
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="underline-hover">
                  Customer Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-6 text-lg text-cyan-300 cursor-default">
              Company
            </h6>

            <h4 className="font-bold mb-3 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              About Us
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="underline-hover">
                  Who we are
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Our leadership
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-hover">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t pt-6">
          <div className="flex items-center space-x-6 text-md">
            <Link href="/">
              <Image
                src="/assets/logo.jpg"
                alt="Company Logo"
                width={300}
                height={120}
                className="h-15 w-auto"
              />
            </Link>

            <Link
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
            >
              Disclaimer
            </Link>

            <Link
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
            >
              Privacy Notice - Global
            </Link>

            <Link
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
            >
              Cookie Policy
            </Link>
          </div>

          <div className="justify-between items-center flex space-x-4 mt-4 md:mt-0 gap-6">
            <Link href="#">
              <FaLinkedinIn className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </Link>
            <Link href="#">
              <FaYoutube className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
