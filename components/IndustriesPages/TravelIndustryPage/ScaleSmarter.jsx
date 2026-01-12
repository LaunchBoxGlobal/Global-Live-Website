import Image from "next/image";
import Link from "next/link";
import React from "react";

const ScaleSmarter = () => {
  return (
    <section className="w-full relative padding-x py-20">
      <div className="w-full bg-[#212121] rounded-[30px] p-6 lg:p-14 relative overflow-hidden min-h-[450px]">
        <Image
          src={"/industries/travel/scale-smarter-background-image.png"}
          alt="scale-smarter-background-image"
          width={1310}
          height={673}
          className="w-ful h-full absolute inset-0 z-0"
        />

        <div className="w-full z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative z-10 space-y-5">
            <h2 className="text-[28px] lg:text-[40px] font-bold tracking-tight leading-none text-white z-10">
              Scale Smarter with a Dedicated Travel Tech Partner
            </h2>
            <p className="text-base lg:text-lg leading-[1.1] text-white z-10">
              Building the right team shouldn’t slow you down. With LaunchBox
              Global, you can quickly expand your travel tech capabilities,
              access specialized talent, and accelerate digital innovation — all
              without the overhead of traditional hiring.
            </p>
            <div className="w-full max-w-[265px] pt-6">
              <Link
                href={"/contact-us"}
                className="bg-[#F40E00] text-white w-full py-4 rounded-[7px] font-bold px-6"
              >
                Talk To An Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleSmarter;
