"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Import obligatoire

export default function Header() {
  const [isBW, setIsBW] = useState(false);

  return (
    <div className={isBW ? "grayscale" : ""}>
      <nav className="bg-blue-900 text-white p-4 flex items-center gap-6">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="JKM Logo"
            width={50}
            height={50}
            className="rounded"
          />
          <span className="font-bold text-lg">JKM CSS Sarl</span>
        </Link>

        {/* ✅ Liens du menu */}
        <Link href="/about" className="hover:underline">À propos</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/products" className="hover:underline">Produits</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="/realisations" className="hover:underline">Réalisations</Link>

        {/* ✅ Bouton NB */}
        <button
          onClick={() => setIsBW(!isBW)}
          className="ml-auto bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
        >
          {isBW ? "Couleur" : "NB"}
        </button>
      </nav>
    </div>
  );
}
