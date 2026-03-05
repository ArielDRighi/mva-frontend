"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import TinyBoxHome from "../ui/local/TinyBoxHome";
import BigBoxHome from "../ui/local/BigBoxHome";
import { Card, CardContent } from "../ui/card";

function useCountUp(end: number, duration = 2200, trigger: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(end);
    };

    requestAnimationFrame(step);
  }, [trigger, end, duration]);

  return value;
}

interface StatItem {
  end: number;
  prefix: string;
  suffix: string;
  label: string;
  duration?: number;
}

const STATS: StatItem[] = [
  {
    end: 8,
    prefix: "+",
    suffix: "",
    label: "años en la industria minera",
    duration: 1400,
  },
  {
    end: 5500000,
    prefix: "+",
    suffix: "",
    label: "km recorridos",
    duration: 2400,
  },
  {
    end: 15000,
    prefix: "+",
    suffix: "",
    label: "servicios realizados",
    duration: 2000,
  },
];

function formatNumber(n: number) {
  return n.toLocaleString("es-AR");
}

function StatCard({
  item,
  trigger,
  index,
}: {
  item: StatItem;
  trigger: boolean;
  index: number;
}) {
  const count = useCountUp(item.end, item.duration, trigger);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.15 * index }}
      className="flex flex-col items-start gap-2 bg-white border border-mva-blanco-400 rounded-2xl px-7 py-6 shadow-sm"
    >
      <span className="text-4xl sm-tablet:text-5xl font-extrabold font-montserrat text-mva-azul leading-none tracking-tight">
        {item.prefix}
        {formatNumber(count)}
        {item.suffix}
      </span>
      <span className="text-sm sm-tablet:text-base font-semibold text-mva-turquesa uppercase tracking-widest">
        {item.label}
      </span>
      <span className="mt-1 block h-[3px] w-10 rounded-full bg-mva-turquesa" />
    </motion.div>
  );
}

const AboutUsHome = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section className="">
      <div className="container px-6 flex max-w-7xl mx-auto flex-col items-center gap-20">
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="text-xs sm-tablet:text-sm font-semibold tracking-[0.22em] uppercase text-mva-turquesa font-montserrat"
            >
              Quiénes somos
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm-tablet:text-[50px] sm-tablet:leading-[61px] tracking-wider font-bold text-textBlackTitle font-montserrat"
            >
              MVA SRL{" "}
              <span className="relative inline-block">
                <span className="relative z-10">EN UN</span>
              </span>{" "}
              <br className="hidden sm-tablet:block" />
              <span className="text-mva-azul">VISTAZO</span>
            </motion.h2>

            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block h-1 w-20 rounded-full bg-mva-turquesa origin-left"
            />
          </div>

          <div
            ref={statsRef}
            className="grid grid-cols-1 sm-tablet:grid-cols-3 gap-4"
          >
            {STATS.map((item, i) => (
              <StatCard key={i} item={item} trigger={isInView} index={i} />
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {/* BigBox 2 - Crecimiento Empresarial */}
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
