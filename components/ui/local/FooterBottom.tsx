import Link from "next/link";
import React from "react";

const FooterBottom = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto md-tablet:h-20 flex items-center w-full px-4 flex-col md-tablet:flex-row gap-4 md-tablet:gap-0 py-4 md-tablet:py-0">
      <div className="flex-1">
        <p className="text-base text-gray-300">© 2025 MVA SRL</p>
      </div>

      <div className="md-tablet:absolute md-tablet:left-1/2 md-tablet:transform md-tablet:-translate-x-1/2 block">
        <p className="text-base text-[#346e7c] hover:text-[#00A6B2] transition-colors duration-300">
          Todos los derechos reservados.
        </p>
      </div>

      <div className="flex-1 text-right">
      </div>
    </div>
  );
};

export default FooterBottom;
