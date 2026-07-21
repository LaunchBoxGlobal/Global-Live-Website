import Image from "next/image";
import React from "react";

const fonts = [
  {
    title: "Headline",
    desc: "Font size: 24px | Line Height: 130%",
  },
  {
    title: "Title",
    desc: "Font size: 16px | Line Height: 130%",
  },
  {
    title: "Body",
    desc: "Font size: 12px | Line Height: 130%",
  },
  {
    title: "Button & Tag ",
    desc: "Font size: 14px | Line Height: 130%",
  },
];

const BrandingSection = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">Branding</h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
          The GiveXchange brand was designed to communicate trust, simplicity,
          and a sense of shared community from the very first interaction. Our
          goal was to build an identity that feels modern and reliable while
          remaining warm and approachable for everyday users. By establishing a
          clear visual language—supported by cohesive typography, iconography,
          and color direction—we ensured the brand could scale consistently
          across mobile, web, and admin environments. The result is a unified
          experience that reinforces credibility, improves usability, and
          strengthens the platform’s overall personality.
        </p>
      </section>

      <section className="w-full relative z-10 mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="z-10 relative">
          <Image
            src={
              "/case-studies/givexchange/givexchange-logo-with-white-background.png"
            }
            alt="givexchange-logo-with-white-background"
            width={620}
            height={593}
            className="z-10 relative mx-auto"
          />
        </div>
        <div className="z-10 relative">
          <Image
            src={"/case-studies/givexchange/givexchange-sidebar-mockup.png"}
            alt="givexchange-sidebar-mockup"
            width={620}
            height={593}
            className="z-10 relative mz-auto"
          />
        </div>
      </section>

      <section className="w-full flex items-start justify-between gap-5 flex-wrap relative my-28 z-10">
        <h3 className="font-semibold text-[24px] leading-none">
          Color & Typography
        </h3>

        <p className="w-full max-w-[506px]">
          General Sans was selected for its clean, modern look and strong
          readability. Its balanced shapes help create a clear visual hierarchy,
          keeping the interface simple, consistent, and easy to navigate across
          all screens.
        </p>
      </section>

      <section className="w-full relative z-10">
        <Image
          src={"/case-studies/givexchange/general-sans-fonts-label.png"}
          alt="general-sans-fonts-label"
          width={1304}
          height={150}
          className="mx-auto object-contain z-10"
        />

        <div className="w-full my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
          {fonts?.map((f, i) => {
            return (
              <div
                key={i}
                className={`w-full flex flex-col itmes-start gap-3 z-10 ${
                  i !== 3 && "lg:border-r border-5 pr-5"
                }`}
              >
                <h3 className="text-[26px] font-medium z-10">{f?.title}</h3>
                <p className="text-lg font-normal text-[#212121] z-10">
                  {f?.desc}
                </p>
              </div>
            );
          })}
        </div>

        <Image
          src={"/case-studies/givexchange/givexchange-color-pallete-mockup.png"}
          alt="givexchange-color-pallete"
          width={1270}
          height={600}
          className="mx-auto object-contain mt-12 z-10"
        />
      </section>

      <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] h-[300px] lg:w-[800px] lg:h-[500px] absolute top-[0%] left-[-60%] lg:left-[-40%] z-0" />
      <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] h-[300px] lg:w-[800px] lg:h-[500px] absolute top-[0%] right-[-70%] lg:right-[-50%] z-0" />
      <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] h-[300px] lg:w-[800px] lg:h-[500px] absolute bottom-[0%] left-[-60%] lg:left-[-30%] z-0" />
      <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] h-[300px] lg:w-[800px] lg:h-[500px] absolute bottom-[0%] right-[-60%] lg:right-[-30%] z-0" />
    </section>
  );
};

export default BrandingSection;
