"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Full Stack Developer",
    company: "TechCorp",
    content:
      "AndesTech ha sido fundamental en mi crecimiento profesional. Los eventos y el networking me han abierto muchas puertas.",
    avatar: "/avatar-maria.png",
  },
  {
    name: "Carlos Rodríguez",
    role: "UX Designer",
    company: "DesignLab",
    content:
      "La comunidad es increíble. Siempre hay alguien dispuesto a ayudar y compartir conocimientos. Los workshops son de primer nivel.",
    avatar: "/avatar-carlos.png",
  },
  {
    name: "Ana Martínez",
    role: "Frontend Developer",
    company: "StartupXYZ",
    content:
      "Encontré mi primer trabajo gracias a las conexiones que hice en AndesTech. Es más que una comunidad, es una familia tech.",
    avatar: "/avatar-ana.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-12 sm:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
            Lo que Dicen Nuestros <span className="text-primary">Miembros</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Historias reales de personas que han crecido con nuestra comunidad
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-5 sm:p-8 hover-lift relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 text-primary/20 group-hover:text-primary/40 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/50 flex items-center justify-center text-lg sm:text-2xl font-bold text-primary flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-base sm:text-lg">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
