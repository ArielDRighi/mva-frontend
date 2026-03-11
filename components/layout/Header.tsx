"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Boureau } from "@/public/images/Boureau";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <motion.header
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor:
          pathname === "/"
            ? isScrolled
              ? "#15297C"
              : "rgba(0, 0, 0, 0)"
            : "#15297C",
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? "shadow-lg backdrop-blur-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-8"
        >
          <Link href="/">
            <Image
              src="/images/MVA_White_LogoPNG.png"
              alt="Logo"
              width={150}
              height={60}
              className="sm-tablet:w-[150px] w-[100px] object-contain"
            />
          </Link>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm">
            <Image
              src="/images/industry-iso-90012015-seeklogo.png"
              alt="ISO 9001:2015"
              width={150}
              height={60}
              className="w-[32px] object-contain grayscale brightness-150 opacity-70"
            />
            <div className="w-px h-7 bg-white/20 mx-1" />
            <div className="flex flex-col leading-none gap-[3px]">
              <span className="flex justify-between text-white/40 font-semibold text-[8px] uppercase tracking-widest">
                {"CERTIFIED".split("").map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </span>
              <span
                className="text-white font-bold text-[13px]"
                style={{ textAlign: "justify", textAlignLast: "justify" }}
              >
                ISO 9001
              </span>
              <span
                className="text-white/45 font-light text-[8px]"
                style={{ textAlign: "justify", textAlignLast: "justify" }}
              >
                C° AR-0242016
              </span>
            </div>
            <Boureau className="h-11 w-auto text-white opacity-60 ml-1" />
          </div>
        </motion.div>

        {/* Navbar desktop */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hidden md-tablet:block">
            <Navbar />
          </div>
        </motion.div>

        {/* Drawer mobile */}
        <div className="md-tablet:hidden relative">
          <Drawer open={open} onOpenChange={setOpen} direction="right">
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                className="w-20 h-20 group transition-all hover:bg-transparent"
              >
                <Menu className="!w-10 !h-10 text-gray-300 group-hover:text-mva-turquesa transition-colors" />
              </Button>
            </DrawerTrigger>
            <Sidebar onClose={() => setOpen(false)} />
          </Drawer>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
