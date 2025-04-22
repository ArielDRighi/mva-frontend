import SostenibilidadPage from "@/components/pages/SostenibilidadPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compromiso con la Sostenibilidad | MVA Logística y Servicios",
  description:
    "Nos preocupamos por la seguridad, el medio ambiente y la salud, implementando prácticas sostenibles en todas nuestras operaciones.",
  keywords: "sostenibilidad, medio ambiente, seguridad, salud, gestión integrada",
};

export default function Page() {
  return <SostenibilidadPage />;
}
