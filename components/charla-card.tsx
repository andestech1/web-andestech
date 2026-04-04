"use client"

import { FileCode, Calendar, Download, Github, FileText, Eye } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useState } from "react"

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
    slidesUrl?: string
    slidesName?: string
  }
  evento: {
    nombre: string
    emoji: string
    color: string
  }
}

export function CharlaCard({ charlar, evento }: CharlaCardProps) {
  const [showPreview, setShowPreview] = useState(false)
  const githubUrl = `https://github.com/andestech1/Presentaciones/tree/main/${charlar.path}`
  
  const isPdf = charlar.slidesName?.toLowerCase().endsWith(".pdf")

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

      {charlar.tieneSlides && (
        <div className="relative h-40 bg-muted/30 border-b border-border">
          {showPreview && charlar.slidesUrl ? (
            isPdf ? (
              <iframe
                src={charlar.slidesUrl}
                className="w-full h-full"
                title="Preview"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <FileText className="w-16 h-16" />
              </div>
            )
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-2">
              <FileText className="w-12 h-12 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{charlar.slidesName}</span>
              <button
                onClick={() => setShowPreview(true)}
                className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs rounded-lg transition-colors"
              >
                <Eye className="w-3 h-3" />
                Previsualizar
              </button>
            </div>
          )}
          {showPreview && (
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-2 right-2 p-1 bg-background/80 rounded-lg text-xs hover:bg-background"
            >
              ✕
            </button>
          )}
        </div>
      )}

      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
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

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {charlar.descripcion}
        </p>

        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span>{charlar.speaker}</span>
          <span>•</span>
          <span>{charlar.duracion}</span>
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-border">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-primary text-sm font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            Ver en GitHub
          </a>
          {charlar.tieneSlides && charlar.slidesUrl && (
            <a
              href={charlar.slidesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary/50 hover:bg-secondary rounded-lg text-secondary-foreground transition-colors"
              title="Descargar slides"
            >
              <Download className="w-4 h-4" />
            </a>
          )}
          {charlar.tieneCodigo && (
            <div className="p-2 bg-secondary/50 rounded-lg text-secondary-foreground" title="Código disponible">
              <FileCode className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}