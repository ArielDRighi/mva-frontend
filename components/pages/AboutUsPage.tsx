"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const valores = [
  {
    titulo: "Calidad",
    descripcion:
      "Ofrecemos servicios excepcionales, asegurando la satisfacción de nuestros clientes y el cumplimiento de estándares elevados.",
  },
  {
    titulo: "Responsabilidad",
    descripcion:
      "Actuamos con ética e integridad, priorizando la salud y seguridad de empleados y clientes.",
  },
  {
    titulo: "Sostenibilidad",
    descripcion:
      "Aplicamos prácticas que protegen el medio ambiente y minimizan el impacto ecológico.",
  },
  {
    titulo: "Innovación",
    descripcion:
      "Mejoramos continuamente nuestros procesos adoptando nuevas tecnologías y enfoques.",
  },
  {
    titulo: "Compromiso con la comunidad",
    descripcion:
      "Apoyamos el desarrollo de las comunidades locales a través de nuestras actividades.",
  },
  {
    titulo: "Trabajo en equipo",
    descripcion:
      "Fomentamos la colaboración y la comunicación abierta para lograr el éxito colectivo.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#003F4F] font-montserrat">
            Sobre Nosotros
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto font-poppins">
            En MVA SRL nos especializamos en brindar soluciones confiables de
            alquiler y limpieza de baños químicos para proyectos mineros,
            priorizando la calidad, la higiene y el respeto por el medio
            ambiente.
          </p>
        </motion.div>

        {/* Misión y Visión */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <Card className="shadow-md border-l-4 border-[#00A6B2]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-[#003F4F] mb-2 font-montserrat">
                Nuestra Misión
              </h2>
              <p className="text-gray-700 font-poppins text-sm leading-relaxed">
                Brindar servicios de calidad que aumenten la satisfacción de
                nuestros clientes a través de respuestas ágiles, garantizando
                altos estándares de higiene y seguridad mientras promovemos el
                respeto por el medio ambiente y el desarrollo sustentable.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md border-l-4 border-[#00A6B2]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-[#003F4F] mb-2 font-montserrat">
                Nuestra Visión
              </h2>
              <p className="text-gray-700 font-poppins text-sm leading-relaxed">
                Ser el principal proveedor en la provincia de Salta en servicios
                de limpieza de baños químicos y actividades afines, buscando
                expandir nuestro alcance y adaptarnos a los nuevos desafíos del
                mercado.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Valores */}
        <section>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-center text-[#003F4F] font-montserrat"
          >
            Nuestros Valores
          </motion.h3>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((item, i) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border border-gray-200 shadow-sm hover:shadow-lg transition">
                  <CardContent className="p-5">
                    <h4 className="text-lg font-semibold text-[#003F4F] mb-2 font-montserrat">
                      {item.titulo}
                    </h4>
                    <p className="text-sm text-gray-700 font-poppins leading-relaxed">
                      {item.descripcion}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Política de Gestión Integrada */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F5FBFB] rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-[#003F4F] mb-4 font-montserrat">
            Política de Gestión Integrada
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-poppins text-sm leading-relaxed">
            <li>
              Aumentar la satisfacción del cliente con respuestas rápidas.
            </li>
            <li>Mejorar continuamente el sistema de gestión integrado.</li>
            <li>Prevenir la contaminación y proteger el medio ambiente.</li>
            <li>Proporcionar condiciones laborales seguras y saludables.</li>
            <li>Fomentar la participación activa del equipo.</li>
            <li>Cumplir con toda la normativa y legislación vigente.</li>
          </ul>
        </motion.section>

        {/* Experiencia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#003F4F] font-montserrat mb-4">
              Nuestra Trayectoria
            </h3>
            <p className="text-gray-700 font-poppins text-base leading-relaxed">
              Con más de 6 años de experiencia, MVA SRL ha demostrado compromiso
              y adaptabilidad, acompañando los proyectos más importantes de la
              Puna. Nuestra confiabilidad y capacidad de respuesta nos
              posicionan como líderes en el rubro.
            </p>
            <div className="mt-6 inline-block bg-[#003F4F] text-white px-4 py-2 rounded-xl text-sm font-semibold font-poppins">
              Certificación ISO 9001 en proceso
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}