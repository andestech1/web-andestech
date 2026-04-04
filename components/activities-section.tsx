import { Card } from "@/components/ui/card"
import { Coffee, Beer, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ActivitiesSection() {
  const activities = [
    {
      icon: Beer,
      title: "/Birras",
      subtitle: "Infraestructura & Telco",
      description: "Encuentros de la comunidad de infraestructura donde compartimos experiencias sobre redes, cloud, telecomunicaciones y operaciones reales en producción, en un ambiente distendido.",
      slug: "birras",
    },
    {
      icon: Coffee,
      title: "DevCafé",
      subtitle: "Desarrollo de software",
      description: "Un espacio para la comunidad dev donde exploramos nuevas herramientas, compartimos proyectos y aprendemos sobre programación, arquitectura y tecnologías emergentes.",
      slug: "devcafe",
    },
  ]

  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance px-2">
            ¿Qué <span className="text-primary">Hacemos</span>?
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-2">
            Espacios de networking y formación en diversas áreas tecnológicas
          </p>
        </div>

        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Actividades Semanales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
            {activities.map((activity, index) => (
              <Link key={index} href={`/eventos/${activity.slug}`}>
                <Card className="h-full p-5 sm:p-8 bg-gradient-to-br from-card to-card/50 border-primary/30 hover:border-primary/60 transition-all hover:shadow-[0_0_40px_rgba(0,217,255,0.3)] cursor-pointer group">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <activity.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl sm:text-2xl font-bold text-primary mb-1">{activity.title}</h4>
                      <p className="text-xs sm:text-sm text-primary/70">{activity.subtitle}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground text-pretty">{activity.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <Card className="p-6 sm:p-12 bg-gradient-to-br from-primary/10 to-card border-primary/30 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Nuestra Misión</h3>
          <p className="text-base sm:text-lg text-muted-foreground text-center text-pretty leading-relaxed">
            Construir una comunidad y un formato de eventos que reúnan personas, recursos y experiencias alrededor de la tecnología, promoviendo espacios de aprendizaje, colaboración e intercambio bajo valores de respeto mutuo y tolerancia.
Además, buscamos visibilizar el talento tecnológico del interior del país y potenciar a nuestra región como un polo de innovación.
          </p>
        </Card>
      </div>
    </section>
  )
}
