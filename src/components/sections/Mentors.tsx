"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { mentors } from "@/data/mentors";

export const Mentors = () => {
  return (
    <section id="influences" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--color-accent)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Linaje Técnico e Influencias
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"></div>
            <p className="mt-6 text-[var(--color-gray-light)] max-w-2xl text-lg">
              Mi filosofía no nace del vacío. Es producto del aprendizaje constante,
              guiado por referentes que valoran el crecimiento, el valor real y la ingeniería limpia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="h-full"
              >
                <GlassCard hoverEffect className="h-full flex flex-col p-8 border-t-2 border-t-[var(--color-accent)]/30 group">
                   <div className="flex justify-between items-start mb-6 gap-4">
                     <div className="flex-1 min-w-0">
                       <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[var(--color-accent)] transition-colors truncate">
                         {mentor.name}
                       </h3>
                       <p className="text-[13px] font-semibold text-[var(--color-accent)] bg-[rgba(45,212,191,0.08)] px-3 py-1.5 border border-[var(--color-accent)]/20 rounded-md inline-block leading-relaxed">
                         {mentor.role}
                       </p>
                     </div>
                     
                     <div className="flex gap-3 flex-shrink-0 pt-1">
                       {mentor.socials.linkedin && (
                         <a 
                           href={mentor.socials.linkedin} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-[var(--color-gray-dark)] hover:text-[#0A66C2] transition-colors"
                           aria-label={`LinkedIn de ${mentor.name}`}
                         >
                           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                             <rect x="2" y="9" width="4" height="12"></rect>
                             <circle cx="4" cy="4" r="2"></circle>
                           </svg>
                         </a>
                       )}
                       {mentor.socials.instagram && (
                         <a 
                           href={mentor.socials.instagram} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-[var(--color-gray-dark)] hover:text-[#E1306C] transition-colors"
                           aria-label={`Instagram de ${mentor.name}`}
                         >
                           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                             <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                             <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                             <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                           </svg>
                         </a>
                       )}
                     </div>
                   </div>
                   
                   <div className="relative">
                     <span className="absolute -left-2 top-0 text-4xl text-[var(--color-accent)] opacity-20 font-serif">"</span>
                     <p className="text-[var(--color-gray-light)] leading-relaxed italic relative z-10 pl-2">
                       {mentor.description}
                     </p>
                   </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
