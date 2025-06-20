
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface SessionBreakControlsProps {
  breakLength: number;
  sessionLength: number;
  adjustBreakLength: (increment: boolean) => void;
  adjustSessionLength: (increment: boolean) => void;
  isRunning: boolean;
}

const SessionBreakControls: React.FC<SessionBreakControlsProps> = ({
  breakLength,
  sessionLength,
  adjustBreakLength,
  adjustSessionLength,
  isRunning
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-md">
      {/* Break Length Controls */}
      <div className="flex flex-col items-center space-y-4">
        <h3 id="break-label" className="text-xl font-semibold text-white/90">
          Break Length
        </h3>
        <div className="flex items-center space-x-4">
          <Button
            id="break-decrement"
            onClick={() => adjustBreakLength(false)}
            disabled={isRunning}
            className="
              bg-white/20 hover:bg-white/30 text-white border border-white/30 
              hover:border-white/50 backdrop-blur-sm transition-all duration-300
              w-12 h-12 rounded-full p-0 disabled:opacity-50 disabled:cursor-not-allowed
              hover:scale-110 active:scale-95
            "
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
          
          <div 
            id="break-length"
            className="text-2xl font-bold text-white bg-white/10 px-4 py-2 rounded-lg min-w-[60px] text-center"
          >
            {breakLength}
          </div>
          
          <Button
            id="break-increment"
            onClick={() => adjustBreakLength(true)}
            disabled={isRunning}
            className="
              bg-white/20 hover:bg-white/30 text-white border border-white/30 
              hover:border-white/50 backdrop-blur-sm transition-all duration-300
              w-12 h-12 rounded-full p-0 disabled:opacity-50 disabled:cursor-not-allowed
              hover:scale-110 active:scale-95
            "
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Session Length Controls */}
      <div className="flex flex-col items-center space-y-4">
        <h3 id="session-label" className="text-xl font-semibold text-white/90">
          Session Length
        </h3>
        <div className="flex items-center space-x-4">
          <Button
            id="session-decrement"
            onClick={() => adjustSessionLength(false)}
            disabled={isRunning}
            className="
              bg-white/20 hover:bg-white/30 text-white border border-white/30 
              hover:border-white/50 backdrop-blur-sm transition-all duration-300
              w-12 h-12 rounded-full p-0 disabled:opacity-50 disabled:cursor-not-allowed
              hover:scale-110 active:scale-95
            "
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
          
          <div 
            id="session-length"
            className="text-2xl font-bold text-white bg-white/10 px-4 py-2 rounded-lg min-w-[60px] text-center"
          >
            {sessionLength}
          </div>
          
          <Button
            id="session-increment"
            onClick={() => adjustSessionLength(true)}
            disabled={isRunning}
            className="
              bg-white/20 hover:bg-white/30 text-white border border-white/30 
              hover:border-white/50 backdrop-blur-sm transition-all duration-300
              w-12 h-12 rounded-full p-0 disabled:opacity-50 disabled:cursor-not-allowed
              hover:scale-110 active:scale-95
            "
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SessionBreakControls;
