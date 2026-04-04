"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Home, ExternalLink, Code, Presentation, Calendar, User, Loader2 } from "lucide-react"

interface CharlaInfo {
  titulo: string
  descripcion: string
  speaker?: string
  fecha?: string
  tieneSlides: boolean
  tieneCodigo: boolean
  tags: string[]
}

interface CharlaConCarpeta {
  id: string
  evento: string
  titulo: string
  descripcion: string
  speaker: string
  fecha: string
  duracion: string
  tags: string[]
  tieneSlides: boolean
  tieneCodigo: boolean
  repoUrl: string
}

interface Evento {
  nombre: string
  descripcion: string
  emoji: string
  color: string
}

const EVENTOS: Record<string, Evento> = {
  devcafe: { nombre: "DevCafé", descripcion: "Encuentros de desarrollo", emoji: "☕", color: "#ff6b35" },
  birras: { nombre: "Birras", descripcion: "Infraestructura y redes", emoji: "🍻", color: "#00d9ff" },
  workshop: { nombre: "Workshop", descripcion: "Hands-on y capacitación", emoji: "💻", color: "#a855f7" },
}

const BASE_URL = "https://api.github.com/repos/andestech1/Presentaciones/contents/charlas"

export default function CharlasPage() {
  const [charlas, setCharlas] = useState<CharlaConCarpeta[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [debugLog, setDebugLog] = useState<string[]>([])

  useEffect(() => {
    const cargarCharlas = async () => {
      const todasLasCharlas: CharlaConCarpeta[] = []
      const logs: string[] = []

      for (const [eventoKey, eventoInfo] of Object.entries(EVENTOS)) {
        try {
          const res = await fetch(`${BASE_URL}/${eventoKey}`)
          if (!res.ok) {
            logs.push(`Error fetching ${eventoKey}: ${res.status}`)
            continue
          }
          
          const carpetas = await res.json()
          logs.push(`${eventoKey}: ${carpetas.length} carpetas`)
          
          for (const carpeta of carpetas) {
            if (carpeta.type !== "dir") continue
            
            const nombreCarpeta = carpeta.name
            
            try {
              const readmeRes = await fetch(`${BASE_URL}/${eventoKey}/${nombreCarpeta}/README.md`)
              if (!readmeRes.ok) {
                logs.push(`No README: ${nombreCarpeta}`)
                continue
              }
              
              const readmeText = await readmeRes.text()
              
              const tituloMatch = readmeText.match(/^#\s+(.+)$/m)
              const descMatch = readmeText.match(/^##\s*Descripción\s*\n+([^\n#]+)/i)
              const speakerMatch = readmeText.match(/^##\s*Speaker\s*\n+-?\s*\*?Speaker:\*?\s*(.+)$/im) 
              const fechaMatch = readmeText.match(/(\d{1,2})\s+de\s+(\w+),?\s+(\d{4})/i)
              const tagsMatch = readmeText.match(/^##\s*Tags\s*\n+([^\n#]+)/im)
              const slidesMatch = readmeText.match(/slides\.pdf|slides\.pptx|presentation/i)
              const codigoMatch = readmeText.match(/codigo|código|source|proyecto/i)
              const duracionMatch = readmeText.match(/Duración:\s*(\d+)\s*min/i)

              let fecha = ""
              if (fechaMatch) {
                const meses: Record<string, string> = {
                  "enero": "01", "febrero": "02", "marzo": "03", "abril": "04",
                  "mayo": "05", "junio": "06", "julio": "07", "agosto": "08",
                  "septiembre": "09", "octubre": "10", "noviembre": "11", "diciembre": "12"
                }
                const mes = meses[fechaMatch[2].toLowerCase()] || "01"
                fecha = `${fechaMatch[3]}-${mes}-${fechaMatch[1].padStart(2, "0")}`
              } else {
                const parts = nombreCarpeta.split("-")
                fecha = parts[0] + "-" + (parts[1] || "01") + "-01"
              }

              const duracion = duracionMatch ? duracionMatch[1] + " min" : "45 min"

              todasLasCharlas.push({
                id: nombreCarpeta,
                evento: eventoKey,
                titulo: tituloMatch ? tituloMatch[1].trim() : nombreCarpeta,
                descripcion: descMatch ? descMatch[1].trim() : "Sin descripción",
                speaker: speakerMatch ? speakerMatch[1].trim() : "Por definir",
                fecha: fecha,
                duracion: duracion,
                tags: tagsMatch ? tagsMatch[1].split(",").map((t: string) => t.trim()).filter(Boolean).slice(0, 3) : [],
                tieneSlides: !!slidesMatch,
                tieneCodigo: !!codigoMatch,
                repoUrl: carpeta.html_url,
              })
              logs.push(`✓ ${nombreCarpeta}: ${tituloMatch ? tituloMatch[1].trim() : 'sin título'}`)
            } catch (e) {
              logs.push(`Error reading ${nombreCarpeta}: ${e}`)
              continue
            }
          }
        } catch (e) {
          logs.push(`Error ${eventoKey}: ${e}`)
          continue
        }
      }

      setDebugLog(logs)
      setCharlas(todasLasCharlas)
      setLoading(false)
    }

    cargarCharlas()
  }, [])

  const formatFecha = (fecha: string) => {
    try {
      const date = new Date(fecha)
      return date.toLocaleDateString("es-AR", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    } catch {
      return fecha
    }
  }

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

  const sortedCharlas = [...charlas].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  )

  // Debug: mostrar logs
  console.log("Debug log:", debugLog)

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
              const evento = EVENTOS[charla.evento] || { nombre: charla.evento, emoji: "📁", color: "#888" }
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

                  {charla.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {charla.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatFecha(charla.fecha)}</span>
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
                      href={charla.repoUrl}
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