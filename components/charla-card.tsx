"use client"

import { FileCode, Calendar, Download, Github } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

interface CharlaCardProps {
  charlar: {
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
  evento: {
    nombre: string
    emoji: string
    color: string
  }
}

export function CharlaCard({ charlar, evento }: CharlaCardProps) {
  const githubUrl = `https://github.com/andestech1/Presentaciones/tree/main/${charlar.path}`

  return (
    <div
      className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all"
      style={{
        boxShadow: `0 0 0 1px ${evento.color}20, 0 4px 20px ${evento.color}10`
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: evento.color }}
      />

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
            style={{ backgroundColor: `${evento.color}20` }}
          >
            {evento.emoji}
          </div>
          <div>
            <span className="text-sm font-medium" style={{ color: evento.color }}>
              {evento.nombre}
            </span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {format(new Date(charlar.fecha), "MMM yyyy", { locale: es })}
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {charlar.titulo}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {charlar.descripcion}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span>{charlar.speaker}</span>
          <span>•</span>
          <span>{charlar.duracion}</span>
        </div>

        {charlar.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {charlar.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-primary text-sm font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            Ver en GitHub
          </a>
          {charlar.tieneSlides && (
            <button
              className="flex items-center justify-center gap-2 px-3 py-2 bg-secondary/50 hover:bg-secondary rounded-lg text-secondary-foreground text-sm transition-colors"
              title="Descargar slides"
            >
              <Download className="w-4 h-4" />
            </button>
          )}
          {charlar.tieneCodigo && (
            <button
              className="flex items-center justify-center gap-2 px-3 py-2 bg-secondary/50 hover:bg-secondary rounded-lg text-secondary-foreground text-sm transition-colors"
              title="Ver código"
            >
              <FileCode className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}