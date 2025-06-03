import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Textiles personnalisés - REPROMOSELLE',
  description: 'Découvrez notre gamme de textiles personnalisables : t-shirts, polos, sweats, casquettes, vêtements de travail et accessoires.',
};

export default function TextilesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Textiles personnalisés</h1>
          <p className="text-lg max-w-3xl">
            Découvrez notre gamme complète de textiles personnalisables pour promouvoir votre marque et créer une identité forte.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* T-shirts */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image t-shirts</span>
                {/* 
                <Image 
                  src="/images/services/objets-publicitaires/tshirt.jpg"
                  alt="T-shirts personnalisés"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">T-shirts</h3>
                <p className="text-gray-600 mb-4">
                  Large choix de t-shirts personnalisables avec votre logo ou design, disponibles en différents styles, couleurs et matières.
                </p>
                <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Polos */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image polos</span>
                {/* 
                <Image 
                  src="/images/services/objets-publicitaires/polo.jpg"
                  alt="Polos personnalisés"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Polos</h3>
                <p className="text-gray-600 mb-4">
                  Polos élégants et confortables personnalisables avec votre logo, idéals pour les événements professionnels et le personnel d'entreprise.
                </p>
                <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Sweats et vestes */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image sweats</span>
                {/* 
                <Image 
                  src="/images/services/objets-publicitaires/sweat.jpg"
                  alt="Sweats et vestes"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sweats et vestes</h3>
                <p className="text-gray-600 mb-4">
                  Sweats à capuche, pulls et vestes personnalisables pour équiper vos équipes ou pour vos événements promotionnels.
                </p>
                <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Casquettes et chapeaux */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image casquettes</span>
                {/* 
                <Image 
                  src="/images/services/objets-publicitaires/casquette.jpg"
                  alt="Casquettes et chapeaux"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Casquettes et chapeaux</h3>
                <p className="text-gray-600 mb-4">
                  Casquettes, bobs et chapeaux personnalisables avec votre logo, parfaits pour les événements en extérieur et les campagnes promotionnelles.
                </p>
                <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Vêtements de travail */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image vêtements de travail</span>
                {/* 
                <Image 
                  src="/images/services/objets-publicitaires/vetement-travail.jpg"
                  alt="Vêtements de travail"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Vêtements de travail</h3>
                <p className="text-gray-600 mb-4">
                  Vêtements professionnels personnalisables pour tous les secteurs d'activité : blouses, tabliers, combinaisons, vêtements haute visibilité.
                </p>
                <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Accessoires textiles */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image accessoires textiles</span>
                {/* 
                <Image 
                  src="/images/services/objets-publicitaires/accessoire-textile.jpg"
                  alt="Accessoires textiles"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Accessoires textiles</h3>
                <p className="text-gray-600 mb-4">
                  Complétez votre communication avec nos accessoires textiles personnalisables : foulards, écharpes, bandanas, sacs en tissu, serviettes.
                </p>
                <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline font-medium">
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
          <h2 className="text-3xl font-bold mb-6">Besoin de textiles personnalisés pour votre entreprise ?</h2>
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