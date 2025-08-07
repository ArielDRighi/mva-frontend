"use client";
import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import FormularioReclamos from "../forms/FormularioReclamos";
import FormularioPedidoServicios from "../forms/FormularioPedidoServicios";
import FormularioSatisfaccion from "../forms/FormularioSatisfaccion";

const PortalClientes = () => {
  const [dialogAbierto, setDialogAbierto] = useState<string | null>(null);
  const searchParams = useSearchParams();

  // Detectar parámetro de modal en la URL
  useEffect(() => {
    const modalParam = searchParams.get('modal');
    if (modalParam && ['reclamos', 'pedidos', 'satisfaccion'].includes(modalParam)) {
      setDialogAbierto(modalParam);
      // Hacer scroll al portal después de un pequeño delay
      setTimeout(() => {
        const portalSection = document.getElementById("portal-clientes");
        if (portalSection) {
          portalSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [searchParams]);

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
  ];  const renderFormulario = (tipo: string) => {
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
              <FormularioPedidoServicios onClose={() => setDialogAbierto(null)} />
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
      console.error('Error al cargar formulario:', error);
      return (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4 text-red-600">
            Error al cargar el formulario
          </h3>
          <p className="text-gray-600 mb-4">
            Hubo un problema al cargar el formulario de {tipo}. Por favor, intenta nuevamente.
          </p>
          <Button onClick={() => setDialogAbierto(null)} className="w-full">
            Cerrar
          </Button>
        </div>
      );
    }
  };
  return (
    <section id="portal-clientes" className="pb-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {serviciosPortal.map((servicio) => {
            const IconoComponente = servicio.icono;
            return (
              <Card
                key={servicio.id}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-slate-300"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconoComponente
                      className={`w-8 h-8 ${servicio.colorIcono}`}
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    {servicio.titulo}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
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
                        </DialogDescription>                      </DialogHeader>
                      <div className="max-w-none">
                        {renderFormulario(servicio.id)}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Información de contacto adicional */}
        <div className="bg-white rounded-xl p-8 shadow-lg border">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
            ¿Necesitas ayuda adicional?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">
                  Teléfono
                </p>
                <p className="text-slate-600">
                  387-5555680
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">
                  Email
                </p>
                <p className="text-slate-600">
                  mva.serviciosyalquileres@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">
                  Ubicación
                </p>
                <p className="text-slate-600">
                  Salta Capital, Argentina
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
