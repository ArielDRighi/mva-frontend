import React from "react";
import FooterTop from "../ui/local/FooterTop";
import FooterBottom from "../ui/local/FooterBottom";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="bg-[#121928] flex flex-col items-center">
      <FooterTop />
      <Separator orientation="horizontal" className="bg-[#7a7a7a] md-tablet:max-w-7xl max-w-screen-sm"/>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
