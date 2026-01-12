import { TRAVEL_IN_SHIFT } from "@/constants/industries/travel-industry/shiftInTravel";
import Image from "next/image";
import React from "react";

const ShiftInTravel = () => {
  return (
    <section className="w-full py-20 lg:pt-40 bg-[#fff] padding-x overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading mx-auto">
          The Shift in Travel & <br />{" "}
          <span className="red-text">Hospitality</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Technology has revolutionized the way people explore, book, and
          experience travel. From digital check-ins to AI-powered trip planning,
          the modern traveler demands convenience, personalization, and
          connectedness at every step. The pandemic accelerated this evolution,
          turning digital transformation from an emerging trend into a critical
          necessity for every brand operating in the travel and hospitality
          space.
        </p>
      </div>

      <div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 lg:mt-20 gap-y-10">
        {TRAVEL_IN_SHIFT?.map((shift, index) => {
          return (
            <div className={`w-full relative`} key={index}>
              <div className="w-full relative">
                <Image
                  src={shift?.icon}
                  width={shift?.iconWidth}
                  height={shift?.iconHeight}
                  alt={shift?.iconAlt}
                  className={`object-contain mx-auto z-10 relative`}
                />
                <div className="w-full absolute inset-x-0 top-1/2 -translate-y-1/2 border-2 z-0 hidden lg:block"></div>
                {index !== 3 && (
                  <Image
                    src={"/industries/travel/right-icon.png"}
                    alt="right-icon"
                    width={37}
                    height={37}
                    className="absolute top-1/2 -translate-y-1/2 -right-4 z-20 hidden lg:block"
                  />
                )}
              </div>
              <div className="w-full text-center space-y-4 mt-6 px-4">
                <h3 className="text-[21px] font-semibold leading-none">
                  {shift?.title}
                </h3>
                <p className="text-[#4B5563] text-lg leading-[1.2]">
                  {shift?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShiftInTravel;
