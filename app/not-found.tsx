import NotFoundPage from "@/components/pages/NotFoundPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada | MVA Logística y Servicios",
  description: "Lo sentimos, la página que estás buscando no existe o ha sido movida.",
};

export default function NotFound() {
  return <NotFoundPage />;
}
