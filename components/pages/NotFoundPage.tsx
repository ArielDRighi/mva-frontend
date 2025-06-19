"use client";

import { motion } from "motion/react";
import Link from "next/link";
import ButtonHomeSinFlecha from "@/components/ui/local/ButtonHomeSinFlecha";
import ButtonHomeConFlecha from "@/components/ui/local/ButtonHomeConFlecha";

export default function NotFoundPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-white p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-8xl font-bold text-[#003F4F] mb-6 font-montserrat">
          404
        </h1>
        <h2 className="text-3xl font-bold text-[#00A6B2] mb-6 font-montserrat">
          Página no encontrada
        </h2>

        <p className="text-lg text-gray-600 mb-12 font-poppins">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link href="/">
            <ButtonHomeSinFlecha
              text="Volver a inicio"
              className="max-w-[215px] w-full h-11"
            />
          </Link>

          <Link href="/contacto">
            <div className="w-[215px]">
              <ButtonHomeConFlecha />
            </div>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 w-full max-w-md text-center text-gray-500 font-poppins text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>MVA Logística y Servicios</p>
      </motion.div>
    </motion.div>
  );
}
