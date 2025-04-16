import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A0842] text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-2 py-30">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div>
            <h6 className="mb-6 text-lg text-cyan-300 cursor-default">
              Platform
            </h6>
            <h4 className="font-bold mb-3 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Distrubution Engine
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Insurer library
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Dynamic quoting questionnaire
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Data marketplace
                  </a>
                </Link>
              </li>
            </ul>

            <h4 className="font-bold mb-3 mt-8 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Sales
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Device Protection
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Insurance
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Embedded insurance API
                  </a>
                </Link>
              </li>
            </ul>

            <h4 className="font-bold mb-3 mt-8 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Customer Servicing
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Servicing and claims portal
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Policy admin
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Global contact centers
                  </a>
                </Link>
              </li>
            </ul>

            <h4 className="font-bold mb-3 mt-8 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Solutions
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Device Protection
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    insurer advisory services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Insurance entity setup
                  </a>
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
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Mobile devices
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Consumer electronics
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Customized
                  </a>
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
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Financial services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Financial services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Mobility OEMs
                  </a>
                </Link>
              </li>
            </ul>

            <h4 className="font-bold mb-3 mt-6 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              By insurance player
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Insurers
                  </a>
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
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Case studies
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    News
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Insights
                  </a>
                </Link>
              </li>
            </ul>

            <h4 className="font-bold mb-3 mt-6 text-md text-white cursor-pointer hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Help
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Customer Service
                  </a>
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
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Who we are
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Our leadership
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#" className="underline-hover">
                    Careers
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t pt-6">
          <div className="flex items-center space-x-6 text-md">
            <Link href="#">
              <a href="/">
                <Image
                  src="/assets/logo.jpg"
                  alt="Company Logo"
                  className="h-15 w-auto"
                />
              </a>
            </Link>
            <Link href="#">
              <a
                href="#"
                className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
              >
                Disclaimer
              </a>
            </Link>
            <Link href="#">
              <a
                href="#"
                className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
              >
                Privacy Notice - Global
              </a>
            </Link>
            <Link href="#">
              <a
                href="#"
                className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
              >
                Cookie Policy
              </a>
            </Link>
          </div>

          <div className="justify-between items-center flex space-x-4 mt-4 md:mt-0 gap-6">
            <a href="#">
              <FaLinkedinIn className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
            <a href="#">
              <FaYoutube className="text-white text-2xl hover:text-yellow-300 transition-colors duration-300 ease-in-out" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
