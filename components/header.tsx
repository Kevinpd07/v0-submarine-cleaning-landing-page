"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Anchor } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Anchor className="h-8 w-8 text-primary" />
            <span className="font-serif text-xl md:text-2xl font-bold text-foreground">Blue Star Service</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">
              Beneficios
            </Link>
            <Link href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
            <Button asChild>
              <a href="tel:+13059050396">Llamar Ahora</a>
            </Button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="#servicios"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#beneficios"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Beneficios
              </Link>
              <Link
                href="#contacto"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button asChild className="w-fit">
                <a href="tel:+13059050396">Llamar Ahora</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
