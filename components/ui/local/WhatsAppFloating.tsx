"use client";

import React from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function WhatsAppFloating() {
  const phone = "5493875555680";
  const url = `https://wa.me/${phone}`;

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir chat de WhatsApp"
            className="fixed bottom-10 right-10 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full p-4 shadow-lg shadow-slate-300 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.92 11.92 0 0012 .5C6.15.5 1.3 5.35 1.3 11.2c0 1.97.52 3.9 1.5 5.6L.5 23.5l6.9-2.1A11.68 11.68 0 0012 22c5.85 0 10.7-4.85 10.7-10.8 0-2.9-1.06-5.62-3.18-7.72zM12 20.5c-1.03 0-2.04-.16-3-.48l-.22-.07-4.10 1.25 1.25-4.03-.07-.22A8.3 8.3 0 013.7 11.2 8.3 8.3 0 0112 3c4.6 0 8.3 3.7 8.3 8.2S16.6 19.5 12 19.5z" />
              <path d="M17.6 14.2c-.27-.14-1.6-.78-1.84-.87-.24-.09-.42-.14-.6.14s-.69.87-.84 1.05c-.15.19-.3.21-.57.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.86-.16-.28-.02-.43.12-.57.12-.12.27-.31.4-.47.13-.16.17-.28.27-.47.1-.19.04-.35-.02-.49-.07-.14-.6-1.43-.82-1.96-.22-.52-.44-.45-.6-.46-.15-.01-.33-.01-.5-.01-.17 0-.45.06-.69.28-.24.22-.92.92-.92 2.25 0 1.33.94 2.62 1.07 2.8.13.18 1.85 2.94 4.49 4.12 3.13 1.4 3.13 0 3.69-.03.56-.03 1.82-.74 2.07-1.46.25-.72.25-1.34.18-1.46-.07-.12-.24-.19-.51-.33z" />
            </svg>
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">Chatea con un representante</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
