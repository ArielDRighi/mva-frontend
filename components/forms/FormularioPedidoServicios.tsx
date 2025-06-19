import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Send, Loader2, Info } from "lucide-react";
import { toast } from "sonner";

interface FormularioPedidoServiciosProps {
  onClose: () => void;
}

const FormularioPedidoServicios: React.FC<FormularioPedidoServiciosProps> = ({ onClose }) => {
  const [cargando, setCargando] = useState(false);  const [formulario, setFormulario] = useState({
    nombreEmpresa: "",
    nombreContacto: "",
    telefonoContacto: "",
    emailContacto: "",
    tipoServicio: "INSTALACION",
    cantidadBanos: "",
    ubicacion: "",
    fechaDeseada: "",
    duracionEstimada: "",
    detallesAdicionales: "",
    cuit: "",
    rubroEmpresa: ""
  });

  const manejarCambio = (campo: string, valor: string) => {
    setFormulario(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const validarFormulario = () => {
    const camposRequeridos = [
      "nombreEmpresa",
      "nombreContacto", 
      "telefonoContacto",
      "emailContacto",
      "cantidadBanos",
      "ubicacion",
      "fechaDeseada",
      "duracionEstimada"
    ];
    
    return camposRequeridos.every(campo => formulario[campo as keyof typeof formulario].trim() !== "");
  };
  const obtenerFechaMinima = () => {
    const hoy = new Date();
    const manana = new Date(hoy);
    manana.setDate(hoy.getDate() + 1);
    return manana.toISOString().split('T')[0];
  };

  // Función para convertir cantidad de baños al formato enum esperado
  const convertirCantidadBanos = (cantidad: string) => {
    const num = parseInt(cantidad);
    if (num >= 1 && num <= 5) return "1-5";
    if (num >= 6 && num <= 10) return "5-10";
    return "+10";
  };

  // Función de mapeo de datos para el backend
  const mapearDatosSolicitudServicio = (formData: typeof formulario) => {
    return {
      // Campos requeridos
      nombrePersona: formData.nombreContacto,
      email: formData.emailContacto,
      telefono: formData.telefonoContacto,
      nombreEmpresa: formData.nombreEmpresa,
      zonaDireccion: formData.ubicacion,
      
      // Campos opcionales
      rolPersona: "Contacto",
      cuit: formData.cuit || "",
      rubroEmpresa: formData.rubroEmpresa || "",
      cantidadBaños: convertirCantidadBanos(formData.cantidadBanos),
      tipoEvento: "Servicio de baños químicos",
      duracionAlquiler: `${formData.duracionEstimada} días`,
      startDate: new Date(formData.fechaDeseada).toISOString(),
      comentarios: formData.detallesAdicionales || ""
    };
  };

  const enviarPedido = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validarFormulario()) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    if (parseInt(formulario.cantidadBanos) <= 0) {
      toast.error("La cantidad de baños debe ser mayor a 0");
      return;
    }

    if (parseInt(formulario.duracionEstimada) <= 0) {
      toast.error("La duración estimada debe ser mayor a 0");
      return;
    }

    setCargando(true);
      try {
      // Mapear los datos según el formato esperado por el backend
      const solicitudData = mapearDatosSolicitudServicio(formulario);
      
      console.log('Datos a enviar:', solicitudData); // Para debug

      const respuesta = await fetch("http://localhost:3000/api/clients_portal/ask_for_service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(solicitudData),
      });

      if (respuesta.ok) {
        const resultado = await respuesta.json();
        console.log('Solicitud enviada exitosamente:', resultado);
        
        toast.success("Solicitud de servicio enviada exitosamente. Te contactaremos para coordinar los detalles.");setFormulario({
          nombreEmpresa: "",
          nombreContacto: "",
          telefonoContacto: "",
          emailContacto: "",
          tipoServicio: "INSTALACION",
          cantidadBanos: "",
          ubicacion: "",
          fechaDeseada: "",
          duracionEstimada: "",
          detallesAdicionales: "",
          cuit: "",
          rubroEmpresa: ""
        });
        setTimeout(() => {
          onClose();
        }, 1500);      } else {
        const errorData = await respuesta.json().catch(() => ({}));
        console.error('Error del servidor:', errorData);
        throw new Error(errorData.message || "Error al enviar la solicitud");
      }
    } catch (error) {
      toast.error("Error al enviar la solicitud. Inténtalo nuevamente.");
      console.error("Error:", error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <Card className="border-0 shadow-none mx-7">
      <CardContent className="p-0">
        <form onSubmit={enviarPedido} className="space-y-6">          {/* Información de la empresa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombreEmpresa" className="text-sm font-medium">
                Nombre de la Empresa *
              </Label>
              <Input
                id="nombreEmpresa"
                type="text"
                placeholder="Ingresa el nombre de tu empresa"
                value={formulario.nombreEmpresa}
                onChange={(e) => manejarCambio("nombreEmpresa", e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nombreContacto" className="text-sm font-medium">
                Nombre del Contacto *
              </Label>
              <Input
                id="nombreContacto"
                type="text"
                placeholder="Tu nombre completo"
                value={formulario.nombreContacto}
                onChange={(e) => manejarCambio("nombreContacto", e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* CUIT y Rubro de Empresa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cuit" className="text-sm font-medium">
                CUIT (Opcional)
              </Label>
              <Input
                id="cuit"
                type="text"
                placeholder="XX-XXXXXXXX-X"
                value={formulario.cuit}
                onChange={(e) => manejarCambio("cuit", e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rubroEmpresa" className="text-sm font-medium">
                Rubro de Empresa (Opcional)
              </Label>
              <Input
                id="rubroEmpresa"
                type="text"
                placeholder="Ej: Construcción, Eventos, etc."
                value={formulario.rubroEmpresa}
                onChange={(e) => manejarCambio("rubroEmpresa", e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Información de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telefonoContacto" className="text-sm font-medium">
                Teléfono *
              </Label>
              <Input
                id="telefonoContacto"
                type="tel"
                placeholder="+54 11 1234-5678"
                value={formulario.telefonoContacto}
                onChange={(e) => manejarCambio("telefonoContacto", e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emailContacto" className="text-sm font-medium">
                Email *
              </Label>
              <Input
                id="emailContacto"
                type="email"
                placeholder="tu@email.com"
                value={formulario.emailContacto}
                onChange={(e) => manejarCambio("emailContacto", e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Detalles del servicio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cantidadBanos" className="text-sm font-medium">
                Cantidad de Baños *
              </Label>
              <Input
                id="cantidadBanos"
                type="number"
                min="1"
                placeholder="Ej: 5"
                value={formulario.cantidadBanos}
                onChange={(e) => manejarCambio("cantidadBanos", e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duracionEstimada" className="text-sm font-medium">
                Duración Estimada (días) *
              </Label>
              <Input
                id="duracionEstimada"
                type="number"
                min="1"
                placeholder="Ej: 30"
                value={formulario.duracionEstimada}
                onChange={(e) => manejarCambio("duracionEstimada", e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Ubicación */}
          <div className="space-y-2">
            <Label htmlFor="ubicacion" className="text-sm font-medium">
              Ubicación del Servicio *
            </Label>
            <Input
              id="ubicacion"
              type="text"
              placeholder="Dirección completa donde se instalarán los baños"
              value={formulario.ubicacion}
              onChange={(e) => manejarCambio("ubicacion", e.target.value)}
              className="w-full"
            />
          </div>

          {/* Fecha deseada */}
          <div className="space-y-2">
            <Label htmlFor="fechaDeseada" className="text-sm font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Fecha Deseada de Instalación *
            </Label>
            <Input
              id="fechaDeseada"
              type="date"
              min={obtenerFechaMinima()}
              value={formulario.fechaDeseada}
              onChange={(e) => manejarCambio("fechaDeseada", e.target.value)}
              className="w-full"
            />
          </div>

          {/* Detalles adicionales */}
          <div className="space-y-2">
            <Label htmlFor="detallesAdicionales" className="text-sm font-medium">
              Detalles Adicionales
            </Label>
            <Textarea
              id="detallesAdicionales"
              placeholder="Proporciona información adicional que consideres relevante (horarios preferidos, condiciones especiales, etc.)"
              value={formulario.detallesAdicionales}
              onChange={(e) => manejarCambio("detallesAdicionales", e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>

          {/* Información importante */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800 dark:text-blue-200">
                <p className="font-medium mb-1">Información del Servicio:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>El servicio incluye instalación, mantenimiento y retiro.</li>
                  <li>Nos contactaremos contigo dentro de 24 horas para confirmar disponibilidad.</li>
                  <li>Los precios varían según ubicación y duración del servicio.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={cargando}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={cargando || !validarFormulario()}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
            >
              {cargando ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Solicitar Servicio
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormularioPedidoServicios;
