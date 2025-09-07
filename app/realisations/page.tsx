export default function RealisationsPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Nos Réalisations</h1>
      <p className="mb-8 text-lg">
        Voici quelques images de nos projets et fournitures récentes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Image Carer */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/images/carer.jpg" alt="Carer" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Travaux de Carrelage</h3>
            <p>Pose de carreaux pour sols et murs.</p>
          </div>
        </div>

        {/* Image Construction */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/images/construction.jpg" alt="Construction" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Chantiers de Construction</h3>
            <p>Fondations, maçonnerie, installations électriques et plomberie.</p>
          </div>
        </div>

        {/* Image Bricks */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/images/bricks.jpg" alt="Bricks" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Travaux de Maçonnerie</h3>
            <p>Fabrication et pose de briques.</p>
          </div>
        </div>

        {/* Image Engin */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/images/engin.jpg" alt="Engin" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Engins Lourds</h3>
            <p>Utilisation d’équipements et engins miniers.</p>
          </div>
        </div>

        {/* Image Panneau */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/images/panneau.jpg" alt="Panneau solaire" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Énergies Renouvelables</h3>
            <p>Installation et fourniture de panneaux solaires.</p>
          </div>
        </div>

        {/* Image Logiciel */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/images/logiciel.jpg" alt="Logiciel" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Solutions Digitales</h3>
            <p>Logiciels et outils pour la gestion de projets.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
