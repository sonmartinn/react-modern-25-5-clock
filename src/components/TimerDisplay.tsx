
import React from 'react';

interface TimerDisplayProps {
  label: string;
  timeLeft: number;
  formatTime: (seconds: number) => string;
  isSession: boolean;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ label, timeLeft, formatTime, isSession }) => {
  const isWarning = timeLeft <= 60;
  
  return (
    <div className="flex flex-col items-center space-y-4">
      <div 
        id="timer-label" 
        className="text-2xl md:text-3xl font-semibold text-white/90"
      >
        {label}
      </div>
      <div className="relative">
        <div className={`
          bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl
          ${isWarning ? 'animate-pulse' : ''}
        `}>
          <div 
            id="time-left"
            className={`
              text-6xl md:text-8xl font-mono font-bold text-center
              transition-colors duration-300
              ${isWarning ? 'text-red-400' : 'text-white'}
            `}
          >
            {formatTime(timeLeft)}
          </div>
        </div>
        {/* Glow effect */}
        <div className={`
          absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10
          transition-opacity duration-300
          ${isWarning ? 'opacity-100' : 'opacity-50'}
        `} />
      </div>
    </div>
  );
};

export default TimerDisplay;
