import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const tabs = [
  {
    icon: "/navbar-services-icon.png",
    title: "Services",
  },
  {
    icon: "/navbar-technology-icon.png",
    title: "Technology",
  },
  {
    icon: "/navbar-industry-icon.png",
    title: "Industry",
  },
  {
    icon: "/navbar-location-icon.png",
    title: "Location",
  },
];

const NavbarDropdown = ({ closeDropdown }) => {
  const [selectedTab, setSelectedTab] = useState("Services");
  return (
    <div className="bg-white w-full mx-auto min-h-[420px] mt-6 flex items-start justify-center gap-0 rounded-[17px] border border-[#CECEEA] p-6">
      <Services closeDropdown={closeDropdown} selectedTab={selectedTab} />
      <Technology closeDropdown={closeDropdown} selectedTab={selectedTab} />
      <Location closeDropdown={closeDropdown} selectedTab={selectedTab} />
    </div>
  );
};

export default NavbarDropdown;

const Services = ({ closeDropdown }) => {
  const pages = [
    {
      title: "Mobile App Development",
      pageUrl: "services/mobile-app-development",
    },
    {
      title: "Web App Development",
      pageUrl: "services/web-app-development",
    },
    {
      title: "Custom Software Development",
      pageUrl: "services/custom-software-development",
    },
    {
      title: "E-commerce Development",
      pageUrl: "services/ecommerce-development",
    },
    {
      title: "Software Project Rescue Service",
      pageUrl: "software-project-rescue-service",
    },
    {
      title: "Digital Marketing",
      pageUrl: "services/digital-marketing",
    },
    {
      title: "Branding & Design",
      pageUrl: "services/branding-and-design",
    },
  ];

  const teamAugmentation = [
    {
      title: "Staff Augmentation",
      pageUrl: "staff-augmentation",
    },
    {
      title: "On-Demand Talent",
      pageUrl: "on-demand-talent",
    },
    {
      title: "Off-Shore Software Development",
      pageUrl: "off-shore-software-development",
    },
  ];
  return (
    <div className="w-full flex flex-col items-start">
      <div className="">
        <p className="text-lg font-medium">Services</p>
        <ul className="space-y-1 mt-3 flex flex-col items-start">
          {pages?.map((p, i) => {
            return (
              <Link
                href={`/${p?.pageUrl}`}
                key={i}
                onClick={() => closeDropdown()}
                className="text-lg underline text-gray-600 hover:text-black"
              >
                {p?.title}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="mt-6">
        <p className="text-lg font-medium">Team Augmentation</p>
        <ul className="space-y-1 mt-3 flex flex-col items-start">
          {teamAugmentation?.map((p, i) => {
            return (
              <Link
                href={`/${p?.pageUrl}`}
                key={i}
                onClick={() => closeDropdown()}
                className="text-lg underline text-gray-600 hover:text-black"
              >
                {p?.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const Technology = ({ closeDropdown, selectedTab }) => {
  const pages = [
    {
      title: "Native App Development",
      pageUrl: "/development-technologies/react-native-app-development",
    },
    {
      title: "Flutter App Development",
      pageUrl: "/development-technologies/flutter-app-development",
    },
    {
      title: "Swift App Development",
      pageUrl: "/development-technologies/swift-app-development",
    },
    {
      title: "Kotlin App Development",
      pageUrl: "/development-technologies/kotlin-app-development",
    },
    {
      title: "Ionic App Development",
      pageUrl: "/development-technologies/ionic-app-development",
    },
  ];

  const new_pages = [
    {
      title: "Funded Startup",
      pageUrl: "/funded-startup",
    },
    {
      title: "Field Service Business",
      pageUrl: "/field-service-business",
    },
  ];
  return (
    <div className="w-full flex flex-col items-start justify-between">
      <div
        className={`${
          selectedTab === "Technology"
            ? "bg-[#E6E6E673] border"
            : "bg-white border border-white"
        } rounded-[7px] mr-4 w-full`}
      >
        <p className="text-lg font-medium">Technology</p>
        <ul className="space-y-1 mt-3 flex flex-col items-start">
          {pages?.map((p, i) => {
            return (
              <Link
                href={`${p?.pageUrl}`}
                key={i}
                onClick={closeDropdown}
                className="text-lg underline text-gray-600 hover:text-black"
              >
                {p?.title}
              </Link>
            );
          })}
        </ul>
      </div>

      <div
        className={`${
          selectedTab === "Technology"
            ? "bg-[#E6E6E673] border"
            : "bg-white border border-white"
        } rounded-[7px] mr-4 w-full`}
      >
        <p className="text-lg font-medium mt-8">Business Solutions</p>
        <ul className="space-y-1 mt-3 flex flex-col items-start">
          {new_pages?.map((p, i) => {
            return (
              <Link
                href={`${p?.pageUrl}`}
                key={i}
                onClick={closeDropdown}
                className="text-lg underline text-gray-600 hover:text-black"
              >
                {p?.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const Industry = ({ selectedTab }) => {
  const industries = [
    {
      title: "E-Commerce",
    },
    {
      title: "Health & Wellness",
    },
    {
      title: "Remote Work & Probablity",
    },
    {
      title: "Online Education & E-Learning",
    },
    {
      title: "Financial Services & Fintech",
    },
    {
      title: "Content Creation & Influencer Marketing",
    },
    {
      title: "Travel & Experiences",
    },
  ];
  return (
    <div className="w-full flex items-start">
      <div
        className={`${
          selectedTab === "Industry"
            ? "bg-[#E6E6E673] border"
            : "bg-white border border-white"
        } p-5 rounded-[7px] w-full`}
      >
        <p className="text-lg font-medium">Industry</p>
        <ul className="space-y-1 mt-3 flex flex-col items-start">
          {industries?.map((p, i) => {
            return (
              <p
                key={i}
                className="text-lg underline text-gray-600 hover:text-black"
              >
                {p?.title}
              </p>
            );
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

const Location = ({ selectedTab, closeDropdown }) => {
  const locations = [
    {
      title: "Mobile App Development in Florida",
      pageUrl: "/mobile-app-developer-in-florida",
    },
    {
      title: "Software Development Company in Florida",
      pageUrl: "/software-development-company-in-florida",
    },

    {
      title: "Software Development Company in New Jersey",
      pageUrl: "/software-development-company-in-new-jersey",
    },
    {
      title: "Web Development Company in New Jersey",
      pageUrl: "/web-development-company-in-new-jersey",
    },
    {
      title: "Mobile App Development in Houston",
      pageUrl: "/mobile-app-developers-in-houston",
    },
    {
      title: "Custom Software Development Company in Houston",
      pageUrl: "/custom-software-development-company-in-houston",
    },
    {
      title: "Mobile App Development Company in Texas",
      pageUrl: "/mobile-app-development-company-in-texas",
    },
    {
      title: "Software Development Company in Austin",
      pageUrl: "/software-development-company-in-austin",
    },
    {
      title: "Mobile App Development in Austin",
      pageUrl: "/mobile-app-development-in-austin",
    },
    {
      title: "Mobile App Development in San Francisco",
      pageUrl: "/mobile-app-development-in-san-francisco",
    },
    {
      title: "Mobile App Development in Atlanta",
      pageUrl: "/mobile-app-development-in-atlanta",
    },
    {
      title: "Digital Marketing Company in Wyoming",
      pageUrl: "/wyoming-digital-marketing",
    },
    {
      title: "SEO Company in Cheyenne",
      pageUrl: "/cheyenne-seo-company",
    },
  ];
  return (
    <div className="w-full flex items-start">
      <div
        className={`${
          selectedTab === "Location"
            ? "bg-[#E6E6E673] border"
            : "bg-white border border-white"
        } rounded-[7px] w-full`}
      >
        <p className="text-lg font-medium">Location</p>
        <ul className="space-y-1 mt-3 flex flex-col items-start">
          {locations?.map((p, i) => {
            return (
              <Link
                href={`${p?.pageUrl}`}
                key={i}
                onClick={closeDropdown}
                className="text-lg underline text-gray-600 hover:text-black whitespace-nowrap"
              >
                {p?.title}
              </Link>
            );
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
};
