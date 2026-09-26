import HeroSection from "../shared/components/hero/HeroSection";
import ContactImg from "/assets/2.jpg";

export default function Contact() {
  return (
    <>
      <HeroSection
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClassName="hide"
      />
    </>
  );
}
