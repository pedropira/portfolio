"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/Badge";
import { skillCategories } from "@/data/skills";

export const Skills = () => {
  const [aiCategory, ...otherCategories] = skillCategories;

  return (
    <section id="skills" className="py-24 bg-[var(--color-dark)] relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Arsenal & Metodología
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"></div>
          </div>
          
          <div className="flex flex-col gap-10">
            {/* AI Hero Card - Full Width */}
            <motion.div 
              className="relative p-8 md:p-12 rounded-[var(--radius-lg)] border bg-gradient-to-br from-[rgba(20,20,20,0.8)] to-[rgba(45,212,191,0.1)] border-[var(--color-accent)]/40 shadow-[0_0_50px_rgba(45,212,191,0.15)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute -top-4 left-8 px-4 py-1 bg-[var(--color-accent)] rounded-full text-xs font-bold text-[var(--color-dark)] uppercase tracking-tighter shadow-[0_0_15px_var(--color-accent)]">
                Foco Principal: IA First
              </div>
              
              <div className="flex items-center gap-4 mb-10 overflow-hidden">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-white to-[var(--color-accent)] flex items-center justify-center text-2xl shadow-[0_0_20px_var(--color-accent)]">
                  🤖
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-accent)]">
                    {aiCategory.title}
                  </h3>
                  <p className="text-sm text-[var(--color-accent)]/80 mt-1 font-mono tracking-tight uppercase">Flujo de Desarrollo Neuronal de Alto Rendimiento</p>
                </div>
                <div className="hidden md:flex flex-grow h-[1px] bg-gradient-to-r from-[var(--color-accent)]/40 to-transparent ml-4"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {aiCategory.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: sIdx * 0.04 }}
                  >
                    <Badge className="w-full justify-center text-xs md:text-sm py-2 px-4 transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)] border border-[var(--color-accent)]/30 bg-[rgba(45,212,191,0.05)] text-[var(--color-gray-light)] font-medium cursor-default">
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Other Categories - 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {otherCategories.map((category, idx) => (
                <motion.div 
                  key={category.title}
                  className="bg-[var(--color-dark-alt)] p-8 rounded-[var(--radius-lg)] border border-[var(--glass-border)] hover:border-[var(--color-accent)]/20 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.15) }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-1.5 h-7 bg-[var(--color-accent)] rounded-full group-hover:shadow-[0_0_10px_var(--color-accent)] transition-all"></div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (idx * 0.1) + (sIdx * 0.03) }}
                      >
                        <Badge className="text-sm py-1.5 px-4 bg-[var(--color-bg)] hover:bg-[var(--color-bg-light)] border border-[var(--glass-border)] text-[var(--color-gray-light)] transition-colors cursor-default">
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
