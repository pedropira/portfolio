"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-[var(--color-bg)]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1E1B4B] rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#064E3B] rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-[#020617] rounded-full blur-[150px] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* COLUMNA IZQUIERDA: CONTENIDO */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.2, delayChildren: 2.8 },
              },
            }}
          >
            {/* Nombre con Badge Superior */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-[var(--color-white)] font-bold tracking-widest uppercase mb-4 text-2xl md:text-3xl"
            >
              Pedro Daniel Pirachican
            </motion.h2>

            {/* Etiquetas de Rol */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-8"
            >
              <span className="text-[var(--color-dark)] font-bold tracking-tighter uppercase text-xs md:text-sm bg-gradient-to-r from-[var(--color-accent)] to-[#64e2ff] px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                Analista y desarrollador fullstack
              </span>
              <span className="text-[var(--color-dark)] font-bold tracking-tighter uppercase text-xs md:text-sm bg-gradient-to-r from-[var(--color-white)] to-[var(--color-gray-light)] px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                IA First
              </span>
            </motion.div>

            {/* Frase Célebre */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight leading-tight"
            >
              No soluciono problemas, <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-white)]">
                creo soluciones.
              </span>
            </motion.h1>

            {/* Descripción */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-[var(--color-gray-light)] text-lg max-w-xl mb-10 leading-relaxed"
            >
              Especialista en transformar retos técnicos en resultados
              organizacionales tangibles mediante arquitectura escalable y
              diseño premium asistido por IA.
            </motion.p>

            {/* Acciones & Redes */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Button
                variant="primary"
                onClick={() => (window.location.href = "#contact")}
                className="px-8 py-4 text-lg rounded-full w-full sm:w-auto"
              >
                Creemos Soluciones Juntos
              </Button>

              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/pedropira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-gray-light)] hover:text-[var(--color-white)] transition-transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/pedro-pirachican-67b212325"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-gray-light)] hover:text-[#0A66C2] transition-transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* COLUMNA DERECHA: LOGO 3D / VISUAL */}
          <motion.div
            className="hidden lg:flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 3, ease: "easeOut" }}
          >
            {/* Esferas de luz de fondo para el logo */}
            <div className="absolute w-64 h-64 bg-[var(--color-accent)] rounded-full blur-[100px] opacity-20 animate-pulse"></div>

            {/* LOGO ISO-TECH */}
            <motion.svg
              width="400"
              height="400"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Caras del Cubo Isométrico Estilizado */}
              <path
                d="M100 30L160 65V135L100 170L40 135V65L100 30Z"
                stroke="var(--color-accent)"
                strokeWidth="0.5"
                strokeDasharray="4 4"
                opacity="0.3"
              />

              {/* Líneas de Conexión / Arquitectura */}
              <motion.path
                d="M100 30V170 M40 65L160 135 M160 65L40 135"
                stroke="url(#grad-logo)"
                strokeWidth="2"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 3 }}
              />

              {/* El núcleo: Un Hexágono central con el símbolo de código */}
              <rect
                x="75"
                y="75"
                width="50"
                height="50"
                rx="12"
                fill="var(--color-dark)"
                stroke="var(--color-accent)"
                strokeWidth="4"
                className="drop-shadow-[0_0_20px_rgba(45,212,191,0.6)]"
              />
              <path
                d="M85 100L95 90L85 80"
                stroke="var(--color-accent)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M115 100L105 110L115 120"
                stroke="var(--color-accent)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M105 85L95 115"
                stroke="var(--color-accent)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Puntos de Datos / Nodos flotantes */}
              <motion.circle
                cx="100"
                cy="30"
                r="4"
                fill="var(--color-accent)"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.circle
                cx="40"
                cy="65"
                r="4"
                fill="var(--color-white)"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.circle
                cx="160"
                cy="135"
                r="4"
                fill="var(--color-accent)"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />

              <defs>
                <linearGradient
                  id="grad-logo"
                  x1="40"
                  y1="30"
                  x2="160"
                  y2="170"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--color-accent)" />
                  <stop offset="1" stopColor="var(--color-white)" />
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
