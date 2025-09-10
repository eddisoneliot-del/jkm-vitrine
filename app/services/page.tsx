export default function ServicesPage() {
  return (
    <section
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: "url('/images/engin.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 p-10">
        <h1 className="text-4xl font-bold mb-6">Nos Services</h1>
        <ul className="space-y-4 text-lg">
          <li>✅ Location des engins miniers</li>
          <li>✅ Ingénierie – construction</li>
          <li>✅ Entretien de radiateurs</li>
          <li>✅ Sous-traitance et formation d&apos;opérateurs d&apos;équipements lourds</li>
          <li>✅ House keeping, entretien et nettoyage d&apos;équipements et immobilier</li>
        </ul>
      </div>
    </section>
  );
}
