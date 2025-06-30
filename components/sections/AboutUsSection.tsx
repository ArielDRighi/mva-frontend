"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUsSection = () => {
  return (
    <>
      {/* Sección Historia */}
      <section className="pt-32 pb-16 bg-[#F2F1EF]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#003F4F] mb-4 font-montserrat">
                Nuestra Historia
              </h2>
              <p className="text-gray-700 mb-4 font-poppins">
                MVA SRL nació en 2018 como respuesta a la creciente demanda de
                servicios de calidad en el sector minero. Con un enfoque inicial
                en baños químicos, rápidamente expandimos nuestra oferta hacia
                soluciones logísticas integrales.
              </p>
              <p className="text-gray-700 mb-4 font-poppins">
                En estos años hemos construido una reputación basada en la
                confiabilidad, la calidad de servicio y el compromiso con
                nuestros clientes, siempre manteniendo altos estándares de
                seguridad y cuidado del medio ambiente.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A6B2]/30 to-[#003F4F]/30"></div>
              <div className="h-full w-full bg-[url('/images/camionetaEnSalar.jpg')] bg-cover bg-center"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección Misión, Visión y Valores */}
      <section className="py-16 bg-[#F2F1EF]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-[#003F4F] font-montserrat">
              Misión, Visión y Valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full shadow-lg border-t-4 border-[#00A6B2]">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-[#003F4F] mb-4 font-montserrat">
                    Misión
                  </h3>
                  <p className="text-gray-700 font-poppins">
                    Brindar servicios de calidad que aumenten la satisfacción de
                    nuestros clientes a través de respuestas ágiles, garantizando
                    altos estándares de higiene y seguridad mientras promovemos el
                    respeto por el medio ambiente y el desarrollo sustentable junto a
                    nuestros colaboradores y la comunidad.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full shadow-lg border-t-4 border-[#00A6B2]">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-[#003F4F] mb-4 font-montserrat">
                    Visión
                  </h3>
                  <p className="text-gray-700 font-poppins">
                    Ser el principal proveedor de la provincia de Salta en servicios de
                    limpieza de baños químicos y actividades afines. Buscamos
                    nuevas oportunidades para expandir nuestro alcance y brindar
                    soluciones integrales. Nos adaptamos a los nuevos contextos y
                    desafíos del mercado, garantizando un servicio de excelencia.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Valores */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full shadow-lg border-t-4 border-[#00A6B2]">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-[#003F4F] mb-4 font-montserrat">
                    Valores
                  </h3>
                  <ul className="text-gray-700 space-y-2 font-poppins">
                    <li className="flex items-center gap-2">
                      <span className="text-[#00A6B2] font-bold">•</span>
                      <strong>Calidad</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00A6B2] font-bold">•</span>
                      <strong>Responsabilidad</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00A6B2] font-bold">•</span>
                      <strong>Innovación</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00A6B2] font-bold">•</span>
                      <strong>Compromiso con la comunidad</strong>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A6B2] font-bold">•</span>
                      <div>
                        <strong>Trabajo en equipo:</strong> Valoramos la colaboración y la comunicación abierta,
                        creando un ambiente donde cada miembro del equipo contribuye al éxito
                        colectivo.
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
