"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import PortalClientes from "../sections/PortalClientes";

export default function ClientesPage() {
  // Datos de ejemplo para clientes
  const clientes = [
    { nombre: "Empresa Industrial SA", sector: "Manufactura", logo: "EI" },
    { nombre: "Distribuciones Nacionales", sector: "Distribución", logo: "DN" },
    {
      nombre: "Comercio Global",
      sector: "Importación/Exportación",
      logo: "CG",
    },
    { nombre: "TechLogic", sector: "Tecnología", logo: "TL" },
    { nombre: "Alimentos del Sur", sector: "Alimentación", logo: "AS" },
    { nombre: "Farmacéutica Argentina", sector: "Farmacéutico", logo: "FA" },
    { nombre: "Textiles Unidos", sector: "Textil", logo: "TU" },
    { nombre: "Construcciones Modernas", sector: "Construcción", logo: "CM" },
  ];

  // Testimonios de clientes
  const testimonios = [
    {
      texto:
        "MVA ha transformado nuestra cadena de suministro, mejorando significativamente nuestros tiempos de entrega y reduciendo costos operativos.",
      autor: "María González",
      cargo: "Directora de Operaciones",
      empresa: "Empresa Industrial SA",
    },
    {
      texto:
        "La flexibilidad y capacidad de adaptación de MVA a nuestras necesidades específicas ha sido clave para el crecimiento de nuestra empresa en los últimos años.",
      autor: "Carlos Rodríguez",
      cargo: "Gerente de Logística",
      empresa: "Distribuciones Nacionales",
    },
    {
      texto:
        "Desde que trabajamos con MVA, hemos podido expandir nuestro negocio internacionalmente con total confianza en que nuestros productos llegarán a tiempo y en perfectas condiciones.",
      autor: "Laura Méndez",
      cargo: "CEO",
      empresa: "Comercio Global",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white mt-[150px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto px-4 py-24 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold text-[#003F4F] text-center mb-6 font-montserrat">
          Nuestros Clientes
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl text-center mb-10 font-poppins">
          Empresas líderes en diversos sectores confían en MVA para optimizar
          sus operaciones logísticas. Conoce algunas de las organizaciones con
          las que trabajamos.
        </p>
      </motion.section>
      {/* Grid de clientes */}
      <motion.section
        className="w-full py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003F4F] text-center mb-16 font-montserrat">
            Empresas que Confían en Nosotros
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {clientes.map((cliente, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center h-48 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="w-20 h-20 bg-[#003F4F] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {cliente.logo}
                </div>
                <h3 className="text-lg font-semibold text-[#003F4F] mb-1 font-montserrat">
                  {cliente.nombre}
                </h3>
                <p className="text-sm text-gray-500 font-poppins">
                  {cliente.sector}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Sectores */}
      <motion.section
        className="w-full py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003F4F] text-center mb-16 font-montserrat">
            Sectores que Atendemos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nombre: "Industrial y Manufactura",
                desc: "Soluciones para optimizar la cadena de suministro industrial.",
              },
              {
                nombre: "Alimentación y Bebidas",
                desc: "Logística especializada para productos perecederos y no perecederos.",
              },
              {
                nombre: "Retail y E-commerce",
                desc: "Distribución eficiente para tiendas físicas y comercio electrónico.",
              },
              {
                nombre: "Farmacéutico",
                desc: "Transporte y almacenamiento con condiciones controladas.",
              },
              {
                nombre: "Importación/Exportación",
                desc: "Gestión integral de operaciones de comercio internacional.",
              },
              {
                nombre: "Construcción",
                desc: "Logística de materiales y equipos para proyectos constructivos.",
              },
            ].map((sector, i) => (
              <motion.div
                key={i}
                className="bg-[#003F4F]/5 p-6 rounded-xl hover:bg-[#003F4F]/10 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-[#003F4F] mb-4 font-montserrat">
                  {sector.nombre}
                </h3>
                <p className="text-gray-600 font-poppins">{sector.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Testimonios */}
      <motion.section
        className="w-full py-16 bg-[#003F4F]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16 font-montserrat">
            Lo que Dicen Nuestros Clientes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Quote className="h-10 w-10 text-[#00A6B2] mb-4" />
                <p className="text-gray-600 mb-6 italic font-poppins">
                  {testimonio.texto}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#003F4F]/10 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-[#003F4F]">
                      {testimonio.autor.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003F4F] font-montserrat">
                      {testimonio.autor}
                    </h4>
                    <p className="text-sm text-gray-500 font-poppins">
                      {testimonio.cargo}, {testimonio.empresa}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Casos de éxito */}
      <motion.section
        className="w-full py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003F4F] text-center mb-16 font-montserrat">
            Casos de Éxito
          </h2>

          <div className="space-y-12">
            {[
              {
                cliente: "Empresa Industrial SA",
                titulo: "Optimización de la Cadena de Suministro",
                desafio:
                  "La empresa enfrentaba retrasos significativos en sus entregas y costos elevados de almacenamiento.",
                solucion:
                  "Implementamos un sistema integrado de gestión logística y rediseñamos sus rutas de distribución.",
                resultados:
                  "Reducción del 30% en tiempos de entrega y ahorro del 25% en costos operativos.",
              },
              {
                cliente: "Distribuciones Nacionales",
                titulo: "Expansión de Cobertura Nacional",
                desafio:
                  "Necesitaban ampliar su cobertura a todo el país sin incrementar significativamente sus costos.",
                solucion:
                  "Desarrollamos un modelo híbrido de distribución con centros estratégicos regionales.",
                resultados:
                  "Aumento del 40% en la cobertura geográfica manteniendo la estructura de costos controlada.",
              },
            ].map((caso, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="w-20 h-20 bg-[#003F4F]/10 rounded-full flex items-center justify-center text-[#003F4F] font-bold text-xl mb-4">
                      {caso.cliente
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                    <h3 className="text-xl font-bold text-[#003F4F] mb-2 font-montserrat">
                      {caso.cliente}
                    </h3>
                    <p className="text-[#00A6B2] font-semibold font-poppins">
                      {caso.titulo}
                    </p>
                  </div>
                  <div className="md:w-2/3 md:pl-8 md:border-l border-gray-200">
                    <div className="mb-4">
                      <h4 className="font-semibold text-[#003F4F] mb-2 font-montserrat">
                        El Desafío
                      </h4>
                      <p className="text-gray-600 font-poppins">
                        {caso.desafio}
                      </p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-[#003F4F] mb-2 font-montserrat">
                        Nuestra Solución
                      </h4>
                      <p className="text-gray-600 font-poppins">
                        {caso.solucion}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#003F4F] mb-2 font-montserrat">
                        Resultados
                      </h4>
                      <p className="text-gray-600 font-poppins">
                        {caso.resultados}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>{" "}
      {/* CTA */}
      <motion.section
        className="w-full py-16 bg-gradient-to-br from-[#00A6B2]/10 to-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#003F4F] mb-6 font-montserrat">
            ¿Listo para optimizar tu logística?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-poppins">
            Únete a las empresas líderes que confían en MVA para transformar sus
            operaciones logísticas y mejorar su competitividad.
          </p>
          <Button
            className="bg-[#00A6B2] text-white hover:bg-[#00A6B2]/90 font-montserrat"
            size="lg"
          >
            Solicitar una consulta
          </Button>
        </div>
      </motion.section>
      {/* Portal de Clientes */}
      <PortalClientes />
    </motion.div>
  );
}
