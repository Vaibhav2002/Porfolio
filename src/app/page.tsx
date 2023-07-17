import { AboutSection, HeroSection } from "@/app/components";

export default function Home() {
  return (
    <div className='flex flex-col gap-8'>
      <HeroSection/>
      <AboutSection/>
    </div>
  );
}
