"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import type { BentoFeature } from "@/types";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  Robot01Icon,
  Shield01Icon,
  Wallet01Icon,
  LockKeyIcon,
  ChartAverageIcon,
  BellDotIcon
} from "@hugeicons/core-free-icons";

interface FeatureWithIcon extends BentoFeature {
  icon: IconSvgElement;
}

const features: FeatureWithIcon[] = [
  {
    id: "ai-sniper",
    title: "AI Sniper Bot",
    description: "Set your parameters, min liquidity, max dev hold, LP burned, mint revoked and let the bot snipe, filter, and buy for you automatically. 15+ filters. Runs 24/7.",
    stats: ["1-Click Setup", "100+ Strategies"],
    icon: Robot01Icon,
  },
  {
    id: "rug-detection",
    title: "Rug Detection",
    description: "Every token gets a security score before you buy. Checks mint authority, LP burn, top holders, and runs honeypot simulation.",
    stats: ["3x Faster Transfers", "24/7 Availability"],
    icon: Shield01Icon,
  },
  {
    id: "multi-wallet",
    title: "Multi-Wallet",
    description: "Create embedded wallets or import existing ones. AES-256 encrypted. Switch between wallets instantly. Export anytime.",
    stats: ["30% Savings", "50+ Countries"],
    icon: Wallet01Icon,
  },
  {
    id: "self-custody",
    title: "Self-Custody",
    description: "Your private key never leaves your browser. We store encrypted blobs. We don't have the key. We literally can't access your funds.",
    stats: ["24/7 Monitoring", "2FA Enabled"],
    icon: LockKeyIcon,
  },
  {
    id: "advanced-orders",
    title: "Advanced Orders",
    description: "Limit orders, stop-loss, multi-level take-profit, trailing stops, and DCA. Set once, they run 24/7.",
    stats: ["99% Accuracy", "10M+ Signals"],
    icon: ChartAverageIcon,
  },
  {
    id: "realtime-alerts",
    title: "Real-time alerts",
    description: "Price alerts, wallet activity notifications, new token matches, and portfolio drawdown warnings, pushed instantly",
    stats: ["500+ Assets", "24/7 Signals"],
    icon: BellDotIcon,
  },
];

const getGridSpan = (idx: number) => {
  switch (idx) {
    case 0: return "md:col-span-2 md:row-span-2";
    case 1: return "md:col-span-1 md:row-span-2";
    case 4:
    case 5: return "md:col-span-2 md:row-span-1";
    default: return "md:col-span-1 md:row-span-1";
  }
};

function BentoCard({ feature, idx }: { feature: FeatureWithIcon; idx: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setMousePos({ x, y });

    // Calculate tilt
    const tiltX = (y - height / 2) / 15;
    const tiltY = (x - width / 2) / -15;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ 
        rotateX: tilt.x, 
        rotateY: tilt.y,
        transition: { type: "spring", stiffness: 100, damping: 20 }
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: idx * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover="hover"
      style={{ transformStyle: "preserve-3d" }}
      className={`group relative overflow-hidden bg-[#050505] border border-white/[0.04] p-8 flex flex-col transition-all duration-500 hover:border-brand/40 col-span-1 ${getGridSpan(idx)}`}
    >
      {/* Interactive Spotlight */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(119,51,255,0.08), transparent 80%)`
        }}
      />
      
      {/* Subtle border glow following cursor */}
      <div 
        className="absolute -inset-px z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(119,51,255,0.4), transparent 100%)`
        }}
      />

      {/* Icon */}
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="relative z-20 w-12 h-12 flex items-center justify-center border border-white/[0.06] bg-white/[0.02] text-brand mb-6 transition-transform duration-500 group-hover:scale-110"
      >
        <HugeiconsIcon icon={feature.icon} className="w-6 h-6" />
      </div>

      {/* Content */}
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="relative z-20 flex flex-col h-full"
      >
        <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-white mb-3">
          {feature.title}
        </h3>
        <p className="text-sm text-white/40 leading-relaxed mb-8 flex-grow">
          {feature.description}
        </p>

        {/* Stats/Pills Footer */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {feature.stats.map((stat) => (
            <div
              key={stat}
              className="px-2.5 py-1.5 border border-white/[0.06] bg-white/[0.01] text-[10px] font-bold uppercase tracking-wider text-white/50 transition-colors group-hover:border-brand/20 group-hover:text-white/80"
            >
              {stat}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ToolsBento() {
  return (
    <section id="benefits" className="relative w-full py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6"
          >
            TOOLS BUILT FOR THE TRENCHES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/40 max-w-2xl mx-auto"
          >
            Everything you need to trade Solana memecoins with speed, safety,
            and an edge, nothing you don&apos;t.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[240px]">
          {features.map((feature, idx) => (
            <BentoCard key={feature.id} feature={feature} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
