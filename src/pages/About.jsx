import HeroSection from "../shared/components/hero/HeroSection";
import AboutImg from "/assets/night.jpg";

export default function About() {
  return (
    <>
      <HeroSection
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClassName="hide"
      />
    </>
  );
}
