"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ListItem = { text: string; href?: string };

type AskItem =
  | { question: string; answer: string; items?: never }
  | { question: string; answer: string; items: ListItem[] };

const AsksData: AskItem[] = [
  {
    question: "¿Qué tipo de servicios ofrece MVA SRL?",
    answer:
      "Ofrecemos una amplia gama de servicios especializados: Alquiler de Baños Químicos, Servicio de Desagote de cámaras sépticas y biodigestores, Mantenimiento de espacios Verdes, Servicio de Limpieza de Oficinas, Limpieza final de obra. Servicios de Gestión de residuos y Servicios de Fumigación. Todos nuestros servicios están diseñados para la industria minera e industrial.",
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer: "Podés comunicarte por:",
    items: [
      { text: "Teléfono / WhatsApp: 387-5555680" },
      { text: "A través del formulario de contacto", href: "/contacto" },
      { text: "Vía mail a info@mvasrl.com" },
    ],
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer:
      "Nuestro horario administrativo es de lunes a viernes de 8 a 18 hs y sábados de 8 a 13 hs. En caso de emergencias, puede comunicarse al 387-5555680.",
  },
];

const Asks = () => {
  return (
    <section className="py-16 bg-mva-blanco-100 text-textBlack">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Título con animación */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center text-mva-azul font-montserrat"
        >
          Preguntas Frecuentes
        </motion.h2>

        {/* Descripción con animación */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mt-6 text-lg text-center text-textBlackTitle max-w-3xl mx-auto font-poppins leading-relaxed"
        >
          Respondemos las dudas más comunes sobre nuestros servicios, horarios y
          calidad. Si tienes más preguntas, ¡contáctanos!
        </motion.p>

        {/* Sección de FAQ con acordeón */}
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {AsksData.map(({ question, answer, items }, index) => (
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
                  className="border-b border-mva-blanco-400"
                >
                  <AccordionTrigger className="text-xl font-semibold text-mva-turquesa font-montserrat transition-all duration-300 hover:text-mva-turquesa-400">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-textBlackTitle font-poppins">
                    <p>{answer}</p>
                    {items && (
                      <ul className="mt-2 list-none space-y-2 pl-2">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-[6px] shrink-0 w-2 h-2 rounded-full bg-mva-turquesa" />
                            {item.href ? (
                              <Link
                                href={item.href}
                                className="text-mva-turquesa underline underline-offset-2 hover:text-mva-turquesa-400 transition-colors"
                              >
                                {item.text}
                              </Link>
                            ) : (
                              item.text
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
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
