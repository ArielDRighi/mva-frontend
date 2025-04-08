import HomePage from "@/components/pages/HomePage";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://mva.com.ar"), // Agregar el dominio base
  title:
    "MVA Logística y Servicios | Soluciones en Baños Químicos y Servicios Integrales",
  description:
    "Empresa líder en alquiler, limpieza y desagote de baños químicos. Comprometidos con la calidad, seguridad y el medio ambiente.",
  keywords:
    "baños químicos, limpieza, desagote, alquiler, seguridad, mantenimiento",
  openGraph: {
    title: "MVA Logística y Servicios | Soluciones en Baños Químicos",
    description:
      "Empresa líder en alquiler, limpieza y desagote de baños químicos. Seguridad y compromiso con el medio ambiente.",
    url: "https://mva.com.ar/",
    siteName: "MVA Logística y Servicios",
    type: "website",
    images: [
      {
        url: "/images/MVA_LogoJPG.jpg", // Se resuelve con metadataBase
        width: 1200,
        height: 630,
        alt: "MVA Logística y Servicios | Soluciones en Baños Químicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MVA Logística y Servicios | Soluciones en Baños Químicos",
    description:
      "Empresa líder en alquiler, limpieza y desagote de baños químicos. Seguridad y compromiso con el medio ambiente.",
    images: ["/images/MVA_LogoJPG.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
