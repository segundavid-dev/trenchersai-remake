"use client";

import Image from "next/image";
import { motion } from "motion/react";

const networks = [
  { name: "Solana", src: "/sol-logo.avif", height: 22 },
  { name: "Ethereum", src: "/eth-logo.avif", height: 26 },
  { name: "Polygon", src: "/polygon.avif", height: 26 },
];

export default function Networks() {
  return (
    <section className="relative w-full py-20 bg-black border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-10 text-center"
        >
          Operating seamlessly across leading chains
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-row items-center justify-center gap-6 md:gap-20"
        >
          {networks.map((net) => (
            <motion.div
              key={net.name}
              variants={{
                hidden: { opacity: 0, filter: "blur(4px)", y: 10 },
                visible: {
                  opacity: 0.5,
                  filter: "blur(0px)",
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="relative flex items-center justify-center transition-all duration-300 grayscale hover:grayscale-0 cursor-default"
            >
              <div
                style={{ height: net.height }}
                className="w-auto flex items-center"
              >
                <Image
                  src={net.src}
                  alt={`${net.name} logo`}
                  width={120}
                  height={net.height}
                  className="w-auto h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
