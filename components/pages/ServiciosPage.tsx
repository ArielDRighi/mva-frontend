"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import ButtonHome from "../ui/local/ButtonHomeSinFlecha";

const servicios = [
  {
    title: "Limpieza Corporativa",
    description:
      "Mantenemos sus espacios de trabajo impecables y seguros. Ofrecemos servicios diarios o programados para oficinas, edificios y espacios comunes, con personal capacitado, supervisión constante y productos de primera calidad.",
    features: [
      "Disponibles 24/7",
      "Mantenimiento programado",
      "Cumplimiento de normas sanitarias",
      "Opciones para todo tipo de proyectos",
    ],
    image: "/images/camionetaEnSalar.jpg",
  },
  {
    title: "Limpieza final de obra",
    description:
      "Garantizamos la entrega perfecta de su proyecto. Nos ocupamos del retiro de residuos, polvo y materiales, dejando cada ambiente listo para ser habitado o presentado, con equipamiento y protocolos adecuados a cada superficie.",
    features: [
      "Equipos de última generación",
      "Capacidad de 10m³ - 30m³",
      "Rápida respuesta",
      "Manejo adecuado de residuos",
    ],
    image: "/images/Inaguracion.jpg",
  },
  {
    title: "Mantenimiento de áreas verdes",
    description:
      "Cuidamos los entornos exteriores de su empresa o predio con cortes de pasto y poda. Nuestro objetivo es conservar espacios prolijos y seguros, que reflejen la imagen profesional de su organización.",
    features: [
      "Personal especializado",
      "Productos ecológicos",
      "Horarios flexibles",
      "Planes personalizados",
    ],
    image: "/images/camionetas.jpg",
  },
  {
    title: "Alquiler de baños químicos",
    description:
      "Brindamos el servicio completo: instalación, limpieza periódica, reposición de insumos y mantenimiento, con logística propia en toda la provincia.",
    features: [
      "Logística completa",
      "Soluciones habitacionales",
      "Mantenimiento preventivo",
      "Adaptación a necesidades específicas",
    ],
    image: "/images/camionetaEnSalar.jpg",
  },
  {
    title: "Desagote",
    description:
      "Desagotes de cámaras sépticas, biodigestores y pozos ciegos. Actuamos con rapidez, seguridad y cumplimiento de las normativas vigentes.",
    features: [
      "Logística completa",
      "Soluciones habitacionales",
      "Mantenimiento preventivo",
      "Adaptación a necesidades específicas",
    ],
    image: "/images/camionetaEnSalar.jpg",
  },
  {
    title: "Gestión de residuos",
    description:
      "Ofrecemos soluciones para garantizar la gestión integral de residuos, desde su generación hasta el transporte a sitios de disposición final, de manera segura, eficiente y ambientalmente responsable.",
    features: [
      "Logística completa",
      "Soluciones habitacionales",
      "Mantenimiento preventivo",
      "Adaptación a necesidades específicas",
    ],
    image: "/images/camionetaEnSalar.jpg",
  },
  {
    title: "Transporte de AVU",
    description:
      "Transporte de aceite vegetal usado (AVU). Trabajamos en conjunto con las empresas de cátering realizando el traslado seguro del aceite de cocina que se descarta después de su uso.",
    features: [
      "Logística completa",
      "Soluciones habitacionales",
      "Mantenimiento preventivo",
      "Adaptación a necesidades específicas",
    ],
    image: "/images/camionetaEnSalar.jpg",
  },
];

export default function ServiciosPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 mt-[150px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero de Servicios */}
      <section className="py-20 bg-gradient-to-b from-[#31606E] to-[#003F4F] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-poppins">
              Ofrecemos soluciones integrales de alta calidad para proyectos
              mineros e industriales, cumpliendo con los más altos estándares de
              seguridad y eficiencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Listado de Servicios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-16">
            {servicios.map((servicio, index) => (
              <motion.div
                key={servicio.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`order-2 ${
                    index % 2 === 1 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="rounded-lg overflow-hidden shadow-lg h-80 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00A6B2]/30 to-[#003F4F]/30"></div>
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${servicio.image}')` }}
                    ></div>
                  </div>
                </div>

                <div
                  className={`order-1 ${
                    index % 2 === 1 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h2 className="text-3xl font-bold text-[#003F4F] mb-4 font-montserrat">
                    {servicio.title}
                  </h2>
                  <p className="text-gray-700 mb-6 font-poppins">
                    {servicio.description}
                  </p>
                  <ul className="space-y-2">
                    {servicio.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-700 font-poppins"
                      >
                        <CheckCircle className="mr-2 h-5 w-5 text-[#00A6B2]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col mb-2 items-center bg-white rounded-lg shadow-xl p-8 text-center"
          >
            <span className="uppercase text-2xl font-bold text-[#003F4F] font-montserrat">
              Estamos
            </span>
            <span className="relative pb-2 uppercase text-5xl text-gray-700 font-bold max-w-3xl font-poppins before:content-[''] before:w-2/3 before:h-0.5 before:bg-red-500 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 mb-3">
              Certificados
            </span>
            <Image
              src="/images/certificado-iso-9001.png"
              alt="Logo certificado ISO"
              width={300}
              height={300}
              quality={100}
              className="w-20 h-20"
            />
            <a
              href="/documents/ISO-Certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex flex-col items-center rounded-md font-semibold transition-colors duration-300"
            >
              <ButtonHome
                text="Ver Certificado"
                className="max-w-[215px] w-full h-11 !text-[12px]"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-[#003F4F] mb-4 font-montserrat">
              ¿Necesitas un servicio personalizado?
            </h2>
            <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto font-poppins">
              Contáctanos para discutir tus necesidades específicas y diseñar
              una solución a medida para tu proyecto o empresa.
            </p>
            <a
              href="/contacto"
              className="inline-block px-8 py-3 bg-[#00A6B2] text-white rounded-md font-semibold hover:bg-[#017f88] transition-colors duration-300"
            >
              Solicitar información
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
