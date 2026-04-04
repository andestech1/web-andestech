# 🛠️ Guía Práctica de Modificación

## 🎯 Casos de Uso Comunes

---

## 1. Cambiar el Texto del Hero test

**Archivo:** `components/hero-section.tsx`

\`\`\`tsx
// LÍNEA ~50-60
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  AndesTech {/* 👈 CAMBIAR AQUÍ */}
</h1>
<p className="text-xl md:text-2xl text-cyan-200/90 mb-8">
  Tu texto aquí {/* 👈 CAMBIAR AQUÍ */}
</p>
\`\`\`

---

## 2. Agregar un Nuevo Evento

**Archivo: ** `components/events-section.tsx`

\`\`\`tsx
// LÍNEA ~20-30
const events = [
  // ... eventos existentes
  {
    title: "Tu Nuevo Evento",           // 👈 Título
    date: "2025-03-15",                 // 👈 Fecha (YYYY-MM-DD)
    time: "19:00",                      // 👈 Hora
    location: "Lugar del evento",        // 👈 Ubicación
    description: "Descripción breve",    // 👈 Descripción
    image: "/tu-imagen.jpg",            // 👈 Imagen (subir a /public)
    category: "Workshop"                 // 👈 Categoría
  }
]
\`\`\`

---

## 3. Cambiar los Colores del Tema

**Archivo:** `app/globals.css`

\`\`\`css
/* LÍNEAS ~10-30 */
:root {
  --primary: #FF6B6B;        /* 👈 Color principal (botones, acentos) */
  --secondary: #4ECDC4;      /* 👈 Color secundario */
  --background: #1A1A2E;     /* 👈 Color de fondo */
  --accent: #16213E;         /* 👈 Color de acento */
}
\`\`\`

**Colores recomendados para AndesTech:**
- Primary: `#00d9ff` (Cyan brillante)
- Secondary: `#1a2942` (Azul oscuro)
- Background: `#0a0f1e` (Azul muy oscuro)

---

## 4. Modificar el Equipo/Staff

**Archivo:** `components/staff-section.tsx`

\`\`\`tsx
// LÍNEA ~20-40
const team = [
  {
    name: "Nombre Apellido",           // 👈 Nombre
    role: "Rol en el equipo",          // 👈 Rol/Puesto
    image: "/tu-foto.jpg",             // 👈 Foto (subir a /public)
    bio: "Breve descripción",          // 👈 Biografía
    social: {
      twitter: "https://twitter.com/...",  // 👈 (opcional)
      linkedin: "https://linkedin.com/...", // 👈 (opcional)
      github: "https://github.com/..."      // 👈 (opcional)
    }
  }
]
\`\`\`

---

## 5. Cambiar las Estadísticas

**Archivo:** `components/stats-section.tsx`

\`\`\`tsx
// LÍNEA ~15-25
const stats = [
  {
    value: "500+",              // 👈 Número/Valor
    label: "Miembros Activos"   // 👈 Etiqueta
  },
  {
    value: "50+",
    label: "Eventos Realizados"
  }
  // Agregar más estadísticas...
]
\`\`\`

---

## 6. Modificar el Formulario de Contacto

**Archivo:** `components/contact-section.tsx`

### Cambiar campos del formulario:

\`\`\`tsx
// LÍNEA ~30-50
<Input 
  placeholder="Tu nombre"    // 👈 Placeholder
  name="name"               // 👈 Name del campo
  required                  // 👈 Campo obligatorio
/>

// Para agregar un nuevo campo:
<Input 
  placeholder="Tu teléfono"
  name="phone"
  type="tel"
/>
\`\`\`

### Configurar el envío del formulario:

\`\`\`tsx
// LÍNEA ~20-25
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
  
  // 👇 AGREGAR AQUÍ tu lógica de envío
  const formData = new FormData(e.target as HTMLFormElement)
  
  // Ejemplo: enviar a API
  await fetch('/api/contact', {
    method: 'POST',
    body: formData
  })
}
\`\`\`

---

## 7. Agregar/Modificar Testimonios

**Archivo:** `components/testimonials-section.tsx`

\`\`\`tsx
// LÍNEA ~15-30
const testimonials = [
  {
    name: "Nombre Completo",          // 👈 Nombre
    role: "Desarrollador Frontend",   // 👈 Rol
    avatar: "/avatar.jpg",            // 👈 Avatar
    content: "Testimonio completo...", // 👈 Testimonio
    rating: 5                         // 👈 Calificación (1-5)
  }
]
\`\`\`

---

## 8. Cambiar la Velocidad de Animaciones

**Archivo:** `app/globals.css`

\`\`\`css
/* LÍNEA ~100+ (en @keyframes) */

/* Ejemplo: hacer más rápida la animación float */
@keyframes float {
  /* Cambiar duración en el componente: */
  /* animation: float 3s ease-in-out infinite; */
  /*                  👆 Cambiar de 6s a 3s */
}
\`\`\`

**En componentes:**
\`\`\`tsx
// Buscar líneas con 'animate-' y modificar duración
className="animate-float duration-3000"  // 👈 3 segundos
\`\`\`

---

## 9. Modificar el Footer

**Archivo:** `components/footer.tsx`

### Enlaces del footer:
\`\`\`tsx
// LÍNEA ~30-50
const links = {
  social: [
    { name: "Twitter", url: "https://twitter.com/andestech" },  // 👈 Modificar
    { name: "GitHub", url: "https://github.com/andestech" },
    { name: "LinkedIn", url: "https://linkedin.com/..." }
  ],
  legal: [
    { name: "Privacidad", url: "/privacy" },
    { name: "Términos", url: "/terms" }
  ]
}
\`\`\`

### Texto del copyright:
\`\`\`tsx
// LÍNEA ~80-90
<p className="text-center">
  © 2025 AndesTech. Todos los derechos reservados.  {/* 👈 Cambiar aquí */}
</p>
\`\`\`

---

## 10. Agregar una Nueva Sección Completa

### Paso 1: Crear el componente

**Crear archivo:** `components/mi-nueva-seccion.tsx`

\`\`\`tsx
export function MiNuevaSeccion() {
  return (
    <section id="mi-seccion" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Título de Mi Sección
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tu contenido aquí */}
        </div>
      </div>
    </section>
  )
}
\`\`\`

### Paso 2: Importar en la página principal

**Archivo:** `app/page.tsx`

\`\`\`tsx
// LÍNEA ~5-10 (imports)
import { MiNuevaSeccion } from '@/components/mi-nueva-seccion'

// LÍNEA ~20-30 (en el return)
<main>
  {/* ... otras secciones ... */}
  <MiNuevaSeccion />  {/* 👈 AGREGAR AQUÍ */}
  {/* ... más secciones ... */}
</main>
\`\`\`

---

## 11. Cambiar las Fuentes

**Archivo:** `app/layout.tsx`

\`\`\`tsx
// LÍNEA ~5-10
import { Inter, Roboto } from 'next/font/google'  // 👈 Cambiar fuente

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'   // 👈 Variable CSS
})

// Aplicar fuente diferente:
const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sans'
})
\`\`\`

**Fuentes populares:**
- `Inter` - Moderna y limpia
- `Poppins` - Redondeada y amigable
- `Roboto` - Clásica de Google
- `Montserrat` - Geométrica y elegante

---

## 12. Ajustar Efectos del Botón Interactivo

**Archivo:** `components/interactive-button.tsx`

\`\`\`tsx
// LÍNEA ~30-40
// Intensidad del efecto magnético
const intensity = 0.3;  // 👈 Aumentar = más magnético (0.1 - 1.0)

// LÍNEA ~50-60
// Tamaño del brillo
<div 
  className="absolute inset-0"
  style={{
    width: '150px',     // 👈 Tamaño del brillo
    height: '150px',
    opacity: 0.6        // 👈 Intensidad del brillo (0.0 - 1.0)
  }}
/>
\`\`\`

---

## 📁 Mapa Mental de Modificaciones

\`\`\`
¿Qué quieres cambiar?
│
├── 🎨 Apariencia Visual
│   ├── Colores → app/globals.css
│   ├── Fuentes → app/layout.tsx
│   ├── Animaciones → app/globals.css
│   └── Espaciado → components/*.tsx (className)
│
├── 📝 Contenido
│   ├── Textos → components/*-section.tsx
│   ├── Imágenes → public/ + components/*.tsx
│   ├── Eventos → components/events-section.tsx
│   └── Equipo → components/staff-section.tsx
│
├── 🧩 Estructura
│   ├── Orden secciones → app/page.tsx
│   ├── Nueva sección → crear components/*.tsx
│   └── Eliminar sección → app/page.tsx
│
└── ⚙️ Funcionalidad
    ├── Formulario → components/contact-section.tsx
    ├── Enlaces → components/footer.tsx
    └── Navegación → components/hero-section.tsx
\`\`\`

---

## 🚨 Errores Comunes y Soluciones

### Error: "Module not found"
**Solución:** Verifica que el import sea correcto
\`\`\`tsx
// ❌ Incorrecto
import { Button } from 'components/ui/button'

// ✅ Correcto
import { Button } from '@/components/ui/button'
\`\`\`

---

### Error: Imagen no se muestra
**Solución:** Verifica la ruta y que esté en /public
\`\`\`tsx
// ❌ Incorrecto
<img src="/images/logo.png" />  // Si está en public/images/

// ✅ Correcto
<img src="/logo.png" />  // Si está en public/
\`\`\`

---

### Error: Color no cambia
**Solución:** Usa variables CSS en lugar de valores directos
\`\`\`tsx
// ❌ Menos mantenible
className="bg-cyan-500"

// ✅ Mejor
className="bg-primary"  // Usa la variable --primary de globals.css
\`\`\`

---

## 💡 Tips Profesionales

1. **Siempre prueba en mobile y desktop**
   - Usa las DevTools para ver responsive

2. **Usa las clases de Tailwind existentes**
   - `md:`, `lg:` para responsive
   - `hover:`, `focus:` para interactividad

3. **Mantén la consistencia**
   - Usa los mismos espaciados (`py-20`, `mb-8`)
   - Usa los mismos colores del tema

4. **Comenta tu código**
   \`\`\`tsx
   // 👍 Buena práctica
   // Esta función maneja el envío del formulario
   async function handleSubmit() { ... }
   \`\`\`

---

**¿Dudas?** Consulta `ESTRUCTURA-PROYECTO.md` para entender la arquitectura completa.
