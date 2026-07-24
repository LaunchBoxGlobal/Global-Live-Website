import { FileText, ShieldCheck, User } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import HiringAnimation from "./HiringAnimation";

const TabContent = ({ tabs, activeTab }) => {
  return (
    <div className="w-full lg:w-2/3">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 0.3 }}
          className="bg-white relative z-20 rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 h-full flex flex-col"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-2.5 bg-[#ef4444] text-white rounded-xl shadow-inner shadow-red-600/20">
              {React.createElement(tabs[activeTab].icon, {
                size: 24,
                strokeWidth: 2.5,
              })}
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight">
              {tabs[activeTab].content.heading}
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-6">
            <div className="lg:w-3/5 text-gray-500 font-medium leading-relaxed">
              <p>{tabs[activeTab].content.text}</p>
            </div>

            {/* Decorative Illustration for Tab 1, or generic for others */}
            <HiringAnimation />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 lg:max-w-[65%]">
            {tabs[activeTab].content.features.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-start text-center px-2 white"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-[#ef4444] mb-3">
                  {/* <feature.icon size={20} /> */}
                  <Image
                    src={feature.icon}
                    width={18}
                    height={18}
                    alt="icon"
                    className="object-contain"
                  />
                </div>
                <span className="text-[12px] font-semibold text-[#4A4A4A] leading-tight">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          {/* Commitment Box */}
          <div className="mt-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50/30 rounded-2xl"></div>
            <div className="relative p-6 border border-red-100 border-l-4 border-l-red-500 rounded-2xl">
              <div className="flex items-center space-x-2 text-sm font-bold uppercase tracking-wider mb-3">
                <Image
                  src={"/systems-page/out-commitment.png"}
                  width={40}
                  height={40}
                  alt="out-commitment"
                />
                <span className="red-text">OUR COMMITMENT</span>
              </div>
              <p className="text-gray-900 font-medium text-vbaseleading-relaxed mb-4">
                {tabs[activeTab].content.commitment.text}
              </p>
              <div className="inline-flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-full border border-[#F6D5D0] text-xs font-bold red-text shadow-sm">
                <span className="red-text">✓</span>
                <span>{tabs[activeTab].content.commitment.badge}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabContent;
