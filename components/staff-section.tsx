import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Twitter } from "lucide-react"

export function StaffSection() {
  const staff = [
    {
      name: "Lautaro Celedon",
      role: "Fundador",
      description: "Técnico en Redes y Telecomunicaciones especializado en infraestructura cloud, virtualización y networking corporativo.",
      avatar: "/lauta1.png",
      initials: "LC",
      linkedin: "",
      twitter: "",
    },
    {
      name: "Arturo Baldo ",
      role: "Fundador",
      description: "Ingeniero de redes IP Architechs - Telecom Argentina",
      avatar: "/arturo1.jpeg",
      initials: "AB",
      linkedin: "",
      twitter: "",
    },
    {
      name: "Francesco Gentile",
      role: "Fundador",
      description: "CTO Eluter. Desarrollador de software",
      avatar: "/Fran.png",
      initials: "FG",
      linkedin: "",
      twitter: "",
    },
    {
      name: "Joaquin Rodriguez",
      role: "Fundador",
      description: "Desarrollador de software",
      avatar: "/joaco.jpeg",
      initials: "JR",
      linkedin: "",
      twitter: "",
    },
     {
      name: "David Enamorado",
      role: "Fundador",
      description: "Desarrollador de software",
      avatar: "/david.jpeg",
      initials: "DE",
      linkedin: "",
      twitter: "",
    },
     {
      name: "Mariano Marino",
      role: "Fundador",
      description: "Desarrollador de software",
      avatar: "/mariano.jpeg",
      initials: "MM",
      linkedin: "",
      twitter: "",
    },
     {
      name: "Marisol Herrera", 
      role: "Fundador",
      description: "Técnico universitario en redes y telecomunicaciones. UNCuyo. Analista Funcional Sr. en BYMA. Docente rn",
      avatar: "/marisol.png",
      initials: "MH",
      linkedin: "",
      twitter: "",
    },
     {
      name: "Mauricio Caceres",
      role: "Fundador",
      description: "Ingeniero Mecatrónico, integrador Scada Ignition en Oil&Gas, Profesor Facultad de Ingeniería Uncuyo",
      avatar: "/mauri.jpeg",
      initials: "MC",
      linkedin: "",
      twitter: "",
    },
     {
      name: "Federico Vazques",
      role: "Fundador",
      description: "Co-Fundador de Luxeo",
      avatar: "/fede.jpeg",
      initials: "FV",
      linkedin: "",
      twitter: "",
    },
     {
      name: "Eugenia Oyarse",
      role: "Fundador",
      description: "Customer Support en Kripton  - Técnica Superior en Laboratorio - Desarrollador de software",
      avatar: "/vane.jpeg",
      initials: "EO",
      linkedin: "https://www.linkedin.com/in/eugenia-oyarse-0aab952bb/",
      twitter: "https://x.com/eugeOv19",
    }
  ]

  return (
    <section id="staff" className="py-12 sm:py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance px-2">
            Staff de <span className="text-primary">AndesTech</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-2">
            Conoce a quienes hacen posible la comunidad
          </p>
        </div>

        {/* Grid uniforme con tarjetas cuadradas */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 max-w-6xl mx-auto">
          {staff.map((member, index) => (
            <div
              key={index}
              className="group relative w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.875rem)] lg:w-[calc(25%-0.9375rem)] aspect-square"
            >
              <Card className="absolute inset-0 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                  <img 
                    src={member.avatar || "/placeholder.svg"} 
                    alt={member.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                
                {/* Contenido superpuesto */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground truncate">{member.name}</h3>
                  <p className="text-xs text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2 leading-tight">{member.description}</p>
                  
                  {/* Iconos sociales */}
                  <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
