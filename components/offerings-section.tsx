import { Card } from "@/components/ui/card"
import { BookOpen, Network, Briefcase } from "lucide-react"

export function OfferingsSection() {
  const offerings = [
    {
      icon: BookOpen,
      title: "Compartir Conocimiento.",
      description:
        "Talleres y workshops sobre las últimas tecnologías, frameworks y herramientas del desarrollo moderno.",
    },
    {
      icon: Network,
      title: "Networking Profesional",
      description:
        "Conecta con profesionales, comparte experiencias y construye relaciones duraderas en la industria tech.",
    },
    {
      icon: Briefcase,
      title: "Oportunidades Laborales",
      description: "Accede a ofertas de trabajo, proyectos colaborativos y oportunidades de crecimiento profesional.",
    },
  ]

  return (
    <section className="py-12 sm:py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance px-2">
            ¿Qué <span className="text-primary">Ofrecemos</span>?
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-2">
            AndesTech es más que una comunidad, es un ecosistema de crecimiento tecnológico
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {offerings.map((offering, index) => (
            <Card
              key={index}
              className="p-5 sm:p-8 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_40px_rgba(0,217,255,0.2)]"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <offering.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4 text-center">{offering.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground text-center text-pretty">{offering.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
