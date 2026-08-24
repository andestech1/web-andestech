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
            Cinco días para aprender, compartir y celebrar con la comunidad tecnológica de Mendoza.
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
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                  La semana más grande de la comunidad tech de Mendoza
                </h3>
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span>Del 13 al 17 de octubre · cinco días para aprender, colaborar y celebrar</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span>UTN → Champagnat → Universidad de Mendoza → Legislatura → Espacio Arizu</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span>Charlas, talleres, comunidades, stands, foodtrucks y experiencias maker</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/festival">Conocé el Festival 2026</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
              { label: "Días de comunidad", value: "5" },
              { label: "Sedes", value: "5" },
              { label: "Ejes de contenido", value: "6" },
              { label: "Festival central", value: "1" },
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
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  year: "2025",
                  attendees: "600+",
                  talks: "20+",
                  venue: "Nave Cultural · Mendoza",
                  image: "/festival-2025.jpg",
                },
                {
                  year: "2024",
                  attendees: "500+",
                  talks: "18",
                  image: "/festival-2024.jpg",
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
                    {edition.image ? (
                      <img
                        src={edition.image}
                        alt={`Festival ${edition.year}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-card flex items-center justify-center px-4 text-center">
                        <span className="text-sm font-semibold text-primary">AndesTech Festival</span>
                      </div>
                    )}
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
                    {edition.venue && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edition.venue}
                      </span>
                    )}
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
