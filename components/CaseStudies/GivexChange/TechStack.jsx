import { GIVEXCHANGE_TECH_STACK } from "@/constants/case-studies/givexchange/givexchange-tech-stack";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section className="w-full pb-10 relative">
      <section className="w-full flex flex-col padding-x items-center relative z-10">
        <h2 className="section-heading text-center z-10">Tech Stack & Tools</h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
          Our chosen technology stack ensured strong performance, smooth
          communication between platforms, and the ability to scale as the
          marketplace grows. Each tool was selected to support fast development,
          efficient data handling, and secure user interactions across mobile,
          web, and admin interfaces.
        </p>
      </section>

      <section className="w-full relative space-y-20 mt-40 lg:pb-80 px-5 lg:px-0">
        <Image
          src="/case-studies/givexchange/tech-stack-circle-lines.png"
          alt="tech-stack-circle-lines"
          width={971}
          height={1554}
          className="absolute -left-4 z-0 -top-20 max-h-[1500px] object-contain"
        />
        {GIVEXCHANGE_TECH_STACK?.map((tech, index) => {
          return (
            <div
              className={`flex items-start gap-3 relative z-20 ${
                index === 0
                  ? "lg:left-[27%]"
                  : index === 1
                  ? "md:left-[40%] lg:left-[40%]"
                  : index === 2
                  ? "md:left-[25%] lg:left-[47%]"
                  : index === 3
                  ? "lg:left-[17%]"
                  : ""
              }`}
              key={index}
            >
              <div className="z-10">
                <Image
                  src={tech?.image}
                  alt="image"
                  width={39}
                  height={73}
                  className="z-10"
                />
              </div>
              <div className="z-10">
                <h3 className="text-[30px] font-semibold leading-none tracking-tight z-10">
                  {tech?.title}
                </h3>
                <p className="text-[18px] font-normal leading-[1.2] mt-3 max-w-[373px] z-10">
                  {tech?.description}
                </p>
                <ul className="space-y-3 mt-5 z-10">
                  {tech?.tech?.map((t, i) => {
                    return (
                      <li key={i} className={`flex items-center gap-3 z-10`}>
                        <Image
                          src={t?.icon}
                          alt={t?.iconAlt}
                          width={t?.iconWidth}
                          height={t?.iconHeight}
                          className="z-10"
                        />
                        <p className={`text-lg z-10`}>{t?.title}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}

        <div className="bg-[var(--givexchange-primary-color)] blur-[745px] rounded-full w-[300px] lg:w-[1000px] h-[300px] absolute top-1/2 -translate-y-1/2 left-[-60%] lg:left-[-50%] z-0" />
        <div className="bg-[var(--givexchange-primary-color)] blur-[745px] rounded-full w-[300px] lg:w-[1000px] h-[300px] absolute top-1/2 -translate-y-1/2 right-[-60%] lg:right-[-40%] z-0" />
      </section>
    </section>
  );
};

export default TechStack;
