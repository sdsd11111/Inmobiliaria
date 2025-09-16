"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Home, DollarSign, FileText, Scale, MapPin, Bed, Bath, Square, TreePine, Car } from "lucide-react"
import { ParallaxSection } from "./ParallaxSection"

const services = [
  {
    icon: Home,
    title: "Compra de Propiedades",
    description: "Ayudamos a encontrar la propiedad perfecta que se ajuste a tus necesidades y presupuesto.",
  },
  {
    icon: DollarSign,
    title: "Venta de Propiedades",
    description: "Si necesitas vender tu propiedad en Loja, te garantizamos una negociación rentable y segura.",
  },
  {
    icon: FileText,
    title: "Tasación de Propiedades",
    description: "Servicio profesional para conocer el valor real de tu propiedad en el mercado actual.",
  },
  {
    icon: Scale,
    title: "Asesoría Legal y de Trámites",
    description: "Te acompañamos en todo el proceso legal y administrativo para una transacción sin complicaciones.",
  },
]

const soldProperties = [
  {
    id: 1,
    title: "Casa en La Argelia",
    price: "$85,000",
    beds: 3,
    baths: 2,
    area: "120m²",
    patio: "Patio amplio con jardín",
    parking: "Garaje para 2 vehículos",
    extras: "Cocina integral, sala-comedor, cuarto de estudio",
    image: "/propiedad vendida 1.jpg",
  },
  {
    id: 2,
    title: "Departamento Centro",
    price: "$65,000",
    beds: 2,
    baths: 1,
    area: "80m²",
    patio: "Balcón con vista a la ciudad",
    parking: "Parqueadero asignado",
    extras: "Edificio con ascensor, portería 24h, área social",
    image: "/propiedad vendida 2.jpg",
  },
  {
    id: 3,
    title: "Villa en Zamora Huayco",
    price: "$120,000",
    beds: 4,
    baths: 3,
    area: "180m²",
    patio: "Jardín con piscina y BBQ",
    parking: "Garaje para 3 vehículos",
    extras: "Suite principal, walk-in closet, cuarto de servicio",
    image: "/propiedad vendida 3.jpg",
  },
]

const forSaleProperties = [
  {
    id: 1,
    title: "Casa en Jipiro",
    price: "$90,000",
    beds: 3,
    baths: 2,
    area: "130m²",
    patio: "Patio trasero con espacio verde",
    parking: "Garaje techado para 2 autos",
    extras: "Cerca del parque Jipiro, cocina moderna, pisos de cerámica",
    image: "/propiedad en oferta 2.jpg",
  },
  {
    id: 2,
    title: "Departamento Nuevo",
    price: "$70,000",
    beds: 2,
    baths: 2,
    area: "85m²",
    patio: "Terraza con vista panorámica",
    parking: "Parqueadero subterráneo",
    extras: "Construcción nueva, acabados de primera, área comunal",
    image: "/propiedad en oferta 3.jpg",
  },
  {
    id: 3,
    title: "Casa en San Cayetano",
    price: "$110,000",
    beds: 4,
    baths: 3,
    area: "170m²",
    patio: "Jardín amplio con árboles frutales",
    parking: "Garaje doble más parqueadero exterior",
    extras: "Zona residencial exclusiva, cuarto de empleada, bodega",
    image: "/propiedad en oferta.jpg",
  },
]

function PropertyModal({ properties, title }: { properties: typeof soldProperties; title: string }) {
  return (
    <DialogContent className="w-screen h-screen md:h-auto md:max-h-[90vh] md:max-w-[calc(3*380px+4rem+32px)] lg:max-w-[calc(3*420px+4rem+32px)] xl:max-w-[calc(3*460px+4rem+32px)] md:rounded-2xl shadow-2xl border-0 bg-background/95 backdrop-blur-sm p-4 md:p-8">
      <DialogHeader className="mb-6">
        <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent text-center">
          {title}
        </DialogTitle>
      </DialogHeader>
      <div className="flex flex-nowrap gap-4 md:gap-6 lg:gap-8 pb-4 overflow-x-auto snap-x snap-mandatory px-1 -mx-1 md:px-0 md:mx-0 md:overflow-x-visible">
        {properties.map((property) => (
          <Card key={property.id} className="w-[85vw] min-w-[280px] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(33.333%-1.75rem)] xl:w-[calc(33.333%-2rem)] flex-shrink-0 md:flex-shrink overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col bg-card/90 backdrop-blur-sm">
            <div className="aspect-video bg-muted overflow-hidden border-b border-border/20">
              <img
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h3 className="font-semibold text-lg md:text-xl text-foreground leading-tight">{property.title}</h3>
                  <p className="text-xl md:text-2xl font-bold text-primary mt-1">{property.price}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground py-2 md:py-3 border-b border-border/30">
                  <div className="flex items-center gap-1.5 bg-muted/40 px-2.5 py-1 rounded-full">
                    <Bed className="w-4 h-4 text-primary" />
                    <span>{property.beds} hab.</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-muted/40 px-2.5 py-1 rounded-full">
                    <Bath className="w-4 h-4 text-primary" />
                    <span>{property.baths} baños</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-muted/40 px-2.5 py-1 rounded-full">
                    <Square className="w-4 h-4 text-primary" />
                    <span>{property.area}</span>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3 text-xs md:text-[13px] lg:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1 md:p-1.5 rounded-lg mt-0.5 flex-shrink-0">
                      <TreePine className="w-4 h-4 text-green-600 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Área Exterior</h4>
                      <p className="text-muted-foreground">{property.patio}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1 md:p-1.5 rounded-lg mt-0.5 flex-shrink-0">
                      <Car className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Estacionamiento</h4>
                      <p className="text-muted-foreground">{property.parking}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-1 md:p-1.5 rounded-lg mt-0.5 flex-shrink-0">
                      <Home className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Características</h4>
                      <p className="text-muted-foreground">{property.extras}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DialogContent>
  )
}

export function Services() {
  return (
    <section className="relative overflow-hidden" id="servicios">
      <ParallaxSection 
        imageUrl="/Parallax.jpg"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative z-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Tu solución para vender tu propiedad en Loja de manera rápida y segura
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Home className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-800">Propiedades Vendidas</h3>
                  <p className="text-green-700 mb-6">Conoce las propiedades que hemos vendido exitosamente</p>
                  <div
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all px-6 py-2 h-10 cursor-pointer"
                    style={{
                      backgroundColor: "#16a34a !important",
                      color: "#ffffff !important",
                      border: "none",
                    }}
                  >
                    Ver propiedades
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <PropertyModal properties={soldProperties} title="Propiedades Vendidas" />
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-800">Propiedades en Oferta</h3>
                  <p className="text-blue-700 mb-6">Explora las propiedades disponibles en el mercado</p>
                  <div
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all px-6 py-2 h-10 cursor-pointer"
                    style={{
                      backgroundColor: "#2563eb !important",
                      color: "#ffffff !important",
                      border: "none",
                    }}
                  >
                    Ver propiedades
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <PropertyModal properties={forSaleProperties} title="Propiedades en Oferta" />
          </Dialog>
          </div>
        </div>
      </ParallaxSection>
    </section>
  )
}
