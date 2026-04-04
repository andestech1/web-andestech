"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Home, ExternalLink, Code, Presentation, Calendar, User, Loader2 } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

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
  path: string
}

const EVENTOS: Record<string, { nombre: string; emoji: string; color: string }> = {
  devcafe: { nombre: "DevCafé", emoji: "☕", color: "#ff6b35" },
  birras: { nombre: "Birras", emoji: "🍻", color: "#00d9ff" },
  workshop: { nombre: "Workshop", emoji: "💻", color: "#a855f7" },
}

export default function CharlasPage() {
  const [charlas, setCharlas] = useState<Charla[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCharlas = async () => {
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN
      
      try {
        const response = await fetch("https://api.github.com/repos/andestech1/Presentaciones/contents/charlas", {
          headers: {
            Accept: "application/vnd.github.v3+json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        })

        if (!response.ok) {
          throw new Error("Error fetching talks")
        }

        const contents = await response.json()
        const talks: Charla[] = []

        for (const evento of contents) {
          if (evento.type !== "dir") continue

          const eventoResponse = await fetch(evento.url, {
            headers: {
              Accept: "application/vnd.github.v3+json",
              ...(token && { Authorization: `Bearer ${token}` }),
            }
          })
          if (!eventoResponse.ok) continue

          const eventoContents = await eventoResponse.json()

          for (const talk of eventoContents) {
            if (talk.type !== "dir") continue

            const readmeUrl = `https://api.github.com/repos/andestech1/Presentaciones/contents/${talk.path}/README.md`
            const readmeResponse = await fetch(readmeUrl, {
              headers: {
                Accept: "application/vnd.github.v3+json",
                ...(token && { Authorization: `Bearer ${token}` }),
              }
            })

            if (!readmeResponse.ok) continue

            const readmeContent = await readmeResponse.json()
            const readmeText = atob(readmeContent.content)

            const tituloMatch = readmeText.match(/^#\s+(.+)$/m)
            const speakerMatch = readmeText.match(/\*\*Speaker:\*\*\s*(.+)/)
            const duracionMatch = readmeText.match(/\*\*Duración:\*\*\s*(.+)/)
            const descMatch = readmeText.match(/^##\s*Descripción\s*\n+([^\n#]+)/im)

            const filesResponse = await fetch(talk.url, {
              headers: {
                Accept: "application/vnd.github.v3+json",
                ...(token && { Authorization: `Bearer ${token}` }),
              }
            })

            let tieneSlides = false
            let tieneCodigo = false

            if (filesResponse.ok) {
              const files = await filesResponse.json()
              tieneSlides = files.some((f: { name: string }) =>
                f.name.endsWith(".pdf") || f.name.endsWith(".ppt") || f.name.endsWith(".pptx")
              )
              tieneCodigo = files.some((f: { name: string }) =>
                f.name === "codigo" || f.name.startsWith("codigo-") || f.name.endsWith(".zip")
              )
            }

            const fechaMatch = talk.name.match(/(\d{4})-(\d{2})/)
            const year = fechaMatch ? fechaMatch[1] : ""
            const month = fechaMatch ? fechaMatch[2] : ""

            const firstParagraph = readmeText.split("\n").find(line => line.length > 20 && !line.startsWith("#") && !line.startsWith("**"))

            talks.push({
              id: talk.name,
              titulo: tituloMatch ? tituloMatch[1] : talk.name,
              descripcion: descMatch ? descMatch[1].trim() : (firstParagraph || "Sin descripción"),
              fecha: `${year}-${month}-01`,
              evento: evento.name,
              speaker: speakerMatch ? speakerMatch[1] : "Por definir",
              duracion: duracionMatch ? duracionMatch[1] : "45 min",
              tags: [],
              tieneSlides,
              tieneCodigo,
              path: talk.path,
            })
          }
        }

        setCharlas(talks.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()))
      } catch (e) {
        setError("Error cargando las presentaciones")
        console.error(e)
      } finally {
        setLoading(false)
      }
    }

    fetchCharlas()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Cargando presentaciones...</p>
        </div>
      </div>
    )
  }

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

          {error && (
            <div className="text-center py-12 text-destructive">
              <p>{error}</p>
            </div>
          )}

          {!error && charlas.length === 0 && (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">No hay presentaciones disponibles aún.</p>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {charlas.map((charla) => {
              const evento = EVENTOS[charla.evento] || { nombre: charla.evento, emoji: "📁", color: "#888" }
              const githubUrl = `https://github.com/andestech1/Presentaciones/tree/main/${charla.path}`
              
              return (
                <Card
                  key={`${charla.evento}-${charla.id}`}
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

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(charla.fecha), "MMM yyyy", { locale: es })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span className="truncate">{charla.speaker}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                    {charla.tieneSlides && (
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Presentation className="w-4 h-4" />
                        Slides
                      </span>
                    )}
                    {charla.tieneCodigo && (
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Code className="w-4 h-4" />
                        Código
                      </span>
                    )}
                    <a
                      href={githubUrl}
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
        </div>
      </section>
    </div>
  )
}