import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import WingmanFrustrationSlider from "@/components/sections/products/wingman/wm-frustration-slider"
import { Slider } from "@/components/ui/slider";


interface WingmanEffortCalculatorProps {
  className?: string;
}

const WingmanEffortCalculator: React.FC<WingmanEffortCalculatorProps> = ({ className }) => {
  const [hoursPerMonth, setHoursPerMonth] = useState(50);
  const [showWingmanTime, setShowWingmanTime] = useState(false);
  const [frustrationLevel, setFrustrationLevel] = useState(3);
  
  useEffect(() => {
    // Calculate frustration level based on flying hours
    const newLevel = Math.min(5, (hoursPerMonth / 100) * 5);
    setFrustrationLevel(newLevel);
  }, [hoursPerMonth]);
  
  const calculateTimeSaved = () => {
    const flightsPerYear = hoursPerMonth * 12;
    const manualTimePerEntry = 15; // minutes per entry for manual logging
    const wingmanTimePerEntry = 0.1; // minutes per entry with Wingman
    
    const manualHoursPerYear = (flightsPerYear * manualTimePerEntry) / 60;
    const wingmanHoursPerYear = (flightsPerYear * wingmanTimePerEntry) / 60;
    
    return {
      manual: manualHoursPerYear.toFixed(1),
      wingman: wingmanHoursPerYear.toFixed(1),
      saved: (manualHoursPerYear - wingmanHoursPerYear).toFixed(1)
    };
  };
  
  const timeSaved = calculateTimeSaved();

  return (
    <div className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">          
          Flight Log Time Calculator
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          See how much time manual logging is costing you
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="hours-per-month">
              How many hours do you fly per month?
            </label>
            <Slider
              min={10}
              max={100}
              value={[hoursPerMonth]}
              onValueChange={(value) => setHoursPerMonth(value[0])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>10 hours</span>
              <span>{hoursPerMonth} hours</span>
              <span>100 hours</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <WingmanFrustrationSlider level={frustrationLevel} readOnly className="mb-4" />
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <span className="text-gray-700 font-medium">Manual Logging</span>
            <Switch
              checked={showWingmanTime}
              onCheckedChange={setShowWingmanTime}
            />
            <span className="text-wingman-blue font-medium">Wingman Logbook</span>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold">
                {showWingmanTime ? "With Wingman Logbook" : "With Manual Logging"}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-4 rounded-lg bg-blue-50">
                <p className="text-sm text-gray-600">Time Spent Per Year</p>
                <p className="text-3xl font-bold text-wingman-blue">
                  {showWingmanTime ? timeSaved.wingman : timeSaved.manual} hours
                </p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-blue-50">
                <p className="text-sm text-gray-600">That&apos;s Approximately</p>
                <p className="text-3xl font-bold text-wingman-blue">
                  {showWingmanTime 
                    ? `${(parseFloat(timeSaved.wingman) / 24).toFixed(1)} days` 
                    : `${(parseFloat(timeSaved.manual) / 24).toFixed(1)} days`
                  }
                </p>
              </div>
            </div>
            
            {showWingmanTime && (
              <div className="text-center mt-6 p-4 rounded-lg bg-green-50">
                <p className="text-sm text-gray-600">Time You&apos;ll Save With Wingman</p>
                <p className="text-3xl font-bold text-green-600">{timeSaved.saved} hours per year</p>
                <p className="text-sm text-gray-600 mt-1">
                  That&apos;s {(parseFloat(timeSaved.saved) / hoursPerMonth).toFixed(1)} months worth of flying time!
                </p>
              </div>
            )}
          </div>
          
          {!showWingmanTime && (
            <div className="text-center text-gray-600">
              <p>Toggle the switch above to see how Wingman can save you time!</p>
            </div>
          )}
          
          {showWingmanTime && (
            <div className="text-center">
              <button className="p-3 text-center rounded-md">
                Start Saving Time Today <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WingmanEffortCalculator;