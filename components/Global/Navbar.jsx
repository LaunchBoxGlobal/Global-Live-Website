"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import Sidebar from "./Sidebar";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import NavbarDropdown from "./NavbarDropdown";

const augmentationLinks = [
  {
    title: "Off-Shore Software Development",
    pageUrl: "off-shore-software-development",
  },
  {
    title: "On-Demand Talent",
    pageUrl: "on-demand-talent",
  },
];

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [augmentationDropdown, setAugmentationDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);

  const pathname = usePathname();

  const isCareerPage =
    pathname === "/careers" ||
    /^\/careers\/[^/]+$/.test(pathname) ||
    /^\/careers\/[^/]+\/apply$/.test(pathname);

  const toggleIndustriesDropdown = () => {
    setIndustriesDropdown((prev) => !prev);
  };
  const toggleResourcesDropdown = () => {
    setResourcesDropdown((prev) => !prev);
  };

  const toggleAugmentationDropdown = () => {
    setAugmentationDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsHovered((prev) => !prev);
  };

  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  const handleNavClick = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <nav
      className={`py-3 md:py-7 flex items-center justify-between gap-2 fixed top-0 z-50 w-full padding-x bg-white lg:bg-transparent shadow-md lg:shadow-none`}
    >
      <Link
        href={"/"}
        className="rounded-[17px] bg-white lg:border border-[#CECEEA] outline-none h-[50px] 2xl:h-[60px] flex items-center justify-center gap-3 lg:px-2.5 xl:px-3.5"
      >
        <Image
          src={`/new-logo.svg`}
          width={180}
          height={45}
          alt="launchbox global logo"
          className="block"
        />

        <div className="border border-[#CECEEA] w-[0.5px] h-[27px] opacity-50 hidden lg:block" />
        <span className="text-xs font-light leading-none xl:leading-[14px] hidden lg:block">
          <strong>
            Trusted Talent, <br /> Anywhere, Anytime.
          </strong>
        </span>
      </Link>

      <ul className="hidden lg:flex items-center justify-center gap-5 xl:gap-x-7 mac:gap-x-8 bg-[#fff] px-8 rounded-[17px] border border-[#CECEEA] h-[50px] 2xl:h-[62px]">
        <li>
          <Link
            href={`/`}
            className={`font-normal text-sm xl:text-[17px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Home{" "}
          </Link>
        </li>

        {/* services dropdown */}
        <li
          className="z-50 h-full flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            type="button"
            name="services menu button"
            className="font-normal text-sm xl:text-[18px] 2xl:text-[22px] flex items-center justify-start gap-1 group"
          >
            Services{" "}
            <IoIosArrowDown
              className={`transition-transform duration-300 relative top-0.5 ${
                isHovered ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-transparent lg:w-[90%] midlg:w-[80%] 2xl:w-[74%] mx-auto absolute inset-x-0 mt-0 z-40 top-16 2xl:top-20"
            >
              <NavbarDropdown closeDropdown={closeDropdown} />
            </motion.span>
          )}
        </li>

        <li>
          <Link
            href={`/case-studies`}
            className={`font-normal text-sm xl:text-[17px] 2xl:text-[22px] flex items-center justify-start gap-1 group whitespace-nowrap`}
          >
            Case Studies{" "}
          </Link>
        </li>
        <li>
          <Link
            href={`/blog`}
            className={`font-normal text-sm xl:text-[17px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Blogs{" "}
          </Link>
        </li>

        <li
          className="z-50 h-full flex items-center"
          onMouseEnter={() => toggleIndustriesDropdown()}
          onMouseLeave={() => toggleIndustriesDropdown()}
        >
          <button
            type="button"
            name="services menu button"
            className="font-normal text-sm xl:text-[18px] 2xl:text-[22px] flex items-center justify-start gap-1 group"
          >
            Industries{" "}
            <IoIosArrowDown
              className={`transition-transform duration-300 relative top-0.5 ${
                industriesDropdown ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {industriesDropdown && (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-transparent lg:w-[350px] midlg:w-[350px] mx-auto absolute lg:right-[17%] midlg:right-[24.5%] xl:right-[22.8%] mt-0 z-40 top-16 2xl:top-20 pt-5"
            >
              <div className="w-full bg-white p-4 rounded-xl border">
                <p className="text-lg font-medium">Industries</p>
                <ul className="space-y-1 mt-3 flex flex-col items-start">
                  <Link
                    href={`/industries/healthcare-software-development`}
                    onClick={toggleIndustriesDropdown}
                    className="text-lg underline text-gray-600 hover:text-black whitespace-nowrap"
                  >
                    Healthcare Software Development
                  </Link>
                  <Link
                    href={`/industries/real-estate-app-development`}
                    onClick={toggleIndustriesDropdown}
                    className="text-lg underline text-gray-600 hover:text-black whitespace-nowrap"
                  >
                    Real Estate App Development
                  </Link>
                  <Link
                    href={`/industries/ecommerce-app-development`}
                    onClick={toggleIndustriesDropdown}
                    className="text-lg underline text-gray-600 hover:text-black whitespace-nowrap"
                  >
                    Ecommerce App Development
                  </Link>
                </ul>
              </div>
              {/* <NavbarDropdown closeDropdown={toggleIndustriesDropdown} /> */}
            </motion.span>
          )}
        </li>

        <li>
          <Link
            href={`/careers`}
            className={`font-normal text-sm xl:text-[17px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Careers{" "}
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex items-center">
        {isCareerPage ? (
          <Link
            href="tel:+922134522244"
            className="flex items-center gap-2 text-black hover:text-[#F40E00] transition-colors duration-300 font-medium text-sm xl:text-base 2xl:text-lg"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a11.042 11.042 0 005.516 5.516l1.129-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>

            <span>+92 21 3452 2244</span>
          </Link>
        ) : (
          <Link
            href="/contact-us"
            className="red-bg px-6 h-[48px] 2xl:h-[60px] rounded-[17px] whitespace-nowrap text-white hover:bg-black transition-all duration-300 flex items-center justify-center font-medium"
          >
            Contact Sales
          </Link>
        )}
      </div>

      <button
        type="button"
        name="sidebar menu button"
        aria-expanded={openSidebar}
        aria-label={openSidebar ? "Close mobile menu" : "Open mobile menu"}
        onClick={toggleSidebar}
        className="lg:hidden mr-1"
      >
        <TbMenu2 className="text-2xl text-[#F40E00]" aria-hidden="true" />
      </button>
      <div
        className={`w-full h-screen bg-transparent z-50 fixed inset-0 ${
          openSidebar ? "-translate-x-0" : "translate-x-full"
        } transition-all duration-700 pt-3 bg-transparent`}
      >
        <Sidebar onclose={toggleSidebar} />
      </div>
    </nav>
  );
};

export default Navbar;
