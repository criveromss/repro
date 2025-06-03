import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Signalétique - REPROMOSELLE',
  description: 'Découvrez nos solutions de signalétique : enseignes, panneaux, habillage de vitrine, habillage de véhicules et plus encore.',
};

export default function SignaletiquePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Signalétique</h1>
          <p className="text-lg max-w-3xl">
            Découvrez notre gamme complète de solutions de signalétique pour valoriser votre image et optimiser votre visibilité.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Signalétique extérieure et intérieure */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image signalétique</span>
                {/* 
                <Image 
                  src="/images/services/signaletique/signaletique.jpg"
                  alt="Signalétique extérieure et intérieure"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Signalétique extérieure et intérieure</h3>
                <p className="text-gray-600 mb-4">
                  Solutions adaptées à vos besoins pour guider vos visiteurs et clients à l'intérieur comme à l'extérieur de vos locaux.
                </p>
                <Link href="/services/signaletique" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Enseignes Publicitaires */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image enseignes</span>
                {/* 
                <Image 
                  src="/images/services/signaletique/enseigne.jpg"
                  alt="Enseignes Publicitaires"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Enseignes Publicitaires</h3>
                <p className="text-gray-600 mb-4">
                  Une enseigne est la première image que vos clients se font de votre entreprise. Nous proposons des solutions sur-mesure pour vous démarquer.
                </p>
                <Link href="/services/signaletique" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Panneau chantier */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image panneau chantier</span>
                {/* 
                <Image 
                  src="/images/services/signaletique/panneau-chantier.jpg"
                  alt="Panneau chantier"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Panneau chantier</h3>
                <p className="text-gray-600 mb-4">
                  Panneaux de chantier personnalisés pour valoriser votre entreprise et informer sur vos projets en cours de réalisation.
                </p>
                <Link href="/services/signaletique" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Habillage de palissade */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image habillage palissade</span>
                {/* 
                <Image 
                  src="/images/services/signaletique/palissade.jpg"
                  alt="Habillage de palissade"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Habillage de palissade</h3>
                <p className="text-gray-600 mb-4">
                  Transformez vos palissades de chantier en support de communication efficace avec nos solutions d'habillage personnalisées.
                </p>
                <Link href="/services/signaletique" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Chevalet et Pré-enseigne */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image chevalet</span>
                {/* 
                <Image 
                  src="/images/services/signaletique/chevalet.jpg"
                  alt="Chevalet et Pré-enseigne"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Chevalet et Pré-enseigne</h3>
                <p className="text-gray-600 mb-4">
                  Solutions pratiques et efficaces pour attirer l'attention des passants et indiquer votre présence à proximité de votre établissement.
                </p>
                <Link href="/services/signaletique" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Habillage de voiture et vitrine */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image habillage véhicule</span>
                {/* 
                <Image 
                  src="/images/services/signaletique/habillage-vehicule.jpg"
                  alt="Habillage de voiture et vitrine"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Habillage de voiture et vitrine</h3>
                <p className="text-gray-600 mb-4">
                  Transformez vos véhicules et vitrines en supports publicitaires efficaces et attractifs avec nos solutions d'habillage personnalisées.
                </p>
                <Link href="/services/signaletique" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e22b25] text-white py-16">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'une solution de signalétique sur mesure ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé. Notre équipe est à votre disposition pour vous conseiller sur les meilleures solutions adaptées à vos besoins.
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-white text-[#e22b25] hover:bg-gray-100">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
} 