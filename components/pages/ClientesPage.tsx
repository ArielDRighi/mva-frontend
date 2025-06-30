"use client";

import { motion } from "motion/react";
import PortalClientes from "../sections/PortalClientes";

export default function ClientesPage() {
  return (
    <motion.div
      className="bg-white mt-[150px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto px-4 pt-24 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold text-[#003F4F] text-center mb-6 font-montserrat">
          Portal de Clientes
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl text-center mb-10 font-poppins">
          Accede a nuestros servicios especializados y gestiona tus solicitudes de manera rápida y eficiente.
        </p>
      </motion.section>
      
      {/* Portal de Clientes */}
      <PortalClientes />
    </motion.div>
  );
}
