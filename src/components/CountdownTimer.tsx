import { useState, useEffect } from "react";
import { AlertTriangle, Clock } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 12
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-logistics-red to-logistics-orange text-white p-4 rounded-lg mb-6 shadow-lg">
      <div className="flex items-center justify-center mb-2">
        <AlertTriangle className="w-5 h-5 mr-2 countdown-blink" />
        <span className="font-semibold">Delivery Confirmation Required</span>
      </div>
      
      <div className="text-center">
        <div className="flex justify-center items-center space-x-1 text-2xl font-bold mb-2">
          <div className="bg-white/20 px-3 py-1 rounded">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <span>:</span>
          <div className="bg-white/20 px-3 py-1 rounded">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <span>:</span>
          <div className="bg-white/20 px-3 py-1 rounded countdown-blink">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
        </div>
        <div className="flex justify-center space-x-4 text-xs opacity-90">
          <span>HOURS</span>
          <span>MINUTES</span>
          <span>SECONDS</span>
        </div>
        <p className="text-sm mt-2 opacity-90">
          CBN Import Documentation Deadline - Package Return to Canada Scheduled
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;