"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const IntroLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // La animación dura en total alrededor de 2.5 - 3 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)] overflow-hidden"
        >
          {/* El destello explosivo final antes de desaparecer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0, 1, 0], scale: [0.5, 0.5, 10, 30] }}
            transition={{ duration: 1.5, delay: 1.5, ease: "easeIn" }}
            className="absolute rounded-full bg-[var(--color-white)] w-32 h-32 blur-[50px] mix-blend-screen"
            style={{ pointerEvents: "none", zIndex: 20 }}
          />

          <div className="flex flex-col items-center justify-center relative z-10">
            {/* Ícono del Logo */}
            <motion.svg
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: [0, 1.2, 1], rotate: [-180, 0, 45] }}
              transition={{ duration: 1.2, ease: "backOut" }}
              width="64"
              height="64"
              viewBox="0 0 100 100"
              fill="none"
              className="mb-8 text-[var(--color-accent)] drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]"
            >
              <rect x="25" y="25" width="50" height="50" rx="10" stroke="currentColor" strokeWidth="8"/>
              <path d="M40 60L50 40L60 60" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
            
            {/* Texto que sale como del ícono */}
            <div className="flex overflow-hidden">
              <motion.span
                initial={{ y: 50, opacity: 0, letterSpacing: "-0.1em" }}
                animate={{ y: 0, opacity: 1, letterSpacing: "0.2em" }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-bold font-heading text-[var(--color-white)]"
              >
                PEDRO<span className="text-[var(--color-accent)]">PIRA</span>
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
