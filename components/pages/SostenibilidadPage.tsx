"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Shield, Heart, RefreshCw } from "lucide-react";

const pilares = [
  {
    icon: Leaf,
    title: "Medio Ambiente",
    description:
      "Implementamos prácticas que minimizan nuestro impacto ambiental y promueven la conservación de recursos naturales.",
    items: [
      "Gestión responsable de residuos",
      "Uso eficiente del agua",
      "Reducción de emisiones",
      "Tecnologías eco-amigables",
    ],
  },
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "La seguridad es nuestra prioridad, asegurando operaciones libres de incidentes para empleados y comunidades.",
    items: [
      "Protocolos estrictos de seguridad",
      "Capacitación continua",
      "Equipamiento certificado",
      "Auditorías regulares",
    ],
  },
  {
    icon: Heart,
    title: "Salud",
    description:
      "Promovemos ambientes de trabajo saludables y servicios que contribuyen al bienestar general.",
    items: [
      "Estándares sanitarios rigurosos",
      "Prevención de enfermedades",
      "Productos certificados",
      "Controles periódicos",
    ],
  },
  {
    icon: RefreshCw,
    title: "Gestión Integrada",
    description:
      "Nuestro sistema de gestión integra aspectos ambientales, de seguridad y salud para optimizar resultados.",
    items: [
      "Certificaciones internacionales",
      "Mejora continua",
      "Gestión de riesgos",
      "Seguimiento de indicadores",
    ],
  },
];

export default function SostenibilidadPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 mt-[150px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero de Sostenibilidad */}
      <section className="py-20 bg-gradient-to-b from-[#31606E] to-[#003F4F] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Compromiso con la Sostenibilidad
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-poppins">
              En MVA, la sostenibilidad es un pilar fundamental que guía todas
              nuestras operaciones, asegurando un impacto positivo en el medio
              ambiente, la seguridad y la salud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-white">
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
                Nuestro Enfoque Sustentable
              </h2>
              <p className="text-gray-700 mb-4 font-poppins">
                En MVA entendemos que la sostenibilidad no es solo una
                responsabilidad empresarial, sino también una oportunidad para
                innovar y ofrecer mejores servicios.
              </p>
              <p className="text-gray-700 mb-4 font-poppins">
                Nuestro compromiso se refleja en cada aspecto de nuestra
                operación, desde la selección de materiales y tecnologías hasta
                las prácticas de gestión y el relacionamiento con las
                comunidades.
              </p>
              <p className="text-gray-700 font-poppins">
                Trabajamos continuamente para reducir nuestra huella ambiental
                mientras mejoramos la calidad y eficiencia de nuestros
                servicios.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A6B2]/30 to-[#003F4F]/30"></div>
              <div className="h-full w-full bg-[url('/images/camionetas.jpg')] bg-cover bg-center"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pilares de sostenibilidad */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-[#003F4F] font-montserrat">
              Pilares de Nuestra Gestión Sustentable
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pilares.map((pilar, index) => {
              const Icon = pilar.icon;

              return (
                <motion.div
                  key={pilar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full shadow-lg border-l-4 border-[#00A6B2]">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#00A6B2]/10 p-3 rounded-full mr-4">
                          <Icon className="h-6 w-6 text-[#00A6B2]" />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#003F4F] font-montserrat">
                          {pilar.title}
                        </h3>
                      </div>

                      <p className="text-gray-700 mb-4 font-poppins">
                        {pilar.description}
                      </p>

                      <ul className="space-y-2 mt-4">
                        {pilar.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-700 font-poppins"
                          >
                            <div className="w-2 h-2 bg-[#00A6B2] rounded-full mr-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#003F4F] font-montserrat">
              Nuestras Certificaciones
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-4 font-poppins">
              Cumplimos con los más altos estándares internacionales en gestión
              ambiental, seguridad y calidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="bg-gray-100 rounded-lg p-6 flex items-center justify-center w-full h-32"
              >
                <div className="text-center text-gray-500 font-semibold">
                  Certificación {item}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
