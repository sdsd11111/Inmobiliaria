"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Star, Award, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function AboutUs() {
  const [currentCardSlide, setCurrentCardSlide] = useState(0)
  const [stackedImages, setStackedImages] = useState([
    "/ruth luzuriaga 1.jpg",
    "/ruth luzuriaga 2.jpg",
    "/ruth luzuriaga 3.jpg",
    "/ruth luzuriaga 1.jpg", // Repeat first image to create loop
  ])

  const cards = [
    {
      icon: Target,
      title: "Nuestra Misión",
      description: "Guiamos y acompañamos a nuestros clientes en todo el proceso inmobiliario",
    },
    {
      icon: Eye,
      title: "Nuestra Visión",
      description: "Ser la empresa donde las personas pueden confiar sus propiedades y trámites",
    },
    {
      icon: Star,
      title: "Lo que nos hace únicos",
      description:
        "Destacamos por nuestra atención 100% personalizada y la promoción de negociaciones directas que benefician tanto a compradores como vendedores.",
    },
    {
      icon: Award,
      title: "Nuestra Experiencia",
      description: "Más de 3 años en el mercado, garantizando transparencia y resultados reales",
    },
  ]

  const nextCardSlide = () => {
    setCurrentCardSlide((prev) => (prev + 1) % cards.length)
  }

  const prevCardSlide = () => {
    setCurrentCardSlide((prev) => (prev - 1 + cards.length) % cards.length)
  }

  const removeTopImage = () => {
    if (stackedImages.length > 1) {
      setStackedImages((prev) => prev.slice(1))
    } else {
      // Reset stack when only one image remains
      setStackedImages(["/ruth luzuriaga 1.jpg", "/ruth luzuriaga 2.jpg", "/ruth luzuriaga 3.jpg", "/ruth luzuriaga 1.jpg"])
    }
  }

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
          Te ayudamos a conseguir la negociación mas rentable y segura en Loja
        </h2>
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nos enorgullecemos de ser un referente confiable en el sur de Ecuador, con más de 3 años de experiencia en
            el mercado inmobiliario.
          </p>
        </div>

        <div className="mb-16">
          {/* Desktop view */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">{card.title}</h3>
                    <p className="text-foreground text-sm">{card.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden relative">
            <Card className="text-center">
              <CardContent className="p-6">
                {(() => {
                  const IconComponent = cards[currentCardSlide].icon
                  return <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                })()}
                <h3 className="font-semibold text-lg mb-3">{cards[currentCardSlide].title}</h3>
                <p className="text-foreground text-sm">{cards[currentCardSlide].description}</p>
              </CardContent>
            </Card>

            <button
              onClick={prevCardSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextCardSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex justify-center mt-4 space-x-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCardSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentCardSlide ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Conoce a nuestro equipo</h3>
          <div className="max-w-md mx-auto">
            {/* Stacked Images Container */}
            <div className="relative mb-8">
              <div className="relative w-80 h-80 mx-auto">
                {stackedImages.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="absolute inset-0 transition-all duration-500 ease-out"
                    style={{
                      transform: `translateY(${index * 8}px) translateX(${index * 4}px) scale(${1 - index * 0.05})`,
                      zIndex: stackedImages.length - index,
                      opacity: index === 0 ? 1 : 0.8 - index * 0.2,
                    }}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt="Ruth Luzuriaga"
                      className="w-full h-full rounded-2xl object-cover shadow-lg border-4 border-white"
                    />
                  </div>
                ))}

                {/* X Button to remove top image */}
                <button
                  onClick={removeTopImage}
                  className="absolute -top-2 -right-2 z-50 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Text Description */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-foreground mb-2">Ruth Luzuriaga</h4>
              <p className="text-primary font-semibold mb-4">Directora General</p>
              <p className="text-muted-foreground leading-relaxed">
                Ruth Luzuriaga cuenta con más de 3 años de experiencia sólida en el mercado inmobiliario de Loja,
                especializándose en negociaciones directas que benefician tanto a compradores como vendedores. Su
                enfoque personalizado y conocimiento profundo del mercado local la han posicionado como una de las
                profesionales más respetadas en el sector inmobiliario de Loja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
