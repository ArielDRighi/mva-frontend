import React from "react";
import Hero from "../sections/Hero";
import AboutUsHome from "../sections/AboutUsHome";
import AboutUsSection from "../sections/AboutUsSection";
import Asks from "../sections/Asks";
import Cta from "../sections/Cta";
import ServiciosPage from "./ServiciosPage";
import ClientesCarousel from "../sections/ClientesCarousel";
import WhatsAppFloating from "../ui/local/WhatsAppFloating";

const HomePage = () => {
  return (
    <main className="font-montserrat">
      <Hero />
      <ServiciosPage />
      <Asks />
      <ClientesCarousel />
      <Cta />
      <WhatsAppFloating />
    </main>
  );
};

export default HomePage;
