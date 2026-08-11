"use client";
import Image from "next/image";
import React from "react";

const HeroAnimation = () => {
  return (
    <div className="w-full max-w-7xl mx-auto h-auto lg:h-[600px] relative flex justify-center items-end mt-14 overflow-y-hidden">
      {/* chair-card */}
      <Image
        src={`/locations/mobile-app-developer-in-austin/chair-card.png`}
        width={239}
        height={343}
        alt="chair-card"
        className="absolute left-0 top-0 object-contain z-20 hidden lg:block"
      />
      {/* ecommerce-chair-card */}
      <Image
        src={`/locations/mobile-app-developer-in-austin/ecommerce-chair-card.png`}
        width={181}
        height={172}
        alt="ecommerce-chair-card"
        className="absolute left-[10%] bottom-[10%] object-contain z-20 hidden lg:block"
      />
      {/* mobile screen */}
      <Image
        src={`/locations/mobile-app-developer-in-austin/mobile-screen-mockup.png`}
        width={370}
        height={564}
        alt="mobile screen mockup"
        className="mx-auto z-20 w-[30%] object-contain max-h-[550px]"
      />

      {/* modern-yellow-chair-card */}
      <Image
        src={`/locations/mobile-app-developer-in-austin/modern-yellow-chair-card.png`}
        alt="modern-yellow-chair-card"
        width={292}
        height={97}
        className="absolute right-0 midlg:right-[3%] xl:right-[7%] top-[20%] z-20 hidden lg:block"
      />
      {/*  */}
      <Image
        src={`/locations/mobile-app-developer-in-austin/enjoy-your-online-shopping.png`}
        alt="enjoy-your-online-shopping"
        width={227}
        height={272}
        className="absolute right-[4%] bottom-[10%] z-20 hidden lg:block"
      />
    </div>
  );
};

export default HeroAnimation;
