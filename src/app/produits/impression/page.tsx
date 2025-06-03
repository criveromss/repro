import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Impression - REPROMOSELLE',
  description: 'Découvrez notre gamme complète de produits d\'impression : cartes de visite, flyers, affiches, brochures, dépliants et bien plus encore.',
};

export default function ImpressionPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Impression</h1>
          <p className="text-lg max-w-3xl">
            Découvrez notre gamme complète de produits d'impression pour votre communication imprimée.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cartes de visite */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image carte de visite</span>
                {/* 
                <Image 
                  src="/images/services/imprimerie/carte-visite.jpg"
                  alt="Cartes de visite professionnelles"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cartes de visite</h3>
                <p className="text-gray-600 mb-4">
                  Pour un meilleur rendu et une protection optimale, optez pour un pelliculage mat, brillant ou Soft Touch (peau de pêche).
                </p>
                <Link href="/services/imprimerie" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Affiches */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image affiche</span>
                {/* 
                <Image 
                  src="/images/services/imprimerie/affiche.jpg"
                  alt="Affiches et posters de qualité"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Affiches</h3>
                <p className="text-gray-600 mb-4">
                  Besoin d'affiche ou poster de grande qualité pour décorer des bureaux, organiser une exposition ou animer un événement.
                </p>
                <Link href="/services/imprimerie" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Flyers */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image flyers</span>
                {/* 
                <Image 
                  src="/images/services/imprimerie/flyer.jpg"
                  alt="Flyers personnalisés"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Flyers</h3>
                <p className="text-gray-600 mb-4">
                  Grammage, format, design, etc... vous trouverez chez Repromoselle toutes les ressources nécessaires à la conception et à la création de vos flyers.
                </p>
                <Link href="/services/imprimerie" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Dépliants */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image dépliants</span>
                {/* 
                <Image 
                  src="/images/services/imprimerie/depliant.jpg"
                  alt="Dépliants"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dépliants</h3>
                <p className="text-gray-600 mb-4">
                  Le classique dépliant s'impose comme le support publicitaire parfait. Une fois le produit final visualisé et la conception graphique terminée.
                </p>
                <Link href="/services/imprimerie" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Brochures */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image brochures</span>
                {/* 
                <Image 
                  src="/images/services/imprimerie/brochure.jpg"
                  alt="Brochures"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Brochures</h3>
                <p className="text-gray-600 mb-4">
                  Idéal pour les associations, bulletins municipaux, documentation technique, présentations scientifiques et congrès.
                </p>
                <Link href="/services/imprimerie" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Autres produits */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image autres produits</span>
                {/* 
                <Image 
                  src="/images/services/imprimerie/divers.jpg"
                  alt="Autres produits d'imprimerie"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Autres produits</h3>
                <p className="text-gray-600 mb-4">
                  Découvrez nos autres produits d'imprimerie : autocopiants, calendriers, autocollants, chemises, enveloppes, papiers en-têtes et tampons.
                </p>
                <Link href="/services/imprimerie" className="text-[#e22b25] hover:underline font-medium">
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
          <h2 className="text-3xl font-bold mb-6">Prêt à lancer votre projet d'impression ?</h2>
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