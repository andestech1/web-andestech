"use client"

import type React from "react"
import Image from "next/image"
import { Instagram, Linkedin, MessageCircle, Send } from "lucide-react"

export function Footer() {
  const links = {
    comunidad: [
      { name: "Empresas", href: "#sponsors" },
      { name: "Staff", href: "#staff" },
      { name: "Comunidad", href: "#about" },
      { name: "Eventos", href: "#eventos" },
      { name: "Reglamento", href: "https://andestech.com/reglamento", external: true },
    ],
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) return // Deja que abra el enlace normalmente

    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-primary/20 bg-card/50 backdrop-blur">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Image src="/andestech-logo-white.png" alt="AndesTech Logo" width={40} height={40} className="object-contain w-8 sm:w-12 h-auto" />
              <span className="text-lg sm:text-2xl font-bold">AndesTech</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground text-pretty max-w-md mb-4">
              Comunidad tecnológica del oeste de Argentina. Conectamos desarrolladores, diseñadores y entusiastas de la
              tecnología a través de eventos, talleres y networking.
            </p>
            <div className="flex gap-5 sm:gap-4">
              <a
                href="https://instagram.com/andestech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/andestech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5492611234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-all hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/andestech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-all hover:scale-110"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-primary text-sm sm:text-base">Comunidad</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {links.comunidad.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.external)}
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-primary text-sm sm:text-base">Contacto</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>Mendoza, Argentina</li>
              <li>
                <a href="mailto:info@andestech.com" className="hover:text-primary transition-colors break-all">
                  info@andestech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-primary/20 text-center text-muted-foreground text-sm sm:text-base">
          <p>2025 Eugenia Oyarse. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
