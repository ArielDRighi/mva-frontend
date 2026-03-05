"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FileText,
  MessageSquare,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import FormularioReclamos from "../forms/FormularioReclamos";
import FormularioPedidoServicios from "../forms/FormularioPedidoServicios";
import FormularioSatisfaccion from "../forms/FormularioSatisfaccion";

const serviciosPortal = [
  {
    id: "reclamos",
    titulo: "Reclamos",
    descripcion: "Reporta cualquier inconveniente con nuestros servicios",
    icono: FileText,
    barColor: "bg-mva-azul",
    iconBg: "bg-mva-azul/10",
    iconColor: "text-mva-azul",
    buttonColor: "bg-mva-azul hover:bg-mva-azul-400",
  },
  {
    id: "pedidos",
    titulo: "Pedidos de Servicios",
    descripcion: "Solicita nuestros servicios especializados",
    icono: MessageSquare,
    barColor: "bg-mva-turquesa",
    iconBg: "bg-mva-turquesa/10",
    iconColor: "text-mva-turquesa",
    buttonColor: "bg-mva-turquesa hover:bg-mva-turquesa-400",
  },
  {
    id: "satisfaccion",
    titulo: "Satisfacción",
    descripcion: "Comparte tu experiencia y califícanos",
    icono: Star,
    barColor: "bg-mva-celeste",
    iconBg: "bg-mva-celeste/10",
    iconColor: "text-mva-celeste",
    buttonColor: "bg-mva-celeste hover:bg-mva-celeste-400",
  },
];

const PortalClientes = () => {
  const [dialogAbierto, setDialogAbierto] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const modalParam = searchParams.get("modal");
    if (
      modalParam &&
      ["reclamos", "pedidos", "satisfaccion"].includes(modalParam)
    ) {
      setDialogAbierto(modalParam);
      setTimeout(() => {
        const portalSection = document.getElementById("portal-clientes");
        if (portalSection) portalSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [searchParams]);

  const renderFormulario = (tipo: string) => {
    try {
      switch (tipo) {
        case "reclamos":
          return (
            <div className="w-full">
              <FormularioReclamos onClose={() => setDialogAbierto(null)} />
            </div>
          );
        case "pedidos":
          return (
            <div className="w-full">
              <FormularioPedidoServicios
                onClose={() => setDialogAbierto(null)}
              />
            </div>
          );
        case "satisfaccion":
          return (
            <div className="w-full">
              <FormularioSatisfaccion onClose={() => setDialogAbierto(null)} />
            </div>
          );
        default:
          return (
            <div className="p-4">
              <p>Formulario no encontrado</p>
              <Button onClick={() => setDialogAbierto(null)} className="mt-4">
                Cerrar
              </Button>
            </div>
          );
      }
    } catch (error) {
      console.error("Error al cargar formulario:", error);
      return (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4 text-red-600">
            Error al cargar el formulario
          </h3>
          <p className="text-gray-600 mb-4">
            Hubo un problema al cargar el formulario de {tipo}. Por favor,
            intenta nuevamente.
          </p>
          <Button onClick={() => setDialogAbierto(null)} className="w-full">
            Cerrar
          </Button>
        </div>
      );
    }
  };

  return (
    <section id="portal-clientes" className="pb-16 px-4 bg-mva-blanco-100">
      <div className="max-w-7xl mx-auto">
        {/* Cards de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {serviciosPortal.map((servicio, index) => {
            const IconoComponente = servicio.icono;
            return (
              <motion.div
                key={servicio.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col border border-mva-blanco-400 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <div className={`h-1 w-full ${servicio.barColor}`} />
                  <CardHeader className="pb-3 flex-1">
                    <div
                      className={`w-12 h-12 rounded-full ${servicio.iconBg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconoComponente
                        className={`w-6 h-6 ${servicio.iconColor}`}
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-mva-azul font-montserrat">
                      {servicio.titulo}
                    </CardTitle>
                    <CardDescription className="text-textBlackTitle font-poppins">
                      {servicio.descripcion}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Dialog
                      open={dialogAbierto === servicio.id}
                      onOpenChange={(abierto) =>
                        setDialogAbierto(abierto ? servicio.id : null)
                      }
                    >
                      <DialogTrigger asChild>
                        <Button
                          className={`w-full ${servicio.buttonColor} text-white font-semibold font-montserrat py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                          size="lg"
                        >
                          Acceder
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle
                            className={`flex items-center gap-2 text-xl font-bold font-montserrat ${servicio.iconColor}`}
                          >
                            <IconoComponente className="w-5 h-5" />
                            {servicio.titulo}
                          </DialogTitle>
                          <DialogDescription>
                            {servicio.descripcion}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="max-w-none">
                          {renderFormulario(servicio.id)}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-mva-blanco-400"
        >
          <div className="flex flex-col gap-1 mb-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-mva-turquesa font-montserrat">
              Contacto directo
            </p>
            <h3 className="text-2xl font-bold text-mva-azul font-montserrat">
              ¿Necesitas ayuda adicional?
            </h3>
            <span className="block h-1 w-12 rounded-full bg-mva-turquesa mt-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-mva-turquesa/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-mva-turquesa" />
              </div>
              <div>
                <p className="font-semibold text-mva-azul font-montserrat">
                  Teléfono
                </p>
                <p className="text-textBlackTitle font-poppins">387-5555680</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-mva-azul/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-mva-azul" />
              </div>
              <div>
                <p className="font-semibold text-mva-azul font-montserrat">
                  Email
                </p>
                <p className="text-textBlackTitle font-poppins">
                  info@mvasrl.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-mva-celeste/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-mva-celeste" />
              </div>
              <div>
                <p className="font-semibold text-mva-azul font-montserrat">
                  Ubicación
                </p>
                <p className="text-textBlackTitle font-poppins">
                  Salta Capital, Argentina
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortalClientes;
