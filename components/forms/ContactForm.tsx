"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Definir esquema de validación con Zod
const contactSchema = z.object({
  fullName: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre es demasiado largo"),
  email: z.string().email("Debe ser un correo válido"),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Datos enviados:", data);
    toast.success("Mensaje enviado correctamente");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto space-y-4 p-6 bg-card rounded-lg shadow-md"
    >
      <div>
        <Label htmlFor="fullName">Nombre y Apellido</Label>
        <Input id="fullName" {...register("fullName")} placeholder="Ej: Juan Pérez" />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Correo Electrónico</Label>
        <Input id="email" {...register("email")} placeholder="correo@ejemplo.com" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="subject">Asunto</Label>
        <Input id="subject" {...register("subject")} placeholder="Motivo del mensaje" />
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Mensaje</Label>
        <Textarea id="message" {...register("message")} placeholder="Escribe tu mensaje aquí..." />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
}
