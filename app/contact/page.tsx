"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Navbar />

      <section className="relative flex-grow flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden">
        {/* Ambient tactical grid */}
        <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 blur-[150px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-lg"
        >
          {/* Cardboard/Dashboard Container */}
          <div className="dashboard-border p-px shadow-[0_0_40px_rgba(119,51,255,0.1)]">
            <div className="relative bg-[#030303] scan-line-effect p-8 md:p-12 border border-white/[0.02]">
              
              {/* Accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-brand/40" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-brand/40" />

              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
                  Get Early Access
                </h1>
                <p className="text-sm md:text-base text-white/40">
                  Secure your spot in the trenches. Connect with us and reserve
                  your terminal rank before the gates open.
                </p>
              </div>

              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                
                {/* Square Inputs */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-white/60 pl-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="degen@example.com"
                    required
                    className="w-full bg-[#080808] border border-white/[0.08] text-white px-4 py-3.5 text-sm focus:outline-none focus:border-brand/60 focus:bg-white/[0.02] transition-colors placeholder:text-white/20 rounded-none"
                  />
                </div>

                <div className="mt-6">
                  <Button type="submit" variant="primary" size="lg" className="w-full h-[52px]">
                    Submit
                  </Button>
                </div>
              </form>

            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
