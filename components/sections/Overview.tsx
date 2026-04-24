"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import type { OverviewCard } from "@/types";

const cards: OverviewCard[] = [
  {
    id: 1,
    pills: ["Auto-buy", "New token detection"],
    title: "SNIPE NEW TOKENS BEFORE THE CHART EVEN LOADS",
    description:
      "Automatically detect and buy new Pump.fun launches and Raydium pools the instant they go live. 15+ safety filters, auto take-profit, and stop-loss all in milliseconds.",
    image: "/snipe.avif",
  },
  {
    id: 2,
    pills: ["MEV protection", "Fast execution"],
    title: "EVERY TRADE IS PRIVATE. EVERY FILL IS INSTANT.",
    description:
      "Your swaps race through three paths at once via Jito bundles, staked RPC, and direct submit. Sandwich bots can't see you. First confirmation wins. Sub 200ms execution.",
    image: "/time.avif",
  },
  {
    id: 3,
    pills: ["Wallet tracking", "Mirror trades"],
    title: "COPY THE BEST WALLETS. MIRROR EVERY MOVE.",
    description:
      "Track any wallet in real time. When they buy, you buy. When they sell, you sell. Your amount, their timing. Works across Jupiter, Raydium, Pump.fun, and PumpSwap.",
    image: "/track.avif",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="relative w-full py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6"
          >
            REDEFINING THE FUTURE OF TRADING
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-white/40 max-w-2xl mx-auto"
          >
            Harness cutting-edge technology built to the highest industry
            standard, setting a new benchmark for modern trading.
          </motion.p>
        </div>

        {/* Sticky Cards Stack */}
        <div className="relative flex flex-col gap-8 pb-32">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="sticky top-24 md:top-32 w-full pt-12 md:pt-0"
              style={{
                top: `calc(6rem + ${index * 2}rem)`,
                zIndex: index + 10,
              }}
            >
              <div className="dashboard-border p-px shadow-2xl shadow-black">
                <div className="relative w-full overflow-hidden bg-black scan-line-effect">
                  {/* Glow behind card */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-50" />
                
                <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[480px]">
                  {/* Left Content */}
                  <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-3 mb-8">
                      {card.pills.map((pill) => (
                        <div
                          key={pill}
                          className="px-3 py-1.5 border border-white/[0.08] bg-white/[0.02] text-xs font-semibold uppercase tracking-wider text-white/60"
                        >
                          {pill}
                        </div>
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-4xl font-extrabold uppercase leading-[1.1] tracking-tight text-white mb-6">
                      {card.title}
                    </h3>

                    <p className="text-sm md:text-base text-white/40 leading-relaxed mb-10">
                      {card.description}
                    </p>

                    <div className="mt-auto md:mt-0">
                      <Button href="/contact" variant="primary" size="md" className="w-full md:w-fit">
                        Join Now
                      </Button>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="w-full md:w-1/2 relative bg-black/40 border-l border-white/[0.04] flex items-center justify-center p-8 md:p-12 overflow-hidden">
                    {/* Subtle scanline/gradient effect in the image background */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(119,51,255,0.1)_0%,transparent_70%)] pointer-events-none" />
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="relative w-full h-full max-h-[300px] md:max-h-[400px] flex items-center justify-center"
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={600}
                        height={600}
                        className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
