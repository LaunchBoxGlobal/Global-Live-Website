"use client";
import React, { useState } from "react";
import AgileWorkflow from "./AgileWorkflow";
import { SMART_PLANNING } from "@/constants/mobile-app-development/SmartPlanning";
import { MOBILE_APP_WATERFALL_WORKFLOW } from "@/constants/mobile-app-development/MobileAppWaterfall";
import { MOBILE_APP_RECOMMENDED_WORKFLOW } from "@/constants/mobile-app-development/MobileAppRecommendedWorkflow";

const IonicWorkflow = () => {
  const [activeTab, setActiveTab] = useState("recommended");

  return (
    <section className="w-full padding-x py-10 lg:py-20 lg:pb-60 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          How We Work <span className="ionic-text">Work</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          Our ionic app development services follow clear steps: plan, build,
          and test. We keep things simple and deliver apps that work properly on
          all devices.
        </p>
      </section>

      <div className="w-full flex justify-center mt-10">
        <div className="w-full md:w-[413px] h-[56px] border rounded-full flex items-center justify-between p-1">
          <button
            type="button"
            name="agile methodology button"
            onClick={() => setActiveTab("agile")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "agile"
                ? "ionic-bg text-white"
                : "bg-white text-gray-500"
            }`}
          >
            AGILE
          </button>
          <button
            type="button"
            name="recommended workflow button"
            onClick={() => setActiveTab("recommended")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "recommended"
                ? "ionic-bg text-white"
                : "bg-white text-gray-500"
            }`}
          >
            recommended
          </button>
          <button
            type="button"
            name="waterfall methodology button"
            onClick={() => setActiveTab("waterfall")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "waterfall"
                ? "ionic-bg text-white"
                : "bg-white text-gray-500"
            }`}
          >
            Waterfall
          </button>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        {activeTab === "agile" && <AgileWorkflow workflow={SMART_PLANNING} />}
        {activeTab === "recommended" && (
          <AgileWorkflow workflow={MOBILE_APP_RECOMMENDED_WORKFLOW} />
        )}
        {activeTab === "waterfall" && (
          <AgileWorkflow workflow={MOBILE_APP_WATERFALL_WORKFLOW} />
        )}
      </div>
    </section>
  );
};

export default IonicWorkflow;
