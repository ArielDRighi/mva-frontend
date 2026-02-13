"use client";

import { motion } from "motion/react";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactoPage() {
  return (
    <motion.div
      className="flex-1 flex flex-col bg-mva-blanco-100 p-4 py-16 mt-[150px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-mva-azul mb-4 font-montserrat">
            Contáctanos
          </h1>
          <p className="text-xl text-textBlackTitle max-w-3xl mx-auto font-poppins">
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
      </div>
    </motion.div>
  );
}
