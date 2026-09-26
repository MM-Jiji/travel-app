import HeroSection from "../shared/components/hero/HeroSection";
import AboutImg from "/assets/night.jpg";

export default function Service() {
  return (
    <>
      <HeroSection
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClassName="hide"
      />
    </>
  );
}
