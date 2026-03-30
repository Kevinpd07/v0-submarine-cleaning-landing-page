"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-context";
import { ServiceModal, services } from "./service-modal";

const serviceImages = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
  "/images/8.jpeg",
  "/images/9.jpeg",
  "/images/10.jpeg",
  "/images/11.jpeg",
  "/images/12.jpeg",
  "/images/13.jpeg",
  "/images/14.jpeg",
  "/images/15.jpeg",
  "/images/16.jpeg",
  "/images/17.jpeg",
  "/images/18.jpeg",
  "/images/19.jpeg",
  "/images/20.jpeg",
  "/images/21.jpeg",
  "/images/22.jpeg",
  "/images/23.jpeg",
  "/images/24.jpeg",
  "/images/25.jpeg",
  "/images/26.jpeg",
  "/images/27.jpeg",
  "/images/28.jpeg",
  "/images/29.jpeg",
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null,
  );
  const { language } = useLanguage();

  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const nextIndex = (prev + 1) % serviceImages.length;
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const selectedService =
    services.find((s) => s.id === selectedServiceId) || null;

  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-60 pb-30 md:pt-80 md:pb-40"
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

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-1"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-xs md:text-base ">
          {/* Services List - Left Side */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className="w-full flex items-start gap-1 p-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-left"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors overflow-hidden">
                  <Image
                    src={service.icon}
                    alt=""
                    width={35}
                    height={35}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-black/90 leading-snug pt-2 pl-1">
                    <span className="text-black/60 font-bold mr-2">
                      {index + 1}.
                    </span>
                    {service.title[language]}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Rotating Images - Right Side */}
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl bg-slate-950">
            {serviceImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Service image ${index + 1}`}
                  fill
                  className="object-contain"
                  onLoad={() => handleImageLoad(index)}
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

      {/* Service Modal */}
      <ServiceModal
        selectedService={selectedService}
        onClose={() => setSelectedServiceId(null)}
      />
    </section>
  );
}
