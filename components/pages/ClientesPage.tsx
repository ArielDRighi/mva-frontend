"use client";

import { motion } from "motion/react";
import PortalClientes from "../sections/PortalClientes";
import WhatsAppFloating from "../ui/local/WhatsAppFloating";

export default function ClientesPage() {
  return (
    <motion.div
      className="bg-mva-blanco-100 mt-[150px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section
        className="w-full max-w-7xl mx-auto px-6 pt-16 pb-12 flex flex-col items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-xs sm-tablet:text-sm font-semibold tracking-[0.22em] uppercase text-mva-turquesa font-montserrat mb-3">
          Área exclusiva
        </p>
        <h1 className="text-4xl sm-tablet:text-5xl font-bold text-mva-azul font-montserrat mb-3">
          Portal de Clientes
        </h1>
        <span className="block h-1 w-16 rounded-full bg-mva-turquesa mb-5" />
        <p className="text-lg text-textBlackTitle max-w-2xl font-poppins leading-relaxed">
          Accede a nuestros servicios especializados y gestiona tus solicitudes
          de manera rápida y eficiente.
        </p>
      </motion.section>

      <PortalClientes />
      <WhatsAppFloating />
    </motion.div>
  );
}
