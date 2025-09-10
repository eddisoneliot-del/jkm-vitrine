export default function ContactPage() {
  return (
    <section
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: "url('/images/address.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 p-10">
        <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>

        <h2 className="text-2xl font-semibold mt-6">Adresses</h2>
        <p>
          49, rue Kasaji, Quartier MUTOSHI, Kolwezi (Lualaba, RDC) <br />
          278, Boulevard M’siri, Quartier Gambela II, Lubumbashi (Haut-Katanga, RDC)
        </p>

        <h2 className="text-2xl font-semibold mt-6">Emails</h2>
        <p>info@jkmsarl.com / sales@jkmsarl.com</p>

        <h2 className="text-2xl font-semibold mt-6">Téléphones</h2>
        <p>+243 97 000 76 75 / +243 99 087 98 57</p>

        <h2 className="text-2xl font-semibold mt-6">Localisation</h2>
        <p>
          Retrouvez-nous sur Google Maps :{" "}
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Voir sur la carte
          </a>
        </p>
      </div>
    </section>
  );
}
