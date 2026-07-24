"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  User,
  Lock,
  Coins,
  Wrench,
  Laptop,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import StatsBanner from "./StatsBanner";
import TabsList from "./TabsList";
import TabContent from "./TabContent";

export default function HiringExternalTeam({ toggleDiscoveryCallForm }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "disappear",
      title: "What if you disappear halfway through the build?",
      icon: ShieldCheck,
      content: {
        heading: "What if you disappear halfway through the build?",
        text: "We get it. It has happened to founders before. That is why we structure every engagement with milestone-based delivery, weekly check-ins, and a dedicated point of contact. You always know what is happening and you have real recourse if we miss a milestone.",
        features: [
          {
            icon: "/systems-page/milestone-based-delivery-icon.png",
            label: "Milestone-Based Delivery",
          },
          {
            icon: "/systems-page/weekly-demo-calls.png",
            label: "Weekly Demo Calls",
          },
          {
            icon: "/systems-page/dedicated-project-lead.png",
            label: "Dedicated Project Lead",
          },
          {
            icon: "/systems-page/real-time-progress-tracking.png",
            label: "Real-Time Progress Tracking",
          },
        ],
        commitment: {
          text: `“If we miss a milestone, you don't pay for it — it's written into every contract. You're never stuck with a team that's gone quiet.”`,
          badge: "Written into every contract",
        },
      },
    },
    {
      id: "future-cto",
      title: "Will my future CTO be able to work with what you build?",
      icon: User,
      content: {
        heading: "Will my future CTO be able to work with what you build?",
        text: "Yes. We build to industry-standard practices, document everything, and hand over clean, well-structured code. We have had multiple clients where the incoming CTO specifically noted the codebase was easy to inherit.",
        features: [
          {
            icon: "/systems-page/documentation-icon.png",
            label: "Full Documentation",
          },
          {
            icon: "/systems-page/industry-standard-content.png",
            label: "Industry-Standard Code",
          },
          { icon: "/systems-page/code-quality-icon.png", label: "CTO Ready" },
          {
            icon: "/systems-page/easy-handoff-icon.png",
            label: "Clean Handover",
          },
        ],
        commitment: {
          text: `“Clean, documented handover or we keep working until your CTO signs off. No black boxes and no lock-in to us.”`,
          badge: "Handover guaranteed",
        },
      },
    },
    {
      id: "trust",
      title: "Can I trust an external team with my idea?",
      icon: Lock,
      content: {
        heading: "Can I trust an external team with my idea?",
        text: "We sign NDAs before any detailed conversation. We have worked with funded founders on sensitive, pre-launch products for years. Your idea is safe and we have no interest in anything other than building your product well.",
        features: [
          { icon: "/systems-page/strict-nda-icon.png", label: "NDA First" },
          {
            icon: "/systems-page/ownership-clause-icon.png",
            label: "Confidential by Default",
          },
          { icon: "/systems-page/secure.png", label: "Funded Founders" },
          {
            icon: "/systems-page/private-repository-icon.png",
            label: "Pre-Launch Experience",
          },
        ],
        commitment: {
          text: `“NDA signed before any detailed conversation. Always, with no exceptions.”`,
          badge: "Signed before we talk",
        },
      },
    },
    {
      id: "cost",
      title: "Is this going to cost more than just hiring freelancers?",
      icon: Coins,
      content: {
        heading: "Is this going to cost more than just hiring freelancers?",
        text: "Sometimes the hourly rate looks higher. But freelancers have no accountability, no coordination, and no shared ownership of the outcome. Most founders who come to us have already burned money and time on freelancers who did not deliver. One accountable team is almost always cheaper in the end.",
        features: [
          {
            icon: "/systems-page/scope-fixed-pricing.png",
            label: "Shared Ownership",
          },
          {
            icon: "/systems-page/no-hidden-fees.png",
            label: "Cheaper In The End",
          },
          {
            icon: "/systems-page/faster-time-to-market.png",
            label: "No Coordination Gaps",
          },
          { icon: "/systems-page/team.png", label: "One Accountable Team" },
        ],
        commitment: {
          text: `“One fixed scope, one accountable team, one invoice. No surprise hours and no finger-pointing when something breaks.”`,
          badge: "One accountable team",
        },
      },
    },
    {
      id: "change",
      title: "What if the product needs to change during the build?",
      icon: Wrench,
      content: {
        heading: "What if the product needs to change during the build?",
        text: "It will. Every product does. We build in structured sprints specifically so you can see progress, give feedback, and adjust direction without blowing up the entire timeline. We are not rigid. We are experienced.",
        features: [
          {
            icon: "/systems-page/agile-sprints.png",
            label: "Structured Sprints",
          },
          {
            icon: "/systems-page/regular-checkins.png",
            label: "Adjust Direction",
          },
          {
            icon: "/systems-page/flexible-scoping.png",
            label: "Visible Progress",
          },
          {
            icon: "/systems-page/iterative-release.png",
            label: "Continuous Feedback",
          },
        ],
        commitment: {
          text: `“Scope changes between sprints carry no penalty. Adjusting direction is part of the process, not an exception to it.”`,
          badge: "Built to flex",
        },
      },
    },
    {
      id: "outsourced",
      title: "Will this look like it was outsourced?",
      icon: Laptop,
      content: {
        heading: "Will this look like it was outsourced?",
        text: "No. We have shipped products that have gone on to raise follow-on rounds, onboard paying customers, and demo to major investors. Your product will look, feel, and perform like it was built by a team that takes quality seriously. Because it was.",
        features: [
          { icon: "/systems-page/pixel-perfect.png", label: "Investor-Ready" },
          {
            icon: "/systems-page/activity.png",
            label: "Raised Follow-On Rounds",
          },
          { icon: "/systems-page/premium-feel.png", label: "Investor-Ready" },
          {
            icon: "/systems-page/user-experience.png",
            label: "Paying Customers",
          },
        ],
        commitment: {
          text: `"Investor-ready quality or we don't ship it. The exact same standard whether the product carries our name or yours."`,
          badge: "Ships investor-ready",
        },
      },
    },
  ];

  return (
    <section className="section padding-x">
      <div
        className={`w-full relative overflow-hidden z-20 text-center flex flex-col items-center`}
      >
        <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
          Let's Be Honest
        </p>
        <h2 className="systems-section-heading">
          Things Founders Worry About <br className="hidden lg:block" /> Before
          Hiring an External <span className="text-[#ea2b2b]">Team</span>
        </h2>
        <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[75%] mt-5">
          We have heard every concern. Here are the honest answers.
        </p>
      </div>

      {/* Stats Banner */}
      <StatsBanner />

      {/* Tabs Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        {/* Tab List */}
        <TabsList
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Tab Content */}
        <TabContent tabs={tabs} activeTab={activeTab} />
      </div>

      {/* Footer Banner */}
      <div className="mt-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white relative z-10 rounded-2xl border border-[#EFE9E7] p-3 py-5 pl-8 flex flex-col md:flex-row items-center justify-between mx-auto">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div>
            <Image
              src={"/systems-page/questions-icon.png"}
              alt="questions-icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm md:text-base">
              Still have questions?
            </h4>
            <p className="text-gray-500 text-xs md:text-sm">
              Let&apos;s talk through your specific situation.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => toggleDiscoveryCallForm()}
          className="red-bg text-white px-6 py-4 rounded-[11px] font-bold text-sm flex items-center space-x-2 w-full md:w-auto justify-center hover:bg-black transition-all duration-300"
        >
          <span>Book a Free Discovery Call</span>
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="w-[100vw] h-[100vw] rounded-full bg-red-500/20 blur-[200px] opacity-40 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0" />
    </section>
  );
}
