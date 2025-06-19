"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import ButtonHome from "../ui/local/ButtonHomeSinFlecha";
import ButtonHomeServices from "../ui/local/ButtonHomeConFlecha";

const Cta = () => {
  const router = useRouter();

  const handleServiciosClick = () => {
    router.push("/servicios");
  };
  const handleContactoClick = () => {
    router.push("/contacto");
  };
  const serviciosPortal = [
    {
      id: "reclamos",
      titulo: "Reclamos",
      descripcion: "Reporta inconvenientes",
      color: "bg-gradient-to-r from-red-500 to-red-600",
      emoji: "📋"
    },
    {
      id: "pedidos",
      titulo: "Pedidos de Servicios",
      descripcion: "Solicita nuestros servicios",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      emoji: "💼"
    },
    {
      id: "satisfaccion",
      titulo: "Satisfacción",
      descripcion: "Comparte tu experiencia",
      color: "bg-gradient-to-r from-green-500 to-green-600",
      emoji: "⭐"
    }
  ];

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
        </motion.p>{" "}
        {/* Caja destacada con Portal de Clientes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="mt-8"
        >
          <Card className="bg-white text-gray-900 shadow-xl p-8 max-w-4xl mx-auto">
            <CardContent className="space-y-6">
              <h3 className="text-2xl font-bold font-montserrat text-center mb-4 text-[#003F4F]">
                Portal de Clientes
              </h3>
              <p className="text-center text-gray-600 font-poppins mb-6">
                Accede a nuestros servicios digitales de forma rápida y sencilla
              </p>              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {serviciosPortal.map((servicio) => {
                  return (
                    <div key={servicio.id}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${servicio.color} text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium w-full`}                        onClick={() => {
                          // Navegar a clientes con el tipo de modal específico
                          router.push(`/clientes?modal=${servicio.id}`);
                        }}
                      >
                        <div className="text-3xl mb-2">{servicio.emoji}</div>
                        <div className="font-montserrat font-semibold">
                          {servicio.titulo}
                        </div>
                        <div className="text-sm opacity-90 font-poppins">
                          {servicio.descripcion}
                        </div>                      </motion.button>
                    </div>
                  );
                })}
              </div>
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
          <ButtonHome
            text="Servicios"
            className="max-w-[215px] w-full h-11"
            onClick={handleServiciosClick}
          />
          <ButtonHomeServices onClick={handleContactoClick} />
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
