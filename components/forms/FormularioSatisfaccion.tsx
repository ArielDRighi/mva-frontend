import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Send, Loader2, Heart, ThumbsUp } from "lucide-react";
import { toast } from "sonner";

interface FormularioSatisfaccionProps {
  onClose: () => void;
}

const FormularioSatisfaccion: React.FC<FormularioSatisfaccionProps> = ({ onClose }) => {
  const [cargando, setCargando] = useState(false);
  const [formulario, setFormulario] = useState({
    nombreEmpresa: "",
    nombreContacto: "",
    emailContacto: "",
    servicioFecha: "",
    calificacionGeneral: 0,
    calificacionPuntualidad: 0,
    calificacionCalidad: 0,
    calificacionAtencion: 0,
    comentarios: "",
    recomendaria: null as boolean | null
  });

  const manejarCambio = (campo: string, valor: any) => {
    setFormulario(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const validarFormulario = () => {
    const camposRequeridos = [
      "nombreEmpresa",
      "nombreContacto", 
      "emailContacto",
      "servicioFecha"
    ];
    
    const camposCompletos = camposRequeridos.every(campo => 
      formulario[campo as keyof typeof formulario] !== "" && 
      formulario[campo as keyof typeof formulario] !== null
    );

    const calificacionesCompletas = [
      formulario.calificacionGeneral,
      formulario.calificacionPuntualidad,
      formulario.calificacionCalidad,
      formulario.calificacionAtencion
    ].every(cal => cal > 0);

    return camposCompletos && calificacionesCompletas && formulario.recomendaria !== null;
  };

  const obtenerFechaMaxima = () => {
    const hoy = new Date();
    return hoy.toISOString().split('T')[0];
  };

  const renderEstrellas = (calificacion: number, campo: string) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((estrella) => (
          <button
            key={estrella}
            type="button"
            onClick={() => manejarCambio(campo, estrella)}
            className={`p-1 transition-colors ${
              estrella <= calificacion
                ? "text-yellow-400 hover:text-yellow-500"
                : "text-gray-300 dark:text-gray-600 hover:text-gray-400"
            }`}
          >
            <Star className="w-6 h-6 fill-current" />
          </button>
        ))}
      </div>
    );
  };

  const enviarSatisfaccion = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validarFormulario()) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    setCargando(true);
    
    try {
      const datosEnvio = {
        ...formulario,
        servicioFecha: new Date(formulario.servicioFecha).toISOString()
      };

      const respuesta = await fetch("http://localhost:3000/api/clients_portal/surveys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosEnvio),
      });

      if (respuesta.ok) {
        toast.success("¡Gracias por tu feedback! Tu opinión es muy valiosa para nosotros.");
        setFormulario({
          nombreEmpresa: "",
          nombreContacto: "",
          emailContacto: "",
          servicioFecha: "",
          calificacionGeneral: 0,
          calificacionPuntualidad: 0,
          calificacionCalidad: 0,
          calificacionAtencion: 0,
          comentarios: "",
          recomendaria: null
        });
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        throw new Error("Error al enviar la encuesta");
      }
    } catch (error) {
      toast.error("Error al enviar la encuesta. Inténtalo nuevamente.");
      console.error("Error:", error);
    } finally {
      setCargando(false);
    }
  };

  const promedioCalificaciones = () => {
    const calificaciones = [
      formulario.calificacionGeneral,
      formulario.calificacionPuntualidad,
      formulario.calificacionCalidad,
      formulario.calificacionAtencion
    ].filter(cal => cal > 0);
    
    return calificaciones.length > 0 
      ? (calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length).toFixed(1)
      : "0.0";
  };

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <form onSubmit={enviarSatisfaccion} className="space-y-6">
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

          {/* Email y fecha del servicio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <div className="space-y-2">
              <Label htmlFor="servicioFecha" className="text-sm font-medium">
                Fecha del Servicio *
              </Label>
              <Input
                id="servicioFecha"
                type="date"
                max={obtenerFechaMaxima()}
                value={formulario.servicioFecha}
                onChange={(e) => manejarCambio("servicioFecha", e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Calificaciones */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">
              Califica nuestro servicio
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Calificación General *</Label>
                <div className="flex items-center gap-3">
                  {renderEstrellas(formulario.calificacionGeneral, "calificacionGeneral")}
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {formulario.calificacionGeneral > 0 ? `${formulario.calificacionGeneral}/5` : "Sin calificar"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Puntualidad *</Label>
                <div className="flex items-center gap-3">
                  {renderEstrellas(formulario.calificacionPuntualidad, "calificacionPuntualidad")}
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {formulario.calificacionPuntualidad > 0 ? `${formulario.calificacionPuntualidad}/5` : "Sin calificar"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Calidad del Servicio *</Label>
                <div className="flex items-center gap-3">
                  {renderEstrellas(formulario.calificacionCalidad, "calificacionCalidad")}
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {formulario.calificacionCalidad > 0 ? `${formulario.calificacionCalidad}/5` : "Sin calificar"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Atención al Cliente *</Label>
                <div className="flex items-center gap-3">
                  {renderEstrellas(formulario.calificacionAtencion, "calificacionAtencion")}
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {formulario.calificacionAtencion > 0 ? `${formulario.calificacionAtencion}/5` : "Sin calificar"}
                  </span>
                </div>
              </div>
            </div>

            {/* Promedio de calificaciones */}
            {parseFloat(promedioCalificaciones()) > 0 && (
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      Promedio de Calificación
                    </p>
                    <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                      {promedioCalificaciones()}/5
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Recomendación */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              ¿Recomendarías nuestros servicios? *
            </Label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => manejarCambio("recomendaria", true)}
                className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                  formulario.recomendaria === true
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                    : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <ThumbsUp className={`w-5 h-5 ${
                    formulario.recomendaria === true ? "text-green-600" : "text-slate-400"
                  }`} />
                  <span className={`font-medium ${
                    formulario.recomendaria === true 
                      ? "text-green-700 dark:text-green-400" 
                      : "text-slate-600 dark:text-slate-400"
                  }`}>
                    Sí
                  </span>
                </div>
              </button>
              <button
                type="button"
                onClick={() => manejarCambio("recomendaria", false)}
                className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                  formulario.recomendaria === false
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <ThumbsUp className={`w-5 h-5 rotate-180 ${
                    formulario.recomendaria === false ? "text-red-600" : "text-slate-400"
                  }`} />
                  <span className={`font-medium ${
                    formulario.recomendaria === false 
                      ? "text-red-700 dark:text-red-400" 
                      : "text-slate-600 dark:text-slate-400"
                  }`}>
                    No
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Comentarios */}
          <div className="space-y-2">
            <Label htmlFor="comentarios" className="text-sm font-medium">
              Comentarios Adicionales
            </Label>
            <Textarea
              id="comentarios"
              placeholder="Comparte cualquier comentario adicional sobre tu experiencia..."
              value={formulario.comentarios}
              onChange={(e) => manejarCambio("comentarios", e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>

          {/* Mensaje de agradecimiento */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-green-600 dark:text-green-400" />
              <div className="text-sm text-green-800 dark:text-green-200">
                <p className="font-medium">¡Tu opinión es muy importante para nosotros!</p>
                <p>Nos ayuda a mejorar continuamente nuestros servicios.</p>
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
              className="flex-1 bg-green-500 hover:bg-green-600 text-white"
            >
              {cargando ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Encuesta
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormularioSatisfaccion;
