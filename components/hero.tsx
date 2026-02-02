"use client";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  Waves,
  Shield,
  Settings,
  Lightbulb,
  Building,
  Anchor,
  FileCheck,
} from "lucide-react";

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
    title:
      "Underwater installation of lights, stabilizers, thru-hulls, and other fittings",
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
];

const serviceImages = [
  "/images/gallery-1.png",
  "/scuba-diver-inspecting-yacht-hull-underwater.jpg",
  "/professional-underwater-boat-maintenance.jpg",
  "/diver-replacing-zinc-anodes-on-boat.jpg",
  "/underwater-propeller-repair-service.jpg",
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % serviceImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-70 pb-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.png"
          alt="Underwater background"
          fill
          priority
          className="hidden md:block object-cover"
        />
        <Image
          src="/hero-mobile11.png"
          alt="Underwater background"
          fill
          priority
          className="object-cover md:hidden"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/*<p className="text-accent font-medium tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white/90 mb-6 text-balance uppercase tracking-widest drop-shadow-lg ">
            our underwater services
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We have certified divers and professional equipment to offer the
            highest quality services.
          </p>*/}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Services List - Left Side */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <service.icon className="h-5 w-5 text-white group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white/90 leading-snug">
                    <span className="text-white/60 font-bold mr-2">
                      {index + 1}.
                    </span>
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
                className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent transition-opacity duration-1000 ${
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
                    index === currentImageIndex
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*
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
      </a>*/}
    </section>
  );
}
