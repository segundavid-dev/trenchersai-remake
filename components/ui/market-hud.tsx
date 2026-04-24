"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function MarketHUD() {
  const [isMounted, setIsMounted] = useState(false);
  const [prices, setPrices] = useState<number[]>([]);
  const [orderBook, setOrderBook] = useState<{ width: number; price: string; side: 'buy' | 'sell' }[]>([]);

  useEffect(() => {
    setIsMounted(true);
    
    // Initial data
    setPrices(Array.from({ length: 12 }, () => Math.random() * 100));
    setOrderBook(Array.from({ length: 16 }, (_, i) => ({
      width: Math.random() * 80 + 10,
      price: (Math.random() * 0.01 + (i < 8 ? 0.05 : 0.04)).toFixed(4),
      side: i < 8 ? 'sell' : 'buy'
    })));

    const interval = setInterval(() => {
      setPrices((prev) => [...prev.slice(1), Math.random() * 100]);
      setOrderBook((prev) => prev.map(item => ({
        ...item,
        width: Math.max(10, Math.min(90, item.width + (Math.random() - 0.5) * 10))
      })));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return <div className="w-full h-full bg-[#050505]" />;

  return (
    <div className="relative w-full h-full bg-[#050505] p-6 font-mono overflow-hidden">
      {/* ── Background Grid ── */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* ── Main Layout ── */}
      <div className="relative z-10 grid grid-cols-2 gap-6 h-full">
        
        {/* Left Col: Order Book Simulation */}
        <div className="flex flex-col gap-2">
          <div className="text-[10px] text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-brand animate-pulse" />
            Live Order Book
          </div>
          <div className="flex flex-col gap-1.5">
            {orderBook.slice(0, 8).map((item, i) => (
              <div key={`sell-${i}`} className="flex items-center gap-2">
                <div 
                  className="h-1.5 bg-red-500/20 border-r-2 border-red-500/40 transition-all duration-1000"
                  style={{ width: `${item.width}%` }}
                />
                <span className="text-[9px] text-red-500/60 ml-auto">
                  {item.price}
                </span>
              </div>
            ))}
            <div className="h-px bg-white/10 my-1" />
            {orderBook.slice(8, 16).map((item, i) => (
              <div key={`buy-${i}`} className="flex items-center gap-2">
                <div 
                  className="h-1.5 bg-green-500/20 border-r-2 border-green-500/40 transition-all duration-1000"
                  style={{ width: `${item.width}%` }}
                />
                <span className="text-[9px] text-green-500/60 ml-auto">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Tactical Scan */}
        <div className="flex flex-col gap-4">
          {/* Security Scan Block */}
          <div className="border border-white/[0.06] bg-white/[0.02] p-4 relative overflow-hidden">
            <div className="text-[10px] text-white/40 uppercase tracking-widest mb-4">Security Scan</div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-[9px]">
                <span className="text-white/30">MINT AUTHORITY</span>
                <span className="text-green-500 font-bold">REVOKED</span>
              </div>
              <div className="flex justify-between items-center text-[9px]">
                <span className="text-white/30">LP STATUS</span>
                <span className="text-green-500 font-bold">BURNED</span>
              </div>
              <div className="flex justify-between items-center text-[9px]">
                <span className="text-white/30">DEV WALLET</span>
                <span className="text-yellow-500/80 font-bold">2.4% HOLD</span>
              </div>
            </div>
            {/* Animated scan line inside this specific box */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-brand/30 shadow-[0_0_10px_rgba(119,51,255,0.5)] pointer-events-none"
            />
          </div>

          {/* Mini Chart */}
          <div className="flex-grow flex items-end gap-1.5 pt-4">
            {prices.map((price, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${price}%` }}
                className="flex-1 bg-brand/20 border-t border-brand/40"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Ticker ── */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand/5 border-t border-brand/20 py-1.5 px-4 flex items-center justify-between whitespace-nowrap overflow-hidden">
        <div className="flex gap-8 animate-ticker">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8">
              <span className="text-[9px] text-white/60">BTC/SOL <span className="text-green-500">+2.4%</span></span>
              <span className="text-[9px] text-white/60">JUP/SOL <span className="text-red-500">-1.1%</span></span>
              <span className="text-[9px] text-white/60">BONK/SOL <span className="text-green-500">+14.2%</span></span>
              <span className="text-[9px] text-white/60">TRENCH/SOL <span className="text-brand font-bold">SIGNAL DETECTED</span></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
