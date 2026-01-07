import React from "react";
import ResearchCard from "./ResearchCard";

const JetezeeResearch = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-start relative z-10">
        <h2 className="text-[35px] lg:text-[50px] font-medium leading-none z-10">
          Research
        </h2>
        <p className="lg:w-[45%] text-base lg:text-[30px] mt-7 z-10 leading-[1.1]">
          Before initiating the prototype design, we conducted in-depth research
          to understand the aviation trade ecosystem and its distinct user
          experience requirements.
        </p>
      </section>

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 relative mt-10 lg:mt-0 lg:-top-5">
        <div className="w-full flex items-center justify-center">
          <ResearchCard
            title={"User Research"}
            description={
              "Included interviews with key stakeholders — aircraft brokers, sellers, and high-net-worth buyers. Buyers emphasized the need for trustworthy, verified listings, rich visual content, and intuitive tools to compare specifications across multiple aircraft. Sellers expressed the importance of a streamlined, guided listing process with real-time validation, preview options, and clarity around listing requirements."
            }
            imageAlt={"user research"}
            imageWidth={45}
            imageHeight={50}
            bgColor={"#212121"}
            imageSrc={"/case-studies/jetezee/user-research-icon.png"}
          />
        </div>

        <div className="w-full space-y-5">
          <ResearchCard
            title={"Market Research"}
            description={
              "Involved analyzing leading luxury aircraft platforms such as Jetcraft, Controller, and GlobalAir. We examined how these platforms structured aircraft listings, enabled side-by-side comparisons, and facilitated buyer inquiries. This helped us identify best practices and gaps in current market offerings."
            }
            imageAlt={"user research"}
            imageWidth={48}
            imageHeight={50}
            bgColor={"#E9B44C"}
            imageSrc={"/case-studies/jetezee/market-research-icon.png"}
          />
          <ResearchCard
            title={"UX Research"}
            description={
              "Focused on premium design patterns suited to high-ticket marketplaces. We studied interface layouts for optimal whitespace use, effective visual hierarchy, and prominent yet non-intrusive CTA placements to maintain a balance of elegance and usability — all crucial for building trust and credibility in this niche market."
            }
            imageAlt={"user-experience-research-icon"}
            imageWidth={51}
            imageHeight={50}
            bgColor={"#212121"}
            imageSrc={"/case-studies/jetezee/user-experience-research-icon.png"}
          />
        </div>

        <div className="bg-[var(--jetezee-primary-color)] rounded-full w-[700px] h-[700px] absolute bottom-0 left-[-50%] z-0 blur-[400px] hidden lg:block" />
        <div className="bg-[var(--jetezee-primary-color)] rounded-full w-[700px] h-[700px] absolute top-0 right-[-50%] z-0 blur-[400px] hidden lg:block" />
      </section>
    </section>
  );
};

export default JetezeeResearch;
