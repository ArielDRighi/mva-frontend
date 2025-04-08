import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";

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
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
