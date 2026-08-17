import Image from "next/image";
import React from "react";

const HomeComparison = () => {
  return (
    <section className="w-full padding-x py-12 lg:py-28 bg-[#F9F9F9]">
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="flex flex-col items-center lg:items-center justify-start text-center lg:px-5">
          <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[60px] font-medium lg:font-bold lg:mb-3">
            <strong>
              Problems You <span className="text-[#F40E00]">Face</span>
            </strong>
          </h2>
          <p className="text-[15px] lg:text-[18px] font-light leading-6 text-gray-500 mb-5 lg:mb-0 lg:w-2/3">
            Poor communication and outdated methods cause delays, glitches, and
            project failures.
          </p>
          {/* <Image
            src={"/Problem.gif"}
            width={400}
            height={386}
            alt="poor communication image"
            className="xl:mt-10 w-[80%] mx-auto lg:mt-5 object-contain"
            loading="lazy"
          /> */}
          <video
            autoPlay
            loop={true}
            muted
            playsInline
            className="w-[80%] mx-auto opacity-90 mt-6"
          >
            {/* home-comparision-problem-min.mp4 */}
            <source
              src="/home-comparision-problem-min-2.mp4"
              type="video/mp4"
            />
          </video>
          {/* home-comparision-problem.mp4 */}
        </section>
        <section className="flex flex-col items-center lg:items-center justify-start text-center lg:px-5 lg:pr-[5%] lg:pt-2.5">
          <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[60px] leading-10 font-medium lg:font-bold mb-2 lg:mb-5">
            <strong>
              Solutions We<span className="text-[#F40E00]"> Provide</span>
            </strong>
          </h2>
          <p className="text-[15px] lg:text-[18px] font-light leading-6 text-gray-500 xl:mb-5 lg:w-[75%]">
            Stay informed at every step with Agile methods, ensuring a smooth
            and on-track project.
          </p>
          <video
            autoPlay
            loop={true}
            muted
            playsInline
            className="w-[80%] mx-auto opacity-90 mt-6"
          >
            {/* comparison-video-min.mp4 */}
            <source src="/comparison-video-min-2.mp4" type="video/mp4" />
          </video>
          {/* <Image
            src={"/Solution.gif"}
            width={400}
            height={386}
            loading="lazy"
            alt="solutions we provide image"
            className="w-[80%] mx-auto opacity-90 mt-5 object-contain"
          /> */}
        </section>
      </section>
    </section>
  );
};

export default HomeComparison;
