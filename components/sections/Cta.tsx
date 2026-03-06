"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { FileText, MessageSquare, Star, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FormularioReclamos from "../forms/FormularioReclamos";
import FormularioPedidoServicios from "../forms/FormularioPedidoServicios";
import FormularioSatisfaccion from "../forms/FormularioSatisfaccion";

const serviciosPortal = [
  {
    id: "reclamos" as const,
    titulo: "Reclamos",
    descripcion: "Reporta inconvenientes con nuestros servicios",
    Icon: FileText,
    barColor: "bg-mva-azul",
    iconBg: "bg-mva-azul/10",
    iconColor: "text-mva-azul",
  },
  {
    id: "pedidos" as const,
    titulo: "Pedidos de Servicios",
    descripcion: "Solicita nuestros servicios especializados",
    Icon: MessageSquare,
    barColor: "bg-mva-turquesa",
    iconBg: "bg-mva-turquesa/10",
    iconColor: "text-mva-turquesa",
  },
  {
    id: "satisfaccion" as const,
    titulo: "Satisfacción",
    descripcion: "Comparte tu experiencia y califícanos",
    Icon: Star,
    barColor: "bg-mva-celeste",
    iconBg: "bg-mva-celeste/10",
    iconColor: "text-mva-celeste",
  },
];

const Cta = () => {
  const [modalAbierto, setModalAbierto] = useState<
    "reclamos" | "pedidos" | "satisfaccion" | null
  >(null);

  const handleAbrirModal = (tipo: "reclamos" | "pedidos" | "satisfaccion") =>
    setModalAbierto(tipo);
  const handleCerrarModal = () => setModalAbierto(null);

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-mva-azul to-mva-azul-500 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs sm-tablet:text-sm font-semibold tracking-[0.22em] uppercase text-mva-turquesa font-montserrat mb-3">
              Trabajemos juntos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat">
              ¿Listo para una{" "}
              <span className="text-mva-turquesa">solución eficiente</span>?
            </h2>
            <span className="mt-4 block h-1 w-16 rounded-full bg-mva-turquesa mx-auto" />
            <p className="mt-6 text-lg text-white/75 max-w-3xl mx-auto font-poppins leading-relaxed">
              Contáctanos hoy y descubre cómo podemos optimizar tu operación con
              servicios de primera calidad.
            </p>
          </motion.div>

          {/* Portal card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 sm-tablet:p-10"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-montserrat text-mva-azul">
                Portal de Clientes
              </h3>
              <p className="text-textBlackTitle font-poppins text-sm mt-1">
                Accede a nuestros servicios digitales de forma rápida y sencilla
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {serviciosPortal.map((servicio, i) => {
                const { Icon } = servicio;
                return (
                  <motion.button
                    key={servicio.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAbrirModal(servicio.id)}
                    className="relative bg-mva-blanco-200 hover:bg-white border border-mva-blanco-400 hover:border-mva-blanco-500 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-full text-left overflow-hidden group"
                  >
                    <div
                      className={`absolute top-0 h-1 w-full ${servicio.barColor}`}
                    />
                    <div className="p-5 flex flex-col gap-3 h-full">
                      <div
                        className={`w-11 h-11 rounded-full ${servicio.iconBg} flex items-center justify-center`}
                      >
                        <Icon className={`w-5 h-5 ${servicio.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold font-montserrat text-mva-azul text-sm">
                          {servicio.titulo}
                        </p>
                        <p className="text-xs text-textBlackTitle font-poppins mt-0.5">
                          {servicio.descripcion}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-semibold ${servicio.iconColor} flex items-center gap-1 group-hover:gap-2 transition-all`}
                      >
                        Acceder <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal Reclamos */}
      <Dialog
        open={modalAbierto === "reclamos"}
        onOpenChange={(open) => {
          if (!open) handleCerrarModal();
        }}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-mva-azul flex items-center gap-2">
              <FileText className="w-5 h-5" /> Reportar un Reclamo
            </DialogTitle>
            <DialogDescription>
              Cuéntanos sobre tu inconveniente para que podamos ayudarte de la
              mejor manera.
            </DialogDescription>
          </DialogHeader>
          <FormularioReclamos onClose={handleCerrarModal} />
        </DialogContent>
      </Dialog>

      {/* Modal Pedidos */}
      <Dialog
        open={modalAbierto === "pedidos"}
        onOpenChange={(open) => {
          if (!open) handleCerrarModal();
        }}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-mva-turquesa flex items-center gap-2">
              <MessageSquare className="w-5 h-5" /> Solicitar Servicio
            </DialogTitle>
            <DialogDescription>
              Completa el formulario para solicitar nuestros servicios. Te
              contactaremos pronto.
            </DialogDescription>
          </DialogHeader>
          <FormularioPedidoServicios onClose={handleCerrarModal} />
        </DialogContent>
      </Dialog>

      {/* Modal Satisfacción */}
      <Dialog
        open={modalAbierto === "satisfaccion"}
        onOpenChange={(open) => {
          if (!open) handleCerrarModal();
        }}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-mva-celeste flex items-center gap-2">
              <Star className="w-5 h-5" /> Comparte tu Experiencia
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
