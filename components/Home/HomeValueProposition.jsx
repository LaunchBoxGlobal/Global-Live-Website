"use client";
import { VALUE_PROPOSITION } from "@/constants/HomeValueProposition";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  // autoplay: {
  //   delay: 3000,
  // },
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 2,
    },

    900: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
    1390: {
      slidesPerView: 4,
    },
    1900: {
      slidesPerView: 5,
    },
  },
};

const HomeValueProposition = () => {
  return (
    <section className="w-full py-10 lg:pt-20 relative overflow-hidden bg-[#fff]">
      <section className="w-full flex flex-col items-center text-center justify-start gap-4 mb-7 padding-x">
        <h2 className="section-heading text-center">
          See How We Are <br /> <span className="red-text">Different</span>
        </h2>
        <p className="section-paragraph text-center mt-2 md:w-1/2 w-full">
          We bring you expert-driven, scalable, and affordable software
          solutions fast, reliable, and built for your success!
        </p>
      </section>

      <section
        className={`w-full relative overflow-hidden h-[280px] mt-10 lg:mt-14`}
      >
        <Swiper
          {...sliderSettings}
          modules={[Autoplay]}
          className="overflow-hidden h-full flex gap-4 relative"
        >
          {VALUE_PROPOSITION?.map((value, index) => {
            return (
              <SwiperSlide key={index} className="w-[95%] !bg-transparent lg:w-[320px]">
                <div className="w-[95%] rounded-xl p-6 bg-white h-[207px] lg:w-[320px] border flex flex-col items-center justify-start mx-2">
                  <div className="flex items-center justify-center lg:justify-start gap-3 w-full">
                    <div
                      className={`lg:w-[22px] lg:h-[22px] w-[20px] h-[20px] ${
                        index % 2 === 0 ? "bg-red-600" : "bg-black"
                      }`}
                    ></div>
                    <h3 className="text-[18px] lg:text-[22px] tracking-tight">
                      {value?.title}
                    </h3>
                  </div>
                  <p className="text-base lg:text-[18px] lg:leading-[24px] mt-3 text-center lg:text-start font-light text-gray-500">
                    {value?.desc}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperButtons />
        </Swiper>
      </section>
    </section>
  );
};

export default HomeValueProposition;

function SwiperButtons() {
  const swiper = useSwiper();
  return (
    <section className="w-max flex items-center justify-center gap-3 lg:gap-1 absolute bottom-[0px] left-1/2 -translate-x-1/2 mx-auto z-40">
      <button
        type="button"
        name="swipe left button"
        title="swipe left button"
        aria-label="value proposition swipe left button"
        onClick={() => swiper.slidePrev()}
        className="w-[40px] h-[40px] bg-black flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowLeft className="text-white text-xl" />
      </button>
      <button
        type="button"
        name="swipe right button"
        title="swipe right button"
        aria-label="value proposition swipe right button"
        onClick={() => swiper.slideNext()}
        className="w-[40px] h-[40px] bg-[#F40E00] flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowRight className="text-white text-xl" />
      </button>
    </section>
  );
}
