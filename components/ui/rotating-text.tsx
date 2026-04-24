"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function RotatingText({
  words,
  interval = 2400,
  className,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={className}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
