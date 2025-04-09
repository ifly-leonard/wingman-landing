import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface FrustrationSliderProps {
  onRatingChange?: (value: number) => void;
  className?: string;
  level?: number;
  readOnly?: boolean;
}

const FrustrationSlider = ({ onRatingChange, className, level, readOnly = false }: FrustrationSliderProps) => {
  const [frustrationLevel, setFrustrationLevel] = useState(level ? [level] : [3]);
  
  useEffect(() => {
    if (level !== undefined) {
      setFrustrationLevel([level]);
    }
  }, [level]);

  const handleValueChange = (value: number[]) => {
    if (readOnly) return;
    
    setFrustrationLevel(value);
    if (onRatingChange) {
      onRatingChange(value[0]);
    }
  };

  // Get emoji and color based on frustration level
  const getFrustrationEmoji = () => {
    const level = frustrationLevel[0];
    
    if (level <= 1) return { emoji: "😐", color: "text-yellow-500" };
    if (level <= 2) return { emoji: "😕", color: "text-yellow-600" };
    if (level <= 3) return { emoji: "😣", color: "text-orange-500" };
    if (level <= 4) return { emoji: "😠", color: "text-orange-600" };
    return { emoji: "😡", color: "text-red-600" }; 
  };

  const { emoji, color } = getFrustrationEmoji();

  return (
    <div className={cn("space-y-6 max-w-md mx-auto", className)}>
      <div className="text-center">
        <span className={cn("text-6xl transition-all duration-300", color)}>
          {emoji}
        </span>
        <p className="mt-2 text-gray-600 font-medium">
          {frustrationLevel[0] <= 1 && "Slightly annoyed"}
          {frustrationLevel[0] > 1 && frustrationLevel[0] <= 2 && "Noticeably frustrated"}
          {frustrationLevel[0] > 2 && frustrationLevel[0] <= 3 && "Very frustrated"}
          {frustrationLevel[0] > 3 && frustrationLevel[0] <= 4 && "Highly frustrated"}
          {frustrationLevel[0] > 4 && "Extremely frustrated"}
        </p>
      </div>
      
      {!readOnly && (
        <div className="relative px-2">
          <div className="absolute -top-2 left-0 text-gray-400 text-xs">Slightly upset</div>
          <div className="absolute -top-2 right-0 text-gray-400 text-xs">Deeply frustrated</div>
          <Slider
            defaultValue={[3]}
            max={5}
            step={0.1}
            value={frustrationLevel}
            onValueChange={handleValueChange}
            className="py-4"
          />
        </div>
      )}
      
      <div className="text-center text-sm text-gray-500">
        How frustrated are you with manual flight logging?
      </div>
    </div>
  );
};

export default FrustrationSlider;
