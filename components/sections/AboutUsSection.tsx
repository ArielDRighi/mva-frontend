"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { AccordionValue } from "../ui/local/AccordionValue/AccordionValue";

const VALUES = [
  {
    id: "calidad",
    title: "Calidad",
    description:
      "Nos comprometemos a ofrecer servicios excepcionales, asegurando la satisfacción de nuestros clientes y el cumplimiento de estándares elevados en todas nuestras operaciones.",
  },
  {
    id: "responsabilidad",
    title: "Responsabilidad",
    description:
      "Actuamos con ética e integridad, priorizando la salud y seguridad de nuestros empleados y clientes en cada proyecto.",
  },
  {
    id: "innovacion",
    title: "Innovación",
    description:
      "Buscamos constantemente mejorar nuestros procesos y servicios mediante la adopción de nuevas tecnologías y enfoques, adaptándonos a las necesidades del mercado.",
  },
  {
    id: "comunidad",
    title: "Compromiso con la comunidad",
    description:
      "Trabajamos en colaboración con las comunidades locales, apoyando su desarrollo y bienestar a través de nuestras actividades.",
  },
  {
    id: "equipo",
    title: "Trabajo en equipo",
    description:
      "Valoramos la colaboración y la comunicación abierta, creando un ambiente donde cada miembro del equipo aporta al éxito colectivo.",
  },
];

const AboutUsSection = () => {
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  return (
    <>
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
              <div className="absolute inset-0 bg-gradient-to-r from-mva-turquesa/30 to-mva-turquesa-500/30"></div>
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
              <Card className="h-full shadow-lg border-t-4 border-mva-turquesa">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-[#003F4F] mb-4 font-montserrat">
                    Misión
                  </h3>
                  <p className="text-gray-700 font-poppins">
                    Brindar servicios de calidad que aumenten la satisfacción de
                    nuestros clientes a través de respuestas ágiles,
                    garantizando altos estándares de higiene y seguridad
                    mientras promovemos el respeto por el medio ambiente y el
                    desarrollo sustentable junto a nuestros colaboradores y la
                    comunidad.
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
              <Card className="h-full shadow-lg border-t-4 border-mva-turquesa">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-[#003F4F] mb-4 font-montserrat">
                    Visión
                  </h3>
                  <p className="text-gray-700 font-poppins">
                    Ser la empresa líder en la provincia de Salta en soluciones
                    integrales de limpieza corporativa, servicios de fumigación,
                    mantenimiento de espacios verdes y gestión de residuos,
                    reconocida por la calidad de nuestros servicios y por
                    nuestra capacidad de adaptarnos a los nuevos contextos y
                    desafíos del mercado, garantizando siempre un servicio de
                    excelencia.
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
              <Card className="h-full shadow-lg border-t-4 border-mva-turquesa">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-[#003F4F] mb-4 font-montserrat">
                    Valores
                  </h3>
                  <ul className="text-gray-700 space-y-2 font-poppins">
                    {VALUES.map((value) => (
                      <AccordionValue
                        key={value.id}
                        title={value.title}
                        description={value.description}
                        isExpanded={expandedValue === value.id}
                        onClick={() =>
                          setExpandedValue(
                            expandedValue === value.id ? null : value.id,
                          )
                        }
                      />
                    ))}
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
