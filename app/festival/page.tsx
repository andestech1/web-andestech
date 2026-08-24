"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Calendar, MapPin, Users, Award, ImageIcon } from "lucide-react"

export default function FestivalPage() {
  const editions = [
    {
      year: "2025",
      date: "Segundo semestre de 2025",
      venue: "Nave Cultural · Las Cubas 201, Ciudad de Mendoza",
      attendees: "600+",
      talks: 20,
      workshops: 8,
      speakers: 30,
      image: "/festival-2025.jpg",
      highlights: ["Charlas técnicas y keynotes", "Workshops prácticos", "Networking y aprendizaje"],
    },
    {
      year: "2024",
      date: "15-16 Septiembre 2024",
      attendees: "500+",
      talks: 18,
      workshops: 6,
      speakers: 25,
      image: "/festival-2024.jpg",
      highlights: ["Keynote de líder tech internacional", "Hackathon de 24 horas", "Networking dinner"],
    },
    {
      year: "2023",
      date: "8-9 Julio 2023",
      attendees: "350+",
      talks: 15,
      workshops: 5,
      speakers: 20,
      image: "/tech-meetup-casual.jpg",
      highlights: ["Panel sobre IA y ML", "Workshop de React", "Job fair con empresas locales"],
    },
    {
      year: "2022",
      date: "25-26 Noviembre 2022",
      attendees: "200+",
      talks: 12,
      workshops: 4,
      speakers: 15,
      image: "/developers-coding-together.jpg",
      highlights: ["Primera edición del festival", "Charlas sobre Cloud Computing", "Sponsors locales"],
    },
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Full Stack Developer",
      comment:
        "El AndesTech Festival fue increíble. Aprendí muchísimo y conocí personas talentosas que ahora son parte de mi red profesional.",
    },
    {
      name: "Juan Pérez",
      role: "DevOps Engineer",
      comment:
        "Los workshops fueron de primer nivel. La organización fue impecable y el ambiente muy profesional y amigable.",
    },
    {
      name: "Laura Martínez",
      role: "UX Designer",
      comment:
        "Una experiencia única en Mendoza. El nivel de las charlas superó mis expectativas y la comunidad es muy acogedora.",
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
          <div className="flex items-center gap-3">
            <Image src="/andestech-logo.jpg" alt="AndesTech Logo" width={40} height={40} className="object-contain" />
            <span className="text-xl font-bold">AndesTech Festival</span>
          </div>
          <div className="w-32" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
              <span className="text-primary font-semibold">Evento Principal del Año</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              <span className="text-primary">AndesTech</span> Festival
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              La semana más grande de la comunidad tech de Mendoza. Empezamos en las universidades, tomamos
              relevancia institucional en la Legislatura y culminamos celebrando en grande en Espacio Arizu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" disabled className="text-lg cursor-not-allowed opacity-70">
                Próximamente: agenda e inscripciones
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg bg-transparent">
                <Link href="/galeria">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Ver Galería
                </Link>
              </Button>
            </div>
          </div>

          {/* Next Edition Info */}
          <Card className="max-w-5xl mx-auto p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-primary/30">
            <h2 className="text-3xl font-bold mb-6 text-center">Andes Tech Festival 2026</h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8 text-pretty">
              Una experiencia de cinco días para estudiantes, profesionales, empresas, makers y curiosos de la
              tecnología. Habrá contenidos de informática, IA, electrónica, infraestructura, Web3 y desarrollo de
              carrera.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Fecha</div>
                    <div className="text-muted-foreground">Del 13 al 17 de octubre</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Sedes</div>
                    <div className="text-muted-foreground">
                      UTN, Universidad Champagnat, Universidad de Mendoza, Legislatura y Espacio Arizu
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Asistentes Esperados</div>
                    <div className="text-muted-foreground">Meta: +500 participantes durante la semana</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">13 al 15 de octubre</div>
                    <div className="text-muted-foreground">
                      Jornadas de charlas en UTN, Universidad Champagnat y Universidad de Mendoza sobre desarrollo,
                      IA, electrónica, infraestructura y carrera profesional
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">16 de octubre</div>
                    <div className="text-muted-foreground">
                      Apertura institucional en la Legislatura de Mendoza, con reconocimientos y posicionamiento de
                      la comunidad
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">17 de octubre</div>
                    <div className="text-muted-foreground">
                      Festival central multi-escenario en Espacio Arizu con charlas, talleres, comunidades, stands,
                      foodtrucks y actividades para todas las edades
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Previous Editions */}
      <section className="py-20 px-4" id="ediciones">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Ediciones Anteriores</h2>
          <div className="max-w-6xl mx-auto space-y-12">
            {editions.map((edition, index) => (
              <Card key={index} className="overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/30">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    {edition.image ? (
                      <img
                        src={edition.image}
                        alt={`Festival ${edition.year}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-card flex items-center justify-center px-6 text-center">
                        <span className="text-xl font-semibold text-primary">Nave Cultural · Mendoza</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <span className="text-2xl font-bold">{edition.year}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">AndesTech Festival {edition.year}</h3>
                    <p className="text-muted-foreground mb-1">{edition.date}</p>
                    {edition.venue && <p className="text-muted-foreground mb-4">{edition.venue}</p>}

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{edition.attendees}</div>
                        <div className="text-sm text-muted-foreground">Asistentes</div>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{edition.talks}</div>
                        <div className="text-sm text-muted-foreground">Charlas</div>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{edition.workshops}</div>
                        <div className="text-sm text-muted-foreground">Workshops</div>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{edition.speakers}</div>
                        <div className="text-sm text-muted-foreground">Speakers</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Highlights:</h4>
                      <ul className="space-y-1">
                        {edition.highlights.map((highlight, i) => (
                          <li key={i} className="text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Lo Que Dicen los Asistentes</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card/50 border-primary/30">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-3xl mx-auto p-12 bg-gradient-to-br from-primary/10 to-card border-primary/30">
            <h2 className="text-3xl font-bold mb-4">¿Listo para ser parte del próximo festival?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              La agenda, los speakers y las inscripciones se anunciarán próximamente.
            </p>
            <Button size="lg" disabled className="text-lg cursor-not-allowed opacity-70">
              Próximamente
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}
