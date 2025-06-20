import React from "react";
import { FaGithub } from "react-icons/fa";

import { useTimer } from "@/hooks/useTimer";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import SessionBreakControls from "./SessionBreakControls";

const PomodoroTimer: React.FC = () => {
  const {
    breakLength,
    sessionLength,
    timeLeft,
    isRunning,
    isSession,
    label,
    formatTime,
    handlePlayPause,
    handleReset,
    adjustBreakLength,
    adjustSessionLength,
  } = useTimer();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              25 + 5 Clock
            </h1>
          </div>

          {/* Session/Break Controls */}
          <div className="flex justify-center">
            <SessionBreakControls
              breakLength={breakLength}
              sessionLength={sessionLength}
              adjustBreakLength={adjustBreakLength}
              adjustSessionLength={adjustSessionLength}
              isRunning={isRunning}
            />
          </div>

          {/* Timer Display */}
          <TimerDisplay
            label={label}
            timeLeft={timeLeft}
            formatTime={formatTime}
            isSession={isSession}
          />

          {/* Timer Controls */}
          <TimerControls
            isRunning={isRunning}
            handlePlayPause={handlePlayPause}
            handleReset={handleReset}
          />

          {/* Footer */}
          <div className="text-white/60 text-sm">
            <p>Designed and Built by</p>
            <a
              className="font-semibold text-md hover:text-white transition-colors duration-300  flex items-center justify-center gap-1"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sonmartinn"
            >
              Son Martin <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Hidden audio element for beep sound */}
      <audio id="beep" preload="auto">
        <source
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
          type="audio/wav"
        />
      </audio>
    </div>
  );
};

export default PomodoroTimer;
