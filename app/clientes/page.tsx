import ClientesPage from "@/components/pages/ClientesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientes | MVA Logística y Servicios",
  description:
    "Conoce las empresas que confían en MVA para sus soluciones logísticas. Descubre nuestros casos de éxito y testimonios.",
  keywords: "clientes, testimonios, casos de éxito, empresas, logística, MVA",
};

export default function Page() {
  return <ClientesPage />;
}
