"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Market() {
  return (
    <section id="market" className="relative w-full py-32 bg-black overflow-hidden border-t border-white/[0.04]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-20">
        
        {/* Left: Content (55%) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-[55%] flex flex-col items-start"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-[1.05] tracking-tight text-white mb-8">
            Stay on top of market moves in real time
          </h2>
          
          <p className="text-sm md:text-base text-white/40 leading-relaxed mb-10 border-l border-white/[0.1] pl-6 max-w-xl">
            Live prices, volume, holder count, and security scores for every Solana memecoin. See what&apos;s moving before CT catches on.
          </p>
          
          <Button href="#enroll" variant="primary" size="lg">
            Join Now
          </Button>
        </motion.div>

        {/* Right: Image (45%) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-[45%]"
        >
          <div className="dashboard-border p-px shadow-2xl shadow-black relative group">
            
            {/* The Image Wrapper */}
            <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden bg-black scan-line-effect">
              <Image
                src="/market.jpg"
                alt="Market Moves Real Time"
                fill
                className="object-cover object-center"
              />
              
              {/* Overlay to dim the bright image (as requested) */}
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-700 group-hover:bg-black/30" />
              
              {/* Additional tactical gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(119,51,255,0.05)_0%,transparent_70%)] pointer-events-none" />
            </div>

            {/* Corner Accents for Sharp UI */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-brand/50 z-20"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-brand/50 z-20"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
