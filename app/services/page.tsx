export default function ServicesPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Nos Services</h1>

      <h2 className="text-2xl font-semibold mt-6">Fourniture de biens</h2>
      <ul className="list-disc list-inside ml-6 mt-2">
        <li>Pièces détachées pour équipements miniers</li>
        <li>Matériaux de construction et génie civil</li>
        <li>Outils et consommables</li>
        <li>Lubrifiants, huiles et graisses</li>
        <li>Mobilier de bureau et équipements de protection individuelle (EPI)</li>
        <li>Produits alimentaires, hôtellerie, énergie solaire, générateurs</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Prestations de services</h2>
      <ul className="list-disc list-inside ml-6 mt-2">
        <li>Location d’équipements miniers (excavatrices, bulldozers, camions, etc.)</li>
        <li>Travaux de génie civil et construction</li>
        <li>Entretien ménager et gestion des déchets</li>
        <li>Réparation de radiateurs</li>
        <li>Consultation, conseil et gestion de projets miniers</li>
      </ul>
    </div>
  );
}
