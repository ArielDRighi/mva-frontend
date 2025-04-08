# 📍 Rutas de la Aplicación

Este documento describe la estructura de rutas de la aplicación, organizada según la arquitectura de **Next.js**.

---

## 📁 Estructura de Rutas

| Ruta | Título | Descripción |
|------|--------|------------|
| `/` | **Inicio** | Página principal con información general de la empresa. |
| `/nosotros` | **Nosotros** | Historia, experiencia, misión, visión y valores. |
| `/servicios` | **Servicios** | Listado y detalles de todos los servicios ofrecidos. |
| `/clientes` | **Clientes** | Empresas con las que han trabajado. |
| `/sostenibilidad` | **Sostenibilidad** | Explicación de su compromiso con el medio ambiente, seguridad y salud. |
| `/contacto` | **Contacto** | Información de contacto y formulario de consulta. |

---

## 🏗 Metadatos de las Páginas  

Cada página define metadatos (`metadata` en `app/` o `Head` en `pages/`).  

Ejemplo en Next.js 13+ con `app/`:

```tsx
export const metadata = {
  title: "Inicio - Nombre de la Empresa",
  description: "Página principal con información general de la empresa.",
};
```

✍ **Última actualización:** _(2025-04-08)_  
🚀 **Mantenido por:** _(Ignacio Lopez)_