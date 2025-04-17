import NosotrosPage from "@/components/pages/NosotrosPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | MVA Logística y Servicios",
  description:
    "Más de 6 años de experiencia ofreciendo soluciones de calidad en baños químicos y servicios integrales en la industria minera.",
  keywords: "historia, experiencia, valores, misión, visión, MVA SRL",
};

export default function Page() {
  return <NosotrosPage />;
}
