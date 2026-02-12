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
      "Ofrecemos una amplia gama de servicios especializados: Alquiler de Baños Químicos, Servicio de Desagote de cámaras con tanques de 10m³ a 30m³, Mantenimiento de espacios Verdes, Servicio de Vigilancia, Alquiler de Garitas de Seguridad, Servicio de Limpieza de Oficinas, Limpieza y mantenimiento de Campamento, y Servicio de Fumigaciones. Todos nuestros servicios están diseñados para la industria minera e industrial.",
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer:
      "Nuestro horario administrativo es de lunes a viernes de 8 a 18 hs y sábados de 8 a 13 hs. En caso de emergencias, puede comunicarse al 387-5555680.",
  },
];

const Asks = () => {
  return (
    <section className="pb-20 bg-[#F2F1EF] text-gray-900">
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
                  <AccordionTrigger className="text-xl font-semibold text-mva-turquesa-500 font-montserrat transition-all duration-300 hover:text-mva-turquesa">
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
