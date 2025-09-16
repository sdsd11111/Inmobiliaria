"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Phone, Mail, Instagram, Facebook, User, AtSign, MapPin, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    producto: "",
    dormitorios: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would handle form submission
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">¡Contáctanos!</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Nuestros Canales de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-6 p-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Teléfono</p>
                    <a href="tel:+593996088055" className="text-primary hover:underline text-lg font-medium">
                      0996088055
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Correo Electrónico</p>
                    <a
                      href="mailto:ruthluzuriagalarreategui@gmail.com"
                      className="text-primary hover:underline text-base font-medium break-all"
                    >
                      ruthluzuriagalarreategui@gmail.com
                    </a>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-3 text-lg">Síguenos</p>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/ruthbienesraicesloja?igsh=amF5YmN6dmZ5c201" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-transparent w-12 h-12 hover:bg-primary/10"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-6 h-6" />
                      </Button>
                    </a>
                    <a href="https://www.facebook.com/ruthluzuriaga8/photos" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-transparent w-12 h-12 hover:bg-primary/10"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-6 h-6" />
                      </Button>
                    </a>
                    <a href="https://www.tiktok.com/@ruthpropiedadesloja?_t=ZM-8zeKPU5iTDk&_r=1" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-transparent w-12 h-12 hover:bg-primary/10"
                        aria-label="TikTok"
                      >
                        <MessageSquare className="w-6 h-6" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <p className="font-semibold text-lg">Ubicación</p>
                </div>
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.0281308732534!2d-79.20405508232126!3d-3.9972816338834494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb4801dc4882b5%3A0xd096bdd2afd15692!2s18%20de%20Noviembre%20%26%2010%20de%20Agosto%2C%20Loja!5e0!3m2!1ses-419!2sec!4v1758063209360!5m2!1ses-419!2sec"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Formulario de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nombre</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange("nombre", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Apellido</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Tu apellido"
                        value={formData.apellido}
                        onChange={(e) => handleInputChange("apellido", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Correo Electrónico</label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.correo}
                      onChange={(e) => handleInputChange("correo", e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Número de Teléfono</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="0999999999"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange("telefono", e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Producto de Interés</label>
                  <Select value={formData.producto} onValueChange={(value) => handleInputChange("producto", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un tipo de propiedad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="departamento">Departamento</SelectItem>
                      <SelectItem value="casa">Casa</SelectItem>
                      <SelectItem value="terreno">Terreno</SelectItem>
                      <SelectItem value="oficina">Oficina</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Número de Dormitorios</label>
                  <Select
                    value={formData.dormitorios}
                    onValueChange={(value) => handleInputChange("dormitorios", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona número de dormitorios" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 dormitorio</SelectItem>
                      <SelectItem value="2">2 dormitorios</SelectItem>
                      <SelectItem value="3">3 dormitorios</SelectItem>
                      <SelectItem value="4+">4+ dormitorios</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 text-lg"
                >
                  ENVIAR
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
