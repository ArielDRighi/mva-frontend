import React, { useEffect, useState, useRef } from "react";

function useYearsSince(startDate: Date): number {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  const monthDiff = now.getMonth() - startDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && now.getDate() < startDate.getDate())
  ) {
    years--;
  }
  return years;
}

function AnimatedCounter({ target }: { target: number }) {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || target <= 0) return;

    let count = 0;
    const duration = 500;
    const steps = target;
    const interval = duration / steps;

    const timer = setInterval(() => {
      count++;
      setOffsetY(20);
      requestAnimationFrame(() => {
        setCurrent(count);
        requestAnimationFrame(() => {
          setOffsetY(0);
        });
      });
      if (count >= target) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span ref={ref} className="inline-block overflow-hidden relative">
      <span
        className="inline-block transition-transform duration-150 ease-out"
        style={{ transform: `translateY(${offsetY}%)` }}
      >
        {current}
      </span>
    </span>
  );
}

function AccordionItem({
  year,
  value,
  isExpanded,
  onClick,
}: {
  year: string;
  value: string;
  isExpanded: boolean;
  onClick: () => void;
}) {
  return (
    <div>
      <div
        onClick={onClick}
        className="flex justify-between items-center px-2 bg-[#00A6B2] h-10 rounded-r-sm cursor-pointer hover:bg-[#0095a1] transition-colors"
      >
        <p className="text-xs text-textBlack">{year}</p>
        <svg
          className={`w-5 h-5 text-textBlack transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-16" : "max-h-0"
        }`}
      >
        <div className="px-2 py-3 bg-gray-50">
          <p className="text-base text-textBlack font-medium">{value}</p>
        </div>
      </div>
    </div>
  );
}

const TinyBoxHome = ({ template }: { template: number }) => {
  const years = useYearsSince(new Date(2018, 5, 1));
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <>
      {template === 1 && (
        <>
          <h1 className="text-2xl font-semibold text-textBlack">
            Experiencia y Liderazgo
          </h1>
          <div className="flex flex-col gap-1">
            <p className="flex text-[54px] leading-[66px] font-light text-textBlack">
              <AnimatedCounter target={years} />+ Años
            </p>
            <p className="text-lg text-gray-600">
              de experiencia en la industria minera
            </p>
          </div>
        </>
      )}
      {template === 2 && (
        <>
          <div>
            <h1 className="text-xl font-medium text-textBlack">
              Compromiso con la Comunidad
            </h1>
            <p className="text-base text-gray-600 mt-3">
              Proyectos sociales y sostenibles en las regiones donde operamos.
            </p>
          </div>
          <div className="flex flex-col w-full gap-4">
            <AccordionItem
              year="2024"
              value="20+"
              isExpanded={expandedItem === "2024"}
              onClick={() =>
                setExpandedItem(expandedItem === "2024" ? null : "2024")
              }
            />
            <AccordionItem
              year="2023"
              value="15+"
              isExpanded={expandedItem === "2023"}
              onClick={() =>
                setExpandedItem(expandedItem === "2023" ? null : "2023")
              }
            />
          </div>
        </>
      )}
    </>
  );
};

export default TinyBoxHome;
