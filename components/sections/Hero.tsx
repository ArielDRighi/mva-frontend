//Sección principal de la página de inicio

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import * as motion from "motion/react-client"

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-black to-gray-900 px-6">
      {/* Fondo con Opacidad */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/camionetas.jpg"
          alt="Fondo llamativo"
          fill
          className="object-cover opacity-30"
        />
      </motion.div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Potencia tu Negocio con <br />
          <span className="text-blue-400">Soluciones Innovadoras</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Ofrecemos servicios de calidad, adaptados a tus necesidades. Confía en
          nuestra experiencia para llevar tu empresa al siguiente nivel.
        </p>

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-6 flex gap-4"
        >
          <Button className="px-6 py-3 text-lg font-semibold">
            Ver Servicios
          </Button>
          <Button variant="outline" className="px-6 py-3 text-lg font-semibold">
            Contacto
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
