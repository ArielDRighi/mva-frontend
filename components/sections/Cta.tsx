"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Cta = () => {
  return (
    <section className="py-20 bg-[#003F4F] text-white text-center">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Animación del título */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold font-montserrat"
        >
          ¿Listo para una solución eficiente?
        </motion.h2>

        {/* Animación del subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto font-poppins leading-relaxed"
        >
          Contáctanos hoy y descubre cómo podemos optimizar tu operación con servicios de primera calidad.
        </motion.p>

        {/* Caja destacada con CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="mt-8"
        >
          <Card className="bg-white text-gray-900 shadow-xl p-8 max-w-3xl mx-auto">
            <CardContent className="flex flex-col items-center">
              <p className="text-xl font-semibold font-montserrat text-center">
                📍 Ubicación: <span className="text-[#00A6B2]">San Juan, Argentina</span>
              </p>
              <p className="text-lg font-poppins mt-2">
                📞 Llámanos: <span className="font-semibold text-[#00A6B2]">+54 9 264 567 890</span>
              </p>
              <p className="text-lg font-poppins mt-2">
                ✉️ Email: <span className="font-semibold text-[#00A6B2]">contacto@mva.com.ar</span>
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          className="mt-8 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button className="px-10 py-4 text-lg font-semibold font-poppins bg-[#00A6B2] text-white rounded-lg shadow-lg hover:bg-[#008C9B] transition-all duration-300">
            Contactarnos
          </Button>
          <Button
            variant="outline"
            className="px-10 py-4 text-lg font-semibold font-poppins border-2 border-[#00A6B2] text-[#00A6B2] rounded-lg shadow-lg hover:bg-[#00A6B2] hover:text-white transition-all duration-300"
          >
            Ver Servicios
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
