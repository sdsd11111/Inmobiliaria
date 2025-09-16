"use client"

import { Phone, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-center">
          {/* Business Name and Logo */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
            <div className="w-24 h-24 relative">
              <Image 
                src="/Logo.jpg" 
                alt="Servicios Inmobiliarios Ruth Luzuriaga"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Servicios Inmobiliarios Ruth Luzuriaga</h3>
              <p className="text-background/80 text-sm">Tu aliado confiable en el mercado inmobiliario de Loja</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("quienes-somos")}
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                Quiénes Somos
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("testimonios")}
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+593996088055" className="text-background/80 hover:text-primary transition-colors text-sm">
                  0996088055
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:ruthluzuriagalarreategui@gmail.com"
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  ruthluzuriagalarreategui@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-sm text-background/60">
            Diseñado por{" "}
            <a
              href="https://cesarreyesjaramillo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @cesarreyesjaramillo.com
            </a>{" "}
            2025 Servicios Inmobiliarios Ruth Luzuriaga. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
