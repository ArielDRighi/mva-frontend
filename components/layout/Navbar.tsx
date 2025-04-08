"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ui/local/ThemeToggle";
import clsx from "clsx";

const Navbar = () => {
  const pathname = usePathname(); // Obtiene la ruta actual

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Sobre Nosotros" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
    { href: "/sostenibilidad", label: "Sostenibilidad" },
    { href: "/clientes", label: "Clientes" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 text-white gap-5">
      {/* Menú */}
      <div className="flex items-center gap-5">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "relative text-lg font-medium transition-colors duration-300",
              "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#00A6B2] after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100",
              pathname === href
                ? "text-[#00A6B2] after:scale-x-100"
                : "text-gray-300"
            )}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Botón de cambio de tema */}
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
