import React from "react";
import FooterTop from "../ui/local/FooterTop";
import FooterBottom from "../ui/local/FooterBottom";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="bg-mva-azul-500 flex flex-col items-center border-t border-[#7a7a7a]">
      <FooterTop />
      <Separator
        orientation="horizontal"
        className="md-tablet:max-w-7xl max-w-screen-sm bg-mva-blanco-200/20"
      />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
