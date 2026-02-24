"use client";

import Link from "next/link";
import { Anchor, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./language-context";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative py-16 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-8 w-8">
                <Image
                  src="/flag.png"
                  alt="Florida diver flag"
                  fill
                  className="object-contain brightness-110 drop-shadow-sm"
                />
              </div>
              <span className="font-serif text-xl font-bold tracking-wide">
                Blue Star Service
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              {t({ 
                es: "Servicios profesionales de limpieza submarina,mantenimiento para barcos y yates.", 
                en: "Professional underwater cleaning services,mantenance for boats and yachts." 
              })}
            </p>
          </div>

          <div className="text-center">
            <p className="font-semibold mb-2 tracking-wide">
              {t({ es: "Servicio disponible en:", en: "Service available at:" })}
            </p>
            <p className="text-white/70 text-sm">
              {t({ es: "Marinas • Puertos • Muelles Privados", en: "Marinas • Ports • Private Docks" })}
            </p>
          </div>

          <div className="md:text-right">
            <p className="font-semibold mb-4">{t({ es: "Síguenos", en: "Follow Us" })}</p>
            <div className="flex gap-4 md:justify-end">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Blue Star Service. {t({ 
              es: "Todos los derechos reservados.", 
              en: "All rights reserved." 
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
