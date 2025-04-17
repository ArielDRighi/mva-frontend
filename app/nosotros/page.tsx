import AboutUsPage from "@/components/pages/AboutUsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nosotros | MVA Logística y Servicios",
  description:
    "Más de 6 años de experiencia ofreciendo soluciones de calidad en baños químicos y servicios integrales en la industria minera.",
  keywords: "historia, experiencia, valores, misión, visión, MVA SRL",
};

const Nosotros = () => {
  return (
    <main className="pb-20 pt-40 px-4 md:px-8 bg-white text-gray-900">
      <AboutUsPage />
    </main>
  );
};

export default Nosotros;
