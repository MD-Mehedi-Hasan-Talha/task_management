import { motion } from "framer-motion";
import { Pause, Square } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const TimeTracker = () => {
  const [running, setRunning] = useState(true);
  const [seconds, setSeconds] = useState(5048); // 01:24:08
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  const format = (s: number) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  return (
    <motion.div
      style={{
        backgroundImage: "linear-gradient( #00070036, #00070055), url('/card-img.png')"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="relative rounded-2xl p-5 bg-cover bg-center text-timer-foreground flex flex-col items-center justify-center"
    >
      <h3 className="absolute top-6 left-8 text-xl font-medium text-timer-foreground/100 mb-3">Time Tracker</h3>
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold tracking-wider mb-5 font-mono">{format(seconds)}</p>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setRunning(!running)}
            className="w-11 h-11 rounded-full bg-timer-foreground/20 flex items-center justify-center text-timer-foreground hover:bg-timer-foreground/30 transition-colors"
          >
            <Pause className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => { setRunning(false); setSeconds(0); }}
            className="w-11 h-11 rounded-full bg-destructive/80 flex items-center justify-center text-timer-foreground hover:bg-destructive transition-colors"
          >
            <Square className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TimeTracker;
