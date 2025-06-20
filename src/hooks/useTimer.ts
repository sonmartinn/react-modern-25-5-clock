import { time } from "console";
import { useState, useEffect, useRef } from "react";

export const useTimer = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const [label, setLabel] = useState("Session");

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const beep = document.getElementById("beep") as HTMLAudioElement;
  // Update timeLeft when sessionLength changes and we're in session mode
  useEffect(() => {
    if (isSession && !isRunning) {
      setTimeLeft(sessionLength * 60);
    }
  }, [sessionLength, isSession]);

  // Update timeLeft when breakLength changes and we're in break mode
  useEffect(() => {
    if (!isSession && !isRunning) {
      setTimeLeft(breakLength * 60);
    }
  }, [breakLength, isSession]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) {
            // Play beep sound
            if (beep) {
              beep.play();
            }
            // Switch between session and break
            if (isSession) {
              setIsSession(false);
              setLabel("Break");
              return breakLength * 60;
            } else {
              setIsSession(true);
              setLabel("Session");
              return sessionLength * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, isSession, breakLength, sessionLength]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsSession(true);
    setLabel("Session");
    setTimeLeft(25 * 60); // Reset to default 25 minutes
    setBreakLength(5);
    setSessionLength(25);
    if (beep) {
      beep.pause();
      beep.currentTime = 0;
    }
  };

  const adjustBreakLength = (increment: boolean) => {
    if (!isRunning) {
      setBreakLength((prev) => {
        const newLength = increment
          ? Math.min(prev + 1, 60)
          : Math.max(prev - 1, 1);
        return newLength;
      });
    }
  };

  const adjustSessionLength = (increment: boolean) => {
    if (!isRunning) {
      setSessionLength((prev) => {
        const newLength = increment
          ? Math.min(prev + 1, 60)
          : Math.max(prev - 1, 1);
        return newLength;
      });
    }
  };

  return {
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
  };
};
