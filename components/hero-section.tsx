"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, MessageCircle, Send } from "lucide-react"
import { CodeBackground } from "@/components/code-background"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      if (scrollPosition > 50 || scrollPosition === 0) {
        setIsVisible(true)
      }
    }

    setIsVisible(true)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToEvents = () => {
    const eventsSection = document.getElementById("eventos")
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CodeBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div
          className={`max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center justify-center mb-4 sm:mb-8 px-4">
            <Image
              src="/andestech-logo-white.png"
              alt="AndesTech Logo"
              width={400}
              height={133}
              className="object-contain animate-float w-64 sm:w-80 md:w-96 h-auto rounded-lg"
              style={{ filter: "drop-shadow(0 0 30px rgba(0, 217, 255, 0.6))" }}
              priority
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-balance px-[7px] max-w-3xl mx-auto">
            Bienvenido a la comunidad de <span className="text-primary animate-glow">AndesTech</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty px-2">
            Conectamos desarrolladores, diseñadores y entusiastas de la tecnología a través de eventos, talleres y
            networking en el oeste de Argentina.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 px-4">
            <button
              onClick={scrollToEvents}
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm sm:text-base hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all hover:scale-105"
            >
              Próximos Eventos
            </button>
            <button
              onClick={() => window.open("https://linktr.ee/andestech", "_blank")}
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm sm:text-base hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all hover:scale-105"
            >
              Unite a la Comunidad
            </button>
            <button
              onClick={() => window.open("https://wa.me/5492612407449?text=Quiero%20ser%20sponsor%20de%20Andes%20Tech", "_blank")}
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm sm:text-base hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all hover:scale-105"
            >
              Ser Sponsor
            </button>
          </div>

          <div className="flex gap-8 sm:gap-6 justify-center items-center pt-6 sm:pt-8">
            <a
              href="https://www.instagram.com/andes.tech_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-all hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)] p-2"
            >
              <Instagram className="w-7 h-7 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/andestech1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-all hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)] p-2"
            >
              <Linkedin className="w-7 h-7 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://chat.whatsapp.com/BkfcHYpMJIiGSBnibubKGU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-all hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)] p-2"
            >
              <MessageCircle className="w-7 h-7 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://t.me/devcafemdz#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-all hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)] p-2"
            >
              <Send className="w-7 h-7 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
