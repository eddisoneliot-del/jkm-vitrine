"use client"; // ⚡ obligatoire pour utiliser useState et useEffect côté client
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

  // Changement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* ✅ Diaporama */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Image active */}
        <Image
          key={images[currentImage]} // ⚡ force le changement d'image
          src={images[currentImage]}
          alt="Arrière-plan"
          fill
          className="object-cover transition-opacity duration-1000"
          priority
        />

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Texte slogan */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            JKM Congo Supply and Services SARL
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-lg">
            Intégrité, transparence, excellence, responsabilité et innovation.
          </p>
        </div>
      </section>

      {/* ✅ Présentation rapide */}
      <section className="p-10">
        <h2 className="text-3xl font-semibold mb-4">Qui sommes-nous ?</h2>
        <p className="text-lg leading-relaxed">
          Fondée en février 2023, JKM CSS Sarl est spécialisée dans la logistique et
          l’approvisionnement en République Démocratique du Congo.
          Notre mission est de fournir des solutions fiables, rapides et rentables
          pour améliorer l’efficacité des entreprises locales et minières.
        </p>
      </section>
    </div>
  );
}


