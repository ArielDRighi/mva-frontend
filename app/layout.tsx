import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MVA Logística y Servicios",
  description:
    "Ofrecemos servicios de calidad que aumentan la satisfacción del cliente con respuestas ágiles, altos estándares de higiene y seguridad, fomentando la sustentabilidad y el respeto ambiental.",
  icons: {
    icon: [
      {
        url: "/images/MVA_LogoPNG.png",
        href: "/images/MVA_LogoPNG.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
