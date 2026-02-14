"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:info@bluestarservice.com?subject=Consulta de ${formData.name}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje:\n${formData.message}`,
    )}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-accent font-medium tracking-widest uppercase mb-4">Contacto</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-balance">
              ¿Listo para mejorar el rendimiento de su barco?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Contáctenos hoy para una inspección o cotización personalizada. Estamos disponibles para atender sus
              necesidades.
            </p>

            <div className="space-y-6">
              <a href="tel:+13059050376" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Teléfono</p>
                  <p className="font-semibold">+1 (305) 905 0376</p>
                </div>
              </a>

              <a href="mailto:info@bluestarservice.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Email</p>
                  <p className="font-semibold">info@bluestarservice.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Ubicación</p>
                  <p className="font-semibold">Miami, Florida</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-2xl p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold mb-6">Solicitar Cotización</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Describa su solicitud o consulta..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
