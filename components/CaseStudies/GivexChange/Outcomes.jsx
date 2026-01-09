import React from "react";
import OutcomeMockups from "./OutcomeMockups";

const Outcomes = () => {
  return (
    <section className="w-full pb-10 relative">
      <section className="w-full flex flex-col padding-x items-center relative z-10">
        <h2 className="section-heading text-center z-10">Final Outcomes</h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
          The final product delivers a cohesive, user-centered marketplace
          experience across both mobile and web platforms, designed to support
          smooth browsing, efficient transactions, and clear communication. The
          mobile app focuses on simplicity and speed, presenting users with a
          personalized feed, structured categories, detailed product pages,
          secure checkout, and real-time messaging—ensuring every interaction
          feels intuitive and reliable. On the web, the interface extends these
          capabilities with enhanced management tools for sellers and admins,
          including streamlined product uploads, detailed analytics, and full
          control over categories, users, and transactions. Together, both
          platforms create a unified ecosystem that balances usability with
          functionality, empowering buyers and sellers while providing admins
          with the oversight needed to scale confidently.
        </p>
      </section>

      <OutcomeMockups />
    </section>
  );
};

export default Outcomes;
