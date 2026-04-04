"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Home, ExternalLink, Code, Presentation, Calendar, User, Tag } from "lucide-react"

interface Charla {
  id: string
  titulo: string
  descripcion: string
  fecha: string
  evento: string
  speaker: string
  duracion: string
  tags: string[]
  tieneSlides: boolean
  tieneCodigo: boolean
}

interface Evento {
  nombre: string
  descripcion: string
  emoji: string
  color: string
}

interface Manifest {
  charlas: Charla[]
  eventos: Record<string, Evento>
}

export default function CharlasPage() {
  const [manifest, setManifest] = useState<Manifest | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/andestech1/Presentaciones/main/charlas/manifest.json")
      .then((res) => res.json())
      .then((data) => {
        setManifest(data)
        setLoading(false)
      })
      .catch(() => {
        setError("Error al cargar las presentaciones")
        setLoading(false)
      })
  }, [])

  const getEventoInfo = (eventoKey: string) => {
    return manifest?.eventos[eventoKey] || { nombre: eventoKey, emoji: "📁", color: "#888" }
  }

  const formatFecha = (fecha: string) => {
    const date = new Date(fecha)
    return date.toLocaleDateString("es-AR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Cargando presentaciones...</p>
        </div>
      </div>
    )
  }

  if (error || !manifest) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center">
          <p className="text-destructive">{error || "Error al cargar"}</p>
        </Card>
      </div>
    )
  }

  const sortedCharlas = [...manifest.charlas].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  )

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
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-primary">Presentaciones</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Explorá las Charlas y Workshops que compartimos en nuestros eventos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCharlas.map((charla) => {
              const evento = getEventoInfo(charla.evento)
              return (
                <Card
                  key={charla.id}
                  className="p-6 bg-card/50 border-border hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: `${evento.color}20`, color: evento.color }}
                    >
                      {evento.emoji} {evento.nombre}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{charla.titulo}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                    {charla.descripcion}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {charla.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatFecha(charla.fecha)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{charla.speaker}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                    {charla.tieneSlides && (
                      <a
                        href={`https://github.com/andestech1/Presentaciones/tree/main/charlas/${charla.evento}/${charla.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        <Presentation className="w-4 h-4" />
                        Slides
                      </a>
                    )}
                    {charla.tieneCodigo && (
                      <a
                        href={`https://github.com/andestech1/Presentaciones/tree/main/charlas/${charla.evento}/${charla.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        <Code className="w-4 h-4" />
                        Código
                      </a>
                    )}
                    <a
                      href={`https://github.com/andestech1/Presentaciones/tree/main/charlas/${charla.evento}/${charla.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary ml-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              )
            })}
          </div>

          {sortedCharlas.length === 0 && (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">No hay presentaciones disponibles aún.</p>
            </Card>
          )}
        </div>
      </section>
    </div>
  )
}