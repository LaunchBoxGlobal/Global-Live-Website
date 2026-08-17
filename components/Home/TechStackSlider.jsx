"use client";
import Image from "next/image";
import { TECH_STACK } from "@/constants/techStack";
import { motion } from "framer-motion";
import {
  HOME_PAGE_TECH_STACK,
  HOME_PAGE_TECH_STACK_2,
} from "@/constants/home-page-tech-stack";
import Link from "next/link";

const marqueeVariants = {
  animate: {
    x: [0, -1280],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const marqueeVariantsReverse = {
  animate: {
    x: [-1280, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const TechStackSlider = () => {
  return (
    <section className="w-full py-10 lg:py-20 bg-[#ffff]" id="teckstack">
      <section className="w-full padding-x flex flex-col items-center justify-center gap-5 mb-12">
        <h2 className={`section-heading text-center lg:w-[80%]`}>
          Smart Technology For Better <span className="red-text">Solution</span>
        </h2>
        <p className="section-paragraph text-center lg:w-[75%] w-full">
          You get the best tools and technologies to build fast, secure, and
          reliable software that fits your business perfectly.
        </p>
      </section>

      <section className="w-full relative mb-16 mt-20">
        <div className="bg-white border-2 red-shadow w-[180px] h-[180px] lg:w-[210px] lg:h-[210px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 rounded-full flex items-center justify-center">
          <img
            src="/launchbox-global-logo-tech-stack.png"
            alt="launchbox-global-logo-tech-stack"
            width={90}
            height={90}
          />
        </div>
        <section className="w-full overflow-hidden bg-[#fff]">
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            className="flex items-center w-max"
          >
            {[...HOME_PAGE_TECH_STACK, ...HOME_PAGE_TECH_STACK].map(
              (platform, index) =>
                platform?.link ? (
                  <Link key={index} href={platform?.link}>
                    <img
                      src={platform?.image}
                      width={77}
                      height={77}
                      alt={platform?.title || platform?.image?.split("/").pop().replace(/[-_](icon|logo|tech-stack)[^.]*/, "").replace(/[-_]/g, " ").replace(/\.[^.]+$/, "") || "Technology"}
                      loading="lazy"
                      className="w-auto h-full object-contain max-w-[75px] max-h-[75px]"
                    />
                  </Link>
                ) : (
                  <img
                    key={index}
                    src={platform?.image}
                    width={77}
                    height={77}
                    alt={platform?.title || platform?.image?.split("/").pop().replace(/[-_](icon|logo|tech-stack)[^.]*/, "").replace(/[-_]/g, " ").replace(/\.[^.]+$/, "") || "Technology"}
                    loading="lazy"
                    className="w-auto h-full object-contain max-w-[75px] max-h-[75px]"
                  />
                )
            )}
          </motion.div>
        </section>
        <section className="w-full overflow-hidden bg-[#fff] relative">
          <motion.div
            variants={marqueeVariantsReverse}
            animate="animate"
            className="flex items-center w-max"
          >
            {[...HOME_PAGE_TECH_STACK_2, ...HOME_PAGE_TECH_STACK_2].map(
              (platform, index) =>
                platform?.link ? (
                  <Link key={index} href={platform?.link}>
                    <img
                      src={platform?.image}
                      width={77}
                      height={77}
                      alt={platform?.title || platform?.image?.split("/").pop().replace(/[-_](icon|logo|tech-stack)[^.]*/, "").replace(/[-_]/g, " ").replace(/\.[^.]+$/, "") || "Technology"}
                      loading="lazy"
                      className="w-auto h-full object-contain max-w-[75px] max-h-[75px]"
                    />
                  </Link>
                ) : (
                  <img
                    key={index}
                    src={platform?.image}
                    width={77}
                    height={77}
                    alt={platform?.title || platform?.image?.split("/").pop().replace(/[-_](icon|logo|tech-stack)[^.]*/, "").replace(/[-_]/g, " ").replace(/\.[^.]+$/, "") || "Technology"}
                    loading="lazy"
                    className="w-auto h-full object-contain max-w-[75px] max-h-[75px]"
                  />
                )
            )}
          </motion.div>
        </section>
      </section>
    </section>
  );
};

export default TechStackSlider;
