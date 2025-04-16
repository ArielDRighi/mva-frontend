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
              ? "#31606E"
              : "rgba(0, 0, 0, 0)"
            : "#31606E",
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
        >
          <Link href="/">
            <Image
              src="/images/MVA_LogoPNG.png"
              alt="Logo"
              width={150}
              height={60}
              className="sm-tablet:w-[150px] w-[100px] object-contain"
            />
          </Link>
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
                <Menu className="!w-10 !h-10 text-gray-300 group-hover:text-[#00A6B2] transition-colors" />
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
