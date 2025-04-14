"use client";

import { motion } from "motion/react";
import ButtonHome from "../ui/local/ButtonHomeSinFlecha";
import TinyBoxHome from "../ui/local/TinyBoxHome";
import BigBoxHome from "../ui/local/BigBoxHome";
import { Card, CardContent } from "../ui/card";

const AboutUsHome = () => {
  return (
    <section className="bg-[#F2F1EF] ">
      <div className="container px-6 flex max-w-7xl mx-auto flex-col items-center gap-10">
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-[50px] leading-[61px] tracking-wider font-bold text-textBlackTitle font-montserrat"
          >
            MVA SRL <br /> EN UN VISTAZO
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <ButtonHome text={"Conocenos"} className=" px-10 h-14" />
          </motion.div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {/* TinyBox 1 - Izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-1 flex justify-center md:order-2 lg:order-1"
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

          {/* TinyBox 2 - Derecha */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1 md:col-span-1 flex justify-center md:order-3 lg:order-4"
          >
            <Card className="w-full border-none">
              <CardContent className="p-10 flex flex-col justify-between h-full">
                <TinyBoxHome template={2} />
              </CardContent>
            </Card>
          </motion.div>

          {/* BigBox 2 - Debajo de BigBox 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="col-span-2 md:order-4 lg:order-3"
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
