"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Detecta la ruta actual

  // Deshabilitar scroll cuando el sidebar está abierto
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  // Detectar scroll solo en la página de inicio
  useEffect(() => {
    if (pathname !== "/") return; // Solo aplica en el home

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <motion.header
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor:
          pathname === "/"
            ? isScrolled
              ? "#31606E"
              : "rgba(0, 0, 0, 0)"
            : "#31606E", // Azul petróleo si no está en home
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? "shadow-lg backdrop-blur-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 max-w-7xl">
        {/* Logo con mejor visibilidad */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Image
              src="/images/MVA_LogoPNG.png"
              alt="Logo"
              width={150}
              height={60}
              // className={`transition-all ${
              //   isScrolled ? "brightness-100" : "brightness-200"
              // }`}
            />
          </Link>
        </motion.div>

        {/* Navbar - Solo visible en escritorio */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hidden md:block">
            <Navbar />
          </div>
        </motion.div>

        {/* Botón para abrir Sidebar en móvil/tablet */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="rounded-full p-2 transition-all hover:bg-[#00A6B2] hover:text-white"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Sidebar con fondo opaco */}
      <AnimatePresence>
        {isSidebarOpen && (
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
