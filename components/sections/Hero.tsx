"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonHomeServices from "../ui/local/ButtonHomeConFlecha";
import ButtonHome from "../ui/local/ButtonHomeSinFlecha";

const Hero = () => {
  return (
    <section className="relative flex flex-col overflow-hidden items-center justify-center h-screen text-center px-6 bg-gradient-to-b from-[#346e7c] to-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src="/images/Inaguracion.jpg"
          alt="Fondo llamativo"
          fill
          className="object-cover opacity-20 w-full h-full"
          loading="lazy"
          priority={false}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center"
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
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 flex gap-6"
        >
          <ButtonHome text="Servicios" />
          <ButtonHomeServices />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#017f88"
            fillOpacity="1"
            d="M0,128L120,149.3C240,171,480,213,720,208C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto drop-shadow-[0_-8px_10px_rgba(255, 255, 255, 0.3)]"
        >
          <path
            fill="#F2F1EF"
            fillOpacity="1"
            d="M0,224L120,240C240,256,480,288,720,277.3C960,267,1200,213,1320,186.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
