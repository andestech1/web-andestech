"use client"

import { Button } from "@/components/ui/button"
import { ImageIcon } from "lucide-react"

export function EventsSection() {
  return (
    <section id="eventos" className="relative py-12 sm:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
            Próximos <span className="text-primary">Eventos</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Unite a nuestros eventos y conecta con la comunidad tech de los Andes
          </p>
        </div>

        <div className="flex justify-center mb-6 sm:mb-12">
          <div className="w-full max-w-4xl rounded-lg overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(0,217,255,0.15)]">
            <iframe
              src="https://lu.ma/embed/calendar/cal-smEsB0CfhTQVtoo/events"
              width="100%"
              height="350"
              frameBorder="0"
              style={{ border: "none", borderRadius: "8px", background: "transparent" }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              className="min-h-[300px] sm:min-h-[400px]"
            />
          </div>
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("https://photos.google.com/albums", "_blank")}
            className="w-full sm:w-auto border-primary/50 hover:bg-primary/10 hover-lift bg-transparent"
          >
            <ImageIcon className="w-5 h-5 mr-2" />
            Ver Galeria de Eventos
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("https://lu.ma/andestech", "_blank")}
            className="w-full sm:w-auto border-primary/50 hover:bg-primary/10 hover-lift bg-transparent"
          >
            Ver Todos los Eventos
          </Button>
        </div>
      </div>
    </section>
  )
}
