"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isBW, setIsBW] = useState(false);

  return (
    <div className={isBW ? "grayscale" : ""}>
      <nav className="bg-blue-900 text-white p-4 flex items-center gap-6 shadow-md">
        {/* ✅ Logo + nom entreprise */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png" // Ton logo placé dans public/images/logo.png
            alt="JKM Logo"
            width={60}
            height={60}
            className="rounded"
          />
          <span className="font-bold text-xl">JKM CSS Sarl</span>
        </Link>

        {/* ✅ Liens de navigation */}
        <div className="flex gap-4 ml-10">
          <Link href="/about" className="hover:underline">À propos</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/products" className="hover:underline">Produits</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/realisations" className="hover:underline">Réalisations</Link>
        </div>

        {/* ✅ Bouton Noir & Blanc */}
        <button
          onClick={() => setIsBW(!isBW)}
          className="ml-auto bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          {isBW ? "Couleur" : "NB"}
        </button>
      </nav>
    </div>
  );
}
