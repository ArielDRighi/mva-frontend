"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Users, CheckCircle, Clock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Máxima Seguridad",
    description:
      "Cumplimos con todas las normativas de seguridad e higiene, garantizando confianza en cada servicio.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description:
      "Nos adaptamos a las necesidades de cada cliente, ofreciendo soluciones eficientes y a medida.",
  },
  {
    icon: CheckCircle,
    title: "Calidad Garantizada",
    description:
      "Nuestros servicios son respaldados por altos estándares de calidad y equipamiento de última generación.",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description:
      "Atención inmediata para garantizar la continuidad operativa sin interrupciones.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center text-[#003F4F] font-montserrat"
        >
          Características y Beneficios
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mt-6 text-lg text-center text-gray-700 max-w-3xl mx-auto font-poppins leading-relaxed"
        >
          Brindamos soluciones confiables y eficientes, destacándonos por
          nuestra calidad, seguridad y atención personalizada.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
            >
              <Card className="h-full min-h-[300px] shadow-lg border-t-4 border-[#00A6B2] hover:shadow-xl transition-all duration-300 flex flex-col">
                <CardContent className="p-6 text-center flex flex-col items-center justify-start flex-grow">
                  <Icon className="w-12 h-12 text-[#00A6B2] mb-4" />
                  <h3 className="text-xl font-semibold text-[#003F4F] font-montserrat">
                    {title}
                  </h3>
                  <p className="text-gray-700 font-poppins mt-2">
                    {description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
