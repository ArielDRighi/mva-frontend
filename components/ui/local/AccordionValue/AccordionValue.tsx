import { ChevronDown } from "lucide-react";

export function AccordionValue({
  title,
  description,
  isExpanded,
  onClick,
}: {
  title: string;
  description: string;
  isExpanded: boolean;
  onClick: () => void;
}) {
  return (
    <li className="flex flex-col items-start gap-0">
      <div
        onClick={onClick}
        className="flex items-center gap-2 w-full cursor-pointer py-2 px-2 rounded hover:bg-gray-100 transition-colors"
      >
        <span className="text-mva-turquesa font-bold">•</span>
        <strong className="text-gray-700 flex-1">{title}</strong>
        <ChevronDown
          className={`w-5 h-5 text-mva-turquesa transition-transform duration-300 flex-shrink-0 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 w-full pr-8 ${
          isExpanded ? "max-h-44" : "max-h-0"
        }`}
      >
        <p
          className="text-gray-700 font-poppins pl-6 pb-2 w-full hyphens-auto"
          lang="es"
        >
          {description}
        </p>
        {title === "Calidad" && (
          <a
            href="/documents/ISO-Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] w-full text-right text-mva-turquesa hover:underline pl-6 pb-2 inline-block font-poppins"
          >
            Ver Certificado ISO
          </a>
        )}
      </div>
    </li>
  );
}
