import React from "react";
// import HomeCustomerReviews from "./HomeCustomerReviews";
// import HomeValueProposition from "./HomeValueProposition";
// import HomeFaqs from "./HomeFaqs";
// import HomeComparison from "./HomeComparison";
// import Process from "./Process";
// import HomeStats from "./HomeStats";
// import Platforms from "../Common/Platforms";
import { HOME_SERVICES } from "@/constants/HomeServices";
// import TeckStack from "../Common/TechStack";
// import FlagsAnimation from "../Common/FlagsAnimation";
// import Services from "./Services";
import dynamic from "next/dynamic";
import HomePageBlogs from "./HomePageBlogs";
import TechStackSlider from "./TechStackSlider";
const Platforms = dynamic(() => import("../Common/Platforms"), {
  loading: () => <div style={{ height: "56px" }} />,
});
const Services = dynamic(() => import("./Services"), {
  loading: () => <div style={{ minHeight: "600px" }} />,
});
const HomeHero = dynamic(() => import("./HomeHero"), {
  ssr: false,
  loading: () => <section className="w-full" style={{ minHeight: "100vh" }} />,
});
const HomeComparison = dynamic(() => import("./HomeComparison"), {
  loading: () => <></>,
});
const HomeValueProposition = dynamic(() => import("./HomeValueProposition"), {
  loading: () => <></>,
});
const Process = dynamic(() => import("./Process"), {
  loading: () => <></>,
});
const TeckStack = dynamic(() => import("../Common/TechStack"), {
  loading: () => <></>,
});
const HomeStats = dynamic(() => import("./HomeStats"), {
  loading: () => <></>,
});
const FlagsAnimation = dynamic(() => import("../Common/FlagsAnimation"), {
  loading: () => <></>,
});
const HomeFaqs = dynamic(() => import("./HomeFaqs"), {
  loading: () => <></>,
});
const HomeCustomerReviews = dynamic(() => import("./HomeCustomerReviews"), {
  loading: () => <></>,
});

const HomePage = () => {
  return (
    <main className={`bg-transparent relative`}>
      <HomeHero />
      <Platforms />
      <Services
        heading={"What We"}
        redText={"Do?"}
        description={
          "We help you grow with clear software solutions created by skilled experts around the world."
        }
        services={HOME_SERVICES}
        descriptionWidth={"lg:w-1/2"}
      />
      <HomeComparison />
      <HomeValueProposition />
      <Process />
      {/* <TeckStack
        heading={"Smart Technology for Better"}
        redText={"Solution"}
        description={
          "You get the best tools and technologies to build fast, secure, and reliable software that fits your business perfectly."
        }
      /> */}

      <TechStackSlider />
      <HomeStats />
      <HomeCustomerReviews />
      <FlagsAnimation />
      <HomePageBlogs />
      <HomeFaqs />
    </main>
  );
};

export default HomePage;
