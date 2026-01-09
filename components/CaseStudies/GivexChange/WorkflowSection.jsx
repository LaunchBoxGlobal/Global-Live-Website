import React from "react";
import WorkflowCard from "./WorkflowCard";
import Image from "next/image";

const WorkflowSection = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">Workflow</h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
          To build a platform that feels intuitive and purpose-driven from the
          start, we followed a Functionality-First Workflow. This approach
          allowed us to prioritize clarity, usability, and performance before
          introducing visual polish. By grounding every step in real user needs
          and continuous testing, the workflow ensured the product evolved in a
          structured, meaningful way. Each phase contributed to a marketplace
          experience that is dependable, scalable, and easy for both users and
          admins to adopt. This method kept the project aligned with core
          objectives while maintaining momentum throughout design and
          development.
        </p>
      </section>

      <section className="w-full mt-14 relative">
        {/* <Image
          src={"/case-studies/givexchange/border-line.png"}
          alt="border-line"
          width={1}
          height={629}
          className="absolute top-0 left-[10%]"
        /> */}
        <div className="w-full z-20 flex items-center gap-x-28 gap-y-5 flex-wrap">
          <WorkflowCard
            title={"Core Functions"}
            description={
              "Defined essential features for buyers, sellers, and admins to guide the foundation of the platform."
            }
            icon={"/case-studies/givexchange/core-functions-icon.png"}
            iconHeight={22}
            iconWidth={22}
            iconAlt={"core functions icon"}
            num={"01"}
          />
          <WorkflowCard
            title={"Iterative Sprints"}
            description={
              "Developed features in cycles, validating usability and refining interactions as we progressed."
            }
            icon={"/case-studies/givexchange/iterative-sprints-icon.png"}
            iconHeight={22}
            iconWidth={27}
            iconAlt={"iterative-sprints-icon"}
            num={"02"}
          />
        </div>
        <div className="w-full mt-10 z-20 flex items-center justify-end gap-x-28 gap-y-5 flex-wrap">
          <WorkflowCard
            title={"Wireframes & Prototypes"}
            description={
              "Created simple, navigable flows that reduced friction and clarified user decision-making."
            }
            icon={
              "/case-studies/givexchange/wireframes-and-prototypes-icon.png"
            }
            iconHeight={22}
            iconWidth={22}
            iconAlt={"wireframes-and-prototypes-icon"}
            num={"03"}
          />
          <WorkflowCard
            title={"Final Optimization"}
            description={
              "Enhanced responsiveness, performance, and visual consistency to prepare the product for launch."
            }
            icon={"/case-studies/givexchange/final-optimization-icon.png"}
            iconHeight={22}
            iconWidth={22}
            iconAlt={"final-optimization-icon"}
            num={"04"}
          />
        </div>
      </section>

      <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] lg:w-[1000px] h-[300px] absolute top-1/2 -translate-y-1/2 left-[-60%] lg:left-[-50%] z-0" />
      <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] lg:w-[1000px] h-[300px] absolute top-1/2 -translate-y-1/2 right-[-60%] lg:right-[-50%] z-0" />
    </section>
  );
};

export default WorkflowSection;
