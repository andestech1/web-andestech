"use client"

import { Button } from "@/components/ui/button"
import { ImageIcon } from "lucide-react"

export function EventsSection() {
  return (
    <section id="eventos" className="relative mt-4 border-t border-primary/30 bg-card/20 py-12 sm:mt-8 sm:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
            Próximos <span className="text-primary">eventos de la comunidad</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Encontrá encuentros, charlas y actividades para conectar con la comunidad tech de Mendoza.
          </p>
        </div>

        <div className="flex justify-center mb-6 sm:mb-12">
          <div className="w-full max-w-4xl rounded-lg overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(0,217,255,0.15)]">
            <iframe
              src="https://lu.ma/embed/calendar/cal-smEsB0CfhTQVtoo/events"
              width="100%"
              height="440"
              frameBorder="0"
              allowFullScreen
              title="Calendario de próximos eventos de la comunidad AndesTech"
              className="min-h-[440px] rounded-lg border-0 bg-transparent sm:min-h-[500px]"
            />
          </div>
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("https://photos.google.com/albums", "_blank")}
            className="min-h-11 w-full sm:w-auto border-primary/50 hover:bg-primary/10 hover-lift bg-transparent"
          >
            <ImageIcon className="w-5 h-5 mr-2" />
            Ver Galería de Ediciones Anteriores
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("https://lu.ma/andestech", "_blank")}
            className="min-h-11 w-full sm:w-auto border-primary/50 hover:bg-primary/10 hover-lift bg-transparent"
          >
            Ver Agenda de la Comunidad
          </Button>
        </div>
        
        <div className="mt-10 sm:mt-16 text-center">
          <div className="p-5 sm:p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">¿Buscas las charlas anteriores?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 text-pretty">
              Entra a este apartado para ver el repositorio con todas nuestras charlas
            </p>
            <a
              href="https://github.com/andestech1/Presentaciones/tree/main/charlas"
              className="mt-6 inline-flex min-h-11 items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm sm:text-base hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Charlas
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
