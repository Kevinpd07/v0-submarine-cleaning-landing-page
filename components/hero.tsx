import { Button } from "@/components/ui/button"
import { Phone, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-background.png')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-accent font-medium tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Professional Underwater Services
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          Blue Star Service
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          We provide professional underwater cleaning services for boats and yachts. Fast and efficient solutions to
          keep your vessel in optimal condition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button size="lg" variant="secondary" asChild className="text-lg">
            <a href="tel:+13059050396">
              <Phone className="mr-2 h-5 w-5" />
              +1 (305) 905 0396
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-bounce"
        aria-label="Scroll to services"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
