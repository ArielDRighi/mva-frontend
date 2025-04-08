"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 bg-gradient-to-b from-[#003F4F] to-gray-900">
      {/* Imagen de fondo con efecto de fade-in y zoom */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/camionetas.jpg"
          alt="Fondo llamativo"
          fill
          className="object-cover opacity-20 w-full h-full"
          loading="lazy"
          priority={false}
        />
      </motion.div>

      {/* Contenido principal con animaciones mejoradas */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white font-montserrat tracking-wide leading-tight drop-shadow-lg">
          Impulsa tu Negocio con
          <br />
          <span className="text-[#00A6B2]">Innovación y Tecnología</span>
        </h1>
        <p className="mt-5 text-xl text-gray-300 max-w-2xl font-poppins leading-relaxed">
          Soluciones estratégicas para optimizar tu empresa. Elevamos la
          logística y eficiencia con innovación de primer nivel.
        </p>

        {/* Botones con hover elegante y más robustos */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 flex gap-6"
        >
          <Button className="px-10 py-4 text-lg font-semibold font-poppins bg-[#00A6B2] text-white rounded-lg shadow-md hover:bg-[#008C9B] hover:shadow-lg transition-all duration-300">
            Ver Servicios
          </Button>
          <Button
            variant="outline"
            className="px-10 py-4 text-lg font-semibold font-poppins border-2 border-[#00A6B2] text-[#00A6B2] rounded-lg shadow-md hover:bg-[#00A6B2] hover:text-white bg-white transition-all duration-300"
          >
            Contacto
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
