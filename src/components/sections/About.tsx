"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";

const tabs = [
  {
    id: "vision",
    title: "ADN Profesional",
    subtitle: "Filosofía y Diferencial",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
        <path d="M20.59 22c-2-1.74-4.88-3-8.59-3s-6.59 1.26-8.59 3" />
      </svg>
    ),
  },
  {
    id: "servicios",
    title: "Enfoque Proactivo",
    subtitle: "Cómo resuelvo y aporto",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: "educacion",
    title: "Formación",
    subtitle: "Educación e Idiomas",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

export const About = () => {
  const [activeTab, setActiveTab] = useState<string>("vision");

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-[80px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading flex flex-col gap-2">
              <span className="text-[var(--color-accent)] text-lg md:text-xl font-medium uppercase tracking-wider">
                Conóceme
              </span>
              <span className="flex items-center gap-4">
                <span className="w-12 h-[2px] bg-[var(--color-accent)]"></span>
                Evolución y ADN
              </span>
            </h2>
            <p className="text-[var(--color-gray-light)] max-w-md text-sm md:text-base leading-relaxed">
              Soy el factor diferencial que resuelve problemas, aporta
              soluciones de valor y potencia los resultados del equipo con
              disciplina, creatividad e Inteligencia Artificial.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Tabs Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-start gap-4 p-5 rounded-xl transition-all duration-300 text-left relative overflow-hidden ${
                      isActive
                        ? "bg-[var(--color-dark-alt)] border border-[var(--color-accent)]/30 shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.1)]"
                        : "bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:bg-[var(--color-dark-alt)]/50 hover:border-[var(--color-accent)]/30"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]"
                      />
                    )}
                    <div
                      className={`p-2 rounded-lg transition-colors ${isActive ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]" : "bg-[var(--color-dark)] text-[var(--color-gray-light)]"}`}
                    >
                      {tab.icon}
                    </div>
                    <div>
                      <h3
                        className={`font-semibold text-lg transition-colors ${isActive ? "text-white" : "text-[var(--color-gray-light)]"}`}
                      >
                        {tab.title}
                      </h3>
                      <p
                        className={`text-sm mt-1 transition-colors ${isActive ? "text-[var(--color-gray-light)]" : "text-[var(--color-gray-dark)]"}`}
                      >
                        {tab.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <GlassCard className="lg:col-span-8 p-6 md:p-10 min-h-[400px] relative">
              <AnimatePresence mode="wait">
                {activeTab === "vision" && (
                  <motion.div
                    key="vision"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full justify-center"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-[var(--color-accent)]">
                      Filosofía y ADN
                    </h3>
                    <div className="space-y-6 text-[var(--color-gray-light)] leading-relaxed">
                      <p>
                        No soy solo un desarrollador; soy un{" "}
                        <strong className="text-white">
                          solucionador de problemas por naturaleza
                        </strong>
                        . Mi objetivo es elevar el estándar de la industria,
                        integrándome en equipos líderes donde la innovación no
                        sea una opción, sino una constante.
                      </p>
                      <p className="pl-4 border-l-2 border-[var(--color-accent)] italic text-white/90">
                        "Mi ubicación es Tunja, pero mi visión no conoce
                        fronteras. Busco retos que otros evitan."
                      </p>
                      <p>
                        Me muevo por la{" "}
                        <strong className="text-white">
                          disciplina y la adaptabilidad extrema
                        </strong>
                        . No solo escribo código; analizo el impacto de cada
                        línea. Mi diferencial es la velocidad con la que
                        traduzco una idea compleja en una solución funcional y
                        estética, siempre bajo la premisa de que lo bien hecho
                        supera a lo rápido.
                      </p>
                      <p className="font-semibold text-[var(--color-accent)] text-lg pt-4 border-t border-[var(--glass-border)]">
                        No busco convencerte con palabras, te reto a comprobar
                        mi arquitectura técnica.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === "servicios" && (
                  <motion.div
                    key="servicios"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full justify-center"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-[var(--color-accent)]">
                      Enfoque y Resolución
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 text-[var(--color-gray-light)] leading-relaxed">
                      <div className="space-y-4">
                        <h4 className="text-white font-semibold flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                          Independiente y Colectivo
                        </h4>
                        <p className="text-sm">
                          Tengo la disciplina para liderar proyectos de forma{" "}
                          <strong className="text-white">autónoma</strong>, pero
                          entiendo que el software es un deporte de equipo. No
                          me asusto ante los retos; los desgloso y analizo hasta
                          encontrar la ruta más eficiente.
                        </p>
                        <p className="text-sm">
                          Mi proceso incluye buscar perspectivas diversas: desde
                          el feedback de mis{" "}
                          <strong className="text-white">compañeros</strong>{" "}
                          hasta la investigación en{" "}
                          <strong className="text-white">
                            redes de expertos y tendencias globales
                          </strong>
                          . No descanso hasta encontrar una solución que sea
                          técnicamente viable y estéticamente superior.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-white font-semibold flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                          Calidad Sobre Entrega
                        </h4>
                        <p className="text-sm">
                          Mi máxima es simple:{" "}
                          <strong className="text-white">
                            Calidad antes que solo resultados
                          </strong>
                          . Entregar algo que funcione es el mínimo; entregar
                          algo escalable, limpio y que aporte valor real es mi
                          estándar.
                        </p>
                        <p className="text-sm text-[var(--color-accent)] mt-2 italic">
                          "Ayudo, escucho, itero y enseño. Si hay un problema,
                          no descanso hasta que la solución sea elegante."
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "educacion" && (
                  <motion.div
                    key="educacion"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full justify-center"
                  >
                    <h3 className="text-2xl font-bold mb-8 text-[var(--color-accent)]">
                      Educación y Habilidades
                    </h3>

                    <div className="space-y-8">
                      {/* Formación Académica */}
                      <div>
                        <h4 className="text-sm uppercase tracking-widest text-[var(--color-gray-dark)] mb-4 font-semibold">
                          Formación Académica
                        </h4>
                        <div className="grid gap-4">
                          <div className="flex gap-4 p-4 rounded-xl bg-[var(--color-dark-alt)] border border-[var(--glass-border)] hover:border-[var(--color-accent)]/30 transition-colors">
                            <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center font-bold">
                              {/* Logo placeholder icon */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="text-white font-bold text-lg">
                                Tecnólogo en Análisis y Desarrollo de Software
                              </h5>
                              <p className="text-[var(--color-gray-light)]">
                                SENA (Servicio Nacional de Aprendizaje)
                              </p>
                              <p className="text-[var(--color-gray-light)]">
                                2024 - 2026
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4 p-4 rounded-xl bg-[var(--color-dark-alt)] border border-[var(--glass-border)] hover:border-[var(--color-accent)]/30 transition-colors">
                            <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center font-bold">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="m4 6 8-4 8 4" />
                                <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
                                <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
                                <path d="M18 5v17" />
                                <path d="M6 5v17" />
                                <circle cx="12" cy="9" r="2" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="text-white font-bold text-lg">
                                Bachiller Técnico (Tecnico en electricidad)
                              </h5>
                              <p className="text-[var(--color-gray-light)]">
                                SENA (Servicio Nacional de Aprendizaje)
                              </p>
                              <p className="text-[var(--color-gray-light)]">
                                2022 - 2023
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Idiomas */}
                      <div>
                        <h4 className="text-sm uppercase tracking-widest text-[var(--color-gray-dark)] mb-4 font-semibold">
                          Idiomas
                        </h4>
                        <div className="flex flex-wrap gap-4">
                          <span className="px-5 py-2.5 rounded-full bg-[var(--color-dark)] border border-[var(--glass-border)] text-white font-medium flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Español{" "}
                            <span className="text-[var(--color-gray-light)] text-sm font-normal">
                              Nativo
                            </span>
                          </span>
                          <span className="px-5 py-2.5 rounded-full bg-[var(--color-dark)] border border-[var(--glass-border)] text-white font-medium flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Inglés{" "}
                            <span className="text-[var(--color-gray-light)] text-sm font-normal">
                              Técnico / Avanzado
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
