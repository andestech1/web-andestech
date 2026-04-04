"use client"

import { useEffect, useState } from "react"
import { CodeBackground } from "@/components/code-background"
import { CharlaCard } from "@/components/charla-card"
import { Presentation } from "lucide-react"

const EVENTOS: Record<string, { nombre: string; emoji: string; color: string }> = {
  all: { nombre: "Todas", emoji: "🎯", color: "#00d9ff" },
  devcafe: { nombre: "DevCafé", emoji: "☕", color: "#ff6b35" },
  birras: { nombre: "Birras", emoji: "🍻", color: "#00d9ff" },
  workshop: { nombre: "Workshop", emoji: "💻", color: "#a855f7" },
}

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

async function fetchCharlas(): Promise<Charla[]> {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN

  const response = await fetch("https://api.github.com/repos/andestech1/Presentaciones/contents/charlas", {
    headers: {
      Accept: "application/vnd.github.v3+json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    next: { revalidate: 3600 }
  })

  if (!response.ok) {
    if (response.status === 404) return []
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
        speaker: speakerMatch ? speakerMatch[1] : "Speaker anónimo",
        duracion: duracionMatch ? duracionMatch[1] : "45 min",
        tags: [],
        tieneSlides,
        tieneCodigo,
        path: talk.path,
      })
    }
  }

  return talks.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
}

export function CharlasSection() {
  const [charlas, setCharlas] = useState<Charla[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchCharlas()
      .then(setCharlas)
      .catch(() => setError("Error cargando las presentaciones"))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="relative min-h-screen pt-20 pb-12 sm:pb-24 px-4">
      <CodeBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Presentaciones <span className="text-primary animate-glow">AndesTech</span>
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Accedé al material, slides y código de las charlas de nuestros eventos
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-destructive">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && charlas.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Presentation className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No hay presentaciones disponibles aún</p>
            <p className="text-sm mt-2">Revisa el repositorio para agregar nuevas presentaciones</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {charlas.map((charla) => {
            const evento = EVENTOS[charla.evento as keyof typeof EVENTOS] || EVENTOS.all
            return <CharlaCard key={charla.id} charlar={charla} evento={evento} />
          })}
        </div>
      </div>
    </section>
  )
}