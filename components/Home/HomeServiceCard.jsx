"use client";
import React from "react";
import "./HomeServiceCard.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HomeServiceCard = ({ service, index, openFaq, toggleFaq }) => {
  const router = useRouter();
  return (
    <button
      type="button"
      aria-label={`${openFaq === index ? "Collapse" : "Expand"} ${service?.title}`}
      aria-expanded={openFaq === index}
      className={`w-full px-4 pb-0 pt-4 lg:pt-10 lg:px-7 rounded-xl flex flex-col items-start justify-between gap-x-4 group lg:hover:bg-black ${
        openFaq === index ? "bg-[#000] lg:pb-[60px]" : "bg-white lg:pb-[50px]"
      } transition-all duration-300 h-auto relative overflow-visible mb-0 outline-none`}
      key={index}
      onClick={() => {
        toggleFaq(index);
      }}
    >
      <div className={`w-full flex items-start justify-between`}>
        <div className="flex items-start pt-1.5">
          <span
            className={`text-[12px] lg:text-[20px] font-medium text-gray-500 lg:group-hover:text-white transition-all duration-300 ${
              openFaq === index && "text-white"
            }`}
          >{`(${index + 1 === 10 ? index + 1 : `0${index + 1}`})`}</span>
        </div>
        <img
          src={service?.image}
          width={service?.img_width}
          height={service?.img_height}
          alt={service?.alt_tag}
          loading="lazy"
          className={`2xl:left-[9%] ${
            index === 4
              ? "-top-[20%]"
              : index === 5
              ? "-top-[35%]"
              : "-top-[40%]"
          } object-contain hidden lg:block absolute ${
            index === 0
              ? "lg:left-[12%] xl:left-[10%]"
              : "lg:left-[9%] xl:left-[7%]"
          } z-10 ${
            openFaq === index
              ? "lg:top-[10%] top-[10%] rotate-0 visible"
              : `invisible group-hover:visible`
          }`}
        />
        <div className="flex flex-col items-center w-[85%] lg:w-[60%] xl:w-[67%] 2xl:w-[67%]">
          <div className="w-full flex items-center lg:items-start justify-between mb-0 gap-5 py-0">
            <h3
              className={`text-[20px] text-start md:text-[3vw] leading-7 lg:leading-10 xl:leading-[50px] tracking-tight font-light ${
                openFaq === index ? "text-white" : "text-gray-500"
              } font-normal transition-all duration-300`}
            >
              {service?.title}
            </h3>
            <IoMdArrowDown
              className={`w-[15px] block lg:mt-1 lg:w-[31px] h-[15px] lg:h-[31px] ${
                openFaq === index
                  ? "text-[#fff] opacity-100 scale-y-[-1]"
                  : "text-[#F40E00] opacity-60 scale-y-[1]"
              } transition-all duration-300`}
            />
          </div>
          <motion.div
            initial={false}
            animate={{
              height: openFaq === index ? "auto" : 0,
              opacity: openFaq === index ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative flex items-start justify-start overflow-hidden w-full pl-0.5 mt-2 md:mt-4"
          >
            <div className="w-full lg:w-[90%] border-t py-4 flex flex-col items-start gap-2">
              <p className="text-white text-start leading-5 text-base lg:text-lg font-light">
                {service?.desc}
              </p>
              {service?.pageUrl === "/" ? null : (
                <Link
                  href={service?.pageUrl}
                  aria-label={`Learn more about ${service?.title}`}
                  className="text-white block border px-4 py-2 rounded-2xl text-sm mt-3 hover:bg-white hover:text-black transition-all duration-300"
                >
                  Learn More
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </button>
  );
};

export default HomeServiceCard;
