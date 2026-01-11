import Link from "next/link"
import { Anchor, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Anchor className="h-8 w-8 text-accent" />
              <span className="font-serif text-xl font-bold">Blue Star Service</span>
            </Link>
            <p className="text-background/70 text-sm">
              Servicios profesionales de limpieza submarina para barcos y yates en Miami.
            </p>
          </div>

          <div className="text-center">
            <p className="font-semibold mb-2">Servicio disponible en:</p>
            <p className="text-background/70 text-sm">Marinas • Puertos • Muelles Privados</p>
          </div>

          <div className="md:text-right">
            <p className="font-semibold mb-4">Síguenos</p>
            <div className="flex gap-4 md:justify-end">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Blue Star Service. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
