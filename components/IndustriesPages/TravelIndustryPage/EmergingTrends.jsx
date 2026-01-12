"use client";
import { REAL_ESTATE_TECH_TRENDS } from "@/constants/industries/real-estate-content/real-estate-tech-trends";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const EmergingTrends = () => {
  return (
    <section className="w-full py-20 lg:pb-40 bg-[#fff] overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-6 text-center padding-x">
        <h2 className="section-heading mx-auto">
          Emerging Trends Shaping the <br /> Future of{" "}
          <span className="red-text">Travel Tech</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          The travel industry is evolving faster than ever, driven by new
          technologies that redefine how people plan, book, and experience their
          journeys.
        </p>
      </div>

      <div className="relative mt-16">
        <div className="w-[200px] h-[450px] bg-gray-100 absolute left-[-5%] top-1/2 -translate-y-1/2 rounded-full blur-[50px] z-10 hidden lg:block" />
        <div className="w-[200px] h-[450px] bg-gray-100 absolute right-[-5%] top-1/2 -translate-y-1/2 rounded-full blur-[50px] z-10 hidden lg:block" />

        <Swiper
          modules={[FreeMode]}
          spaceBetween={20}
          slidesPerView="auto"
          freeMode={{
            enabled: true,
            momentum: true,
          }}
          loop={true}
          grabCursor={true}
          className="px-6 bg-white"
        >
          {REAL_ESTATE_TECH_TRENDS.map((t, i) => (
            <SwiperSlide
              key={i}
              className="!w-[350px] min-h-[450px] bg-white rounded-[22px]"
            >
              <div className="w-full min-h-[450px] border rounded-[21px] p-7 flex flex-col items-start gap-3 relative overflow-hidden hover:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] transition-all duration-300 hover:border-b-[6px] hover:border-b-[#F40E00] bg-white text-start">
                <img
                  src={t.icon}
                  alt={`${t.title} image`}
                  width={t.width}
                  height={t.height}
                  className="z-10 max-w-[40px]"
                />
                <h3 className="font-semibold text-[22px] leading-none z-10 mt-3 mb-5">
                  {t.title}
                </h3>
                <p className="text-lg leading-[1.2] z-10">{t.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EmergingTrends;
