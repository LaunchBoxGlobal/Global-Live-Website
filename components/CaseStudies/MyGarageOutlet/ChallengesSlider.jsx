"use client";
import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { My_Garage_Outlet_Challenges } from "@/constants/case-studies/my-garage-outlet/challenges-and-solutions";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: false,
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 1,
    },

    900: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
};

const ChallengesSlider = ({
  activeIndex,
  setActiveIndex,
  permanentIndex,
  setPermanentIndex,
}) => {
  return (
    <section className={`w-full relative`}>
      <Swiper
        {...sliderSettings}
        modules={[Autoplay]}
        className="overflow-hidden h-[428px] w-full flex items-center"
        style={{ width: "100%", height: "100%" }}
      >
        {My_Garage_Outlet_Challenges?.map((value, index) => {
          const isActive = index === activeIndex;
          return (
            <SwiperSlide
              key={index}
              className="w-full h-[428px] py-12"
              style={{ width: "100%", background: "white" }}
            >
              <div
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(permanentIndex)}
                onClick={() => setPermanentIndex(index)}
                className={`w-full min-h-[286px] rounded-[35px] custom-shadow p-8 flex flex-col items-start gap-3 justify-center transition-all duration-500 ${
                  isActive
                    ? "bg-[#EE2828] text-white"
                    : "bg-white text-black hover:bg-[#EE2828] hover:text-white"
                }`}
              >
                <div
                  className={`w-[112px] h-[112px] bg-white rounded-full flex items-center justify-center transition-all duration-700 ${
                    isActive ? "opacity-100 visible" : "opacity-0 hidden"
                  }`}
                >
                  <Image
                    src={"/case-studies/my-garage-outlet/problem-red-icon.png"}
                    width={65}
                    height={60}
                    loading="lazy"
                    alt="problem-red-icon"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <h3 className="text-[22px] md:text-[26px] lg:text-[35px] font-semibold leading-[1.2]">
                  {value?.title}
                </h3>
                <p className="text-lg leading-[1.2]">{value?.description}</p>
              </div>
            </SwiperSlide>
          );
        })}

        <SliderButtons />
      </Swiper>
    </section>
  );
};

export default ChallengesSlider;

export const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="w-full flex items-center justify-center gap-3">
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-black text-white"
      >
        <FiArrowLeft className="text-xl" />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center red-bg text-white"
      >
        <FiArrowRight className="text-xl" />
      </button>
    </div>
  );
};
