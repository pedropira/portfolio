import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "autostock",
    title: "AutoStock",
    description: "MI ORGULLO. Un sistema para gestión de inventarios que recorre todo el ciclo de vida del software. Desde recolección de requisitos, UML, diseño de MVP, hasta codificación, testing y despliegue en VPS (Hostinger). Construí la arquitectura y el backend guiado por la calidad, sin miedo a meter manos al código para superar cualquier obstáculo.",
    tech: ["SDLC", "React", "FastAPI", "MySQL", "UML", "VPS Hostinger"],
    repoUrl: "https://github.com/pedropira/AutoStock-",
    image: ["/autostock-preview.png", "/autostock-API-preview.png"]
  },
  {
    id: "sondeos-alcaldia",
    title: "Sondeos Alcaldía (Reto SenaSoft)",
    description: "Competencia eliminatoria de SenaSoft. El reto consistió en analizar una problemática compleja, elaborar modelos de datos y aplicar normalización. Seleccioné la arquitectura ideal y construí un backend robusto con API para dar solución al problema planteado.",
    tech: ["Modelado de Datos", "Arquitectura Backend", "Planeación", "APIs"],
    repoUrl: "https://github.com/pedropira/sondeos-alcaldia-senasoft",
    image: "/sondeos-preview.png"
  },
  {
    id: "vuelos-habitaciones",
    title: "Sistemas WorldSkills (Vuelos & Habitaciones)",
    description: "Competencia eliminatoria Regional Boyacá. Integración de frontends dinámicos con backends en FastAPI (Vuelos) y Express.js con TypeScript (Habitaciones). Resolví la complejidad de la persistencia de datos y la lógica de negocio bajo presión competitiva.",
    tech: ["FastAPI", "Express.js", "MySQL", "TypeScript", "Node.js"],
    repoUrl: "https://github.com/pedropira/reservas-vuelos-worldskills",
    image: ["/vuelos-preview.png", "/habitaciones-preview.png"]
  },
  {
    id: "app-bancolombia",
    title: "Clon App Bancolombia",
    description: "Mi primer gran resto como programador. Un clon interactivo de la aplicación bancaria donde aprendí los fundamentos del Paradigma Orientado a Objetos (POO), programación estructurada, algoritmos, y manejo de LocalStorage como base de datos.",
    tech: ["Vanilla JS", "LocalStorage", "POO", "Algoritmos", "HTML/CSS"],
    repoUrl: "https://github.com/pedropira/clon-bancolombia-vanilla",
    image: [
      "/bancolombia-preview1.png",
      "/bancolombia-preview2.png",
      "/bancolombia-preview3.png"
    ]
  }
];
