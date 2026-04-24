"use client";

import Image from "next/image";
import { motion, type Variants, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Waves from "@/components/Waves";
import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/ui/rotating-text";
import { Magnetic } from "@/components/ui/magnetic";
import { TerminalFeed } from "@/components/ui/terminal-feed";

/* Animation variants */

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

import { HERO_WORDS } from "@/lib/constants";

/* Component */

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col"
      style={{ position: 'relative' }}
    >
      {/* Background composition */}
      <div className="pointer-events-none absolute inset-0 hero-grid" />
      <TerminalFeed />

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
            words={HERO_WORDS}
            interval={2400}
            className="text-brand"
          />{" "}
          do.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="mt-7 text-base sm:text-lg text-white/50 max-w-md leading-relaxed"
        >
          The terminal that doesn't sleep. Snipe launches, copy wallets,
          and track every position, all in one place.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          <Magnetic className="w-full sm:w-auto">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-fit">
              Join Now
            </Button>
          </Magnetic>
          <Magnetic strength={0.2} className="w-full sm:w-auto">
            <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-fit">
              See how it works
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Dashboard preview */}
      <motion.div
        className="relative z-20 w-full max-w-5xl mx-auto px-6 pb-6"
        style={{ 
          perspective: "1200px",
          rotateX,
          scale,
          opacity
        }}
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
              className="block"
              style={{ width: '100%', height: 'auto' }}
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