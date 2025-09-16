"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 relative">
            <Image 
              src="/Logo.jpg" 
              alt="Servicios Inmobiliarios Ruth Luzuriaga"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">
              <span className="md:hidden">Servicios Inmobiliarios</span>
              <span className="hidden md:inline">Servicios Inmobiliarios Ruth Luzuriaga</span>
            </h1>
          </div>
        </div>

        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => window.open("https://wa.me/593996088055", "_blank")}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          <span className="hidden md:inline">Contáctanos por WhatsApp</span>
          <span className="md:hidden">Contáctanos</span>
        </Button>
      </div>
    </header>
  )
}
