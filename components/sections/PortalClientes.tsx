"use client";
import React, { useState } from "react";
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
} from "lucide-react";
import FormularioReclamos from "../forms/FormularioReclamos";
import FormularioPedidoServicios from "../forms/FormularioPedidoServicios";
import FormularioSatisfaccion from "../forms/FormularioSatisfaccion";

const PortalClientes = () => {
  const [dialogAbierto, setDialogAbierto] = useState<string | null>(null);

  const serviciosPortal = [
    {
      id: "reclamos",
      titulo: "Reclamos",
      descripcion: "Reporta cualquier inconveniente con nuestros servicios",
      icono: FileText,
      color: "bg-red-500 hover:bg-red-600",
      colorIcono: "text-red-500",
    },
    {
      id: "pedidos",
      titulo: "Pedidos de Servicios",
      descripcion: "Solicita nuestros servicios de baños químicos",
      icono: MessageSquare,
      color: "bg-blue-500 hover:bg-blue-600",
      colorIcono: "text-blue-500",
    },
    {
      id: "satisfaccion",
      titulo: "Satisfacción",
      descripcion: "Comparte tu experiencia y califícanos",
      icono: Star,
      color: "bg-green-500 hover:bg-green-600",
      colorIcono: "text-green-500",
    },
  ];

  const renderFormulario = (tipo: string) => {
    switch (tipo) {
      case "reclamos":
        return <FormularioReclamos onClose={() => setDialogAbierto(null)} />;
      case "pedidos":
        return (
          <FormularioPedidoServicios onClose={() => setDialogAbierto(null)} />
        );
      case "satisfaccion":
        return (
          <FormularioSatisfaccion onClose={() => setDialogAbierto(null)} />
        );
      default:
        return null;
    }
  };
  return (
    <section id="portal-clientes" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Portal de Clientes
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Accede a nuestros servicios digitales. Realiza reclamos, solicita
            servicios o comparte tu experiencia de manera rápida y sencilla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {serviciosPortal.map((servicio) => {
            const IconoComponente = servicio.icono;
            return (
              <Card
                key={servicio.id}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-slate-300 dark:hover:border-slate-600"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconoComponente
                      className={`w-8 h-8 ${servicio.colorIcono}`}
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">
                    {servicio.titulo}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
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
                        className={`w-full ${servicio.color} text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105`}
                        size="lg"
                      >
                        Acceder
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <IconoComponente
                            className={`w-5 h-5 ${servicio.colorIcono}`}
                          />
                          {servicio.titulo}
                        </DialogTitle>
                        <DialogDescription>
                          {servicio.descripcion}
                        </DialogDescription>
                      </DialogHeader>
                      {renderFormulario(servicio.id)}
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Información de contacto adicional */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
            ¿Necesitas ayuda adicional?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Teléfono
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  +54 11 1234-5678
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Email
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  contacto@mva.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Ubicación
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalClientes;
