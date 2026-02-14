"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Anchor, Phone, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useWhatsApp } from "@/components/whatsapp-context";
import { useLanguage } from "@/components/language-context";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useWhatsApp();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-auto md:h-20 py-0 md:py-0">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-15 w-15 md:h-15 md:w-15 flex-shrink-0">
                <Image
                  src="/flag.png"
                  alt="Florida diver flag"
                  fill
                  className="object-contain drop-shadow-sm"
                  priority
                />
              </div>
              <p className="text-sm md:text-base text-blue-600 font-medium leading-tight">
                {t({ 
                  es: "Limpieza Submarina y Mantenimiento", 
                  en: "Underwater Cleaning & Maintenance" 
                })}
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold shadow-md cursor-pointer px-3 py-2 rounded-lg flex items-center gap-2 border border-white/20"
            >
              <Globe className="h-4 w-4" />
              {language === "es" ? "ES" : "EN"}
            </button>
            <button
              onClick={openModal}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md cursor-pointer px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              {t({ es: "WhatsApp", en: "WhatsApp" })}
            </button>
            <Button
              asChild
              className="bg-white text-blue-900 hover:bg-white/90 font-semibold shadow-md"
            >
              <a href="tel:+13059050376">
                <Phone className="h-4 w-4 mr-2" />
                {t({ es: "Llamar Ahora", en: "Call Now" })}
              </a>
            </Button>
          </nav>

          <button
            className="md:hidden py-5 self-start"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white/10 backdrop-blur-md border-t border-white/20 text-white">
            <div className="flex flex-col gap-4">
              {/* Language Switcher Mobile */}
              <button
                onClick={() => {
                  setLanguage(language === "es" ? "en" : "es");
                  setIsMenuOpen(false);
                }}
                className="w-fit bg-white/10 hover:bg-white/20 cursor-pointer px-4 py-2 rounded-lg flex items-center gap-2 border border-white/20"
              >
                <Globe className="h-4 w-4" />
                {language === "es" ? "Español" : "English"}
              </button>
              <button
                onClick={openModal}
                className="w-fit bg-green-500 hover:bg-green-600 cursor-pointer px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                {t({ es: "WhatsApp", en: "WhatsApp" })}
              </button>
              <Button asChild className="w-fit">
                <a href="tel:+13059050376">
                  <Phone className="h-4 w-4 mr-2" />
                  {t({ es: "Llamar Ahora", en: "Call Now" })}
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}