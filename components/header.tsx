"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                Underwater Cleaning & Maintenance.
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Button
              asChild
              className="bg-white text-blue-900 hover:bg-white/90 font-semibold shadow-md"
            >
              <a href="tel:+13059050396">Llamar Ahora</a>
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
              <Button asChild className="w-fit">
                <a href="tel:+13059050396">Llamar Ahora</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}