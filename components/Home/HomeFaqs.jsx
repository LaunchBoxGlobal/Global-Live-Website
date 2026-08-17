"use client";
import { FAQS } from "@/constants/Faqs";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const HomeFaqs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section
      className="w-full pb-10 pt-20 lg:pt-28 lg:pb-32 padding-x flex flex-col items-center"
      id="faqs"
    >
      <h2 className="section-heading text-center">
        Got Questions? <br /> We've Got You{" "}
        <span className="red-text">Covered!</span>
      </h2>
      <section
        id="faqs"
        className="w-full mt-10 lg:mt-24 flex flex-col items-start gap-4 lg:w-[90%]"
      >
        {FAQS?.map((faq, index) => (
          <div
            className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
            key={index}
          >
            <button
              onClick={() => toggleFaq(index)}
              aria-expanded={openFaq === index}
              aria-label={`${openFaq === index ? "Collapse" : "Expand"} FAQ: ${faq?.question}`}
              className="w-full text-start flex items-center justify-between outline-none"
            >
              <span role="heading" aria-level="3" className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%] leading-7 lg:leading-10">
                {faq?.question}
              </span>

              <Image
                src={"/faq-arrow-icon.webp"}
                width={24}
                height={20}
                alt="faq arrow icon"
                loading="lazy"
                priority={false}
                className={`${
                  openFaq === index ? "scale-y-[-1]" : "scale-y-[1]"
                } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px]`}
              />
            </button>

            <motion.div
              initial={false}
              animate={{
                height: openFaq === index ? "auto" : 0,
                opacity: openFaq === index ? 1 : 0,
                marginTop: openFaq === index ? "18px" : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                {faq?.answer}
              </p>
            </motion.div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default HomeFaqs;
