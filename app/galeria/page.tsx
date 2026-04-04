"use client"
import { X, ChevronLeft, ChevronRight, Home } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const galleryImages = [
  {
    url: "/tech-conference-audience.png",
    title: "Festival AndesTech 2024",
    description: "Más de 500 asistentes disfrutaron de charlas y workshops",
  },
  {
    url: "/developers-coding-together.jpg",
    title: "Hackathon AndesTech",
    description: "Equipos trabajando en soluciones innovadoras",
  },
  {
    url: "/tech-meetup-casual.jpg",
    title: "/birras - Networking",
    description: "Conectando desarrolladores en un ambiente relajado",
  },
  {
    url: "/workshop-react.jpg",
    title: "Workshop React",
    description: "Aprendiendo las últimas tecnologías frontend",
  },
  {
    url: "/birras-event.jpg",
    title: "Comunidad AndesTech",
    description: "Miembros activos compartiendo conocimiento",
  },
  {
    url: "/devcafe-event.jpg",
    title: "DevCafé",
    description: "Charlas técnicas con café",
  },
  {
    url: "/tech-conference-keynote-speaker-on-stage.jpg",
    title: "Keynote Speaker",
    description: "Charla magistral en el Festival 2024",
  },
  {
    url: "/developers-networking-at-tech-event.jpg",
    title: "Networking Session",
    description: "Conexiones profesionales durante el break",
  },
  {
    url: "/workshop-participants-coding-together.jpg",
    title: "Workshop Colaborativo",
    description: "Aprendiendo en equipo durante workshops",
  },
  {
    url: "/tech-community-group-photo-happy-people.jpg",
    title: "Foto Grupal 2024",
    description: "La comunidad AndesTech reunida",
  },
  {
    url: "/tech-expo-booths-sponsors.jpg",
    title: "Expo de Sponsors",
    description: "Empresas tech presentando sus proyectos",
  },
  {
    url: "/panel-discussion-tech-experts.jpg",
    title: "Panel de Expertos",
    description: "Discusión sobre el futuro de la tecnología",
  },
]

export default function GaleriaPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "Escape") setIsFullscreen(false)
    }
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentIndex])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Home className="w-5 h-5" />
            <span className="font-semibold">Volver al Inicio</span>
          </Link>
          <div className="flex items-center gap-3">
            <Image src="/andestech-logo.jpg" alt="AndesTech Logo" width={40} height={40} className="object-contain" />
            <h1 className="text-2xl font-bold">
              Galería de <span className="text-primary">Eventos</span>
            </h1>
          </div>
          <div className="w-32" />
        </div>
      </header>

      {/* Main Gallery Section */}
      <section className="container mx-auto px-4 py-12">
        {/* Main Image Display */}
        <div className="relative bg-card border border-border rounded-lg overflow-hidden mb-8 group">
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <img
              src={galleryImages[currentIndex].url || "/placeholder.svg"}
              alt={galleryImages[currentIndex].title}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsFullscreen(true)}
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-3 rounded-full border border-primary/50 hover:bg-primary/20 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-3 rounded-full border border-primary/50 hover:bg-primary/20 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Image Info */}
          <div className="p-6 bg-gradient-to-t from-card to-card/50">
            <h2 className="text-2xl font-bold mb-2">{galleryImages[currentIndex].title}</h2>
            <p className="text-muted-foreground">{galleryImages[currentIndex].description}</p>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                currentIndex === index ? "border-primary shadow-[0_0_20px_rgba(0,217,255,0.5)]" : "border-border"
              }`}
            >
              <img src={image.url || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
              {currentIndex === index && (
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Keyboard Instructions */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Usa las teclas ←/→ para navegar | Haz clic en una imagen para verla en pantalla completa</p>
        </div>
      </section>

      {/* Fullscreen View */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-lg flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm p-3 rounded-full border border-primary/50 hover:bg-primary/20 transition-all"
            aria-label="Cerrar pantalla completa"
          >
            <X className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-4 rounded-full border border-primary/50 hover:bg-primary/20 transition-all"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-8 h-8 text-primary" />
          </button>

          <div className="max-w-7xl max-h-[90vh] px-20">
            <img
              src={galleryImages[currentIndex].url || "/placeholder.svg"}
              alt={galleryImages[currentIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-4 rounded-full border border-primary/50 hover:bg-primary/20 transition-all"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-8 h-8 text-primary" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-xl font-bold mb-1">{galleryImages[currentIndex].title}</h3>
            <p className="text-muted-foreground">{galleryImages[currentIndex].description}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {currentIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
