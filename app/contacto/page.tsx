import ContactoPage from "@/components/pages/ContactoPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos | MVA Logística y Servicios",
  description: "Comunícate con nosotros para solicitar información sobre nuestros servicios o cotizaciones.",
  keywords: "contacto, teléfono, email, formulario, MVA SRL",
};

export default function Page() {
  return <ContactoPage />;
}
