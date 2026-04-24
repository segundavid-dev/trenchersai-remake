"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LogEntry {
  id: string;
  action: string;
  address: string;
  amount: string;
  time: string;
  status: "success" | "pending";
}

const ACTIONS = ["BUY", "SELL", "SNIPE", "SWAP", "MINT"];
const ADDRESSES = [
  "7xKX...2pQn",
  "39wj...Lm9v",
  "8zNf...Kp1x",
  "2qRx...9zLk",
  "5vPn...4mWx",
  "F6nP...8xQr",
];

const generateLog = (): LogEntry => ({
  id: Math.random().toString(36).substr(2, 9),
  action: ACTIONS[Math.floor(Math.random() * ACTIONS.length)],
  address: ADDRESSES[Math.floor(Math.random() * ADDRESSES.length)],
  amount: (Math.random() * 10).toFixed(2) + " SOL",
  time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
  status: Math.random() > 0.1 ? "success" : "pending",
});

export function TerminalFeed() {
  const [isMounted, setIsMounted] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    // Initial logs
    setLogs(Array.from({ length: 6 }, generateLog));

    const interval = setInterval(() => {
      setLogs((prev) => [generateLog(), ...prev.slice(0, 5)]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 flex flex-col justify-end p-6 opacity-10 pointer-events-none select-none overflow-hidden"
    >
      <div className="flex flex-col gap-2 max-w-[300px]">
        <AnimatePresence mode="popLayout">
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-3 font-mono text-[10px] tracking-tight text-brand uppercase"
            >
              <span className="text-white/40">[{log.time}]</span>
              <span className={log.action === "SNIPE" ? "text-white font-bold" : ""}>
                {log.action}
              </span>
              <span className="text-white/20">{log.address}</span>
              <span className="ml-auto text-brand/80">{log.amount}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
