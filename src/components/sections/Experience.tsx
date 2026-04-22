"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { GlassCard } from "../ui/GlassCard";

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(experiences.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        // Ciclo inverso: 2 -> 1 -> 0 -> 2... (de abajo hacia arriba)
        return prev <= 0 ? experiences.length - 1 : prev - 1;
      });
    }, 2500); // Velocidad moderada

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-16 flex items-center gap-4 justify-center">
            <span className="w-12 h-[2px] bg-[var(--color-accent)] hidden md:block"></span>
            Mi Trayectoria
            <span className="w-12 h-[2px] bg-[var(--color-accent)] hidden md:block"></span>
          </h2>
          
          <div className="relative border-l-2 border-[var(--color-accent)]/30 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, index) => {
              const isActive = activeIndex === index;
              
              return (
                <motion.div 
                  key={exp.id}
                  className="relative pl-8 md:pl-12"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Timeline Dot with fill effect */}
                  <div 
                    className={`absolute -left-[11px] top-6 w-5 h-5 rounded-full transition-all duration-700 border-2 ${
                      isActive 
                        ? "bg-[var(--color-accent)] border-[var(--color-accent)] shadow-[0_0_15px_var(--color-accent)] scale-110 z-10" 
                        : "bg-[var(--color-bg)] border-[var(--color-accent)]/40 scale-100 z-10"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full animate-ping bg-[var(--color-accent)] opacity-40"></span>
                    )}
                  </div>
                  
                  <GlassCard 
                    hoverEffect 
                    className={`transition-all duration-700 ${isActive ? 'ring-1 ring-[var(--color-accent)]/50 shadow-[0_0_20px_rgba(45,212,191,0.05)] translate-y-[-2px]' : ''}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className={`text-2xl font-bold transition-colors duration-500 ${isActive ? "text-white" : "text-white/70"}`}>
                        {exp.role}
                      </h3>
                      <span className={`transition-all duration-500 font-semibold text-sm px-4 py-1.5 rounded-full w-fit whitespace-nowrap ${
                        isActive 
                          ? "text-[var(--color-accent)] bg-[var(--color-accent)]/10 ring-1 ring-[var(--color-accent)]/30" 
                          : "text-[var(--color-gray-dark)] bg-white/5"
                      }`}>
                        {exp.from} - {exp.to}
                      </span>
                    </div>
                    
                    <h4 className={`text-lg font-medium transition-colors duration-500 mb-6 ${isActive ? "text-[var(--color-accent)]" : "text-[var(--color-gray-dark)]"}`}>
                      {exp.company}
                    </h4>
                    
                    <ul className="space-y-4">
                      {exp.achievements.map((ach) => (
                        <li key={ach.id} className={`transition-colors duration-500 leading-relaxed flex items-start ${
                          isActive ? "text-[var(--color-gray-light)]" : "text-[var(--color-gray-dark)]/60"
                        }`}>
                          <span className={`mr-3 mt-1.5 text-xs transition-colors ${isActive ? "text-[var(--color-accent)]" : "text-[var(--color-gray-dark)]/50"}`}>■</span>
                          <span className="flex-1">{ach.text}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
