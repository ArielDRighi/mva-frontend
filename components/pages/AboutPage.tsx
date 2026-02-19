import AboutUsHome from "../sections/AboutUsHome";
import AboutUsSection from "../sections/AboutUsSection";
import WhatsAppFloating from "../ui/local/WhatsAppFloating";

const AboutPage = () => {
  return (
    <main className="font-montserrat pt-40 sm-tablet:pt-56 bg-[#F2F1EF]">
      <AboutUsHome />
      <AboutUsSection />
      <WhatsAppFloating />
    </main>
  );
};

export default AboutPage;
