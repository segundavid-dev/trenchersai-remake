"use client";

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
    description:
      "Set your parameters, min liquidity, max dev hold, LP burned, mint revoked and let the bot snipe, filter, and buy for you automatically. 15+ filters. Runs 24/7.",
    stats: ["1-Click Setup", "100+ Strategies"],
    className: "col-span-1 md:col-span-2 md:row-span-2",
    icon: Robot01Icon,
  },
  {
    id: "rug-detection",
    title: "Rug Detection",
    description:
      "Every token gets a security score before you buy. Checks mint authority, LP burn, top holders, and runs honeypot simulation.",
    stats: ["3x Faster Transfers", "24/7 Availability"],
    className: "col-span-1 md:col-span-1 md:row-span-2",
    icon: Shield01Icon,
  },
  {
    id: "multi-wallet",
    title: "Multi-Wallet",
    description:
      "Create embedded wallets or import existing ones. AES-256 encrypted. Switch between wallets instantly. Export anytime.",
    stats: ["30% Savings", "50+ Countries"],
    className: "col-span-1 md:col-span-1 md:row-span-1",
    icon: Wallet01Icon,
  },
  {
    id: "self-custody",
    title: "Self-Custody",
    description:
      "Your private key never leaves your browser. We store encrypted blobs. We don't have the key. We literally can't access your funds.",
    stats: ["24/7 Monitoring", "2FA Enabled"],
    className: "col-span-1 md:col-span-1 md:row-span-1",
    icon: LockKeyIcon,
  },
  {
    id: "advanced-orders",
    title: "Advanced Orders",
    description:
      "Limit orders, stop-loss, multi-level take-profit, trailing stops, and DCA. Set once, they run 24/7.",
    stats: ["99% Accuracy", "10M+ Signals"],
    className: "col-span-1 md:col-span-2 md:row-span-1",
    icon: ChartAverageIcon,
  },
  {
    id: "realtime-alerts",
    title: "Real-time alerts",
    description:
      "Price alerts, wallet activity notifications, new token matches, and portfolio drawdown warnings, pushed instantly",
    stats: ["500+ Assets", "24/7 Signals"],
    className: "col-span-1 md:col-span-2 md:row-span-1",
    icon: BellDotIcon,
  },
];



export default function ToolsBento() {
  return (
    <section id="tools" className="relative w-full py-32 bg-black">
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
            className="text-base md:text-lg text-white/40 max-w-2xl mx-auto"
          >
            Everything you need to trade Solana memecoins with speed, safety,
            and an edge, nothing you don&apos;t.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[240px]">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover="hover"
              className={`group relative overflow-hidden bg-[#050505] border border-white/[0.04] p-8 flex flex-col transition-colors duration-500 hover:border-brand/40 ${feature.className}`}
            >
              {/* Background Glow on Hover */}
              <motion.div
                variants={{
                  hover: { opacity: 1 },
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(119,51,255,0.1)_0%,transparent_60%)] pointer-events-none"
              />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center border border-white/[0.06] bg-white/[0.02] text-brand mb-6 transition-transform duration-500 group-hover:scale-110">
                <HugeiconsIcon icon={feature.icon} className="w-6 h-6" />
              </div>

              {/* Content */}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
