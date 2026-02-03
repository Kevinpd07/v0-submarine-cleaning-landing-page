"use client";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const services = [
  {
    icon: "/icons/1.png", // Cambia estos paths por tus imágenes reales
    title: "Underwater inspection and video recording",
  },
  {
    icon: "/icons/2.png",
    title: "Hull cleaning (running gear and bottom)",
  },
  {
    icon: "/icons/3.png",
    title: "Replacement of sacrificial anodes (zincs)",
  },
  {
    icon: "/icons/4.png",
    title: "Propeller adjustment and replacement",
  },
  {
    icon: "/icons/5.png",
    title:
      "Underwater installation of lights, stabilizers, thru-hulls, and other fittings",
  },
  {
    icon: "/icons/6.png",
    title: "Cleaning and maintenance of dock pilings and marine structures",
  },
  {
    icon: "/icons/7.png",
    title: "Underwater object recovery",
  },
  {
    icon: "/icons/8.png",
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
          src="/hero-mobile.jpeg"
          alt="Underwater background"
          fill
          priority
          className="object-cover md:hidden"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-xs">
          {/* Services List - Left Side */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors overflow-hidden">
                  <Image
                    src={service.icon}
                    alt=""
                    width={12}
                    height={12}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-black/90 leading-snug">
                    <span className="text-black/60 font-bold mr-2">
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

    </section>
  );
}