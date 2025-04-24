"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

export default function NosotrosPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 p-4 mt-[150px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sección Hero */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#003F4F] mb-6 font-montserrat">
              Sobre MVA Logística y Servicios
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-poppins">
              Más de 6 años de experiencia ofreciendo soluciones de calidad en baños químicos y servicios integrales
              para la industria minera.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección Historia */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#003F4F] mb-4 font-montserrat">Nuestra Historia</h2>
              <p className="text-gray-700 mb-4 font-poppins">
                MVA SRL nació en 2018 como respuesta a la creciente demanda de servicios de calidad en el sector minero.
                Con un enfoque inicial en baños químicos, rápidamente expandimos nuestra oferta hacia soluciones
                logísticas integrales.
              </p>
              <p className="text-gray-700 mb-4 font-poppins">
                En estos años hemos construido una reputación basada en la confiabilidad, la calidad de servicio y el
                compromiso con nuestros clientes, siempre manteniendo altos estándares de seguridad y cuidado del medio
                ambiente.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A6B2]/30 to-[#003F4F]/30"></div>
              <div className="h-full w-full bg-[url('/images/camionetaEnSalar.jpg')] bg-cover bg-center"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección Misión, Visión y Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-[#003F4F] font-montserrat">Misión, Visión y Valores</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full shadow-lg border-t-4 border-[#00A6B2]">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-[#003F4F] mb-4 font-montserrat">Misión</h3>
                  <p className="text-gray-700 font-poppins">
                    Brindar soluciones logísticas y servicios de excelencia que superen las expectativas de nuestros
                    clientes, contribuyendo al desarrollo sostenible y al bienestar de las comunidades donde operamos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full shadow-lg border-t-4 border-[#00A6B2]">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-[#003F4F] mb-4 font-montserrat">Visión</h3>
                  <p className="text-gray-700 font-poppins">
                    Ser líderes reconocidos en el sector de servicios logísticos para la industria minera, destacándonos
                    por nuestra innovación, calidad y compromiso con la sostenibilidad.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Valores */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="h-full shadow-lg border-t-4 border-[#00A6B2]">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-[#003F4F] mb-4 font-montserrat">Valores</h3>
                  <ul className="text-gray-700 space-y-2 font-poppins">
                    <li>• Compromiso con la excelencia</li>
                    <li>• Integridad y transparencia</li>
                    <li>• Responsabilidad ambiental</li>
                    <li>• Innovación y mejora continua</li>
                    <li>• Trabajo en equipo</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección Equipo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#003F4F] font-montserrat">Nuestro Equipo</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-4 font-poppins">
              Contamos con profesionales capacitados y comprometidos con la excelencia en cada proyecto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: item * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-40 h-40 rounded-full bg-gray-200 mb-4 overflow-hidden">
                  <div className="h-full w-full bg-[url('/images/MVA_LogoPNG.png')] bg-cover bg-center"></div>
                </div>
                <h3 className="text-xl font-semibold text-[#003F4F] font-montserrat">Nombre Ejecutivo</h3>
                <p className="text-gray-600 font-poppins">Cargo en MVA</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
