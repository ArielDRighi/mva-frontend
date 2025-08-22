import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Send, Loader2, Heart } from "lucide-react";
import { toast } from "sonner";
import { getFullApiUrl, API_ENDPOINTS } from "@/lib/api-config";

interface FormularioSatisfaccionProps {
  onClose: () => void;
}

const FormularioSatisfaccion: React.FC<FormularioSatisfaccionProps> = ({
  onClose,
}) => {
  const [cargando, setCargando] = useState(false);
  const [formulario, setFormulario] = useState({
    // Información de contacto
    nombreEmpresa: "",
    lugarProyecto: "",
    nombreContacto: "",

    // Preguntas de la encuesta
    contactoInicial: [] as string[],
    tiempoRespuesta: "",
    calificacionAtencion: 0,
    accesibilidadContacto: "",
    relacionPrecioValor: "",
    recomendaria: "" as string,
    comentarios: "",
  });

  const manejarCambio = (campo: string, valor: any) => {
    setFormulario((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const validarFormulario = () => {
    const camposRequeridos = [
      "nombreEmpresa",
      "lugarProyecto",
    ];

    const camposCompletos = camposRequeridos.every(
      (campo) =>
        formulario[campo as keyof typeof formulario] !== "" &&
        formulario[campo as keyof typeof formulario] !== null
    );

    const preguntasCompletas = [
      formulario.contactoInicial.length > 0,
      formulario.tiempoRespuesta !== "",
      formulario.calificacionAtencion > 0,
      formulario.accesibilidadContacto !== "",
      formulario.relacionPrecioValor !== "",
      formulario.recomendaria !== "",
    ].every((condicion) => condicion);

    return camposCompletos && preguntasCompletas;
  };

  // Función de mapeo de datos para el backendsdfsdf
const mapearDatosEncuestaSatisfaccion = (formData: typeof formulario) => ({
  nombre_empresa: formData.nombreEmpresa,
  lugar_proyecto: formData.lugarProyecto,
  contacto: formData.nombreContacto || undefined,
  medio_contacto: formData.contactoInicial.join(", "),
  tiempo_respuesta: formData.tiempoRespuesta,
  calificacion_atencion: formData.calificacionAtencion,
  accesibilidad_comercial: formData.accesibilidadContacto,
  relacion_precio_valor: formData.relacionPrecioValor,
  recomendaria: formData.recomendaria,
  comentario_adicional: formData.comentarios || undefined,
});

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
                : "text-gray-300 hover:text-gray-400"
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
      // Mapear los datos según el formato esperado por el backend
      const encuestaData = mapearDatosEncuestaSatisfaccion(formulario);

      console.log("Datos a enviar:", encuestaData); // Para debug

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://mvasrl.com";
      const respuesta = await fetch(
        `${apiUrl}/clients_portal/satisfaction_surveys`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(encuestaData),
        }
      );

      if (respuesta.ok) {
        const resultado = await respuesta.json();
        console.log("Encuesta enviada exitosamente:", resultado);

        toast.success(
          "¡Gracias por tu feedback! Tu opinión es muy valiosa para nosotros."
        );
        setFormulario({
          nombreEmpresa: "",
          lugarProyecto: "",
          nombreContacto: "",
          contactoInicial: [],
          tiempoRespuesta: "",
          calificacionAtencion: 0,
          accesibilidadContacto: "",
          relacionPrecioValor: "",
          recomendaria: "",
          comentarios: "",
        });
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        const errorData = await respuesta.json().catch(() => ({}));
        console.error("Error del servidor:", errorData);
        throw new Error(errorData.message || "Error al enviar la encuesta");
      }
    } catch (error) {
      toast.error("Error al enviar la encuesta. Inténtalo nuevamente.");
      console.error("Error:", error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <form onSubmit={enviarSatisfaccion} className="space-y-6">
          {/* Información de la empresa */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombreEmpresa" className="text-sm font-medium">
                Nombre de la empresa *
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
              <Label htmlFor="lugarProyecto" className="text-sm font-medium">
                Lugar o Proyecto donde se instalaron los baños *
              </Label>
              <Input
                id="lugarProyecto"
                type="text"
                placeholder="Ej: Mina San José, Proyecto Cerro Negro, etc."
                value={formulario.lugarProyecto}
                onChange={(e) => manejarCambio("lugarProyecto", e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="nombreContacto" className="text-sm font-medium">
              Nombre, Apellido y Contacto (opcional)
            </Label>
            <Input
              id="nombreContacto"
              type="text"
              placeholder="Tu nombre completo y forma de contacto"
              value={formulario.nombreContacto}
              onChange={(e) => manejarCambio("nombreContacto", e.target.value)}
              className="w-full"
            />
          </div>

          {/* Pregunta 1: Contacto inicial */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Contacto inicial ¿Cómo conoció Ud. a MVA, por que medio de
              comunicación? *
            </Label>
            <div className="grid grid-cols-1 gap-2">
              {[
                "Recomendación de otra empresa o colega",
                "Relación comercial anterior",
                "Recomendación en el mismo proyecto",
                "Redes sociales",
                "Publicidad en distintos medios",
                "Otro",
              ].map((opcion) => (
                <label key={opcion} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formulario.contactoInicial.includes(opcion)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        manejarCambio("contactoInicial", [
                          ...formulario.contactoInicial,
                          opcion,
                        ]);
                      } else {
                        manejarCambio(
                          "contactoInicial",
                          formulario.contactoInicial.filter(
                            (item) => item !== opcion
                          )
                        );
                      }
                    }}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm">{opcion}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pregunta 2: Tiempo de respuesta */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Al momento de solicitar una cotización, ¿En cuánto tiempo recibió
              respuesta a su pedido? *
            </Label>
            <div className="space-y-2">
              {[
                "Entre 0 y 3 días",
                "Entre 3 y 5 días",
                "Entre 5 y 7 días",
                "Otro",
              ].map((opcion) => (
                <label key={opcion} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tiempoRespuesta"
                    checked={formulario.tiempoRespuesta === opcion}
                    onChange={() => manejarCambio("tiempoRespuesta", opcion)}
                    className="border-gray-300"
                  />
                  <span className="text-sm">{opcion}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pregunta 3: Calificación de atención */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              ¿Cómo calificaría la atención recibida por parte del equipo
              comercial de MVA SRL en el contacto inicial? *
            </Label>
            <div className="flex items-center gap-3">
              {renderEstrellas(
                formulario.calificacionAtencion,
                "calificacionAtencion"
              )}
              <span className="text-sm text-slate-600">
                {formulario.calificacionAtencion > 0
                  ? `${formulario.calificacionAtencion}/5`
                  : "Sin calificar"}
              </span>
            </div>
          </div>

          {/* Pregunta 5: Accesibilidad del contacto */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              ¿Qué tan accesible le resulta el contacto con el área comercial
              ante consultas o necesidades? (Ej. Pedido de nuevo baño, cambio en
              la frecuencia, certificaciones, facturación, etc) *
            </Label>
            <div className="space-y-2">
              {[
                "Muy accesible",
                "Accesible",
                "Poco accesible",
                "Inaccesible",
              ].map((opcion) => (
                <label key={opcion} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="accesibilidadContacto"
                    checked={formulario.accesibilidadContacto === opcion}
                    onChange={() =>
                      manejarCambio("accesibilidadContacto", opcion)
                    }
                    className="border-gray-300"
                  />
                  <span className="text-sm">{opcion}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pregunta 7: Relación precio/valor */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              ¿Cómo evalúa la relación precio / valor del servicio ofrecido por
              MVA SRL? *
            </Label>
            <div className="space-y-2">
              {["Muy buena", "Aceptable", "Mejorable", "Mala"].map((opcion) => (
                <label key={opcion} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="relacionPrecioValor"
                    checked={formulario.relacionPrecioValor === opcion}
                    onChange={() =>
                      manejarCambio("relacionPrecioValor", opcion)
                    }
                    className="border-gray-300"
                  />
                  <span className="text-sm">{opcion}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pregunta 9: Recomendación */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              ¿Recomendaría a MVA SRL a otra empresa o colega? *
            </Label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => manejarCambio("recomendaria", "Sí, sin dudas")}
                className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                  formulario.recomendaria === "Sí, sin dudas"
                    ? "border-green-500 bg-green-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span
                    className={`font-medium ${
                      formulario.recomendaria === "Sí, sin dudas"
                        ? "text-green-700"
                        : "text-slate-600"
                    }`}
                  >
                    Sí, sin dudas
                  </span>
                </div>
              </button>
              <button
                type="button"
                onClick={() => manejarCambio("recomendaria", "Tal vez")}
                className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                  formulario.recomendaria === "Tal vez"
                    ? "border-amber-500 bg-amber-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span
                    className={`font-medium ${
                      formulario.recomendaria === "Tal vez"
                        ? "text-amber-700"
                        : "text-slate-600"
                    }`}
                  >
                    Tal vez
                  </span>
                </div>
              </button>
              <button
                type="button"
                onClick={() => manejarCambio("recomendaria", "No")}
                className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                  formulario.recomendaria === "No"
                    ? "border-red-500 bg-red-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span
                    className={`font-medium ${
                      formulario.recomendaria === "No"
                        ? "text-red-700"
                        : "text-slate-600"
                    }`}
                  >
                    No
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Pregunta 10: Comentarios */}
          <div className="space-y-2">
            <Label htmlFor="comentarios" className="text-sm font-medium">
              ¿Desea dejar algún comentario adicional sobre la atención
              comercial o sugerencias de mejora?
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
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-green-600" />
              <div className="text-sm text-green-800">
                <p className="font-medium">
                  ¡Tu opinión es muy importante para nosotros!
                </p>
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
