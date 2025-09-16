export function VideoSection() {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">Conoce Cómo Trabajamos</h2>
        <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl mx-auto">
          <video 
            className="w-full h-full object-cover" 
            controls 
            autoPlay 
            playsInline
            muted 
            loop
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          >
            <source src="/Video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </section>
  )
}
