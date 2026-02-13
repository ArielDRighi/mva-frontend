"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import ButtonHome from "../ui/local/ButtonHomeSinFlecha";
import ButtonHomeServices from "../ui/local/ButtonHomeConFlecha";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import FormularioReclamos from "../forms/FormularioReclamos";
import FormularioPedidoServicios from "../forms/FormularioPedidoServicios";
import FormularioSatisfaccion from "../forms/FormularioSatisfaccion";
import { X } from "lucide-react";

const Cta = () => {
  const router = useRouter();
  const [modalAbierto, setModalAbierto] = useState<
    "reclamos" | "pedidos" | "satisfaccion" | null
  >(null);

  const handleServiciosClick = () => {
    router.push("/servicios");
  };
  const handleContactoClick = () => {
    router.push("/contacto");
  };

  const handleAbrirModal = (tipo: "reclamos" | "pedidos" | "satisfaccion") => {
    setModalAbierto(tipo);
  };

  const handleCerrarModal = () => {
    setModalAbierto(null);
  };
  const serviciosPortal = [
    {
      id: "reclamos",
      titulo: "Reclamos",
      descripcion: "Reporta inconvenientes",
      color: "bg-mva-azul",
      iconColor: "text-mva-azul",
      icon: "📋",
    },
    {
      id: "pedidos",
      titulo: "Pedidos de Servicios",
      descripcion: "Solicita nuestros servicios",
      color: "bg-mva-turquesa",
      iconColor: "text-mva-turquesa",
      icon: "💼",
    },
    {
      id: "satisfaccion",
      titulo: "Satisfacción",
      descripcion: "Comparte tu experiencia",
      color: "bg-mva-celeste",
      iconColor: "text-mva-celeste",
      icon: "⭐",
    },
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-mva-azul to-mva-azul-500 text-white text-center">
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
            className="mt-6 text-lg text-mva-blanco-100 max-w-3xl mx-auto font-poppins leading-relaxed"
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
          >
            <Card className="bg-gray-200 text-textBlack p-12 max-w-5xl mx-auto border-l-4 border-mva-turquesa rounded-xl">
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold font-montserrat text-center mb-2 text-mva-azul">
                    Portal de Clientes
                  </h3>
                  <p className="text-center text-textBlackTitle font-poppins mb-2 text-base">
                    Accede a nuestros servicios digitales de forma rápida y
                    sencilla
                  </p>
                  <div className="h-1 w-20 bg-mva-turquesa mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {serviciosPortal.map((servicio) => {
                    return (
                      <motion.button
                        key={servicio.id}
                        whileHover={{ y: -8 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          handleAbrirModal(
                            servicio.id as
                              | "reclamos"
                              | "pedidos"
                              | "satisfaccion",
                          );
                        }}
                        className={`${servicio.color} text-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 font-medium w-full group relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                        <div className="relative z-10 flex flex-col items-center space-y-3">
                          <div className={`text-5xl ${servicio.iconColor}`}>
                            {servicio.icon}
                          </div>
                          <div className="font-montserrat font-bold text-lg">
                            {servicio.titulo}
                          </div>
                          <div className="text-sm opacity-95 font-poppins">
                            {servicio.descripcion}
                          </div>
                          <div className="pt-2 text-xs font-semibold opacity-75 group-hover:opacity-100 transition-opacity">
                            Acceder →
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {/* Botones de acción */}
          {/* <motion.div
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
        </motion.div> */}
        </div>
      </section>

      {/* Modal para Reclamos */}
      <Dialog
        open={modalAbierto === "reclamos"}
        onOpenChange={(open) => {
          if (!open) handleCerrarModal();
        }}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-mva-azul">
              📋 Reportar un Reclamo
            </DialogTitle>
            <DialogDescription>
              Cuéntanos sobre tu inconveniente para que podamos ayudarte de la
              mejor manera.
            </DialogDescription>
          </DialogHeader>
          <FormularioReclamos onClose={handleCerrarModal} />
        </DialogContent>
      </Dialog>

      {/* Modal para Pedidos de Servicios */}
      <Dialog
        open={modalAbierto === "pedidos"}
        onOpenChange={(open) => {
          if (!open) handleCerrarModal();
        }}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-mva-turquesa">
              💼 Solicitar Servicio
            </DialogTitle>
            <DialogDescription>
              Completa el formulario para solicitar nuestros servicios. Te
              contactaremos pronto.
            </DialogDescription>
          </DialogHeader>
          <FormularioPedidoServicios onClose={handleCerrarModal} />
        </DialogContent>
      </Dialog>

      {/* Modal para Satisfacción */}
      <Dialog
        open={modalAbierto === "satisfaccion"}
        onOpenChange={(open) => {
          if (!open) handleCerrarModal();
        }}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-mva-celeste">
              ⭐ Comparte tu Experiencia
            </DialogTitle>
            <DialogDescription>
              Tu opinión es muy importante para nosotros. Ayúdanos a mejorar
              compartiendo tu feedback.
            </DialogDescription>
          </DialogHeader>
          <FormularioSatisfaccion onClose={handleCerrarModal} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Cta;
