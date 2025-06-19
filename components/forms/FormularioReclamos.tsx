import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface FormularioReclamosProps {
  onClose: () => void;
}

const FormularioReclamos: React.FC<FormularioReclamosProps> = ({ onClose }) => {
  const [cargando, setCargando] = useState(false);
  const [formulario, setFormulario] = useState({
    nombreEmpresa: "",
    nombreContacto: "",
    telefonoContacto: "",
    emailContacto: "",
    tipoReclamo: "",
    descripcion: "",
    prioridad: ""
  });
  const tiposReclamo = [
    { value: "CALIDAD_SERVICIO", label: "Calidad del Servicio" },
    { value: "DEMORA", label: "Demora en el Servicio" },
    { value: "FACTURACION", label: "Facturación" },
    { value: "PERSONAL", label: "Comportamiento del Personal" },
    { value: "PRODUCTO_DEFECTUOSO", label: "Defecto del Producto" },
    { value: "OTRO", label: "Otro" }
  ];

  const prioridades = [
    { value: "BAJA", label: "Baja", color: "text-green-600" },
    { value: "MEDIA", label: "Media", color: "text-yellow-600" },
    { value: "ALTA", label: "Alta", color: "text-orange-600" },
    { value: "CRITICA", label: "Crítica", color: "text-red-600" }
  ];

  // Funciones helper para convertir enums
  const convertirTipoReclamo = (tipo: string) => {
    const mapeo: { [key: string]: string } = {
      'CALIDAD_SERVICIO': 'service_quality',
      'DEMORA': 'delay',
      'FACTURACION': 'billing',
      'PERSONAL': 'staff_behavior',
      'PRODUCTO_DEFECTUOSO': 'product_defect',
      'OTRO': 'other'
    };
    return mapeo[tipo] || 'other';
  };

  const convertirPrioridad = (prioridad: string) => {
    const mapeo: { [key: string]: string } = {
      'BAJA': 'low',
      'MEDIA': 'medium',
      'ALTA': 'high',
      'CRITICA': 'critical'
    };
    return mapeo[prioridad] || 'medium';
  };
  // Función de mapeo de datos para el backend
  const mapearDatosReclamo = (formData: typeof formulario) => {
    return {
      // Mapeo de campos del formulario a campos del backend
      cliente: formData.nombreEmpresa,
      titulo: `Reclamo de ${formData.nombreContacto} - ${tiposReclamo.find(t => t.value === formData.tipoReclamo)?.label || formData.tipoReclamo}`,
      descripcion: `${formData.descripcion}\n\nDatos de contacto:\nContacto: ${formData.nombreContacto}\nTeléfono: ${formData.telefonoContacto}\nEmail: ${formData.emailContacto}`,
      
      // Convertir enums a formato correcto (lowercase con underscores)
      tipoReclamo: convertirTipoReclamo(formData.tipoReclamo),
      prioridad: convertirPrioridad(formData.prioridad),
      
      // Fecha actual en formato ISO
      fechaIncidente: new Date().toISOString(),
      
      // Campos adicionales según DTO
      esUrgente: formData.prioridad === 'ALTA' || formData.prioridad === 'CRITICA',
      requiereCompensacion: false
    };
  };

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
      "tipoReclamo",
      "descripcion",
      "prioridad"
    ];
    
    return camposRequeridos.every(campo => formulario[campo as keyof typeof formulario].trim() !== "");
  };
  const enviarReclamo = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validarFormulario()) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    setCargando(true);
    
    try {
      // Mapear los datos según el formato esperado por el backend
      const datosParaBackend = mapearDatosReclamo(formulario);
      
      const respuesta = await fetch("http://localhost:3000/api/clients_portal/claims", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosParaBackend),
      });

      if (respuesta.ok) {
        toast.success("Reclamo enviado exitosamente. Te contactaremos pronto.");
        setFormulario({
          nombreEmpresa: "",
          nombreContacto: "",
          telefonoContacto: "",
          emailContacto: "",
          tipoReclamo: "",
          descripcion: "",
          prioridad: ""
        });
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        const errorData = await respuesta.json().catch(() => ({}));
        console.error("Error del servidor:", errorData);
        throw new Error(errorData.message || "Error al enviar el reclamo");
      }
    } catch (error) {
      toast.error("Error al enviar el reclamo. Inténtalo nuevamente.");
      console.error("Error:", error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <form onSubmit={enviarReclamo} className="space-y-6">
          {/* Información de la empresa */}
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

          {/* Tipo de reclamo y prioridad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tipoReclamo" className="text-sm font-medium">
                Tipo de Reclamo *
              </Label>
              <select
                id="tipoReclamo"
                value={formulario.tipoReclamo}
                onChange={(e) => manejarCambio("tipoReclamo", e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecciona un tipo</option>
                {tiposReclamo.map((tipo) => (
                  <option key={tipo.value} value={tipo.value}>
                    {tipo.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="prioridad" className="text-sm font-medium">
                Prioridad *
              </Label>
              <select
                id="prioridad"
                value={formulario.prioridad}
                onChange={(e) => manejarCambio("prioridad", e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecciona prioridad</option>
                {prioridades.map((prioridad) => (
                  <option key={prioridad.value} value={prioridad.value}>
                    {prioridad.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Descripción */}
          <div className="space-y-2">
            <Label htmlFor="descripcion" className="text-sm font-medium">
              Descripción del Reclamo *
            </Label>
            <Textarea
              id="descripcion"
              placeholder="Describe detalladamente tu reclamo..."
              value={formulario.descripcion}
              onChange={(e) => manejarCambio("descripcion", e.target.value)}
              className="min-h-[120px] resize-none"
            />
          </div>

          {/* Alerta informativa */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-800 dark:text-amber-200">
                <p className="font-medium mb-1">Importante:</p>
                <p>Tu reclamo será procesado en un plazo máximo de 48 horas hábiles. Te contactaremos al email proporcionado con el seguimiento correspondiente.</p>
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
              className="flex-1 bg-red-500 hover:bg-red-600 text-white"
            >
              {cargando ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Reclamo
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormularioReclamos;
