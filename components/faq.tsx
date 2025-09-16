import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cómo vender mi propiedad en Loja de forma rápida?",
    answer:
      "Con un proceso ágil y una amplia red de contactos directos, te ayudamos a conectar con compradores serios y calificados, reduciendo significativamente el tiempo de venta.",
  },
  {
    question: "¿Qué necesito para vender mi casa en Loja?",
    answer:
      "Te brindamos la guía completa de documentos y procedimientos necesarios para una venta exitosa, incluyendo escrituras, certificados de libertad y gravamen, avalúos, y todos los trámites legales requeridos.",
  },
  {
    question: "¿En qué se diferencian de la competencia?",
    answer:
      "Ofrecemos negociaciones directas y transparentes, y una atención personalizada que evita intermediarios informales. Nuestro enfoque se centra en maximizar el valor de tu propiedad con total transparencia en el proceso.",
  },
  {
    question: "¿Cuánto tiempo toma vender una propiedad en Loja?",
    answer:
      "El tiempo promedio de venta varía entre 30 a 90 días, dependiendo del tipo de propiedad, ubicación y precio. Nuestro enfoque directo y red de contactos nos permite acelerar este proceso significativamente.",
  },
  {
    question: "¿Cobran comisión por sus servicios?",
    answer:
      "Nuestras tarifas son competitivas y transparentes. Te explicamos todos los costos desde el inicio, sin sorpresas. La inversión se justifica con el ahorro de tiempo, la seguridad jurídica y el mejor precio de venta que conseguimos.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Preguntas Frecuentes: Cómo vender mi propiedad en Loja
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
