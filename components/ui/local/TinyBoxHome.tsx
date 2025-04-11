import React from "react";

const TinyBoxHome = ({ template }: { template: number }) => {
  return (
    <>
      {template === 1 && (
        <>
          <h1 className="text-2xl font-medium">Experiencia y Liderazgo</h1>
          <div className="flex flex-col gap-1">
            <p className="text-[54px] leading-[66px] font-light">6+ Años</p>
            <p className="text-lg text-gray-600">
              de experiencia en la industria minera
            </p>
          </div>
        </>
      )}
      {template === 2 && (
        <>
          <h1 className="text-3xl font-semibold">
            Compromiso con la Comunidad
          </h1>
          <p className="text-gray-600">
            Proyectos sociales y sostenibles en las regiones donde operamos.
          </p>
          <div className="flex flex-col">
            <div>
              <p>2024</p>
              <p>20+</p>
            </div>
            <div>
              <p>2023</p>
              <p>15+</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TinyBoxHome;
