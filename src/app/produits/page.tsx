import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Nos Produits - REPROMOSELLE',
  description: 'Découvrez tous les produits proposés par REPROMOSELLE : impression, solutions d\'exposition, signalétique, textiles personnalisés et objets publicitaires.',
};

export default function Produits() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Nos Produits</h1>
          <p className="text-lg max-w-3xl">
            REPROMOSELLE vous propose une large gamme de produits de qualité pour répondre à tous vos besoins en communication visuelle.
          </p>
        </div>
      </section>

      {/* Products Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Impression</h3>
                <p className="mb-4">
                  Cartes de visite, flyers, affiches, brochures, dépliants, autocollants, calendriers et bien plus encore. Des solutions d'impression de qualité pour tous vos besoins.
                </p>
                <Link href="/produits/impression" className="text-[#e22b25] font-medium flex items-center">
                  Découvrir nos produits d'impression
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Category 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Solutions d'exposition</h3>
                <p className="mb-4">
                  Murs d'exposition, bannières, roll-up, comptoirs, drapeaux, porte-affiches et solutions d'affichage numérique pour vous démarquer lors de vos événements.
                </p>
                <Link href="/produits/exposition" className="text-[#e22b25] font-medium flex items-center">
                  Découvrir nos solutions d'exposition
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Category 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Signalétique</h3>
                <p className="mb-4">
                  Enseignes publicitaires, panneaux de chantier, habillage de palissade, chevalets, pré-enseignes, habillage de vitrine et de véhicule pour une visibilité optimale.
                </p>
                <Link href="/produits/signaletique" className="text-[#e22b25] font-medium flex items-center">
                  Découvrir nos produits de signalétique
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Category 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Textiles & Objets publicitaires</h3>
                <p className="mb-4">
                  Textiles personnalisés, stylos, mugs, verres, gobelets, tapis, sacs, produits high-tech et autres objets publicitaires pour promouvoir votre marque.
                </p>
                <Link href="/produits/goodies" className="text-[#e22b25] font-medium flex items-center">
                  Découvrir nos objets publicitaires
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos produits populaires</h2>
            <p className="max-w-3xl mx-auto">
              Découvrez notre sélection de produits les plus demandés par nos clients.
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