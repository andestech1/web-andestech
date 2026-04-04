"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const allPartners = [
    { name: "Possumus", logo: "/marcas/1.png" },
    { name: "Wiber", logo: "/marcas/2.png" },
    { name: "Arlink", logo: "/marcas/3.png" },
    { name: "Rootstock", logo: "/marcas/4.png" },
    { name: "3ng", logo: "/marcas/5.png" },
    { name: "Wakapi", logo: "/marcas/6.png" },
    { name: "Westnet", logo: "/marcas/7.png" },
    { name: "Polkadot", logo: "/marcas/polkadot.svg" },
    { name: "Acruxteam", logo: "/marcas/9.png" },
    { name: "JCI", logo: "/marcas/10.png" },
    { name: "uch", logo: "/marcas/11.png" },
    { name: "itu", logo: "/marcas/12.png" },
  ]

  const duplicatedPartners = [...allPartners, ...allPartners]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollInterval: NodeJS.Timeout

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }, 20)
    }

    startScrolling()

    return () => {
      if (scrollInterval) clearInterval(scrollInterval)
    }
  }, [])

  return (
    <section id="sponsors" className="py-12 sm:py-20 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance px-2">
            Colaboradores y <span className="text-primary">Sponsors</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-2">
            Organizaciones y empresas que confian en nosotros
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 sm:gap-12 overflow-hidden items-center py-4 sm:py-8"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedPartners.map((partner, index) => {
              let imageClassName = "object-contain group-hover:scale-110 transition-transform"
              let cardClassName = "flex-shrink-0 relative bg-card/50 rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] group flex items-center justify-center w-32 h-20 sm:w-48 sm:h-28 p-2 sm:p-3"
              let imageWidth = 140
              let imageHeight = 84
              
              // Aplicar filtros específicos por logo
              if (partner.name === "JCI") {
                imageClassName += " brightness-0 invert"
              } else if (partner.name === "Polkadot") {
                imageClassName += " brightness-200 contrast-125"
              } else if (partner.name === "We Love Tech") {
                imageClassName += " invert brightness-110"
              }
              
              return (
                <div
                  key={index}
                  className={cardClassName}
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={imageWidth}
                    height={imageHeight}
                    className={imageClassName}
                    style={{ width: "auto", height: "auto" }}
                    priority={false}
                  />
                </div>
              )
            })}
          </div>

          <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <div className="p-5 sm:p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">¿Querés ser sponsor?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 text-pretty">
              Apoya a la comunidad tecnológica y dale visibilidad a tu marca en nuestros eventos
            </p>
            <a
              href="mailto:sponsors@andestech.dev"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm sm:text-base hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all hover:scale-105"
            >
              Contactanos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
