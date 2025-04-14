"use client";
import clsx from "clsx";
import { Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Separator } from "../separator";

const FooterTop = () => {
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
    <div className="max-w-screen-xl mx-auto md-tablet:h-20 flex justify-between w-full flex-col md-tablet:flex-row items-center py-4 md-tablet:py-0">
      <div className="flex md-tablet:gap-10 gap-4 items-center md-tablet:pl-4 flex-col md-tablet:flex-row">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "relative text-lg font-medium transition-colors text-gray-300 duration-300 hover:text-[#00A6B2] after:scale-x-100"
            )}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex md-tablet:mt-0 mt-4 justify-center items-center md-tablet:w-[100px] w-20 relative h-[60px] md-tablet:h-20 border border-[#7a7a7a] rounded-sm md-tablet:border-0">
        <Separator
          orientation="vertical"
          className="absolute left-0 h-16 bg-[#7a7a7a] hidden md-tablet:block"
        />
        <Link href="mailto:YH2mM@example.com">
          <Mail className="text-lg font-medium text-gray-300 duration-300 hover:text-[#00A6B2] transition-colors after:scale-x-100" />
        </Link>
      </div>
    </div>
  );
};

export default FooterTop;
