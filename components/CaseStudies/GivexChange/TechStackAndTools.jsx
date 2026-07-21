"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const cards = [
  {
    id: "mobile-app",
    tag: "MOBILE APP",
    title: "Mobile App",
    description:
      "For cross-platform consistency, real-time data, and secure payments.",
    pills: [
      {
        name: "React Native",
        icon: "/case-studies/givexchange/react.svg",
        iconColor: "text-[#00d8ff]",
      },
      {
        name: "Redux",
        icon: "/case-studies/givexchange/redux.svg",
        iconColor: "text-[#764ABC]",
      },
      {
        name: "Firebase",
        icon: "/case-studies/givexchange/firebase.svg",
        iconColor: "text-[#FFCA28]",
      },
      {
        name: "Stripe API",
        icon: "/case-studies/givexchange/stripe-icon.png",
        iconColor: "text-[#635BFF]",
      },
    ],
    position:
      "lg:absolute lg:top-[6%] lg:left-[0%] xl:left-[4%] lg:-rotate-[6deg]",
  },
  {
    id: "web-app",
    tag: "WEB APP",
    title: "Web App",
    description: "Fast rendering with scalable backend architecture",
    pills: [
      {
        name: "React",
        icon: "/case-studies/givexchange/react.svg",
        iconColor: "text-[#00d8ff]",
      },
      {
        name: "Node.js",
        icon: "/case-studies/givexchange/nodejs.svg",
        iconColor: "text-[#339933]",
      },
      {
        name: "REST APIs",
        icon: "/case-studies/givexchange/rest-api-icon.svg",
        iconColor: "text-[#3b82f6]",
      },
      {
        name: "Chart.js",
        icon: "/case-studies/givexchange/chartjs.svg",
        iconColor: "text-[#FF6384]",
      },
    ],
    position:
      "lg:absolute lg:top-[10%] lg:right-[2%] xl:right-[4%] lg:rotate-[5deg]",
  },
  {
    id: "design-tools",
    tag: "DESIGN TOOLS",
    title: "Design Tools",
    description: "Collaborative UI/UX design and rapid prototyping",
    pills: [
      {
        name: "Figma",
        icon: "/case-studies/givexchange/figma.png",
        iconColor: "text-[#F24E1E]",
      },
      {
        name: "Adobe XD",
        icon: "/case-studies/givexchange/adobe.svg",
        iconColor: "text-[#FF61F6]",
      },
    ],
    position:
      "lg:absolute lg:bottom-[8%] lg:left-[2%] xl:left-[6%] lg:rotate-[6deg]",
  },
  {
    id: "admin-dashboard",
    tag: "ADMIN DASHBOARD",
    title: "Admin Dashboard",
    description: "Efficient management tools with clear data visualization",
    pills: [
      {
        name: "React",
        icon: "/case-studies/givexchange/react.svg",
        iconColor: "text-[#00d8ff]",
      },
      {
        name: "Node.js",
        icon: "/case-studies/givexchange/nodejs.svg",
        iconColor: "text-[#339933]",
      },
      {
        name: "Express",
        icon: "/case-studies/givexchange/expressjs.svg",
        iconColor: "text-gray-500",
      },
      {
        name: "MongoDB",
        icon: "/case-studies/givexchange/mongodb-icon.svg",
        iconColor: "text-[#47A248]",
      },
    ],
    position:
      "lg:absolute lg:bottom-[4%] lg:right-[2%] xl:right-[5%] lg:-rotate-[6deg]",
  },
];

export default function TechStackAndTools() {
  return (
    <div className="relative min-h-screen mt-12 flex items-center justify-center">
      {/* Background Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[1100px] h-[1100px] xl:w-[1300px] xl:h-[1300px] pointer-events-none opacity-60 hidden lg:block">
        {[480, 580, 680, 780].map((size, index) => (
          <motion.div
            key={size}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: index * 0.15, ease: "easeOut" }}
            className="absolute inset-0 m-auto rounded-full border border-green-500"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:block min-h-[850px] items-center justify-center z-10 px-5 sm:px-8">
        {/* Center Logo */}
        <div
          // initial={{ opacity: 0, scale: 0 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-[270px] h-[270px] lg:w-[374px] lg:h-[374px] bg-[#DEF1DD] rounded-full flex flex-col items-center justify-center mb-12 lg:mb-0 z-20 relative group mx-auto p-10"
        >
          <Image
            src={"/case-studies/givexchange/givexchange-logo.svg"}
            width={261}
            height={159}
            alt="givexchange logo"
          />
          {/* Subtle pulse effect on hover */}
        </div>

        {/* Cards Grid (Mobile/Tablet) / Floating (Desktop) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:block max-w-4xl mx-auto lg:max-w-none">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`lg:w-[320px] xl:w-[340px] w-full ${card.position} z-10 transition-all duration-300 lg:hover:z-50`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 90,
                }}
                className="bg-green-50 p-6 xl:p-7 rounded-[28px] border border-[#4E9D4B4A] h-full flex flex-col duration-300"
              >
                <div className="flex items-center gap-2.5 mb-3.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4E9D4B] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4E9D4B]"></span>
                  </span>
                  <span className="text-xs xl:text-[14px] font-bold uppercase tracking-widest text-[#4E9D4B]">
                    {card.tag}
                  </span>
                </div>
                <h2 className="text-[19px] xl:text-[24px] font-bold text-[#111827] mb-2.5 leading-tight">
                  {card.title}
                </h2>
                <p className="text-sm xl:text-[18px] text-[#4b5563] mb-6 leading-[1.35] font-medium">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {card.pills.map((pill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-[12px] border text-[12px] font-semibold text-[#374151] bg-white border-[#4E9D4B61] transition-colors"
                    >
                      <Image
                        src={pill?.icon}
                        alt={`${pill?.name} icon`}
                        width={20}
                        height={20}
                        className={`object-contain w-[20px]`}
                      />
                      {pill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
