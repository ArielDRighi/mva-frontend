"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Fondo opaco que cierra el sidebar al hacer clic fuera */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed right-0 top-0 h-full w-64 bg-background shadow-lg z-50"
      >
        {/* Botón de cerrar */}
        <div className="flex justify-end p-4">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </Button>
        </div>

        {/* Menú */}
        <nav className="mt-6 flex flex-col space-y-4 p-6">
          <Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="/about" className="hover:underline" onClick={() => setIsOpen(false)}>Sobre Nosotros</Link>
          <Link href="/services" className="hover:underline" onClick={() => setIsOpen(false)}>Servicios</Link>
          <Link href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contacto</Link>
        </nav>
      </motion.aside>
    </>
  );
};

export default Sidebar;

