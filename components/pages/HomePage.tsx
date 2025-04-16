import React from "react";
import Hero from "../sections/Hero";
import AboutUsHome from "../sections/AboutUsHome";
import Features from "../sections/Features";
import Asks from "../sections/Asks";
import Cta from "../sections/Cta";

const HomePage = () => {
  return (
    <main className="font-montserrat">
      <Hero />
      <AboutUsHome />
      <Features />
      <Asks />
      <Cta />
    </main>
  );
};

export default HomePage;
