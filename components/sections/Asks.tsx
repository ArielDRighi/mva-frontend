"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AsksData = [
  {
    question: "¿Qué tipo de servicios ofrece MVA SRL?",
    answer:
      "Ofrecemos alquiler, limpieza y desagote de baños químicos para proyectos mineros e industriales, garantizando un servicio confiable y eficiente.",
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer:
      "Brindamos servicio las 24 horas, los 7 días de la semana, asegurando respuesta inmediata ante cualquier necesidad o emergencia.",
  },
  {
    question: "¿Cómo garantizan la calidad del servicio?",
    answer:
      "Cumplimos con todas las normativas de seguridad e higiene y utilizamos equipamiento de última generación para garantizar la mejor calidad.",
  },
  {
    question: "¿Qué diferencia a MVA SRL de otras empresas?",
    answer:
      "Nos destacamos por nuestro compromiso con la seguridad, la rapidez en la respuesta y la atención personalizada a cada cliente.",
  },
];

const Asks = () => {
  return (
    <section className="pb-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Título con animación */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center text-[#003F4F] font-montserrat"
        >
          Preguntas Frecuentes
        </motion.h2>

        {/* Descripción con animación */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mt-6 text-lg text-center text-gray-700 max-w-3xl mx-auto font-poppins leading-relaxed"
        >
          Respondemos las dudas más comunes sobre nuestros servicios, horarios y
          calidad. Si tienes más preguntas, ¡contáctanos!
        </motion.p>

        {/* Sección de FAQ con acordeón */}
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {AsksData.map(({ question, answer }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                <AccordionItem
                  value={`faq-${index}`}
                  className="border-b border-gray-300"
                >
                  <AccordionTrigger className="text-xl font-semibold text-[#003F4F] font-montserrat transition-all duration-300 hover:text-[#00A6B2]">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 font-poppins">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Asks;
