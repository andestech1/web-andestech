import { Card } from "@/components/ui/card"
import { Code2, Users, Lightbulb, Calendar } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Code2,
      title: "Inclusión en la comunidad tech",
      description: "Generamos espacios abiertos para que más personas puedan acercarse al mundo de la tecnología, aprender, compartir y formar parte de la comunidad.",
    },
    {
      icon: Users,
      title: "Networking",
      description: "Conecta con profesionales y entusiastas de la tecnología en tu región.",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Descubre nuevas ideas y proyectos que están transformando la industria.",
    },
    {
      icon: Calendar,
      title: "Eventos Regulares Sociales",
      description: "Participa en meetups, talleres y conferencias organizadas por la comunidad.",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance px-2">
            ¿Qué es <span className="text-primary">AndesTech</span>?
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-2">
            AndesTech es una comunidad donde la tecnología se aprende y se comparte. Nos juntamos a conversar, experimentar y conectar con otras personas del mundo tech, siempre en un ambiente abierto, colaborativo y buena onda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-5 sm:p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground text-pretty">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
