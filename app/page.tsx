import WingmanAppSectionHomePage from "@/components/sections/home/wingman-app-section";
import AirRosterHomePage from "@/components/sections/home/airroster-app-section";
import { HomePageHeroSection } from "@/components/sections/home/hero";
import ScrollBasedText from "@/components/sections/home/scroll-based-text";
import BentoDemo from "@/components/sections/home/bento";
import GlobeDemo from "@/components/sections/home/globe";
// import Globe from "@/components/ui/globe";
import { MarqueeDemo } from "@/components/sections/home/testimonials";

export default function Home() {
  return (
    <div>
      
      {/* This is the "/" route. - Leonard*/}

      <HomePageHeroSection />    
      <ScrollBasedText />      
      <WingmanAppSectionHomePage />
      {/* <BentoDemo /> */}
      <AirRosterHomePage />     
      {/* <GlobeDemo /> */}
      <MarqueeDemo />      
    </div>
  );
}
