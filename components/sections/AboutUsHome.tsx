"use client";

import { motion } from "motion/react";
import ButtonHome from "../ui/local/ButtonHomeSinFlecha";
import TinyBoxHome from "../ui/local/TinyBoxHome";
import BigBoxHome from "../ui/local/BigBoxHome";
import { Card, CardContent } from "../ui/card";

const AboutUsHome = () => {
  return (
    <section className="">
      <div className="container px-6 flex max-w-7xl mx-auto flex-col items-center gap-20">
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm-tablet:text-[50px] sm-tablet:leading-[61px] tracking-wider font-bold text-textBlackTitle font-montserrat"
          >
            MVA SRL <br />
            EN UN VISTAZO
          </motion.h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {/* TinyBox 1 - Izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-1 flex justify-center md:order-2 lg:order-1"
          >
            <Card className="w-full border-none">
              <CardContent className="p-10 flex flex-col justify-between h-full">
                <TinyBoxHome template={1} />
              </CardContent>
            </Card>
          </motion.div>

          {/* BigBox 1 - Centro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 md:order-1"
          >
            <Card className="w-full overflow-hidden">
              <BigBoxHome template={1} />
            </Card>
          </motion.div>

          {/* BigBox 2 - Crecimiento Empresarial (Estirado) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-3 md:order-3"
          >
            <Card className="w-full overflow-hidden">
              <BigBoxHome template={2} />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
