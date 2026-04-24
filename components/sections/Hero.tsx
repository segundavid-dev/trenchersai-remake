"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import Waves from "@/components/Waves";
import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/ui/rotating-text";
import type { Stat } from "@/types";

/* ── Animation variants ── */

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Data ── */

const stats: Stat[] = [
  { value: "<2s", label: "Execution" },
  { value: "15+", label: "Safety filters" },
  { value: "MEV", label: "Protected" },
  { value: "24/7", label: "Always live" },
];

const heroWords = ["whales", "degens", "snipers", "alphas"];

/* ── Component ── */

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col"
    >
      {/* Background composition */}
      <div className="pointer-events-none absolute inset-0 hero-grid" />

      <Waves
        lineColor="rgba(119, 51, 255, 0.10)"
        backgroundColor="transparent"
        waveSpeedX={0.008}
        waveSpeedY={0.003}
        waveAmpX={35}
        waveAmpY={12}
        xGap={14}
        yGap={32}
        friction={0.93}
        tension={0.005}
        maxCursorMove={100}
      />

      <div className="pointer-events-none absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[420px] bg-brand/10 blur-[180px] rounded-full" />
      <div className="pointer-events-none absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand/6 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/60 to-transparent z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-6xl mx-auto pt-36 md:pt-44 pb-10"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-[clamp(3rem,11vw,9rem)] font-black leading-[0.88] tracking-[-0.04em] text-white uppercase"
        >
          Trade like the
          <br />
          <RotatingText
            words={heroWords}
            interval={2400}
            className="text-brand"
          />{" "}
          do.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="mt-7 text-base sm:text-lg text-white/30 max-w-md leading-relaxed"
        >
          The terminal that doesn&apos;t sleep. Snipe launches, copy wallets,
          and track every position, all in one place.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-fit">
            Join Now
          </Button>
          <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-fit">
            See how it works
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          className="mt-14 grid grid-cols-1 md:grid-cols-4 w-full md:w-auto"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-cell px-5 py-4 md:px-8 md:py-5">
              <p className="text-lg md:text-xl font-bold text-white tracking-tight">
                {value}
              </p>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-white/25 mt-1 font-medium">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Dashboard preview */}
      <motion.div
        className="relative z-20 w-full max-w-5xl mx-auto px-6 pb-6"
        variants={scaleIn}
        initial="hidden"
        animate="visible"
      >
        <div className="dashboard-border p-px">
          <div className="relative bg-black scan-line-effect">
            <Image
              src="/hero.avif"
              alt="TrenchersAI trading dashboard"
              width={1200}
              height={700}
              className="w-full h-auto block"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/70 to-transparent z-30" />
      <div className="h-20" />
    </section>
  );
}