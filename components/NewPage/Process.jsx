import React from "react";
import ProcessCard from "./ProcessCard";
import { GoArrowUpRight } from "react-icons/go";

const process_steps = [
  {
    title: "Workflow Audit",
    description:
      "We start with a call to understand your business, how you operate today, what's broken, what's working, and what you actually need. No pitch. Just clarity.",
    icon: "/workflow-audit-icon.png",
    width: 26,
    height: 26,
    alt: "Workflow Audit icon",
  },
  {
    title: "Scope & Proposal",
    description:
      "Based on the audit, we map out exactly what we'll build, covering features, integrations, timeline, and cost. You'll know what you're getting before anything starts.",
    icon: "/scope-and-proposal-icon.png",
    width: 18,
    height: 23,
    alt: "scope-and-proposal-icon",
  },
  {
    title: "Design & Build",
    description:
      "Our team designs and develops your platform in structured sprints. You get regular updates, working previews, and full visibility throughout. No black boxes.",
    icon: "/design-and-build-icon.png",
    width: 26,
    height: 26,
    alt: "design-and-build-icon",
  },
  {
    title: "Launch & Handoff",
    description:
      "We deploy your platform, train your team, and make sure everything runs smoothly. And when your business grows and needs more, we're still here.",
    icon: "/launch-and-handoff-icon.png",
    width: 26,
    height: 26,
    alt: "launch-and-handoff-icon",
  },
];

const Process = () => {
  return (
    <section className="bg-[#fff] padding-x py-24 selection:bg-red-100 selection:text-red-900 overflow-hidden flex items-start justify-between flex-wrap gap-8">
      {/* Header Section */}
      <div className="mb-10 text-start w-full lg:max-w-[40%]">
        <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
          the process
        </p>
        <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#111111] tracking-tight leading-[55px]">
          From First Call to Fully Launched. Here's How It{" "}
          <span className="text-[#ea2b2b]">Works</span>
        </h2>

        <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-2xl mt-5">
          No guesswork. No disappearing developers. Just a clear process from
          start to finish.
        </p>
      </div>

      <div className="w-full lg:max-w-[55%]">
        <div className="">
          {process_steps?.slice(0, 1)?.map((pr, i) => {
            return <ProcessCard process={pr} key={pr?.title} index={i} />;
          })}
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {process_steps?.slice(1)?.map((pr, i) => {
            return <ProcessCard process={pr} key={pr?.title} index={i + 1} />;
          })}

          <div className="w-full min-h-[237px] flex flex-col items-start justify-between rounded-[24px] p-5 bg-[#f40e00] transition-all duration-300 group">
            <span className="text-[24px] leading-[1.3] font-bold text-white transition-all duration-300">
              Start With a <br /> Workflow Audit
            </span>

            <div className="w-[46px] h-[46px] rounded-full flex items-center justify-center border-2 border-white transition-all duration-300">
              <GoArrowUpRight className="text-white transition-all duration-300 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
