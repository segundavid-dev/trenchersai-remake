import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { ACTIONS, ADDRESSES } from "./constants";
import { LogEntry } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* Generates a random log entry for the terminal feed. */
export const generateLog = (): LogEntry => ({
  id: Math.random().toString(36).slice(2, 11),
  action: ACTIONS[Math.floor(Math.random() * ACTIONS.length)],
  address: ADDRESSES[Math.floor(Math.random() * ADDRESSES.length)],
  amount: (Math.random() * 10).toFixed(2) + " SOL",
  time: new Date().toLocaleTimeString([], { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  }),
  status: Math.random() > 0.1 ? "success" : "pending",
});
