"use client";

import { motion } from "motion/react";
import Image from "next/image";

const logos = [
  {
    src: "/images/logosClientes/ab_construcciones_s_r_l_logo.jpg",
    alt: "AB Construcciones",
  },
  {
    src: "/images/logosClientes/Aislaciones y servicios.png",
    alt: "Aislaciones y Servicios",
  },
  {
    src: "/images/logosClientes/Andina perforacioens.jpg",
    alt: "Andina Perforaciones",
  },
  { src: "/images/logosClientes/Arq top.png", alt: "Arq Top" },
  {
    src: "/images/logosClientes/conosur_drilling_s_a_cover.jpg",
    alt: "Conosur Drilling",
  },
  { src: "/images/logosClientes/Contreras.jpg", alt: "Contreras" },
  { src: "/images/logosClientes/DMA.png", alt: "DMA" },
  {
    src: "/images/logosClientes/Futura ingeniera.png",
    alt: "Futura Ingeniería",
  },
  {
    src: "/images/logosClientes/Gruas san antonio.png",
    alt: "Grúas San Antonio",
  },
  { src: "/images/logosClientes/Hidrotec.png", alt: "Hidrotec" },
  {
    src: "/images/logosClientes/imec-engineering.png",
    alt: "IMEC Engineering",
  },
  { src: "/images/logosClientes/Invlac.png", alt: "Invlac" },
  { src: "/images/logosClientes/Logo Gaana.png", alt: "Gaana" },
  { src: "/images/logosClientes/Logo Galeas .png", alt: "Galeas" },
  {
    src: "/images/logosClientes/Logo Major Drilling.png",
    alt: "Major Drilling",
  },
  { src: "/images/logosClientes/logo para bolso.png", alt: "MVA" },
  { src: "/images/logosClientes/Logo Petit Plast.jpg", alt: "Petit Plast" },
  { src: "/images/logosClientes/MAde logo.jpg", alt: "MAde" },
  { src: "/images/logosClientes/Mari mari.png", alt: "Mari Mari" },
  { src: "/images/logosClientes/Multipol 1.jpg", alt: "Multipol" },
  { src: "/images/logosClientes/Noa Lithium.jpg", alt: "Noa Lithium" },
  {
    src: "/images/logosClientes/Productos alumenticios Sofia.jpeg",
    alt: "Productos Alimenticios Sofía",
  },
  { src: "/images/logosClientes/Puertas.png", alt: "Puertas" },
  { src: "/images/logosClientes/Punamining.png", alt: "Punamining" },
];

const mid = Math.ceil(logos.length / 2);
const row1 = logos.slice(0, mid);
const row2 = logos.slice(mid);

function LogoTrack({
  items,
  reverse = false,
  duration = "35s",
}: {
  items: typeof logos;
  reverse?: boolean;
  duration?: string;
}) {
  // duplicate for seamless loop
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        {track.map((logo, i) => (
          <div
            key={i}
            className="mr-6 flex items-center justify-center bg-white rounded-xl border border-mva-blanco-400 shadow-sm px-5 py-3 h-20 w-40 shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={56}
              className="object-contain h-12 w-auto max-w-[120px] grayscale hover:grayscale-0 transition-all duration-300"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientesCarousel() {
  return (
    <section className="py-16 bg-mva-blanco-200 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <p className="text-xs sm-tablet:text-sm font-semibold tracking-[0.22em] uppercase text-mva-turquesa font-montserrat">
            Confían en nosotros
          </p>
          <h2 className="text-3xl sm-tablet:text-4xl font-bold text-textBlackTitle font-montserrat">
            Nuestros <span className="text-mva-azul">Clientes</span>
          </h2>
          <span className="block h-1 w-16 rounded-full bg-mva-turquesa" />
        </motion.div>
      </div>

      <div className="flex flex-col gap-5">
        <LogoTrack items={row1} reverse={false} duration="35s" />
        <LogoTrack items={row2} reverse={true} duration="40s" />
      </div>
    </section>
  );
}
