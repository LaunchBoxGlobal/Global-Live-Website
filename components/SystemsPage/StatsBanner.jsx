import Image from "next/image";
import React from "react";

const StatsBanner = () => {
  return (
    <div className="bg-white relative z-10 mt-10 lg:mt-14 rounded-2xl shadow-sm border border-[#EFE9E7] flex flex-col md:flex-row items-start md:items-center justify-around p-6 lg:p-8 mb-10 lg:mb-16 w-full lg:max-w-5xl mx-auto">
      <div className="flex items-center space-x-4 mb-6 md:mb-0">
        <div className="">
          <Image
            src={"/systems-page/products-delivered-icon.png"}
            alt="products-delivered-icon"
            width={42}
            height={42}
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-[24px] font-extrabold red-text">97+</p>
          <p className="text-sm font-normal text-[#6B6B6B]">
            Products Delivered
          </p>
        </div>
      </div>
      <div className="hidden md:block w-px h-12 bg-[#EFE9E7]"></div>
      <div className="flex items-center space-x-4 mb-6 md:mb-0">
        <div className="">
          <Image
            src={"/systems-page/client-retention-icon.png"}
            alt="client-retention-icon"
            width={42}
            height={42}
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-[24px] font-extrabold red-text">95%</p>
          <p className="text-sm font-normal text-[#6B6B6B]">Client Retention</p>
        </div>
      </div>
      <div className="hidden md:block w-px h-12 bg-gray-100"></div>
      <div className="flex items-center space-x-4">
        <div className="">
          <Image
            src={"/systems-page/abandoned-projects-icon.png"}
            alt="abandoned-projects-icon"
            width={42}
            height={42}
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-[24px] font-extrabold red-text">0</p>
          <p className="text-sm font-normal text-[#6B6B6B]">
            Abandoned Projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
