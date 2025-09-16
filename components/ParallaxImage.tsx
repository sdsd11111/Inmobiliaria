'use client';

import { useEffect, useRef } from 'react';

export function ParallaxImage() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        const yPos = scrollPosition * 0.3; // Ajusta este valor para cambiar la intensidad
        imageRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    // Cargar la imagen primero
    const img = new Image();
    const imagePath = '/Parallax.jpg';
    img.src = imagePath;
    console.log('Intentando cargar imagen desde:', imagePath);
    
    // Manejar errores de carga de imagen
    img.onerror = () => {
      console.error('Error al cargar la imagen desde:', imagePath);
      // Intentar con una ruta alternativa si la primera falla
      const altPath = '/parallax-background.jpg';
      console.log('Intentando ruta alternativa:', altPath);
      img.src = altPath;
    };
    
    img.onload = () => {
      if (imageRef.current) {
        imageRef.current.style.backgroundImage = `url(${img.src})`;
        imageRef.current.style.opacity = '1';
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Llamada inicial
      }
    };

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-[120vh] bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-500"
        style={{
          willChange: 'transform',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      </div>
    </div>
  );
}
