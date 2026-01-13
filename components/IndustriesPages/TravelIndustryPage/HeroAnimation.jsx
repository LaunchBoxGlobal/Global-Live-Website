import React from "react";
import Image from "next/image";
import "./styles.css";

const HeroAnimation = () => {
  return (
    <div className="w-full mt-10 pb-16 z-10 relative max-w-[1263px] mx-auto">
      {/* hero-section-tablet-mockup */}
      <Image
        src={`/industries/travel/hero-section-tablet-mockup.png`}
        alt="hero-section-tablet-mockup"
        width={641}
        height={450}
        className="mx-auto z-20 relative"
      />
      {/* red-map-with-flight-routes */}
      <Image
        src={`/industries/travel/red-map-with-flight-routes.png`}
        alt="red-map-with-flight-routes"
        width={1223}
        height={246}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10"
      />
      {/* top-places-card */}
      <div className="hidden lg:block absolute top-10 right-[8%] midlg:right-[16.5%] z-40 animate-places-card-up-and-down">
        <Image
          src={`/industries/travel/top-places-card.png`}
          alt="top-places-card"
          width={166}
          height={56}
          className="z-40"
        />
      </div>
      {/* user-icon */}
      <div className="hidden lg:block absolute bottom-[18%] right-[11%] midlg:right-[19%] z-40 animate-cards-sping">
        <Image
          src={"/industries/travel/user-icon.png"}
          alt="user-icon"
          width={114}
          height={114}
          className=""
        />
      </div>
      {/* location-pin-icon */}
      <Image
        src={"/industries/travel/location-pin-icon.png"}
        alt="location-pin-icon"
        width={10}
        height={10}
        className="hidden lg:block absolute z-30 top-[40%] right-[10%] animate-ping"
      />
      {/* send-button-icon */}
      <div className="hidden lg:block absolute top-[14%] left-[11%] midlg:left-[19%] z-40 animate-send-icon">
        <Image
          src={"/industries/travel/send-button-icon.png"}
          alt="send-button-icon"
          width={104}
          height={104}
          className=""
        />
      </div>
      <div className="w-[700px] h-[100px] rounded-full bg-red-600 blur-[200px] absolute z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
    </div>
  );
};

export default HeroAnimation;
