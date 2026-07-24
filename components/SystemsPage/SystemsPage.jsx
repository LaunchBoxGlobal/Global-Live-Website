"use client";
import { useEffect, useState } from "react";
import CTA from "./CTA";
import FAQS from "./FAQS";
import Hero from "./Hero";
import HiringExternalTeam from "./HiringExternalTeam";
import OurBuildExperience from "./OurBuildExperience";
import Process from "./Process";
import SoundFamiliar from "./SoundFamiliar";
import Stats from "./Stats";
import WhatChanges from "./WhatChanges";
import WhatWeDo from "./WhatWeDo";
import WhoWeWorkWith from "./WhoWeWorkWith";
import WhyUsSection from "./WhyUsSection";
import ContactModal from "./contact-modal/ContactModal";
import { usePathname } from "next/navigation";

const SystemsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDiscoveryCallForm = () => setIsOpen((prev) => !prev);

  const pathname = usePathname();

  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");

    if (!target) return;

    const scroll = () => {
      const element = document.getElementById(target);

      if (element) {
        const NAVBAR_HEIGHT = 120;

        const top =
          element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

        window.scrollTo({
          top,
          behavior: "smooth",
        });

        sessionStorage.removeItem("scrollTarget");
      } else {
        // If the section hasn't rendered yet, try again shortly.
        setTimeout(scroll, 100);
      }
    };

    scroll();
  }, [pathname]);

  return (
    <>
      <main className={`bg-transparent relative overflow-hidden`}>
        {/* <Navbar openModal={toggleDiscoveryCallForm} /> */}
        <Hero toggleDiscoveryCallForm={toggleDiscoveryCallForm} />
        <Stats />
        <SoundFamiliar />
        <WhatWeDo />
        <OurBuildExperience toggleDiscoveryCallForm={toggleDiscoveryCallForm} />
        <WhoWeWorkWith toggleDiscoveryCallForm={toggleDiscoveryCallForm} />
        <Process />
        <WhatChanges />
        <WhyUsSection />
        <HiringExternalTeam toggleDiscoveryCallForm={toggleDiscoveryCallForm} />
        <FAQS />
        <CTA toggleDiscoveryCallForm={toggleDiscoveryCallForm} />
      </main>
      <ContactModal isOpen={isOpen} onClose={toggleDiscoveryCallForm} />
    </>
  );
};

export default SystemsPage;
