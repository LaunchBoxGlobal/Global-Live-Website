import Image from "next/image";
import Link from "next/link";
import React from "react";

const MidPageCta = () => {
  return (
    <section className="w-full relative padding-x py-20">
      <div className="w-full bg-[#212121] rounded-[17px] relative overflow-hidden min-h-[450px]">
        <Image
          src={"/industries/travel/map.png"}
          alt="map"
          width={1310}
          height={673}
          className="w-ful h-full absolute inset-0 z-0 grayscale"
        />

        <div className="w-full z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:p-14">
          <div className="relative z-10 space-y-5">
            <h2 className="text-[28px] lg:text-[40px] font-bold tracking-tight leading-none text-white z-10">
              Transform Your Travel Experience into a Digital Advantage
            </h2>
            <p className="text-base lg:text-lg leading-[1.1] text-white z-10">
              Your guests are already mobile — now it’s time your brand is too.
              Discover how a custom travel app can elevate satisfaction, boost
              loyalty, and unlock new revenue opportunities.
            </p>
            <div className="w-full max-w-[265px] pt-6">
              <Link
                href={"/contact-us"}
                className="bg-[#F40E00] text-white w-full py-4 rounded-[7px] font-bold px-6"
              >
                Book A Free Strategy Call
              </Link>
            </div>
          </div>
        </div>

        <Image
          src={"/industries/travel/mid-page-cta-mockup.png"}
          alt="mid-page-cta-mockup"
          width={618}
          height={430}
          className="lg:absolute bottom-0 -right-[13%] z-20 mt-10"
        />
      </div>
    </section>
  );
};

export default MidPageCta;
