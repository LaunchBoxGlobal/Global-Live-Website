import React from "react";
import { Users, Eye, Activity, Box, Star } from "lucide-react";
import Image from "next/image";

// Reusable component for the four left/middle cards
const FeatureCard = ({ icon: Icon, title, description, alt }) => (
  <div className="bg-white rounded-[16px] p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#5E51C91F] h-full flex flex-col">
    <div className="w-[40px] h-[40px] rounded-[14px] lookalike-gradient flex items-center justify-center text-[#fff] mb-4">
      <Image src={Icon} width={16} height={16} alt={alt} className="w-5 h-5" />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-[#4A5565] leading-[1.35] font-normal">
      {description}
    </p>
  </div>
);

export function DiscoveryResearch() {
  return (
    <section className="w-full padding-x relative flex justify-center">
      <div className="w-full">
        {/* Header */}
        <div className="mb-14 relative z-10">
          <h2 className="section-heading text-start z-10">
            <span className="text-[#1a1c29]">Discovery & </span>
            <span className="lookalike-gradient-text">Research</span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.55fr] gap-5 items-start relative z-10">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <FeatureCard
              icon={"/case-studies/lookalike/users-icon.png"}
              alt={"User research icon"}
              title="User Research"
              description="We spoke with users to understand what makes them stay on a friendship app — and what makes them leave. Trust in the verification step came up as a major factor early on."
            />
            <FeatureCard
              icon={"/case-studies/lookalike/feature-prioritization-icon.png"}
              alt={"Feature prioritisation icon"}
              title="Feature Prioritisation"
              description="We defined must-haves first: profile creation, browsing, like/skip, match percentage, and chat. Subscription access was built in from the start as a core business requirement."
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 relative z-10">
            <FeatureCard
              icon={"/case-studies/lookalike/tech-exploration-icon.png"}
              alt={"Competitor review icon"}
              title="Competitor Review"
              description="We studied other matching and social discovery apps to see what worked, and where facial-based matching could set LookaLike apart from typical swipe apps."
            />
            <FeatureCard
              icon={"/case-studies/lookalike/comptitor-review-icon.png"}
              alt={"Tech exploration icon"}
              title="Tech Exploration"
              description="We evaluated facial recognition and verification technologies for accuracy and privacy, and selected messaging infrastructure that could scale as the user base grows."
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 relative z-10">
            {/* Snapshot Card */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
              <h4 className="text-[10px] font-extrabold text-[#99A1AF] tracking-[0.2em] uppercase mb-5">
                Research Snapshot
              </h4>

              <div className="flex justify-between items-start pr-4">
                <div>
                  <div className="text-[30px] font-bold leading-none lookalike-gradient-text">
                    40+
                  </div>
                  <div className="text-[11px] text-[#99A1AF] font-medium mt-2">
                    Interviews
                  </div>
                </div>
                <div>
                  <div className="text-[30px] font-bold leading-none lookalike-gradient-text">
                    12
                  </div>
                  <div className="text-[11px] text-[#99A1AF] font-medium mt-2">
                    Competitors
                  </div>
                </div>
                <div>
                  <div className="text-[30px] font-bold leading-none lookalike-gradient-text">
                    94%
                  </div>
                  <div className="text-[11px] text-[#99A1AF] font-medium mt-2">
                    Cited trust
                  </div>
                </div>
              </div>

              <div className="w-full border border-[#5E51C91A] my-5" />

              {/* Chart */}
              <div className="flex items-end justify-between gap-2 h-12 w-full mb-2">
                <div className="bg-[#e4e7f9] h-[30%] w-full rounded-t-lg"></div>
                <div className="bg-[#e4e7f9] h-[55%] w-full rounded-t-lg"></div>
                <div className="bg-[#e4e7f9] h-[45%] w-full rounded-t-lg"></div>
                <div className="bg-[#e4e7f9] h-[70%] w-full rounded-t-lg"></div>
                <div className="bg-[#e4e7f9] h-[60%] w-full rounded-t-lg"></div>
                <div className="bg-gradient-to-t from-[#3651e7] to-[#5a77ff] h-[90%] w-full rounded-t-lg shadow-sm"></div>
                <div className="bg-gradient-to-t from-[#3651e7] to-[#5a77ff] h-[100%] w-full rounded-t-lg shadow-sm"></div>
              </div>
              <p className="text-[13px] text-gray-400 font-medium mt-3">
                Trust in verification — top retention driver
              </p>
            </div>

            {/* Persona Card */}
            <div className="bg-gradient-to-t from-[#408EE8] to-[#5E51C9] rounded-3xl p-6 shadow-xl shadow-[#5E51C94D] text-white">
              <div className="flex items-center gap-3 mb-4">
                {/* Empty placeholder box with blue background as per user instructions */}
                <div className="w-[40px] h-[40px] rounded-full relative">
                  <Image
                    src={"/case-studies/lookalike/maya-profile-picture.png"}
                    alt="maya-profile-picture"
                    width={40}
                    height={40}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[16px] leading-tight mb-0.5">
                    Maya • 24
                  </h3>
                  <p className="text-blue-100/80 text-[12px] font-medium tracking-wide">
                    Primary Persona
                  </p>
                </div>
              </div>

              <p className="text-[15px] font-normal leading-[1.35] mb-4 text-white/95">
                I want to meet real people — not bots or fake profiles. Knowing
                someone's verified makes me actually reach out.
              </p>

              <div className="flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-full bg-white/20 text-[11px] font-semibold backdrop-blur-sm">
                  Values trust
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/20 text-[11px] font-semibold backdrop-blur-sm">
                  Skeptical of swipe apps
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/20 text-[11px] font-semibold backdrop-blur-sm">
                  Wants real connection
                </span>
              </div>
            </div>

            {/* Competitor Edge Card */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[10px] font-bold text-[#99A1AF] tracking-[0.2em] uppercase">
                  Competitor Edge
                </h4>
                <div className="flex gap-1">
                  <Star
                    className="w-[14px] h-[14px] text-[#408EE8]"
                    fill="currentColor"
                  />
                  <Star
                    className="w-[14px] h-[14px] text-[#408EE8]"
                    fill="currentColor"
                  />
                  <Star
                    className="w-[14px] h-[14px] text-[#408EE8]"
                    fill="currentColor"
                  />
                  <Star
                    className="w-[14px] h-[14px] text-[#408EE8]"
                    fill="currentColor"
                  />
                  <Star className="w-[14px] h-[14px] text-[#408EE8]" />
                </div>
              </div>

              <h3 className="text-[17px] font-bold text-gray-900 mb-3">
                Facial-based matching
              </h3>
              <p className="text-sm text-[#6A7282] leading-[1.35] font-normal">
                Where typical swipe apps rely on photos alone, LookaLike's match
                percentage became the clear differentiator users remembered.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#408ee8] rounded-full w-[50vw] h-[50vw] blur-[500px] pointer-events-none opacity-70 absolute top-[20%] right-[-15%] z-0" />
    </section>
  );
}
