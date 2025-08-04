"use client";
import React, { useState } from "react";
import "../Global/ServiceCard.css";
import Link from "next/link";
import { IoMdArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const Services = ({ heading, redText, description, descriptionWidth }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="w-full py-12 lg:pt-32">
      <section
        className="w-full padding-x flex flex-col items-center justify-center gap-5"
        id="services"
      >
        <h2 className="section-heading">
          {heading} <span className="red-text">{redText}</span>
        </h2>
        <p className={`section-paragraph text-center ${descriptionWidth}`}>
          {description}
        </p>
      </section>

      <section className="w-full padding-x">
        <section className="w-full flex flex-col flex-wrap items-start justify-center gap-y-4 mt-8 lg:my-20 overflow-y-visible">
          {/* Service 1 */}
          <button
            type="button"
            className={`w-full px-4 pb-0 pt-4 lg:pt-10 lg:px-7 rounded-xl flex flex-col items-start justify-between gap-x-4 group lg:hover:bg-black ${
              openFaq === 0 ? "bg-[#000] lg:pb-[60px]" : "bg-white lg:pb-[50px]"
            } transition-all duration-300 h-auto relative overflow-visible mb-0 outline-none`}
            onClick={() => toggleFaq(0)}
          >
            <div className="w-full flex items-start justify-between">
              <span
                className={`text-[12px] lg:text-[20px] font-medium text-gray-400 lg:group-hover:text-white transition-all duration-300 ${
                  openFaq === 0 && "text-white"
                }`}
              >
                (01)
              </span>
              <img
                src="/home-mobile-app-development-image.webp"
                width={191}
                height={325}
                alt="Software development agency creating mobile apps with expert coding and innovative tech solutions"
                loading="lazy"
                className={`2xl:left-[9%] -top-[40%] object-contain hidden lg:block absolute lg:left-[12%] xl:left-[10%] z-10 ${
                  openFaq === 0
                    ? "lg:top-[10%] top-[10%] rotate-0 visible"
                    : "invisible group-hover:visible"
                }`}
              />
              <div className="flex flex-col items-center w-[85%] lg:w-[60%] xl:w-[67%] 2xl:w-[67%]">
                <div className="w-full flex items-center lg:items-start justify-between mb-0 gap-5 py-0">
                  <h3
                    className={`text-[20px] text-start md:text-[3vw] leading-7 lg:leading-10 xl:leading-[50px] tracking-tight font-light ${
                      openFaq === 0 ? "text-white" : "text-gray-400"
                    } font-normal transition-all duration-300`}
                  >
                    Mobile App Development
                  </h3>
                  <IoMdArrowDown
                    className={`w-[15px] block lg:mt-1 lg:w-[31px] h-[15px] lg:h-[31px] ${
                      openFaq === 0
                        ? "text-[#fff] opacity-100 scale-y-[-1]"
                        : "text-[#F40E00] opacity-60 scale-y-[1]"
                    } transition-all duration-300`}
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === 0 ? "auto" : 0,
                    opacity: openFaq === 0 ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative flex items-start justify-start overflow-hidden w-full pl-0.5 mt-2 md:mt-4"
                >
                  <div className="w-full lg:w-[90%] border-t py-4 flex flex-col items-start gap-2">
                    <p className="text-white text-start leading-5 text-base lg:text-lg font-light">
                      You need an app that works smoothly and keeps the users
                      engaged. A{" "}
                      <Link href={`/services/mobile-app-development`}>
                        mobile app development
                      </Link>{" "}
                      company that helps you build fast, secure, and easy-to-use
                      apps for IOS and Android. Every step is handled with care
                      that makes sure that app fits your goals and reaches the
                      right audience.
                    </p>
                    <Link
                      href="/services/mobile-app-development"
                      className="text-white block border px-4 py-2 rounded-2xl text-sm mt-3 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      View More
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </button>

          {/* Service 2 */}
          <button
            type="button"
            className={`w-full px-4 pb-0 pt-4 lg:pt-10 lg:px-7 rounded-xl flex flex-col items-start justify-between gap-x-4 group lg:hover:bg-black ${
              openFaq === 1 ? "bg-[#000] lg:pb-[60px]" : "bg-white lg:pb-[50px]"
            } transition-all duration-300 h-auto relative overflow-visible mb-0 outline-none`}
            onClick={() => toggleFaq(1)}
          >
            <div className="w-full flex items-start justify-between">
              <span
                className={`text-[12px] lg:text-[20px] font-medium text-gray-400 lg:group-hover:text-white transition-all duration-300 ${
                  openFaq === 1 && "text-white"
                }`}
              >
                (02)
              </span>
              <img
                src="/home-web-app-development-service-image.webp"
                width={313}
                height={339}
                alt="Analytics dashboard mockup showcasing a software development agency’s focus on marketing and performance tools."
                loading="lazy"
                className={`2xl:left-[9%] -top-[40%] object-contain hidden lg:block absolute lg:left-[12%] xl:left-[7%] z-10 ${
                  openFaq === 1
                    ? "lg:top-[10%] top-[10%] rotate-0 visible"
                    : "invisible group-hover:visible"
                }`}
              />
              <div className="flex flex-col items-center w-[85%] lg:w-[60%] xl:w-[67%] 2xl:w-[67%]">
                <div className="w-full flex items-center lg:items-start justify-between mb-0 gap-5 py-0">
                  <h3
                    className={`text-[20px] text-start md:text-[3vw] leading-7 lg:leading-10 xl:leading-[50px] tracking-tight font-light ${
                      openFaq === 1 ? "text-white" : "text-gray-400"
                    } font-normal transition-all duration-300`}
                  >
                    Web App Development
                  </h3>
                  <IoMdArrowDown
                    className={`w-[15px] block lg:mt-1 lg:w-[31px] h-[15px] lg:h-[31px] ${
                      openFaq === 1
                        ? "text-[#fff] opacity-100 scale-y-[-1]"
                        : "text-[#F40E00] opacity-60 scale-y-[1]"
                    } transition-all duration-300`}
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === 1 ? "auto" : 0,
                    opacity: openFaq === 1 ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative flex items-start justify-start overflow-hidden w-full pl-0.5 mt-2 md:mt-4"
                >
                  <div className="w-full lg:w-[90%] border-t py-4 flex flex-col items-start gap-2">
                    <p className="text-white text-start leading-5 text-base lg:text-lg font-light">
                      Strong web app development keeps your business running
                      efficiently. With{" "}
                      <Link href={`/services/web-app-development`}>
                        web app development services
                      </Link>
                      , you get custom-built fast, secure, and user-friendly
                      solutions for customers or internal teams. A well-designed
                      web app improves workflows, boosts engagement, and
                      delivers user experience.
                    </p>
                    <Link
                      href="/services/web-app-development"
                      className="text-white block border px-4 py-2 rounded-2xl text-sm mt-3 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      View More
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </button>

          {/* Service 3 */}
          <button
            type="button"
            className={`w-full px-4 pb-0 pt-4 lg:pt-10 lg:px-7 rounded-xl flex flex-col items-start justify-between gap-x-4 group lg:hover:bg-black ${
              openFaq === 2 ? "bg-[#000] lg:pb-[60px]" : "bg-white lg:pb-[50px]"
            } transition-all duration-300 h-auto relative overflow-visible mb-0 outline-none`}
            onClick={() => toggleFaq(2)}
          >
            <div className="w-full flex items-start justify-between">
              <span
                className={`text-[12px] lg:text-[20px] font-medium text-gray-400 lg:group-hover:text-white transition-all duration-300 ${
                  openFaq === 2 && "text-white"
                }`}
              >
                (03)
              </span>
              <img
                src="/home-software-development-service-image.webp"
                width={313}
                height={339}
                alt="UI mockup highlighting a software development agency's custom solutions with modern design and functionality."
                loading="lazy"
                className={`2xl:left-[9%] -top-[40%] object-contain hidden lg:block absolute lg:left-[12%] xl:left-[7%] z-10 ${
                  openFaq === 2
                    ? "lg:top-[10%] top-[10%] rotate-0 visible"
                    : "invisible group-hover:visible"
                }`}
              />
              <div className="flex flex-col items-center w-[85%] lg:w-[60%] xl:w-[67%] 2xl:w-[67%]">
                <div className="w-full flex items-center lg:items-start justify-between mb-0 gap-5 py-0">
                  <h3
                    className={`text-[20px] text-start md:text-[3vw] leading-7 lg:leading-10 xl:leading-[50px] tracking-tight font-light ${
                      openFaq === 2 ? "text-white" : "text-gray-400"
                    } font-normal transition-all duration-300`}
                  >
                    Software Development
                  </h3>
                  <IoMdArrowDown
                    className={`w-[15px] block lg:mt-1 lg:w-[31px] h-[15px] lg:h-[31px] ${
                      openFaq === 2
                        ? "text-[#fff] opacity-100 scale-y-[-1]"
                        : "text-[#F40E00] opacity-60 scale-y-[1]"
                    } transition-all duration-300`}
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === 2 ? "auto" : 0,
                    opacity: openFaq === 2 ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative flex items-start justify-start overflow-hidden w-full pl-0.5 mt-2 md:mt-4"
                >
                  <div className="w-full lg:w-[90%] border-t py-4 flex flex-col items-start gap-2">
                    <p className="text-white text-start leading-5 text-base lg:text-lg font-light">
                      Your business is unique, and your software should be too.
                      With{" "}
                      <Link href={`/services/custom-software-development`}>
                        custom software development services
                      </Link>
                      , get tailored solutions that could fix your exact needs.
                      Whether it’s automating tasks, improving efficiency, or
                      scaling operations, the correct software could make a
                      difference. There are no unnecessary features, just the
                      tools that are used perfectly and built specifically for
                      your business requirements.
                    </p>
                    <Link
                      href="/services/custom-software-development"
                      className="text-white block border px-4 py-2 rounded-2xl text-sm mt-3 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      View More
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </button>

          {/* Service 4 */}
          <button
            type="button"
            className={`w-full px-4 pb-0 pt-4 lg:pt-10 lg:px-7 rounded-xl flex flex-col items-start justify-between gap-x-4 group lg:hover:bg-black ${
              openFaq === 3 ? "bg-[#000] lg:pb-[60px]" : "bg-white lg:pb-[50px]"
            } transition-all duration-300 h-auto relative overflow-visible mb-0 outline-none`}
            onClick={() => toggleFaq(3)}
          >
            <div className="w-full flex items-start justify-between">
              <span
                className={`text-[12px] lg:text-[20px] font-medium text-gray-400 lg:group-hover:text-white transition-all duration-300 ${
                  openFaq === 3 && "text-white"
                }`}
              >
                (04)
              </span>
              <img
                src="/home-ecommerce-app-development-service-image.webp"
                width={210}
                height={339}
                alt="Mobile app mockup showing custom software engineering services for smooth ecommerce experience and user interface."
                loading="lazy"
                className={`2xl:left-[9%] -top-[40%] object-contain hidden lg:block absolute lg:left-[12%] xl:left-[7%] z-10 ${
                  openFaq === 3
                    ? "lg:top-[10%] top-[10%] rotate-0 visible"
                    : "invisible group-hover:visible"
                }`}
              />
              <div className="flex flex-col items-center w-[85%] lg:w-[60%] xl:w-[67%] 2xl:w-[67%]">
                <div className="w-full flex items-center lg:items-start justify-between mb-0 gap-5 py-0">
                  <h3
                    className={`text-[20px] text-start md:text-[3vw] leading-7 lg:leading-10 xl:leading-[50px] tracking-tight font-light ${
                      openFaq === 3 ? "text-white" : "text-gray-400"
                    } font-normal transition-all duration-300`}
                  >
                    E-Commerce Development
                  </h3>
                  <IoMdArrowDown
                    className={`w-[15px] block lg:mt-1 lg:w-[31px] h-[15px] lg:h-[31px] ${
                      openFaq === 3
                        ? "text-[#fff] opacity-100 scale-y-[-1]"
                        : "text-[#F40E00] opacity-60 scale-y-[1]"
                    } transition-all duration-300`}
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === 3 ? "auto" : 0,
                    opacity: openFaq === 3 ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative flex items-start justify-start overflow-hidden w-full pl-0.5 mt-2 md:mt-4"
                >
                  <div className="w-full lg:w-[90%] border-t py-4 flex flex-col items-start gap-2">
                    <p className="text-white text-start leading-5 text-base lg:text-lg font-light">
                      Selling online should be simple and effective with{" "}
                      <Link href={`/services-ecommerce-development`}>
                        e-commerce app development services
                      </Link>
                      . Create an easy-to-use store that helps customers find,
                      buy, and return with confidence. Create a secure and fast
                      mobile-friendly platform that ensures smooth shopping
                      experiences. Build an online store that grows your
                      business and keeps customers coming back.
                    </p>
                    <Link
                      href="/services/ecommerce-development"
                      className="text-white block border px-4 py-2 rounded-2xl text-sm mt-3 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      View More
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </button>

          {/* Service 5 */}
          <button
            type="button"
            className={`w-full px-4 pb-0 pt-4 lg:pt-10 lg:px-7 rounded-xl flex flex-col items-start justify-between gap-x-4 group lg:hover:bg-black ${
              openFaq === 4 ? "bg-[#000] lg:pb-[60px]" : "bg-white lg:pb-[50px]"
            } transition-all duration-300 h-auto relative overflow-visible mb-0 outline-none`}
            onClick={() => toggleFaq(4)}
          >
            <div className="w-full flex items-start justify-between">
              <span
                className={`text-[12px] lg:text-[20px] font-medium text-gray-400 lg:group-hover:text-white transition-all duration-300 ${
                  openFaq === 4 && "text-white"
                }`}
              >
                (05)
              </span>
              <img
                src="/home-digital-marketing-service-mockup.webp"
                width={291}
                height={190}
                alt="Digital Marketing services banking app interface showing Western Bank Limited $1.50 cash transaction processing"
                loading="lazy"
                className={`2xl:left-[9%] -top-[40%] object-contain hidden lg:block absolute lg:left-[12%] xl:left-[7%] z-10 ${
                  openFaq === 4
                    ? "lg:top-[10%] top-[10%] rotate-0 visible"
                    : "invisible group-hover:visible"
                }`}
              />
              <div className="flex flex-col items-center w-[85%] lg:w-[60%] xl:w-[67%] 2xl:w-[67%]">
                <div className="w-full flex items-center lg:items-start justify-between mb-0 gap-5 py-0">
                  <h3
                    className={`text-[20px] text-start md:text-[3vw] leading-7 lg:leading-10 xl:leading-[50px] tracking-tight font-light ${
                      openFaq === 4 ? "text-white" : "text-gray-400"
                    } font-normal transition-all duration-300`}
                  >
                    Digital Marketing
                  </h3>
                  <IoMdArrowDown
                    className={`w-[15px] block lg:mt-1 lg:w-[31px] h-[15px] lg:h-[31px] ${
                      openFaq === 4
                        ? "text-[#fff] opacity-100 scale-y-[-1]"
                        : "text-[#F40E00] opacity-60 scale-y-[1]"
                    } transition-all duration-300`}
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === 4 ? "auto" : 0,
                    opacity: openFaq === 4 ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative flex items-start justify-start overflow-hidden w-full pl-0.5 mt-2 md:mt-4"
                >
                  <div className="w-full lg:w-[90%] border-t py-4 flex flex-col items-start gap-2">
                    <p className="text-white text-start leading-5 text-base lg:text-lg font-light">
                      Reaching the right online audience takes approach and
                      ability. With{" "}
                      <Link href={`/services/digital-marketing`}>
                        digital marketing services
                      </Link>
                      , visibility can be boosted through SEO, paid ads, and
                      social media. Also, drive traffic and lead generation and
                      turn your visitors into loyal customers. A strong digital
                      presence that helps your business grow and stay ahead in a
                      competitive online world.
                    </p>
                    <Link
                      href="/services/digital-marketing"
                      className="text-white block border px-4 py-2 rounded-2xl text-sm mt-3 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      View More
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </button>

          {/* Service 6 */}
          <button
            type="button"
            className={`w-full px-4 pb-0 pt-4 lg:pt-10 lg:px-7 rounded-xl flex flex-col items-start justify-between gap-x-4 group lg:hover:bg-black ${
              openFaq === 5 ? "bg-[#000] lg:pb-[60px]" : "bg-white lg:pb-[50px]"
            } transition-all duration-300 h-auto relative overflow-visible mb-0 outline-none`}
            onClick={() => toggleFaq(5)}
          >
            <div className="w-full flex items-start justify-between">
              <span
                className={`text-[12px] lg:text-[20px] font-medium text-gray-400 lg:group-hover:text-white transition-all duration-300 ${
                  openFaq === 5 && "text-white"
                }`}
              >
                (06)
              </span>
              <img
                src="/home-branding-and-design-service-mockup.webp"
                width={310}
                height={284}
                alt="Branding and design showcase for AURLEN featuring minimalist logo presentation and visual identity elements."
                loading="lazy"
                className={`2xl:left-[9%] -top-[40%] object-contain hidden lg:block absolute lg:left-[12%] xl:left-[7%] z-10 ${
                  openFaq === 5
                    ? "lg:top-[10%] top-[10%] rotate-0 visible"
                    : "invisible group-hover:visible"
                }`}
              />
              <div className="flex flex-col items-center w-[85%] lg:w-[60%] xl:w-[67%] 2xl:w-[67%]">
                <div className="w-full flex items-center lg:items-start justify-between mb-0 gap-5 py-0">
                  <h3
                    className={`text-[20px] text-start md:text-[3vw] leading-7 lg:leading-10 xl:leading-[50px] tracking-tight font-light ${
                      openFaq === 5 ? "text-white" : "text-gray-400"
                    } font-normal transition-all duration-300`}
                  >
                    Branding & Design
                  </h3>
                  <IoMdArrowDown
                    className={`w-[15px] block lg:mt-1 lg:w-[31px] h-[15px] lg:h-[31px] ${
                      openFaq === 5
                        ? "text-[#fff] opacity-100 scale-y-[-1]"
                        : "text-[#F40E00] opacity-60 scale-y-[1]"
                    } transition-all duration-300`}
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === 5 ? "auto" : 0,
                    opacity: openFaq === 5 ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative flex items-start justify-start overflow-hidden w-full pl-0.5 mt-2 md:mt-4"
                >
                  <div className="w-full lg:w-[90%] border-t py-4 flex flex-col items-start gap-2">
                    <p className="text-white text-start leading-5 text-base lg:text-lg font-light">
                      Your brand is how people remember you. With{" "}
                      <Link href={`/services/branding-and-design`}>
                        branding & designing services
                      </Link>
                      , create a strong identity that connects with the
                      customers. From the logos to the entire brand strategy,
                      every small detail matters. Clear, creative, and
                      eye-catching designs that helps build trust, and make you
                      stand out from the competition.
                    </p>
                    <Link
                      href="/services/branding-and-design"
                      className="text-white block border px-4 py-2 rounded-2xl text-sm mt-3 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      View More
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </button>

          {/* Repeat same pattern for Service 2, Service 3, ..., Service 6 */}
          {/* Use toggleFaq(1), openFaq === 1 for Service 2, etc. */}
          {/* Change images, titles, descriptions, and links accordingly */}
        </section>
      </section>
    </section>
  );
};

export default Services;
