"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { RankTier } from "@/types";

const tiers: RankTier[] = [
  {
    id: 1,
    name: "Bronze",
    description: "Start here. Every trade earns Gold at base rate.",
  },
  {
    id: 2,
    name: "Silver & Gold",
    description: "Hit volume milestones. Your earnings multiplier grows with you.",
  },
  {
    id: 3,
    name: "Platinum & Diamond",
    description: "Elite trader status. Double or triple your Gold on every swap.",
  },
  {
    id: 4,
    name: "Titan",
    description: "Maximum multiplier. Top referral revenue share. Priority support.",
  },
];

const getTierStyles = (id: number) => {
  switch (id) {
    case 1: return { accent: "from-[#CD7F32]/80 via-[#CD7F32]/20 to-transparent", glow: "rgba(205,127,50,0.15)" };
    case 2: return { accent: "from-[#E5E7EB]/80 via-[#E5E7EB]/20 to-transparent", glow: "rgba(229,231,235,0.1)" };
    case 3: return { accent: "from-[#22D3EE]/80 via-[#22D3EE]/20 to-transparent", glow: "rgba(34,211,238,0.15)" };
    case 4: return { accent: "from-brand/80 via-brand/20 to-transparent", glow: "rgba(119,51,255,0.2)" };
    default: return { accent: "", glow: "" };
  }
};

export default function Ranks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate parallax offsets for background numbers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  
  const yOffsets = [y1, y2, y3, y4];

  return (
    <section 
      id="ranks" 
      ref={containerRef}
      className="relative w-full py-32 bg-black overflow-hidden border-t border-white/[0.04]"
      style={{ position: 'relative' }}
    >
      {/* Ambient background lines to give a grid/trench feel */}
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 md:mb-32">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-black uppercase leading-[1.05] tracking-tight text-white mb-6"
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
            className="text-sm md:text-base text-white/60 max-w-md md:text-right border-l md:border-l-0 md:border-r border-white/[0.1] pl-6 md:pl-0 md:pr-6"
          >
            Every swap earns you Gold. Higher rank = bigger multiplier on everything you earn. Plus 5-tier referral commissions on every trade your network makes.
          </motion.p>
        </div>

        {/*  Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6 pb-20">
          {tiers.map((tier, i) => {
            const { accent, glow } = getTierStyles(tier.id);
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col bg-[#050505] border border-white/[0.04] p-8 md:p-10 min-h-[320px] transition-all duration-500 hover:border-white/[0.1]
                  ${i === 1 ? "lg:-mt-8" : ""}
                  ${i === 2 ? "lg:-mt-16" : ""}
                  ${i === 3 ? "lg:-mt-24" : ""}
                `}
                whileHover="hover"
              >
                {/* Dynamic Accent Top Border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${accent}`} />
                
                {/* Ambient Glow behind card on Hover */}
                <motion.div
                  variants={{ hover: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${glow} 0%, transparent 70%)`
                  }}
                />

                {/* Massive faded background number with Parallax */}
                <motion.div 
                  style={{ y: yOffsets[i] }}
                  className="absolute top-4 right-4 text-[120px] font-black text-white/[0.02] leading-none pointer-events-none select-none transition-colors duration-500 group-hover:text-white/[0.04]"
                >
                  0{tier.id}
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full mt-auto">
                  <div className="mb-8">
                    <span className="inline-flex items-center justify-center w-10 h-10 border border-white/[0.08] bg-white/[0.02] text-sm font-bold text-white mb-6">
                      {tier.id}
                    </span>
                    <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                  
                  {/* Visual progression indicator*/}
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
