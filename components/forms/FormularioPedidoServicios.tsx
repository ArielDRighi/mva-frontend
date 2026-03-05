import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Send, Loader2, Info } from "lucide-react";
import { toast } from "sonner";
import { getFullApiUrl, API_ENDPOINTS } from "@/lib/api-config";

interface FormularioPedidoServiciosProps {
  onClose: () => void;
}

export const opcionesServicios = [
  {
    value: "Alquiler de baños químicos",
    label: "Alquiler de baños químicos",
  },
  { value: "Desagote de efluentes", label: "Desagote de efluentes" },
  { value: "Limpieza de oficina", label: "Limpieza de oficina" },
  { value: "Limpieza final de obra,", label: "Limpieza final de obra," },
  {
    value: "Servicio de fumigación y control de plagas",
    label: "Servicio de fumigación y control de plagas",
  },
  { value: "Gestión de residuos", label: "Gestión de residuos" },
  {
    value: "Mantenimiento de espacios verdes",
    label: "Mantenimiento de espacios verdes",
  },
  {
    value: "Transporte de Aceite Vegetal Usado",
    label: "Transporte de Aceite Vegetal Usado",
  },
  { value: "OTRO", label: "Otro" },
];

const FormularioPedidoServicios: React.FC<FormularioPedidoServiciosProps> = ({
  onClose,
}) => {
  const [cargando, setCargando] = useState(false);
  const [formulario, setFormulario] = useState({
    nombreEmpresa: "",
    nombreContacto: "",
    telefonoContacto: "",
    emailContacto: "",
    tipoServicio: "INSTALACION",
    ubicacion: "",
    servicios: [] as string[],
    detallesAdicionales: "",
    cuit: "",
  });
  const [serviciosAbierto, setServiciosAbierto] = useState(false);
  const serviciosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        serviciosRef.current &&
        !serviciosRef.current.contains(e.target as Node)
      ) {
        setServiciosAbierto(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const opcionesUbicacion = [
    { value: "SALTA_CAPITAL", label: "Salta Capital" },
    { value: "PROYECTO_MINERO", label: "Proyecto Minero" },
    { value: "OTRO", label: "Otro" },
  ];

  const manejarCambio = (campo: string, valor: string) => {
    setFormulario((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const toggleServicio = (valor: string) => {
    setFormulario((prev) => ({
      ...prev,
      servicios: prev.servicios.includes(valor)
        ? prev.servicios.filter((s) => s !== valor)
        : [...prev.servicios, valor],
    }));
  };

  const validarFormulario = () => {
    const camposRequeridos = [
      "nombreEmpresa",
      "nombreContacto",
      "telefonoContacto",
      "emailContacto",
      "ubicacion",
    ];
    const camposOk = camposRequeridos.every(
      (campo) =>
        (formulario[campo as keyof typeof formulario] as string).trim() !== "",
    );
    return camposOk && formulario.servicios.length > 0;
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
      rubroEmpresa: "", // Campo eliminado del formulario
      cantidadBaños: "1-5", // Valor por defecto ya que se eliminó del formulario
      tipoEvento: formData.servicios.join(", "),
      duracionAlquiler: "Por definir", // Valor por defecto ya que se eliminó del formulario
      startDate: new Date().toISOString(), // Fecha actual ya que se eliminó fecha deseada
      comentarios: formData.detallesAdicionales || "",
    };
  };

  const enviarPedido = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validarFormulario()) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    setCargando(true);
    try {
      // Mapear los datos según el formato esperado por el backend
      const solicitudData = mapearDatosSolicitudServicio(formulario);

      console.log("Datos a enviar:", solicitudData); // Para debug
      console.log(
        "URL de envío:",
        getFullApiUrl(API_ENDPOINTS.ASK_FOR_SERVICE),
      );

      const respuesta = await fetch(
        getFullApiUrl(API_ENDPOINTS.ASK_FOR_SERVICE),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(solicitudData),
        },
      );

      if (respuesta.ok) {
        const resultado = await respuesta.json();
        console.log("Solicitud enviada exitosamente:", resultado);

        toast.success(
          "Solicitud de servicio enviada exitosamente. Te contactaremos para coordinar los detalles.",
        );
        setFormulario({
          nombreEmpresa: "",
          nombreContacto: "",
          telefonoContacto: "",
          emailContacto: "",
          tipoServicio: "INSTALACION",
          ubicacion: "",
          servicios: [],
          detallesAdicionales: "",
          cuit: "",
        });
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        const errorData = await respuesta.json().catch(() => ({}));
        console.error("Error del servidor:", errorData);
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
        <form onSubmit={enviarPedido} className="space-y-6">
          {" "}
          {/* Información de la empresa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombreEmpresa" className="text-sm font-semibold text-mva-azul font-montserrat">
                Nombre del Cliente *
              </Label>
              <Input
                id="nombreEmpresa"
                type="text"
                placeholder="Ingresa el nombre del cliente"
                value={formulario.nombreEmpresa}
                onChange={(e) => manejarCambio("nombreEmpresa", e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nombreContacto" className="text-sm font-semibold text-mva-azul font-montserrat">
                Nombre del Contacto *
              </Label>
              <Input
                id="nombreContacto"
                type="text"
                placeholder="Tu nombre completo"
                value={formulario.nombreContacto}
                onChange={(e) =>
                  manejarCambio("nombreContacto", e.target.value)
                }
                className="w-full"
              />
            </div>
          </div>
          {/* CUIT */}
          <div className="space-y-2">
            <Label htmlFor="cuit" className="text-sm font-semibold text-mva-azul font-montserrat">
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
          {/* Información de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telefonoContacto" className="text-sm font-semibold text-mva-azul font-montserrat">
                Teléfono *
              </Label>
              <Input
                id="telefonoContacto"
                type="tel"
                placeholder="+54 11 1234-5678"
                value={formulario.telefonoContacto}
                onChange={(e) =>
                  manejarCambio("telefonoContacto", e.target.value)
                }
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emailContacto" className="text-sm font-semibold text-mva-azul font-montserrat">
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
          {/* Ubicación con desplegable */}
          <div className="space-y-2">
            <Label htmlFor="ubicacion" className="text-sm font-semibold text-mva-azul font-montserrat">
              Ubicación del Servicio *
            </Label>
            <div className="relative">
              <select
                id="ubicacion"
                value={formulario.ubicacion}
                onChange={(e) => manejarCambio("ubicacion", e.target.value)}
                className="w-full appearance-none px-3 py-2 pr-9 border border-slate-300 rounded-md bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecciona una ubicación</option>
                {opcionesUbicacion.map((opcion) => (
                  <option key={opcion.value} value={opcion.value}>
                    {opcion.label}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {/* Tipo de servicio — multi-select custom */}
          <div className="relative space-y-2" ref={serviciosRef}>
            <Label className="text-sm font-semibold text-mva-azul font-montserrat">Tipo de Servicio *</Label>
            {/* trigger */}
            <button
              type="button"
              onClick={() => setServiciosAbierto((prev) => !prev)}
              className="w-full flex items-center justify-between px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
            >
              <span
                className={
                  formulario.servicios.length === 0 ? "text-[#0f172a]" : ""
                }
              >
                {formulario.servicios.length === 0
                  ? "Selecciona un servicio"
                  : formulario.servicios.length === 1
                    ? formulario.servicios[0]
                    : `${formulario.servicios.length} servicios seleccionados`}
              </span>
              <svg
                className={`w-4 h-4 text-slate-500 transition-transform ${serviciosAbierto ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* dropdown */}
            {serviciosAbierto && (
              <div className="absolute w-full top-full border border-slate-600 rounded-md bg-[#3a3a3a]/85 backdrop-blur-sm shadow-lg max-h-56 overflow-y-auto">
                {opcionesServicios.map((opcion) => {
                  const seleccionado = formulario.servicios.includes(
                    opcion.value,
                  );
                  return (
                    <div
                      key={opcion.value}
                      onClick={() => toggleServicio(opcion.value)}
                      className="flex items-center px-3 py-[7px] cursor-pointer hover:bg-[#5a5a5a] select-none"
                    >
                      <span className="w-5 shrink-0 text-white text-sm">
                        {seleccionado ? "✓" : ""}
                      </span>
                      <span className="text-sm text-white">{opcion.label}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* Detalles adicionales */}
          <div className="space-y-2">
            <Label
              htmlFor="detallesAdicionales"
              className="text-sm font-semibold text-mva-azul font-montserrat"
            >
              Detalles Adicionales
            </Label>
            <Textarea
              id="detallesAdicionales"
              placeholder="Cantidad de baños requerida, fecha requerida, horarios preferidos, condiciones especiales, etc."
              value={formulario.detallesAdicionales}
              onChange={(e) =>
                manejarCambio("detallesAdicionales", e.target.value)
              }
              className="min-h-[100px] resize-none"
            />
          </div>
          {/* Información importante */}
          <div className="bg-mva-azul/5 border border-mva-azul/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-mva-azul flex-shrink-0 mt-0.5" />
              <div className="text-sm text-mva-azul">
                <p className="font-semibold font-montserrat mb-1">Información del Servicio:</p>
                <ul className="space-y-1 list-disc list-inside font-poppins">
                  {/* <li>
                    El servicio incluye instalación, mantenimiento y retiro.
                  </li> */}
                  <li>
                    Nos contactaremos contigo en las próximas 24 horas hábiles.
                  </li>
                  {/* <li>
                    Los precios varían según ubicación y duración del servicio.
                  </li> */}
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
              className="flex-1 bg-mva-turquesa hover:bg-mva-turquesa-400 text-white font-montserrat font-semibold"
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
