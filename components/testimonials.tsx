"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    text: "Gracias a Ruth Luzuriaga, mi casa en Loja se vendió en tiempo récord. Me sentí acompañado en todo momento.",
    author: "María González",
    rating: 5,
    image: "/testimonial-1.jpg",
  },
  {
    text: "Vender mi propiedad en Loja fue más sencillo de lo que imaginé. La asesoría de Ruth fue clave.",
    author: "Carlos Mendoza",
    rating: 5,
    image: "/testimonial-2.jpg",
  },
  {
    text: "Buscaba una guía para vender mi propiedad y encontré en Ruth la profesionalidad que necesitaba.",
    author: "Ana Rodríguez",
    rating: 5,
    image: "/testimonial-3.jpg",
  },
]

const galleryImages = [
  "/modern-house-in-loja-ecuador.jpg",
  "/apartment-in-loja-ecuador.jpg",
  "/villa-in-loja-ecuador.jpg",
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const galleryInterval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length)
    }, 3000)

    return () => clearInterval(galleryInterval)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Testimonios: Lo que dicen nuestros clientes
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Gallery */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`Propiedad ${index + 1}`}
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
                    index === currentGalleryIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Gallery indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentGalleryIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentGalleryIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Testimonials */}
          <div className="relative">
            <Card className="bg-card">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 mb-6">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-muted-foreground mb-4 italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <cite className="text-foreground font-semibold">- {testimonials[currentIndex].author}</cite>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center items-center mt-6 space-x-4">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
