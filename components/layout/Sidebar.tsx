// components/Sidebar.tsx
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import clsx from "clsx";
import Link from "next/link";
import { X } from "lucide-react"; // Ícono de cerrar

type SidebarProps = {
  onClose: () => void;
};

const Sidebar = ({ onClose }: SidebarProps) => {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Sobre Nosotros" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
    { href: "/sostenibilidad", label: "Sostenibilidad" },
    { href: "/clientes", label: "Clientes" },
  ];

  return (
    <DrawerContent className="p-6 bg-[#121928]">
      <DrawerHeader className="flex items-center justify-between">
        <DrawerTitle className="text-3xl text-[#31606E]">MVA SRL</DrawerTitle>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </DrawerHeader>
      <nav className="space-y-4 px-4 flex flex-col">
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
      </nav>
    </DrawerContent>
  );
};

export default Sidebar;
