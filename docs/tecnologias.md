# 📌 Tecnologías Utilizadas en el Proyecto

Este documento describe las tecnologías utilizadas en el desarrollo del proyecto y cómo agregar nuevas herramientas en caso de ser necesario.

## 🚀 Tecnologías Actuales

### 1. [Next.js](https://nextjs.org/)
**Descripción:** Framework de React para desarrollo de aplicaciones web modernas con renderizado híbrido (SSR/SSG).  
**Instalación:**
```bash
npx create-next-app@latest mi-proyecto
cd mi-proyecto
npm install
```

### 2. [shadcn/ui](https://ui.shadcn.com/)
**Descripción:** Biblioteca de componentes basada en Tailwind CSS y Radix UI para un desarrollo ágil y estilizado.  
**Instalación:**
```bash
npx shadcn-ui@latest init
```
Para agregar un componente:
```bash
npx shadcn-ui@latest add button
```

### 3. [Framer Motion](https://www.framer.com/motion/)
**Descripción:** Librería de animaciones para React con API simple y potente.  
**Instalación:**
```bash
npm install framer-motion
```

## ➕ Agregar Nuevas Tecnologías
Cuando se agregue una nueva tecnología, documentarla siguiendo este formato:
1. **Nombre de la tecnología** y enlace oficial.
2. **Breve descripción** de su propósito y beneficios.
3. **Comando de instalación** correspondiente.
4. **Ejemplo de uso o configuración inicial** si aplica.

Ejemplo de nueva tecnología:
```md
### 4. [Zustand](https://zustand-demo.pmnd.rs/)
**Descripción:** Manejo de estado simple y eficiente para React.  
**Instalación:**
```bash
npm install zustand
```
**Ejemplo de uso:**
```tsx
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

✍ **Última actualización:** _(2025-04-07)_  
🚀 **Mantenido por:** _(Ignacio Lopez)_