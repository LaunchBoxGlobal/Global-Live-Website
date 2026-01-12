import { TRAVEL_INDUSTRY_TECH_STACK } from "@/constants/industries/travel-industry/travel-industry-tech-stack";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section className="w-full py-20 bg-[#fff] padding-x overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading mx-auto">
          The Tech Stack Behind Your{" "}
          <span className="red-text">Store’s Success</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Our tech stack powers fast, reliable, and future-ready stores. With
          ecommerce app development services, we utilize advanced tools and
          platforms to create smooth, high-performing shopping experiences.
        </p>
      </div>

      <section className="w-full justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 midlg:grid-cols-4 gap-5 max-w-[1305px] mx-auto mt-16">
        {TRAVEL_INDUSTRY_TECH_STACK?.map((service, index) => {
          return (
            <div key={index} className="w-full ">
              <div className="w-full flex flex-col items-start justify-between gap-3 bg-[#F6F6F6] group rounded-[29px] p-7 min-h-[500px] relative">
                <div
                  style={{ backgroundColor: `#F40E00` }}
                  className={`w-[11px] h-[93px]  rounded-l-2xl absolute left-[-10px] group-hover:translate-y-16 transition-all duration-300`}
                />
                <div className="flex flex-col items-start gap-3">
                  <Image
                    src={service?.icon}
                    width={57}
                    height={57}
                    alt={`${service?.title} icon`}
                  />
                  <h3 className="text-[20px] font-bold leading-none">
                    {service?.title}
                  </h3>
                  <p className="text-md h-[200px] leading-[1.3] font-light">
                    {service?.description}
                  </p>

                  <Image
                    src={service?.tech}
                    width={service?.techWidth}
                    height={service?.techHeight}
                    alt={`${service?.techAlt}`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default TechStack;
