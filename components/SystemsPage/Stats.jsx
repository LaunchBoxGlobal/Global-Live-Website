import React from "react";

const Stats = () => {
  return (
    <section className="w-full bg-[#E8281A] text-white py-10">
      <div className="w-full padding-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <p className="text-[52px] font-extrabold leading-none">97+</p>
          <p className="font-medium text-gray-100">Projects Delivered</p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <p className="text-[52px] font-extrabold leading-none">102+</p>
          <p className="font-medium text-gray-100">Team Members</p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <p className="text-[52px] font-extrabold leading-none">5</p>
          <p className="font-medium text-gray-100">Years Building Products</p>
        </div>

        <div className="col-span-1 lg:col-span-2 text-center md:text-start">
          <p className="font-medium text-gray-100">
            Trusted by founders building:
          </p>
          <div className="w-full flex items-center justify-center md:justify-start gap-2 flex-wrap mt-4">
            {[
              "Marketplaces",
              "Mobility Apps",
              "Booking Platforms",
              "B2B SaaS",
              "Consumer Apps",
              "Service Platforms",
            ].map((type, i) => {
              return (
                <div
                  className="text-base text-white font-medium bg-red-600 px-4 py-2.5 rounded-[12px]"
                  key={i}
                >
                  {type}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
