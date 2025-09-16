"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  // Preload the hero image
  useEffect(() => {
    const img = new Image()
    img.src = '/Hero.jpg'
    img.onload = () => setIsImageLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'url(/Hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-balance">
          Te Guiamos para la venta y compra de propiedades en Loja
        </h1>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
          onClick={() => window.open("https://wa.me/593996088055", "_blank")}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Escríbenos por WhatsApp
        </Button>
      </div>
    </section>
  )
}
