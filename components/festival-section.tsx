"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Award, ChevronRight, ImageIcon } from "lucide-react"
import Link from "next/link"

export function FestivalSection() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-primary/5 to-background" id="festival">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 rounded-full mb-3 sm:mb-4">
            <span className="text-primary font-semibold text-sm sm:text-base">Evento Principal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-balance px-2">
            <span className="text-primary">AndesTech</span> Festival
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-2">
            El evento tecnológico más grande del oeste argentino. Una o dos veces al año reunimos a toda la comunidad
            tech.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Hero Card */}
          <Card className="mb-8 overflow-hidden border-primary/30 bg-gradient-to-br from-card to-card/50">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ANDES%20TECH%20PRINCIPAL-Jm0xMOHAMArTNGKVHz25NwLG6M8bS4.jpeg"
                  alt="AndesTech Festival"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:hidden" />
              </div>
              <div className="p-5 sm:p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Próxima Edición 2026</h3>
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span>Fecha a confirmar - Segundo semestre 2026</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span>Mendoza, Argentina</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span>+1500 asistentes esperados</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    disabled
                    className="cursor-not-allowed opacity-70"
                  >
                    Próximamente más información
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {[
              { label: "Charlas", value: "20+" },
              { label: "Speakers", value: "30+" },
              { label: "Workshops", value: "8" },
              { label: "Horas", value: "12" },
            ].map((stat, index) => (
              <Card key={index} className="p-4 sm:p-6 text-center bg-gradient-to-br from-primary/10 to-card border-primary/30">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Previous Editions */}
          <Card className="p-4 sm:p-8 bg-card/50 border-primary/30">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold">Ediciones Anteriores</h3>
              <Link href="/festival#ediciones" className="text-primary hover:text-primary/80 flex items-center gap-2">
                Ver todas
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  year: "2024",
                  attendees: "500+",
                  talks: "18",
                  image: "/tech-conference-audience.png",
                },
                {
                  year: "2023",
                  attendees: "350+",
                  talks: "15",
                  image: "/tech-meetup-casual.jpg",
                },
                {
                  year: "2022",
                  attendees: "200+",
                  talks: "12",
                  image: "/developers-coding-together.jpg",
                },
              ].map((edition, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                    <img
                      src={edition.image || "/placeholder.svg"}
                      alt={`Festival ${edition.year}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                    <div className="absolute bottom-2 left-2">
                      <span className="text-2xl font-bold text-primary">{edition.year}</span>
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {edition.attendees}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {edition.talks} charlas
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Gallery Link */}
          <div className="mt-8 text-center">
            <Button size="lg" variant="outline" asChild className="group bg-transparent">
              <Link href="/galeria">
                <ImageIcon className="w-5 h-5 mr-2" />
                Ver Galería de Fotos
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
