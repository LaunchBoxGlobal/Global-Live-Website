import { locationLinks, sidebarlinks } from "@/constants/sidebar/sidebar-links";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ onclose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useRouter();
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState();

  const toggleIndustriesDropdown = () => {
    setIndustriesDropdown((prev) => !prev);
  };

  const toggleLocationsDropdown = () => {
    setLocationsDropdown((prev) => !prev);
  };

  const handleNavigateToLocationPage = (url) => {
    navigate.push(url);
    toggleLocationsDropdown();
    onclose();
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigate = (url) => {
    navigate.push(url);
    toggleDropdown();
    onclose();
  };

  const navigator = (path) => {
    navigate.push(path);
    onclose();
  };

  const handleScrollToServices = (id) => {
    console.log("clicked");
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    onclose();
  };

  return (
    <div
      className={`w-full md:w-1/2 h-full bg-white px-6 float-end shadow-xl overflow-y-scroll`}
    >
      <div className="w-full flex items-start justify-center">
        <Link
          href={"/"}
          className="rounded-[17px] bg-white block mt-1 w-full border-[#CECEEA] h-[50px] 2xl:h-[60px]"
        >
          <Image
            src={`/logo02.png`}
            width={180}
            height={45.73}
            alt="launchbox global logo"
            className="w-[188px] h-[35px] block"
          />
        </Link>
        <button
          type="button"
          onClick={() => onclose()}
          className="w-8 h-8 bg-gray-200 rounded-lg p-1 mt-1.5"
        >
          <IoClose className="w-full h-full red-text" />
        </button>
      </div>
      <ul className="flex border-t flex-col items-start w-full justify-center gap-2 py-5">
        <li>
          <button
            type="button"
            onClick={() => navigator("/")}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Home{" "}
          </button>
        </li>
        <li className="w-full relative">
          <button
            type={`button`}
            onClick={toggleDropdown}
            className={`font-normal w-full text-[16px] 2xl:text-[22px] flex items-center justify-between gap-1 group ${
              isOpen && "red-text"
            }`}
          >
            Services{" "}
            <IoIosArrowDown
              className={`transition-all duration-300 text-lg mt-0.5 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isOpen && (
            <div className="bg-white px-2 from-blue-50 mt-4 z-50">
              <ul className="space-y-1">
                {sidebarlinks?.map((l, i) => {
                  return (
                    <li className="" key={i}>
                      <button
                        type="button"
                        onClick={() => handleNavigate(l?.url)}
                        // href={`/services/mobile-app-development-services`}
                        className={`font-normal text-[15px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
                      >
                        {l?.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </li>
        <li className="w-full relative">
          <button
            type={`button`}
            onClick={toggleLocationsDropdown}
            className={`font-normal w-full text-[16px] 2xl:text-[22px] flex items-center justify-between gap-1 group ${
              locationsDropdown && "red-text"
            }`}
          >
            Locations{" "}
            <IoIosArrowDown
              className={`transition-all duration-300 text-lg mt-0.5 ${
                locationsDropdown ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {locationsDropdown && (
            <div className="bg-white px-2 from-blue-50 mt-4 z-50">
              <ul className="space-y-1 flex flex-col items-start">
                {locationLinks?.map((l, i) => {
                  return (
                    <li className="" key={i}>
                      <button
                        type="button"
                        onClick={() => handleNavigate(l?.pageUrl)}
                        // href={`/services/mobile-app-development-services`}
                        className={`font-normal text-[15px] 2xl:text-[22px] flex items-center justify-start text-start gap-1 group`}
                      >
                        {l?.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </li>
        <li>
          <button
            type="button"
            onClick={() => navigator("/case-studies")}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Case Studies
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => navigator("/blog")}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Blogs
          </button>
        </li>
        <li className="w-full relative">
          <button
            type={`button`}
            onClick={toggleIndustriesDropdown}
            className={`font-normal w-full text-[16px] 2xl:text-[22px] flex items-center justify-between gap-1 group ${
              industriesDropdown && "red-text"
            }`}
          >
            Industries{" "}
            <IoIosArrowDown
              className={`transition-all duration-300 text-lg mt-0.5 ${
                industriesDropdown ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {industriesDropdown && (
            <div className="bg-white px-2 from-blue-50 mt-4 z-50">
              <ul className="space-y-1">
                <li className="">
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigate(
                        `/industries/healthcare-software-development`,
                      )
                    }
                    className={`font-normal text-[15px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
                  >
                    Healthcare Software Development
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigate(`/industries/real-estate-app-development`)
                    }
                    className={`font-normal text-[15px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
                  >
                    Real Estate
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigate(`/industries/ecommerce-app-development`)
                    }
                    className={`font-normal text-[15px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
                  >
                    Ecommerce App Development
                  </button>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <button
            type="button"
            onClick={() => navigator("/careers")}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Careers{" "}
          </button>
        </li>
        {/* <li>
          <button
            type="button"
            onClick={() => handleScrollToServices("faqs")}
            className={`font-normal text-[16px] 2xl:text-[22px]`}
          >
            FAQs
          </button>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
