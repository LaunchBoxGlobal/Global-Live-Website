"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: "/global-talent-icon-stats.webp",
    value: 100,
    label: "Global Talents",
  },
  {
    icon: "/projects-icon-stats.webp",
    value: 50,
    label: "Projects Delivered",
  },
  {
    icon: "/happy-clients-stats.webp",
    value: 40,
    label: "Happy Clients",
  },
  {
    icon: "/location-icon-stats.webp",
    value: 7,
    label: "Global Presence",
  },
];

const HomeStats = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full padding-x py-10 lg:py-28 bg-[#F9F9F9] flex flex-col items-center gap-6"
    >
      <section className="w-full flex flex-col items-center justify-center gap-5 text-center lg:text-start">
        <h2 className="section-heading">
          Backed by <span className="text-[#F40E00]">Experience</span>
        </h2>
        <p className="section-paragraph text-center w-full md:w-2/3 lg:w-[60%]">
          Explore how we’ve helped clients, delivered projects, and turned ideas
          into reality your success is what drives our work.
        </p>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-10 mt-8">
        {stats.map((stat, index) => (
          <section
            key={index}
            className="w-full flex flex-col items-center justify-center gap-0"
          >
            <div className="w-14 h-14 bg-white flex items-center justify-center rounded-xl p-3">
              <Image
                src={stat.icon}
                width={37}
                height={45}
                alt={`${stat.label} icon`}
                loading="lazy"
                priority={false}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-2 mt-1">
              <h3 className="text-[70px] md:text-[50px] 2xl:text-[60px] font-bold text-[#F40E00]">
                {inView ? (
                  <CountUp end={stat.value} duration={3} suffix="+" />
                ) : (
                  "0+"
                )}
              </h3>
              <p className="text-xl lg:text-xl font-light text-gray-500 transition-all duration-300 relative -mt-3">
                {stat.label}
              </p>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};

export default HomeStats;
