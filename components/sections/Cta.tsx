"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import ButtonHome from "../ui/local/ButtonHomeSinFlecha";
import ButtonHomeServices from "../ui/local/ButtonHomeConFlecha";

const Cta = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#346e7c] to-gray-900 text-white text-center">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Animación del título */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold font-montserrat"
        >
          ¿Listo para una solución eficiente?
        </motion.h2>

        {/* Animación del subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto font-poppins leading-relaxed"
        >
          Contáctanos hoy y descubre cómo podemos optimizar tu operación con
          servicios de primera calidad.
        </motion.p>

        {/* Caja destacada con CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="mt-8"
        >
          <Card className="bg-white text-gray-900 shadow-xl p-8 max-w-3xl mx-auto">
            <CardContent className="flex flex-col items-center">
              <p className="text-xl font-semibold font-montserrat text-center">
                📍 Ubicación:{" "}
                <span className="text-[#00A6B2]">San Juan, Argentina</span>
              </p>
              <p className="text-lg font-poppins mt-2">
                📞 Llámanos:{" "}
                <span className="font-semibold text-[#00A6B2]">
                  +54 9 264 567 890
                </span>
              </p>
              <p className="text-lg font-poppins mt-2">
                ✉️ Email:{" "}
                <span className="font-semibold text-[#00A6B2]">
                  contacto@mva.com.ar
                </span>
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 flex gap-6 w-full justify-center sm-tablet:flex-row flex-col items-center"
        >
          <ButtonHome text="Servicios" className="max-w-[215px] w-full h-11" />
          <ButtonHomeServices />
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
