"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Search, Waves, Shield, Settings, Lightbulb, Building, Anchor, FileCheck } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Underwater inspection and video recording",
  },
  {
    icon: Waves,
    title: "Hull cleaning (running gear and bottom)",
  },
  {
    icon: Shield,
    title: "Replacement of sacrificial anodes (zincs)",
  },
  {
    icon: Settings,
    title: "Propeller adjustment and replacement",
  },
  {
    icon: Lightbulb,
    title: "Underwater installation of lights, stabilizers, thru-hulls, and other fittings",
  },
  {
    icon: Building,
    title: "Cleaning and maintenance of dock pilings and marine structures",
  },
  {
    icon: Anchor,
    title: "Underwater object recovery",
  },
  {
    icon: FileCheck,
    title: "Additional underwater services upon request",
  },
]

// Placeholder images - user will replace these with their own
const serviceImages = [
  "/images/gallery-1.png",
  "/scuba-diver-inspecting-yacht-hull-underwater.jpg",
  "/professional-underwater-boat-maintenance.jpg",
  "/diver-replacing-zinc-anodes-on-boat.jpg",
  "/underwater-propeller-repair-service.jpg",
]

export function Services() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % serviceImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase mb-4">Our Services</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Complete Solutions for Your Vessel
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We have certified divers and professional equipment to offer the highest quality services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Services List - Left Side */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="flex items-start gap-4 p-4 rounded-lg bg-background hover:bg-primary/5 transition-colors group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">
                    <span className="text-accent font-bold mr-2">{index + 1}.</span>
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Rotating Images - Right Side */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            {serviceImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Service image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {serviceImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
