import React from "react";
import Hero from "../sections/Hero";
import AboutUsHome from "../sections/AboutUsHome";
import AboutUsSection from "../sections/AboutUsSection";
import Asks from "../sections/Asks";
import Cta from "../sections/Cta";
import ServiciosPage from "./ServiciosPage";

const HomePage = () => {
  return (
    <main className="font-montserrat">
      <Hero />
      <ServiciosPage />
      <Asks />
      <Cta />
    </main>
  );
};

export default HomePage;
