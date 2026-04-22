# 🧠 Memoria del Proyecto: Portfolio Pedro Pira

Este archivo es un volcado de la memoria interna (Engram) para que puedas ver el progreso del SDD directamente en tu editor.

---

## 🏗️ 1. Contexto del Proyecto (sdd-init)
**Estado**: Inicializado
**Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion.
**Estética**: AutoStock Dark (Deep Navy #0F172A, Teal #2DD4BF).

---

## 🎨 2. Diseño Técnico (sdd-design)
**Estado**: Completado

### Arquitectura
- **Estructura**: `src/components/sections` para las partes de la página, `src/components/ui` para botones y cards.
- **Estilos**: Tailwind extendido con variables CSS para los colores de AutoStock.
- **Contenido**: Archivos estáticos en `src/data/` (máximo rendimiento, cero bases de datos).
- **Animaciones**: Framer Motion (Intersection Observer) para efectos al hacer scroll.

---

## 📋 3. Lista de Tareas (sdd-tasks)
**Estado**: En progreso

### Fase 1: Infraestructura
- [x] 1.1 Inicializar proyecto Next.js
- [x] 1.2 Configurar Tailwind con colores AutoStock
- [x] 1.3 Configurar variables CSS globales
- [x] 1.4 Crear interfaces TypeScript
- [x] 1.5 Cargar datos de proyectos
- [x] 1.6 Cargar historial laboral
- [x] 1.7 Cargar lista de skills
- [x] 1.8 Instalar Framer Motion
- [x] 1.9 Configurar fuentes Inter y DM Sans

### Fase 2: UI Atoms (Componentes Base)
- [x] 2.1 Botones (Primary/Ghost)
- [x] 2.2 GlassCard (Efecto cristal)
- [x] 2.3 Badges (Tecnologías)
- [x] 2.4 Navbar (Navegación suave)
- [x] 2.5 Footer

### Fase 3: Secciones de la Página
- [x] 3.1 Hero (Mesh gradient background)
- [x] 3.2 About (Visión/Misión)
- [x] 3.3 Projects (Grilla de proyectos)
- [x] 3.4 Experience (Timeline vertical)
- [x] 3.5 Skills (Categorías y badges)
- [x] 3.6 Contact (CTA y links)

### Fase 4: SEO y Pulido
- [x] 4.1 Armar la página principal
- [x] 4.2 Metadatos SEO y Open Graph
- [x] 4.3 Generar imagen de preview (OG)
- [x] 5.1 Sistema de animaciones (Framer Motion)
- [x] 5.2 Optimización de imágenes y performance

### Fase 5: Entrega
- [ ] 6.1 Linting y tipos
- [ ] 6.3 Testeo responsive
- [ ] 6.6 Auditoría Lighthouse (Performance > 90)
- [ ] 6.7 Deploy a Vercel
