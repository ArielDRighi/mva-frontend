import AboutPage from "@/components/pages/AboutPage";
import ServiciosPage from "@/components/pages/ServiciosPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quienes somos | MVA Logística y Servicios",
  description:
    "Conoce nuestros servicios de alquiler de baños químicos, desagote, limpieza de oficinas, mantenimiento de campamentos y más.",
  keywords:
    "servicios, baños químicos, limpieza, seguridad, mantenimiento, desagote",
};

export default function Page() {
  return <AboutPage />;
}
