"use client"

import { Users, Calendar, Code, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "1000+",
    label: "Miembros Activos",
    description: "Desarrolladores ingenieros, estudiantes y entusiastas tech, ",
  },
  {
    icon: Calendar,
    value: "50+",
    label: "Eventos Realizados",
    description: "Workshops, meetups y conferencias",
  },
  {
    icon: Code,
    value: "10+",
    label: "Proyectos Colaborativos",
    description: "Expuestos en nuestros eventos sociales",
  },
  {
    icon: Award,
    value: "60+",
    label: "Speakers Invitados",
    description: "Expertos de la industria tech",
  },
]

export function StatsSection() {
  return (
    <section className="relative py-12 sm:py-24 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
            Nuestra <span className="text-primary">Comunidad</span> en Números
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Creciendo juntos y construyendo el futuro de la tecnología en el oeste de la Argentina
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-4 sm:p-8 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 border border-primary/30 mb-3 sm:mb-4 group-hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">{stat.label}</div>
                <div className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
