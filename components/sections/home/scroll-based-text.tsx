import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function ScrollBasedText() {
  return (
    <div className="mt-12 p-4 opacity-10 transform rotate-[-0.9deg]">
        <VelocityScroll>
          Made in 🇮🇳, for the 🌏
        </VelocityScroll>        
    </div>
  );
}