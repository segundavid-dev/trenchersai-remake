"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto dashboard-border p-px shadow-[0_0_80px_rgba(119,51,255,0.15)]"
      >
        <div className="relative w-full bg-[#030303] scan-line-effect px-6 py-20 md:py-28 text-center overflow-hidden flex flex-col items-center">
          
          {/* Intense center glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(119,51,255,0.15)_0%,transparent_60%)] pointer-events-none" />
          
          {/* Subtle grid pattern inside CTA */}
          <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />

          {/* Sharp Corner Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-brand/60" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-brand/60" />

          <h2 className="relative z-10 text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            The trenches are calling
          </h2>
          
          <p className="relative z-10 text-sm md:text-base text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Thousands of traders are already sniping faster and copying smarter
            with Trenchers. Stop watching whales eat, start trading with an edge.
          </p>

          <div className="relative z-10">
            <Button
              href="#enroll"
              variant="primary"
              size="lg"
            >
              Join Now
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
