"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Send, MapPin } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Solicitud enviada:", formData)
    alert(`¡Gracias ${formData.name}! Te contactaremos pronto a ${formData.email}`)
    setFormData({ email: "", name: "" })
  }

  return (
    <section className="relative py-12 sm:py-24 px-4 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
            ¿Listo para <span className="text-primary">Conectar</span>?
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Unite a nuestra comunidad y comenzá a crecer junto a los mejores profesionales tech de los Andes
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">Contactanos</h3>
              <div className="space-y-3">
                <a
                  href="mailto:hola@andestech.com"
                  className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span>hola@andestech.com</span>
                </a>
                <a
                  href="https://wa.me/5492611234567?text=Hola!%20Quiero%20más%20información%20sobre%20AndesTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all flex-shrink-0">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span>WhatsApp Community</span>
                </a>
                <a
                  href="https://t.me/andestech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all flex-shrink-0">
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span>Telegram Channel</span>
                </a>
                <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span>Mendoza & San Juan, Argentina</span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
