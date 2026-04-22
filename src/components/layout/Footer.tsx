"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--glass-border)] py-12 mt-20 bg-[var(--color-dark-alt)]/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand & Status */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <span className="text-3xl font-serif italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-white to-white select-none">
                  Pedro Daniel PV
                </span>
                {/* Línea de firma decorativa */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-[1px] bg-gradient-to-r from-[var(--color-accent)] to-transparent mt-1"
                />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">
                  Open to Work
                </span>
              </div>
            </div>
            <p className="text-[var(--color-accent)] text-sm italic max-w-sm text-center md:text-left">
              "No solo solucionar problemas, crear soluciones"
            </p>
          </div>

          {/* Details */}
          <div className="flex flex-col items-center md:items-end gap-1.5 text-sm">
            <div className="flex items-center gap-2 text-white font-semibold">
              <span>Fullstack Developer</span>
              <span className="text-[var(--color-accent)] text-lg leading-none">
                •
              </span>
              <span>AI First</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--color-gray-light)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[var(--color-accent)]"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="font-medium">Tunja, Colombia</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[var(--glass-border)]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[var(--color-gray-dark)] text-[9px] uppercase tracking-[0.3em]">
          <p>
            © {new Date().getFullYear()} — Desarrollado con SDD & Inteligencia
            Artificial
          </p>
          <p className="hover:text-[var(--color-accent)] transition-colors cursor-default">
            Potenciado por el ADN de la Innovación
          </p>
        </div>
      </div>
    </footer>
  );
};
