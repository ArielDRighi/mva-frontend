import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const BigBoxHome = ({ template }: { template: number }) => {
  return (
    <>
      {template === 1 && (
        <div
          className="flex flex-col p-10 relative h-[324px] bg-cover bg-center justify-between"
          style={{
            backgroundImage: "url('/images/camionetaEnSalar.jpg')",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t to-black/40 from-black/20"></div>

          <h3 className="text-3xl font-semibold text-[#F2F1EF] relative drop-shadow-lg">
            Desagote de Cámaras Sépticas
          </h3>

          <div className="flex justify-between relative">
            <div className="hidden sm-tablet:flex flex-col gap-1">
              <p className="text-[#F2F1EF] text-[50px] font-light leading-[61px] drop-shadow-lg">
                10m³ - 30m³
              </p>
              <p className="text-[#F2F1EF] text-lg drop-shadow-md">
                Capacidad de tanques
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#F2F1EF] text-[50px] font-light leading-[61px] drop-shadow-lg">
                24/7
              </p>
              <p className="text-[#F2F1EF] text-lg drop-shadow-md">
                Disponibilidad
              </p>
            </div>
          </div>
        </div>
      )}
      {template === 2 && (
        <div
          className="flex flex-col p-10 relative h-[324px] bg-cover bg-center justify-between"
          style={{
            backgroundImage: "url('/images/camionetas.jpg')",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t to-black/40 from-black/40"></div>

          <h3 className="text-3xl font-semibold text-[#F2F1EF] relative drop-shadow-lg">
            Crecimiento Empresarial
          </h3>

          <p className="text-xl font-medium text-[#F2F1EF] relative drop-shadow-lg">
            Expansión continua en el sector minero, aumentando nuestra capacidad
            operativa.
          </p>
        </div>
      )}
    </>
  );
};

export default BigBoxHome;
