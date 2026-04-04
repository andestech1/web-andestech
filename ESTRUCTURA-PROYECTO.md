# 📁 Estructura del Proyecto AndesTech

## 🎯 Visión General

Este proyecto está organizado en una arquitectura modular y escalable, separando claramente las responsabilidades entre diseño visual, lógica de componentes, y utilidades.

---

## 📂 Estructura de Carpetas

\`\`\`
proyecto-andestech/
├── app/                          # 🚀 NÚCLEO DE LA APLICACIÓN (Next.js App Router)
│   ├── page.tsx                  # Página principal - Orquesta todas las secciones
│   ├── layout.tsx                # Layout raíz - Configuración global, fuentes, providers
│   └── globals.css               # Estilos globales y tema (colores, animaciones)
│
├── components/                   # 🧩 COMPONENTES DE SECCIONES
│   ├── hero-section.tsx          # Hero principal con logo animado y CTAs
│   ├── about-section.tsx         # Sección "¿Qué es AndesTech?"
│   ├── offerings-section.tsx     # Sección "¿Qué Ofrecemos?" (pilares)
│   ├── activities-section.tsx    # Sección "¿Qué Hacemos?" (actividades semanales)
│   ├── events-section.tsx        # Sección "Próximos Eventos" (workshops, birras)
│   ├── stats-section.tsx         # Estadísticas de la comunidad
│   ├── testimonials-section.tsx  # Testimonios de miembros
│   ├── staff-section.tsx         # Equipo organizador
│   ├── contact-section.tsx       # Formulario de contacto
│   ├── footer.tsx                # Footer con enlaces y redes sociales
│   │
│   ├── code-background.tsx       # 🎨 Componente visual - Fondo animado con código
│   ├── interactive-button.tsx    # 🎨 Botón con efectos de cursor magnético
│   │
│   └── ui/                       # 🎨 BIBLIOTECA DE COMPONENTES UI (shadcn/ui)
│       ├── button.tsx            # Botones base
│       ├── card.tsx              # Tarjetas
│       ├── input.tsx             # Inputs de formulario
│       ├── textarea.tsx          # Textarea
│       ├── badge.tsx             # Badges/etiquetas
│       ├── avatar.tsx            # Avatares
│       └── ...                   # +50 componentes UI reutilizables
│
├── hooks/                        # 🔧 CUSTOM HOOKS
│   ├── use-mobile.ts             # Hook para detectar dispositivos móviles
│   └── use-toast.ts              # Hook para notificaciones toast
│
├── lib/                          # 🛠️ UTILIDADES
│   └── utils.ts                  # Funciones auxiliares (cn para clases)
│
├── public/                       # 📸 ASSETS ESTÁTICOS
│   ├── andes-tech-logo.svg       # Logo de AndesTech
│   ├── workshop-react.jpg        # Imágenes de eventos
│   ├── birras-event.jpg
│   ├── devcafe-event.jpg
│   └── professional-*.png/jpg    # Fotos del equipo
│
└── styles/                       # 🎨 ESTILOS ADICIONALES (si los hubiera)
    └── globals.css               # Duplicado de app/globals.css
\`\`\`

---

## 🎨 FRONTEND - ESTRUCTURA VISUAL

### 1️⃣ Página Principal (`app/page.tsx`)
**Responsabilidad:** Orquestar todas las secciones de la página

\`\`\`tsx
// Importa y renderiza todas las secciones en orden
<main>
  <CodeBackground />      {/* Fondo animado */}
  <HeroSection />         {/* Hero principal */}
  <AboutSection />        {/* ¿Qué es AndesTech? */}
  <OfferingsSection />    {/* ¿Qué ofrecemos? */}
  <ActivitiesSection />   {/* Actividades semanales */}
  <EventsSection />       {/* Próximos eventos */}
  <StatsSection />        {/* Estadísticas */}
  <TestimonialsSection /> {/* Testimonios */}
  <StaffSection />        {/* Equipo */}
  <ContactSection />      {/* Contacto */}
  <Footer />              {/* Footer */}
</main>
\`\`\`

**📍 Para modificar:**
- Orden de las secciones
- Agregar/quitar secciones
- Cambiar layout general

---

### 2️⃣ Secciones Individuales (`components/*-section.tsx`)

Cada sección es un componente independiente y reutilizable:

#### **Hero Section** (`components/hero-section.tsx`)
\`\`\`tsx
// Contiene:
- Logo animado con efecto float
- Título principal "AndesTech"
- Descripción
- Botones CTA con animación de cursor
\`\`\`

**📍 Para modificar:**
- Texto del hero
- Botones de acción
- Animaciones del logo

---

#### **About Section** (`components/about-section.tsx`)
\`\`\`tsx
// Contiene:
- Título "¿Qué es AndesTech?"
- 4 características principales en grid:
  * Comunidad Activa
  * Aprendizaje Continuo
  * Networking
  * Innovación
\`\`\`

**📍 Para modificar:**
- Características de la comunidad
- Iconos y descripciones
- Layout del grid

---

#### **Events Section** (`components/events-section.tsx`)
\`\`\`tsx
// Contiene:
- Tarjetas de eventos próximos
- Fecha, hora, ubicación
- Botones de registro
- Imágenes de eventos
\`\`\`

**📍 Para modificar:**
- Eventos próximos
- Información de eventos
- Estilos de tarjetas
- Botones de registro

---

#### **Contact Section** (`components/contact-section.tsx`)
\`\`\`tsx
// Contiene:
- Formulario de contacto (nombre, email, mensaje)
- Validación de campos
- Botón de envío con animación
\`\`\`

**📍 Para modificar:**
- Campos del formulario
- Validaciones
- Acción de envío (actualmente placeholder)

---

### 3️⃣ Componentes Visuales Especiales

#### **Code Background** (`components/code-background.tsx`)
\`\`\`tsx
// Efecto visual de fondo con código flotante
// Animación continua de scroll
\`\`\`

**📍 Para modificar:**
- Velocidad de animación
- Opacidad del código
- Tipo de código mostrado

---

#### **Interactive Button** (`components/interactive-button.tsx`)
\`\`\`tsx
// Botón con efectos interactivos:
- Seguimiento magnético del cursor
- Efecto de brillo que sigue al mouse
- Animación de scale en hover
- Efecto de partículas/shine
\`\`\`

**📍 Para modificar:**
- Intensidad del efecto magnético
- Color y tamaño del brillo
- Velocidad de animaciones

---

### 4️⃣ Componentes UI Base (`components/ui/`)

Biblioteca de componentes reutilizables de shadcn/ui:

| Componente | Uso |
|------------|-----|
| `button.tsx` | Botones base con variantes |
| `card.tsx` | Tarjetas para contenido |
| `input.tsx` | Campos de entrada |
| `badge.tsx` | Etiquetas/tags |
| `avatar.tsx` | Imágenes de perfil |

**📍 Para modificar:**
- Estilos base de componentes UI
- Variantes de componentes
- Comportamiento por defecto

---

## 🎨 DISEÑO VISUAL

### Tema y Colores (`app/globals.css`)

\`\`\`css
:root {
  /* 🎨 Colores Principales */
  --background: #0a0f1e;           /* Azul muy oscuro */
  --foreground: #ffffff;           /* Blanco */
  --primary: #00d9ff;              /* Cyan brillante */
  --primary-foreground: #000000;   /* Negro */
  --secondary: #1a2942;            /* Azul oscuro */
  --accent: #00bcd4;               /* Cyan más oscuro */
  
  /* 📏 Bordes */
  --radius: 0.5rem;                /* Radio de bordes */
}
\`\`\`

**📍 Para modificar colores:**
1. Abre `app/globals.css`
2. Modifica las variables CSS en `:root`
3. Los cambios se aplican globalmente

---

### Animaciones (`app/globals.css`)

\`\`\`css
/* Animaciones disponibles: */
@keyframes float { ... }          /* Flotación suave */
@keyframes glow { ... }           /* Brillo pulsante */
@keyframes code-scroll { ... }    /* Scroll de código */
@keyframes shimmer { ... }        /* Efecto shimmer */
@keyframes pulse-glow { ... }     /* Pulso de brillo */
@keyframes slide-up { ... }       /* Entrada desde abajo */
\`\`\`

**📍 Para usar en componentes:**
\`\`\`tsx
className="animate-float"
className="animate-glow"
className="animate-shimmer"
\`\`\`

---

## 🔧 BACKEND / LÓGICA

### Actualmente No Hay Backend

Este proyecto es **100% frontend** (Static Site). No hay:
- ❌ Base de datos
- ❌ API routes
- ❌ Server actions
- ❌ Autenticación

### Para Agregar Backend (Futuro)

Si necesitas agregar funcionalidad backend:

1. **API Routes** (`app/api/`)
\`\`\`
app/
└── api/
    ├── contact/
    │   └── route.ts          # POST /api/contact
    ├── events/
    │   └── route.ts          # GET /api/events
    └── subscribe/
        └── route.ts          # POST /api/subscribe
\`\`\`

2. **Server Actions** (en componentes)
\`\`\`tsx
// components/contact-section.tsx
'use server'

async function submitContact(formData: FormData) {
  // Lógica de servidor
}
\`\`\`

3. **Database** (Supabase/Neon)
\`\`\`
lib/
└── db/
    ├── supabase.ts           # Cliente de Supabase
    ├── queries.ts            # Queries de base de datos
    └── types.ts              # Types de base de datos
\`\`\`

---

## 🚀 Flujo de Modificación

### Ejemplo 1: Cambiar Color Principal

1. Abre `app/globals.css`
2. Cambia `--primary: #00d9ff;` a tu color
3. Guarda y recarga

---

### Ejemplo 2: Agregar Nueva Sección

1. Crea `components/nueva-seccion.tsx`
\`\`\`tsx
export function NuevaSeccion() {
  return (
    <section className="py-20">
      {/* Tu contenido */}
    </section>
  )
}
\`\`\`

2. Importa en `app/page.tsx`
\`\`\`tsx
import { NuevaSeccion } from '@/components/nueva-seccion'
\`\`\`

3. Agrega en el render
\`\`\`tsx
<NuevaSeccion />
\`\`\`

---

### Ejemplo 3: Modificar Evento

1. Abre `components/events-section.tsx`
2. Busca el array de eventos
3. Modifica/agrega evento:
\`\`\`tsx
{
  title: "Nuevo Workshop",
  date: "2025-02-15",
  time: "18:00",
  location: "Centro de Innovación",
  description: "Workshop de Next.js",
  image: "/new-event.jpg"
}
\`\`\`

---

## 📝 Checklist de Modificaciones Comunes

### ✅ Textos y Contenido
- [ ] Hero title → `components/hero-section.tsx`
- [ ] Descripción → `components/about-section.tsx`
- [ ] Eventos → `components/events-section.tsx`
- [ ] Testimonios → `components/testimonials-section.tsx`
- [ ] Footer → `components/footer.tsx`

### ✅ Estilos Visuales
- [ ] Colores → `app/globals.css` (variables CSS)
- [ ] Animaciones → `app/globals.css` (@keyframes)
- [ ] Tipografía → `app/layout.tsx` (fuentes)

### ✅ Imágenes
- [ ] Logo → `public/andes-tech-logo.svg`
- [ ] Eventos → `public/workshop-*.jpg`
- [ ] Equipo → `public/professional-*.png`

### ✅ Componentes UI
- [ ] Botones → `components/ui/button.tsx`
- [ ] Tarjetas → `components/ui/card.tsx`
- [ ] Formularios → `components/ui/input.tsx`

---

## 🎯 Resumen Rápido

| **Quiero modificar...** | **Archivo a editar** |
|-------------------------|----------------------|
| Orden de secciones | `app/page.tsx` |
| Colores del tema | `app/globals.css` |
| Texto del hero | `components/hero-section.tsx` |
| Eventos próximos | `components/events-section.tsx` |
| Equipo/Staff | `components/staff-section.tsx` |
| Formulario contacto | `components/contact-section.tsx` |
| Footer/Links | `components/footer.tsx` |
| Animaciones | `app/globals.css` |
| Efectos de botones | `components/interactive-button.tsx` |

---

## 📚 Recursos Útiles

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com
- **React Icons:** https://react-icons.github.io/react-icons

---

**¿Necesitas ayuda?** Abre un issue o consulta la documentación de Next.js.
**CRÉDITOS MARIA EUGENIA OYARSE. MENDOZA ARGENTINA.
