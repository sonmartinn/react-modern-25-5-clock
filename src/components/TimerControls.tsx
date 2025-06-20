import React from "react";
import { Button } from "@/components/ui/button";
import { CirclePlay, Pause, RefreshCw } from "lucide-react";

interface TimerControlsProps {
  isRunning: boolean;
  handlePlayPause: () => void;
  handleReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  handlePlayPause,
  handleReset,
}) => {
  return (
    <div className="flex items-center justify-center space-x-6">
      <Button
        id="start_stop"
        onClick={handlePlayPause}
        size="lg"
        className="
          bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 
          hover:border-white/50 backdrop-blur-sm transition-all duration-300
          w-16 h-16 rounded-full p-0 shadow-lg hover:shadow-xl
          hover:scale-110 active:scale-95
        "
      >
        {isRunning ? (
          <Pause className="w-8 h-8" />
        ) : (
          <CirclePlay className="w-8 h-8" />
        )}
      </Button>

      <Button
        id="reset"
        onClick={handleReset}
        size="lg"
        className="
          bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 
          hover:border-white/50 backdrop-blur-sm transition-all duration-300
          w-16 h-16 rounded-full p-0 shadow-lg hover:shadow-xl
          hover:scale-110 active:scale-95
        "
      >
        <RefreshCw className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default TimerControls;
