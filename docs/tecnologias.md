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

### 3. [Motion](https://motion.dev/)
**Descripción:** Librería de animaciones para React con API simple y potente.  
**Instalación:**
```bash
npm install motion
```

### 4. [React Hook Form](https://react-hook-form.com/)
**Descripción:** Biblioteca para manejar formularios en React de manera eficiente y con mejor rendimiento.  
**Instalación:**
```bash
npm install react-hook-form
```
**Ejemplo de uso:**
```tsx
import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nombre")} placeholder="Nombre" />
      <button type="submit">Enviar</button>
    </form>
  );
};
```

### 5. [@hookform/resolvers](https://react-hook-form.com/get-started/#SchemaValidation)
**Descripción:** Proporciona validadores de esquema para React Hook Form con librerías como Zod y Yup.  
**Instalación:**
```bash
npm install @hookform/resolvers
```

### 6. [Zod](https://zod.dev/)
**Descripción:** Biblioteca de validación de datos basada en TypeScript.  
**Instalación:**
```bash
npm install zod
```
**Ejemplo de validación con Zod:**
```tsx
import { z } from "zod";

const schema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Formato de email inválido"),
});
```

### 7. [next-themes](https://github.com/pacocoursey/next-themes)
**Descripción:** Biblioteca para manejar temas (modo oscuro/claro) en aplicaciones Next.js.  
**Instalación:**
```bash
npm install next-themes
```
**Ejemplo de uso:**
```tsx
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);
```

### 8. [Sonner](https://sonner.dev/)
**Descripción:** Biblioteca para mostrar notificaciones minimalistas en React.  
**Instalación:**
```bash
npm install sonner
```
**Ejemplo de uso:**
```tsx
import { toast } from "sonner";

toast("Mensaje de prueba");
```

## ➕ Agregar Nuevas Tecnologías
Cuando se agregue una nueva tecnología, documentarla siguiendo este formato:
1. **Nombre de la tecnología** y enlace oficial.
2. **Breve descripción** de su propósito y beneficios.
3. **Comando de instalación** correspondiente.
4. **Ejemplo de uso o configuración inicial** si aplica.

---

📝 **Última actualización:** _(2025-04-08)_  
🚀 **Mantenido por:** _(Ignacio Lopez)_

