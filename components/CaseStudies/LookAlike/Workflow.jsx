import React from "react";
import { Layers, Search, Activity, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Core Functions",
    description:
      "We defined the essential building blocks: profile creation, verification, browsing, like/skip, match percentage, and chat.",
    icon: Layers,
  },
  {
    step: "02",
    title: "Wireframes & Prototypes",
    description:
      "Mapped flows for verification, discovery, and chat tested early to catch friction before development.",
    icon: Search,
  },
  {
    step: "03",
    title: "Iterative Sprints",
    description:
      "Built features in cycles with real feedback, refining verification accuracy and the discovery flow along the way.",
    icon: Activity,
  },
  {
    step: "04",
    title: "Final Optimisation",
    description:
      "Polished performance and visual consistency across the app ahead of launch.",
    icon: Sparkles,
  },
];

export function Workflow() {
  return (
    <section className="w-full padding-x relative">
      <div className="w-full">
        {/* Header */}
        <div className="mb-14">
          <h2 className="section-heading text-start z-10">Workflow</h2>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="flex flex-col relative group">
              {/* Connector Line (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-[30px] left-[30px] w-[calc(100%+32px)] h-[1px] bg-[#c3cce8] z-0" />
              )}

              {/* Connector Line (Mobile) */}
              {index !== steps.length - 1 && (
                <div className="hidden absolute top-[60px] left-[29px] bottom-[-48px] w-[2px] bg-[#c3cce8] z-0" />
              )}

              {/* Icon */}
              <div className="w-[60px] h-[60px] rounded-full lookalike-gradient flex items-center justify-center text-white shadow-[0_0_40px_rgba(86,103,255,0.4)] mb-6 shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-110">
                <item.icon className="w-5 h-5 stroke-[2.5px]" />
              </div>

              {/* Content */}
              <div className="pr-4 md:pr-8 relative z-10">
                <div className="text-[14px] font-extrabold text-[#9B8FE8] tracking-[0.2em] uppercase mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-[16px] text-#626263 leading-[1.35] font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
