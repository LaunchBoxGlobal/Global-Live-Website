"use client";
import React from "react";
import Image from "next/image";

const AgileWorkflow = ({ workflow }) => {
  return (
    <section className="w-full mt-10 lg:mt-20 lg:mb-10 relative">
      <Image
        src={"/kotlin/kotlin-workflow-line-image.png"}
        alt="kotlin app development workflow"
        width={1175}
        height={1580}
        loading="lazy"
        className="lg:h-[1800px] midlg:h-[1830px] xl:h-[1810px] absolute left-1/2 -translate-x-1/2 top-12 hidden lg:block"
      />
      <Image
        src={"/ionic-app-development/ionic-rocket-image.svg"}
        alt="ionic app development workflow image"
        width={119}
        height={221}
        loading="lazy"
        className="object-contain absolute lg:bottom-[-2.8%] midlg:bottom-[-3.9%] xl:bottom-[-2.5%] right-[27%] w-[219px] h-[221px] hidden lg:block"
      />
      {workflow?.map((plan, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            className={`w-full lg:w-[490px] min-h-[243px] rounded-2xl flex flex-col py-6 px-10 items-start justify-center border gap-1 relative z-10 bg-white mb-5 ${
              index === 4
                ? "xl:-top-20"
                : index === 5
                  ? "xl:-top-24"
                  : index === 6
                    ? "xl:-top-28"
                    : ""
            } ${
              isLeft
                ? `border-l-[17px] border-[#00aeff] lg:mr-auto`
                : `border-r-[17px] border-[#00aeff] lg:ml-auto top-0`
            }`}
            key={index}
          >
            <p className="font-medium text-base lg:text-[17px]">
              {plan?.tag_line}
            </p>
            <h3 className="font-medium text-[22px] lg:text-[30px] ionic-text leading-[1.3]">
              {plan?.title}
            </h3>
            <p className="text-[16px] lg:text-lg">{plan?.description}</p>
            <div
              className={`w-[73px] h-[73px] ionic-bg rounded-full hidden lg:flex items-center justify-center absolute top-1/2 -translate-y-1/2 ${
                isLeft ? "right-[-8%]" : "left-[-8%]"
              }`}
            >
              <span className="text-white text-[47px] font-medium">{`0${
                index + 1
              }`}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AgileWorkflow;
