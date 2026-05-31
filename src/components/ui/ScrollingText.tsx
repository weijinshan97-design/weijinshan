"use client";

import { motion } from "framer-motion";

interface ScrollingTextProps {
  text: string;
  textEn: string;
}

export function ScrollingText({ text, textEn }: ScrollingTextProps) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-32%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap"
      >
        <span className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight">
          {text}
        </span>
      </motion.div>

      <motion.div
        initial={{ x: "-8%" }}
        animate={{ x: "22%" }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap"
      >
        <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-light italic text-muted-light tracking-wide">
          {textEn}
        </span>
      </motion.div>
    </div>
  );
}
