"use client";

import { motion } from "motion/react";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactoPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 p-4 py-16 mt-[150px]"
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#003F4F] mb-4 font-montserrat">Contáctanos</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-poppins">
            Estamos a tu disposición para responder cualquier consulta y ofrecerte la mejor solución para tu proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-[#003F4F] mb-6 font-montserrat">Envíanos un mensaje</h2>
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
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-[#00A6B2]/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-[#00A6B2]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#003F4F] font-montserrat">Ubicación</h3>
                  <p className="text-gray-700 font-poppins">San Juan, Argentina</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-[#00A6B2]/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-[#00A6B2]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#003F4F] font-montserrat">Teléfono</h3>
                  <p className="text-gray-700 font-poppins">+54 9 264 567 890</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-[#00A6B2]/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-[#00A6B2]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#003F4F] font-montserrat">Email</h3>
                  <p className="text-gray-700 font-poppins">contacto@mva.com.ar</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-[#00A6B2]/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-[#00A6B2]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#003F4F] font-montserrat">Horario de Atención</h3>
                  <p className="text-gray-700 font-poppins">24/7, todos los días del año</p>
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 h-96 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 font-poppins">Mapa de ubicación</p>
            {/* Aquí se podría agregar un mapa real con Google Maps o similar */}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
