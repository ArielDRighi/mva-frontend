"use client";

import { motion } from "motion/react";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import WhatsAppFloating from "../ui/local/WhatsAppFloating";
import Link from "next/link";

export default function ContactoPage() {
  return (
    <>
      <motion.div
        className="flex-1 flex flex-col bg-mva-blanco-100 p-4 py-16 mt-[150px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start mb-12"
          >
            <p className="text-xs sm-tablet:text-sm font-semibold tracking-[0.22em] uppercase text-mva-turquesa font-montserrat mb-3">
              Estamos para ayudarte
            </p>
            <h1 className="text-4xl sm-tablet:text-5xl font-bold text-mva-azul font-montserrat mb-3">
              Contáctanos
            </h1>
            <span className="block h-1 w-16 rounded-full bg-mva-turquesa mb-5" />
            <p className="text-lg text-textBlackTitle max-w-2xl font-poppins leading-relaxed">
              Estamos a tu disposición para responder cualquier consulta y
              ofrecerte la mejor solución para tu proyecto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-mva-blanco-100 p-8 rounded-lg shadow-lg border-l-4 border-mva-turquesa"
            >
              <h2 className="text-2xl font-semibold text-mva-azul mb-6 font-montserrat">
                Envíanos un mensaje
              </h2>
              <ContactForm />
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-6"
            >
              {/* Ubicación */}
              <Link
                href="https://www.google.com/maps/place/MVA+SRL/@-24.7992256,-65.4734914,17z/data=!3m1!4b1!4m6!3m5!1s0x941bc3bfdbf1d177:0x78d56115ceea8d1f!8m2!3d-24.7992256!4d-65.4734914!16s%2Fg%2F11nnqgvyyj?hl=es&entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-mva-blanco-100 border-l-4 border-mva-turquesa">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-mva-turquesa/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-mva-turquesa" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mva-azul font-montserrat">
                        Ubicación
                      </h3>
                      <p className="text-textBlackTitle font-poppins">
                        Salta Capital, Argentina
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Teléfono */}
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-mva-blanco-100 border-l-4 border-mva-celeste">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-mva-celeste/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-mva-celeste" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mva-azul font-montserrat">
                      Teléfono
                    </h3>
                    <p className="text-textBlackTitle font-poppins">
                      387-5555680
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-mva-blanco-100 border-l-4 border-mva-azul">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-mva-azul/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-mva-azul" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mva-azul font-montserrat">
                      Email
                    </h3>
                    <p className="text-textBlackTitle font-poppins">
                      info@mvasrl.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Horario */}
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-mva-blanco-100 border-l-4 border-mva-turquesa-400">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-mva-turquesa-200/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-mva-turquesa-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mva-azul font-montserrat">
                      Horario de Atención
                    </h3>
                    <p className="text-textBlackTitle font-poppins">
                      24/7, todos los días del año
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="block h-1 w-8 rounded-full bg-mva-turquesa" />
              <h2 className="text-xl font-semibold text-mva-azul font-montserrat">
                Cómo llegar
              </h2>
            </div>
            <div className="w-full rounded-xl overflow-hidden shadow-lg border border-mva-blanco-400">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.3508817816605!2d-65.47341115964188!3d-24.799268315000397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3bfdbf1d177%3A0x78d56115ceea8d1f!2sMVA%20SRL!5e0!3m2!1ses!2sar!4v1772708175518!5m2!1ses!2sar"
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <WhatsAppFloating />
    </>
  );
}
