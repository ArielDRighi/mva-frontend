import React from "react";
import Hero from "../sections/Hero";
import AboutUsHome from "../sections/AboutUsHome";
import AboutUsSection from "../sections/AboutUsSection";
import Asks from "../sections/Asks";
import Cta from "../sections/Cta";

const HomePage = () => {
  return (
    <main className="font-montserrat">
      <Hero />
      <AboutUsHome />
      <AboutUsSection />
      <Asks />
      <Cta />
    </main>
  );
};

export default HomePage;
