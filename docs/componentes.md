# 📂 components/

Este directorio contiene todos los componentes reutilizables de la aplicación, organizados en subcarpetas para mejorar la escalabilidad y el mantenimiento.

## 📁 Estructura de Carpetas

### 🏗 `layout/`
📌 **Componentes relacionados con la estructura global de la aplicación.**  
Estos elementos se repiten en todas las páginas, como la barra de navegación y el pie de página.

#### Ejemplos:
- `Navbar.tsx` → Barra de navegación superior.
- `Footer.tsx` → Pie de página con enlaces.
- `MainLayout.tsx` → Disposición general de la aplicación.

---

### 📁 `sections/`
📌 **Secciones reutilizables de la interfaz.**  
Incluye secciones completas utilizadas en varias páginas, como el hero, testimonios o preguntas frecuentes.

#### Ejemplos:
- `Hero.tsx` → Sección destacada de la página de inicio.
- `Features.tsx` → Sección de características.
- `Testimonials.tsx` → Sección de testimonios de usuarios.

---

### 📁 `ui/`
📌 **Componentes reutilizables de la interfaz de usuario.**  
Contiene botones, inputs, modales y otros elementos pequeños pero reutilizables.

#### Ejemplos:
- `Button.tsx` → Botón reutilizable con variantes de estilo.
- `Input.tsx` → Campo de entrada con validación.
- `Modal.tsx` → Componente modal para diálogos emergentes.

---

### 📁 `providers/`
📌 **Proveedores de estado y contexto global.**  
Aquí se manejan temas como el cambio de tema, autenticación o configuración global.

#### Ejemplos:
- `theme-provider.tsx` → Manejo del tema (modo claro/oscuro).
- `auth-provider.tsx` → Gestión de autenticación y sesión de usuario.

---

## 📌 Resumen

| Carpeta      | Función |
|-------------|---------|
| `layout/`   | Estructura base de la app (Navbar, Footer, MainLayout). |
| `sections/` | Secciones reutilizables en diferentes páginas (Hero, Features, Testimonials). |
| `ui/`       | Elementos de interfaz pequeños pero reutilizables (Button, Input, Modal). |
| `providers/` | Contextos globales y proveedores de estado (ThemeProvider, AuthProvider). |

---

## 🛠 Notas de Desarrollo
- **Evita componentes duplicados:** Si un componente se usa en varias páginas, considera moverlo a `ui/` o `sections/`.
- **Mantén los archivos organizados:** Si `sections/` empieza a crecer demasiado, considera dividirlo en subcategorías (`home/`, `dashboard/`, etc.).
- **Documenta cada componente:** Usa comentarios JSDoc en los archivos TSX para describir props y comportamiento.

---

✍ **Última actualización:** _(2025-04-08)_  
🚀 **Mantenido por:** _(Ignacio Lopez)_
