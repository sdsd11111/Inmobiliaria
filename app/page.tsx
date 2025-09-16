"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import { VideoSection } from "@/components/video-section"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <div id="inicio">
        <Hero />
      </div>
      <div id="quienes-somos">
        <AboutUs />
      </div>
      <VideoSection />
      <div id="servicios">
        <Services />
      </div>
      <div id="testimonios">
        <Testimonials />
      </div>
      <FAQ />
      <div id="contacto">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
