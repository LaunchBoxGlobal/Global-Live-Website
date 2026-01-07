import Image from "next/image";
import React from "react";

const ProblemAndSolution = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">
          Problem vs. Solution
        </h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
          Before we started the development process, we created both
          low-fidelity and high-fidelity wireframes to plan user flows and
          validate functionality early in detail. These acted as the blueprint
          for aligning design with usability across all platforms.
        </p>
      </section>

      <section className="w-full mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5 relative">
        <div className="bg-[var(--jetezee-primary-color)] rounded-full w-[700px] h-[700px] absolute top-1/2 -translate-y-1/2 left-[-70%] z-0 blur-[400px] hidden lg:block" />
        <div className="bg-[var(--jetezee-primary-color)] rounded-full w-[700px] h-[700px] absolute top-1/2 -translate-y-1/2 right-[-70%] z-0 blur-[400px] hidden lg:block" />
        <div className="flex flex-col items-center lg:items-start gap-3">
          <Image
            src={"/case-studies/jetezee/problems-icon.png"}
            alt="problems-icon"
            width={56}
            height={50}
          />
          <h3 className="text-[20px] font-semibold">Problems</h3>
          <p className="leading-[1.25] tetx-center lg:text-start">
            Existing aviation marketplaces often suffer from cluttered
            interfaces, overly technical language, and inconsistent listing
            formats. This creates friction for both buyers and sellers. Buyers
            found it difficult to compare aircrafts based on key specifications
            like range, passenger capacity, engine hours, and year of
            manufacture. Listings were often unverified, making it hard to trust
            the platform. On the seller side, uploading aircraft information was
            cumbersome due to unstructured forms, lack of data validation, and
            no real-time previews — resulting in incomplete or low-quality
            listings.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/case-studies/jetezee/jetezee-logo-2.svg"}
            alt="jetezee-logo-2"
            width={302}
            height={283}
          />
        </div>
        <div className="flex flex-col items-center lg:items-end gap-3">
          <Image
            src={"/case-studies/jetezee/solution-icon.png"}
            alt="solution-icon"
            width={56}
            height={50}
          />
          <h3 className="text-[20px] font-semibold">Solutions</h3>
          <p className="leading-[1.25] text-center lg:text-end">
            Our prototype addressed these challenges through a user-first design
            approach tailored for high-value transactions. We developed a clean,
            intuitive web interface centered on high-resolution imagery,
            categorized aircraft specifications, and dynamic comparison tools.
            Buyers could easily apply smart filters (e.g., by manufacturer,
            model, year, and range) to find matching aircraft with confidence.
            For sellers, we introduced a guided, step-by-step upload process
            with built-in validation and live previews to ensure accurate,
            professional listings.
          </p>
        </div>
      </section>

      {/* 
      <div className="bg-[var(--jetezee-primary-color)] rounded-full w-[700px] h-[700px] absolute top-0 right-[-50%] z-0 blur-[400px]" /> */}
    </section>
  );
};

export default ProblemAndSolution;
