"use client"; // ⚡ obligatoire car on utilise useState et useEffect
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const images = [
    "/images/logiciel.jpg",
    "/images/panneau.jpg",
    "/images/engin.jpg",
    "/images/bricks.jpg",
    "/images/construction.jpg",
    "/images/carer.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // ⚡ Change automatiquement toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* ✅ Section Diaporama avec slogan */}
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Image active */}
        <Image
          key={images[currentImage]}
          src={images[currentImage]}
          alt="Arrière-plan"
          fill
          className="object-cover transition-opacity duration-1000"
          priority
        />

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* ✅ Logo + Texte slogan */}
        <div className="relative z-10 px-6">
          <Image
            src="/images/logo.png"
            alt="JKM Logo"
            width={160}
            height={160}
            className="mx-auto mb-6 drop-shadow-lg rounded"
            priority
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            JKM Congo Supply and Services SARL
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-lg">
            Intégrité, transparence, excellence, responsabilité et innovation.
          </p>
        </div>
      </section>

      {/* ✅ Présentation rapide */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Qui sommes-nous ?</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Fond&eacute;e en f&eacute;vrier 2023, <strong>JKM Sarl</strong> est
          spécialisée dans la logistique et l’approvisionnement en République
          Démocratique du Congo. Notre mission est de fournir des solutions fiables,
          rapides et rentables pour améliorer l’efficacité des entreprises locales
          et minières.
        </p>
      </section>
    </div>
  );
}

