"use client";

import { motion } from "motion/react";
import type { RankTier } from "@/types";

const tiers: RankTier[] = [
  {
    id: 1,
    name: "Bronze",
    description: "Start here. Every trade earns Gold at base rate.",
    accent: "from-[#CD7F32]/80 via-[#CD7F32]/20 to-transparent",
    glow: "rgba(205,127,50,0.15)",
  },
  {
    id: 2,
    name: "Silver & Gold",
    description: "Hit volume milestones. Your earnings multiplier grows with you.",
    accent: "from-[#E5E7EB]/80 via-[#E5E7EB]/20 to-transparent",
    glow: "rgba(229,231,235,0.1)",
  },
  {
    id: 3,
    name: "Platinum & Diamond",
    description: "Elite trader status. Double or triple your Gold on every swap.",
    accent: "from-[#22D3EE]/80 via-[#22D3EE]/20 to-transparent",
    glow: "rgba(34,211,238,0.15)",
  },
  {
    id: 4,
    name: "Titan",
    description: "Maximum multiplier. Top referral revenue share. Priority support.",
    accent: "from-brand/80 via-brand/20 to-transparent",
    glow: "rgba(119,51,255,0.2)",
  },
];

export default function Ranks() {
  return (
    <section id="ranks" className="relative w-full py-32 bg-black overflow-hidden border-t border-white/[0.04]">
      {/* Ambient background lines to give a grid/trench feel */}
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 md:mb-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-px bg-brand"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Progression System</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight text-white mb-6"
            >
              Climb the ranks.
              <br />
              Earn more every trade.
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-white/40 max-w-md md:text-right border-l md:border-l-0 md:border-r border-white/[0.1] pl-6 md:pl-0 md:pr-6"
          >
            Every swap earns you Gold. Higher rank = bigger multiplier on everything you earn. Plus 5-tier referral commissions on every trade your network makes.
          </motion.p>
        </div>

        {/* Staircase Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6 pb-20">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              // Calculate dynamic translation to create the "stairs" effect on large screens
              className={`group relative flex flex-col bg-[#050505] border border-white/[0.04] p-8 md:p-10 min-h-[320px] transition-all duration-500 hover:border-white/[0.1]
                ${i === 1 ? "lg:-mt-8" : ""}
                ${i === 2 ? "lg:-mt-16" : ""}
                ${i === 3 ? "lg:-mt-24" : ""}
              `}
            >
              {/* Dynamic Accent Top Border */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.accent}`} />
              
              {/* Ambient Glow behind card on Hover */}
              <motion.div
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${tier.glow} 0%, transparent 70%)`
                }}
              />

              {/* Massive faded background number */}
              <div className="absolute top-4 right-4 text-[120px] font-black text-white/[0.02] leading-none pointer-events-none select-none transition-colors duration-500 group-hover:text-white/[0.04]">
                0{tier.id}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full mt-auto">
                <div className="mb-8">
                  <span className="inline-flex items-center justify-center w-10 h-10 border border-white/[0.08] bg-white/[0.02] text-sm font-bold text-white mb-6">
                    {tier.id}
                  </span>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {tier.description}
                  </p>
                </div>
                
                {/* Visual progression indicator (the little dots) */}
                <div className="flex items-center gap-1.5 mt-auto">
                  {[1, 2, 3, 4].map((step) => (
                    <div 
                      key={step}
                      className={`h-1 flex-1 transition-colors duration-300 ${step <= tier.id ? `bg-white/[0.3] group-hover:bg-white/[0.5]` : "bg-white/[0.05]"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
