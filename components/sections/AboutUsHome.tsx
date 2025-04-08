"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUsHome = () => {
  return (
    <section className="relative py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Animación de título */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center text-[#003F4F] font-montserrat"
        >
          Sobre Nosotros
        </motion.h2>

        {/* Animación de párrafo */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mt-6 text-lg text-center text-gray-700 max-w-3xl mx-auto font-poppins leading-relaxed"
        >
          Con más de 6 años de experiencia, en{" "}
          <span className="font-semibold text-[#00A6B2]">MVA SRL</span>{" "}
          ofrecemos soluciones de{" "}
          <span className="font-semibold">
            alquiler, limpieza y desagote de baños químicos
          </span>{" "}
          en proyectos mineros. Nos distinguimos por nuestra confiabilidad,
          compromiso y altos estándares de calidad.
        </motion.p>

        {/* Valores Clave */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <Card className="shadow-lg border-t-4 border-[#00A6B2]">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#003F4F] font-montserrat">
                  Compromiso con la Calidad
                </h3>
                <p className="text-gray-700 font-poppins mt-2">
                  Garantizamos servicios de excelencia con respuestas ágiles y
                  soluciones adaptadas a cada cliente.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tarjeta 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          >
            <Card className="shadow-lg border-t-4 border-[#00A6B2]">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#003F4F] font-montserrat">
                  Seguridad y Medio Ambiente
                </h3>
                <p className="text-gray-700 font-poppins mt-2">
                  Priorizamos la seguridad y el respeto ambiental, aplicando
                  procesos sostenibles en todas nuestras operaciones.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tarjeta 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          >
            <Card className="shadow-lg border-t-4 border-[#00A6B2]">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#003F4F] font-montserrat">
                  Innovación y Liderazgo
                </h3>
                <p className="text-gray-700 font-poppins mt-2">
                  Estamos en continuo crecimiento, liderando el sector con
                  tecnología avanzada y atención personalizada.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
