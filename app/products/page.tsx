export default function ProductsPage() {
  return (
    <div>
      {/* Fournitures - Matériaux de construction */}
      <section
        className="relative min-h-[60vh] text-white"
        style={{
          backgroundImage: "url('/images/construc.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-10">
          <h1 className="text-4xl font-bold mb-6">Nos Fournitures</h1>
          <ul className="space-y-3 text-lg">
            <li>📦 Matériaux des constructions</li>
          </ul>
        </div>
      </section>

      {/* Fournitures - Électrique */}
      <section
        className="relative min-h-[60vh] text-white"
        style={{
          backgroundImage: "url('/images/eleco.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-10">
          <h2 className="text-3xl font-semibold mb-4">Électricité & Composants</h2>
          <ul className="space-y-3 text-lg">
            <li>📦 Électrique et composants</li>
            <li>⚡ Groupes électrogènes et équipements électriques</li>
          </ul>
        </div>
      </section>

      {/* Fournitures - Huiles et lubrifiants */}
      <section
        className="relative min-h-[60vh] text-white"
        style={{
          backgroundImage: "url('/images/huilles.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-10">
          <h2 className="text-3xl font-semibold mb-4">Huiles & Lubrifiants</h2>
          <ul className="space-y-3 text-lg">
            <li>📦 Huile, graisse, lubrifiant et produits chimiques industriels</li>
            <li>🛢️ Lubrifiants, graisses et fluides hydrauliques</li>
          </ul>
        </div>
      </section>

      {/* Fournitures - Pièces de rechange */}
      <section
        className="relative min-h-[60vh] text-white"
        style={{
          backgroundImage: "url('/images/piece.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-10">
          <h2 className="text-3xl font-semibold mb-4">Pièces de Rechange</h2>
          <ul className="space-y-3 text-lg">
            <li>📦 Pièces de rechange</li>
            <li>🛠️ Pièces détachées pour engins lourds (Liebherr, Caterpillar, Komatsu, Volvo, MAN, etc.)</li>
          </ul>
        </div>
      </section>

      {/* Produits divers */}
      <section className="p-10 bg-gray-100 text-black">
        <h2 className="text-3xl font-semibold mb-4">Autres Produits</h2>
        <ul className="space-y-3 text-lg">
          <li>☀️ Panneaux solaires et systèmes d&apos;énergie renouvelable</li>
          <li>🚜 Engins et équipements de construction (bétonnières, compacteurs, etc.)</li>
          <li>🧯 Équipements de sécurité et protection (casques, gants, bottes, combinaisons, extincteurs)</li>
          <li>🔧 Outils industriels et consommables (perceuses, clés, disques de coupe...)</li>
          <li>🚰 Tuyauterie et équipements de plomberie</li>
        </ul>
      </section>
    </div>
  );
}
