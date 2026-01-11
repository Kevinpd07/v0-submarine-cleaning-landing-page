import { CheckCircle, Clock, Shield, Award } from "lucide-react"

const benefits = [
  {
    icon: CheckCircle,
    title: "Resultados de Alta Calidad",
    description: "Utilizamos técnicas y equipos de última generación para garantizar resultados excepcionales.",
  },
  {
    icon: Clock,
    title: "Servicio Rápido y Eficiente",
    description: "Minimizamos el tiempo fuera del agua de su embarcación con procesos optimizados.",
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Nuestro equipo está certificado y sigue los más altos estándares de seguridad submarina.",
  },
  {
    icon: Award,
    title: "Experiencia Profesional",
    description: "Años de experiencia atendiendo marinas, puertos y muelles privados en Miami.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-accent font-medium tracking-widest uppercase mb-4">Beneficios</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              ¿Por qué elegir Blue Star Service?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Servicio disponible en marinas, puertos y muelles privados. Contáctenos para una inspección o cotización
              personalizada.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/professional-diver-underwater-cleaning-boat-hull-w.jpg"
                alt="Buzo profesional limpiando el casco de un barco"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm opacity-90">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
