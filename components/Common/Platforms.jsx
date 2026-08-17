"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const platforms = [
  {
    src: "/cost-effective.webp",
    width: 20,
    height: 22,
    alt: "cost effective value proposition",
    title: "Cost Effective",
    icon: "/cost-effective-icon.webp",
  },
  {
    src: "/startup-friendly.webp",
    width: 16,
    height: 20,
    alt: "startup friendly value proposition",
    title: "Startup Friendly",
    icon: "/startup-friendly-icon.webp",
  },
  {
    src: "/transparent-process.webp",
    width: 20,
    height: 20,
    alt: "transparent process icon",
    title: "Transparent Process",
    icon: "/transparent-process-icon.webp",
  },
  {
    src: "/quick-turnaround.webp",
    width: 29,
    height: 20,
    alt: "quick turnaround icon",
    title: "quick turnaround",
    icon: "/quick-turnaround-icon.webp",
  },
  {
    src: "/partner-first.webp",
    width: 31,
    height: 20,
    alt: "partner first",
    title: "partner first",
    icon: "/partner-first-icon.webp",
  },
  {
    src: "/global-talents.webp",
    width: 19,
    height: 19,
    alt: "global talents icon",
    title: "global talents",
    icon: "/global-talents-icon-gray.webp",
  },
  {
    src: "/cost-effective.webp",
    width: 20,
    height: 24,
    alt: "cost effective value proposition",
    title: "Cost Effective",
    icon: "/cost-effective-icon.webp",
  },
  {
    src: "/startup-friendly.webp",
    width: 16,
    height: 20,
    alt: "startup friendly value proposition",
    title: "Startup Friendly",
    icon: "/startup-friendly-icon.webp",
  },
  {
    src: "/transparent-process.webp",
    width: 20,
    height: 20,
    alt: "transparent process icon",
    title: "Transparent Process",
    icon: "/transparent-process-icon.webp",
  },
  {
    src: "/quick-turnaround.webp",
    width: 29,
    height: 20,
    alt: "quick turnaround icon",
    title: "quick turnaround",
    icon: "/quick-turnaround-icon.webp",
  },
  {
    src: "/partner-first.webp",
    width: 31,
    height: 20,
    alt: "partner first",
    title: "partner first",
    icon: "/partner-first-icon.webp",
  },
  {
    src: "/global-talents.webp",
    width: 19,
    height: 19,
    alt: "global talents icon",
    title: "global talents",
    icon: "/global-talents-icon-gray.webp",
  },
];

const Platforms = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1280],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };
  // -top-10 xl:-top-20 2xl:-top-24 z-30
  // -top-10 xl:-top-20 2xl:-top-24 z-30
  return (
    <section className="w-full py-3.5 overflow-hidden bg-white border-t-[1.5px] border-b-[1.5px] border-gray-400 relative top-0">
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="flex gap-10"
      >
        {[...platforms, ...platforms].map((platform, index) => {
          return (
            <React.Fragment key={`${platform?.title}-${index}`}>
              <div
                className="flex w-[400px] mr-4 items-center justify-start gap-2"
              >
                <Image
                  src={platform?.icon}
                  width={platform?.width}
                  height={platform?.height}
                  alt={platform?.title}
                  className="object-contain"
                  style={{ width: platform?.width, height: platform?.height - 4 }}
                />
                <strong className="uppercase font-bold text-[#545454] text-xs lg:text-[20px] opacity-60 whitespace-nowrap">
                  {platform?.title}
                </strong>
              </div>
              <div className="h-[16px] border-[1.5px] border-[#545454]" aria-hidden="true" />
            </React.Fragment>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Platforms;
