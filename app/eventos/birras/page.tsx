"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react"

export default function BirrasPage() {
  const pastEditions = [
    {
      date: "15 de Diciembre 2024",
      topic: "Kubernetes en producción",
      attendees: 45,
      image: "/birras-event.jpg",
    },
    {
      date: "20 de Noviembre 2024",
      topic: "Cloud Computing con AWS",
      attendees: 38,
      image: "/tech-meetup-casual.jpg",
    },
    {
      date: "18 de Octubre 2024",
      topic: "DevOps: CI/CD pipelines",
      attendees: 42,
      image: "/developers-coding-together.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Home className="w-5 h-5" />
            <span className="font-semibold">Volver al Inicio</span>
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-primary">/birras</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">Infraestructura & Telecomunicaciones</p>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Encuentros informales donde discutimos sobre infraestructura, cloud computing, networking y
              telecomunicaciones. Un espacio relajado para compartir experiencias y aprender de otros profesionales del
              área.
            </p>
          </div>

          <Card className="p-8 mb-8 bg-gradient-to-br from-primary/10 to-card border-primary/30">
            <h2 className="text-3xl font-bold mb-6">Próxima Edición</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="font-semibold">Fecha</div>
                  <div className="text-muted-foreground">Viernes 24 de Enero 2025</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="font-semibold">Horario</div>
                  <div className="text-muted-foreground">19:00 - 22:00 hs</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="font-semibold">Lugar</div>
                  <div className="text-muted-foreground">A confirmar - Mendoza, Argentina</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="font-semibold">Tema</div>
                  <div className="text-muted-foreground">Microservicios y Service Mesh</div>
                </div>
              </div>
            </div>
            <Button
              size="lg"
              onClick={() => window.open("https://lu.ma/andestech-birras", "_blank")}
              className="w-full sm:w-auto"
            >
              Registrarme en Luma
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          <div>
            <h2 className="text-3xl font-bold mb-6">Ediciones Pasadas</h2>
            <div className="space-y-6">
              {pastEditions.map((edition, index) => (
                <Card key={index} className="p-6 bg-card/50 border-border hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={edition.image || "/placeholder.svg"}
                        alt={edition.topic}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary mb-1">{edition.date}</div>
                      <h3 className="text-xl font-bold mb-2">{edition.topic}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{edition.attendees} asistentes</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
