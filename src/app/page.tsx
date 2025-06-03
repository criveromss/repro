import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="px-4 mx-auto max-w-7xl relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Spécialiste en <span className="text-[#e22b25]">imprimerie, PLV et signalétique</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-8">
              À Metz, en Moselle, au Luxembourg, à votre écoute pour tous vos projets !
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-[#e22b25] text-white hover:opacity-90">
                Nous contacter
              </Link>
              <Link href="/realisations" className="px-6 py-3 rounded-md font-medium transition-all duration-300 border border-white text-white hover:bg-white hover:text-gray-900">
                Nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre entreprise</h2>
              <p className="mb-4">
                Imprimeur numérique grand format depuis plus de 20 ans, nous avons basé notre développement sur une force d'innovation qui nous a permis de nous diversifier dans l'imprimerie, la PLV et la signalétique.
              </p>
              <p className="mb-6">
                La diversité de nos clients (collectivités, grands comptes, PME et TPE) nous amène à gérer au quotidien des demandes très variées, stimulant ainsi la créativité et l'expertise de nos équipes.
              </p>
              <Link href="/entreprise" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-[#e22b25] text-white hover:opacity-90">
                En savoir plus
              </Link>
            </div>
            <div className="bg-gray-200 h-80 flex items-center justify-center">
              <span className="text-gray-400 text-lg">Image entreprise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos domaines d'activités</h2>
            <p className="max-w-3xl mx-auto">
              Imprimeurs de métier, notre domaine de compétences s'est développé pour répondre toujours mieux aux demandes de nos clients. Aujourd'hui, vous pouvez nous confier vos travaux d'imprimerie, la création de vos PLV et la réalisation de votre signalétique intérieure et extérieure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Imprimerie</h3>
                <p className="mb-4">Cartes de visite, flyers, affiches, brochures, dépliants... Confiez-nous tous vos travaux d'impression pour un résultat de qualité professionnelle.</p>
                <Link href="/services/imprimerie" className="text-[#e22b25] font-medium flex items-center">
                  En savoir plus
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">PLV & Exposition</h3>
                <p className="mb-4">Murs d'exposition, bannières, comptoirs, drapeaux... Tous les supports nécessaires pour vous démarquer lors de vos événements.</p>
                <Link href="/services/plv-exposition" className="text-[#e22b25] font-medium flex items-center">
                  En savoir plus
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Signalétique</h3>
                <p className="mb-4">Enseignes, panneaux, habillage de vitrine et de véhicule... Une signalétique efficace pour renforcer votre visibilité.</p>
                <Link href="/services/signaletique" className="text-[#e22b25] font-medium flex items-center">
                  En savoir plus
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-[#e22b25] text-white hover:opacity-90">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos produits populaires</h2>
            <p className="max-w-3xl mx-auto">
              Découvrez notre sélection de produits les plus demandés par nos clients, allant des solutions d'exposition aux objets publicitaires personnalisés.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Roll-Up</h3>
              <p>Bannière économique et pratique pour vos présentations et événements, facile à transporter et à installer.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cartes de visite</h3>
              <p>Impressions haute qualité sur différents supports avec possibilité de finitions spéciales (pelliculage, vernis...).</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Flyers</h3>
              <p>Supports de communication essentiels disponibles dans différents formats et grammages pour tous vos besoins.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Objets publicitaires</h3>
              <p>Large gamme d'objets personnalisables pour promouvoir votre marque : stylos, mugs, textiles et bien plus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ils nous font confiance</h2>
            <p className="max-w-3xl mx-auto">
              Découvrez quelques-unes de nos réalisations pour des clients satisfaits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image projet</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Salon de l'habitat</h3>
                <p className="text-gray-600 mb-4">PLV & Solutions d'exposition</p>
                <p className="mb-4">
                  Nous avons réalisé l'ensemble des supports de communication pour le stand de notre client lors du Salon de l'Habitat : roll-up, comptoir d'accueil, mur d'image et documentation imprimée.
                </p>
                <Link href="/realisations/plv-exposition" className="text-[#e22b25] font-medium flex items-center">
                  Voir le projet
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image projet</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Boutique Le Petit Gourmand</h3>
                <p className="text-gray-600 mb-4">Signalétique & Habillage de vitrine</p>
                <p className="mb-4">
                  Réalisation complète de l'identité visuelle de la boutique : enseigne extérieure, habillage de vitrine, signalétique intérieure et supports de communication.
                </p>
                <Link href="/realisations/signaletique" className="text-[#e22b25] font-medium flex items-center">
                  Voir le projet
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/realisations" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-[#e22b25] text-white hover:opacity-90">
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e22b25] text-white py-16">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'un devis ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé. Notre équipe est à votre disposition pour vous conseiller.
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-white text-[#e22b25] hover:bg-gray-100">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
