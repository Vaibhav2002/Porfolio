import ConnectSection from "@/app/ConnectSection";
import WorkSection from "@/app/WorkSection";
import HeroSection from "@/app/HeroSection";
import AboutSection from "@/app/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ConnectSection />
    </div>
  );
}
