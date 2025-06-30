import React from "react";

const TinyBoxHome = ({ template }: { template: number }) => {
  return (
    <>
      {template === 1 && (
        <>
          <h1 className="text-2xl font-medium text-textBlack">
            Experiencia y Liderazgo
          </h1>
          <div className="flex flex-col gap-1">
            <p className="text-[54px] leading-[66px] font-light text-textBlack">
              7+ Años
            </p>
            <p className="text-lg text-gray-600">
              de experiencia en la industria minera
            </p>
          </div>
        </>
      )}
      {template === 2 && (
        <>
          <div>
            <h1 className="text-xl font-medium text-textBlack">
              Compromiso con la Comunidad
            </h1>
            <p className="text-base text-gray-600 mt-3">
              Proyectos sociales y sostenibles en las regiones donde operamos.
            </p>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex justify-between items-center px-2 bg-[#00A6B2] h-10 rounded-r-sm">
              <p className="text-xs text-textBlack">2024</p>
              <p className="text-base text-textBlack">20+</p>
            </div>
            <div className="flex justify-between px-2 h-10 items-center">
              <p className="text-xs text-textBlack">2023</p>
              <p className="text-base text-textBlack">15+</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TinyBoxHome;
