import HeroSection from "../shared/components/hero/HeroSection";
import heroImg from "/assets/12.jpg";
export default function Home() {
  return (
    <>
      <HeroSection
        cName="hero"
        heroImg={heroImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnText="Travel Plan"
        url="/"
        btnClassName="show"
      />
    </>
  );
}
